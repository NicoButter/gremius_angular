import { handleCors, jsonResponse } from '../_shared/cors.ts';
import { notifyJobApplication } from '../_shared/emailjs.ts';
import { JOB_APPLICATION_BUCKET, MAX_CV_SIZE_BYTES, SIGNED_CV_URL_TTL_SECONDS } from '../_shared/job-application.ts';
import { createSupabaseAdminClient } from '../_shared/supabase-admin.ts';

interface StoredApplication {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  message: string;
  office: string;
  cv_bucket: string;
  cv_path: string;
  cv_size: number;
  cv_mime: string;
  status: 'pending_upload' | 'received' | 'expired';
  notification_status: 'pending' | 'sent' | 'failed';
  campaign: { position: string } | null;
}

interface StorageObjectMetadata {
  size?: number | string;
  mimetype?: string;
}

interface StorageObject {
  name: string;
  metadata?: StorageObjectMetadata;
}

function isUuid(value: unknown): value is string {
  return typeof value === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

function splitPath(path: string): { directory: string; fileName: string } | null {
  const divider = path.lastIndexOf('/');
  if (divider <= 0 || divider === path.length - 1) return null;

  return {
    directory: path.slice(0, divider),
    fileName: path.slice(divider + 1)
  };
}

function storedFileIsExpected(file: StorageObject | undefined, application: StoredApplication): boolean {
  if (!file?.metadata) return false;

  const fileSize = Number(file.metadata.size);
  return (
    Number.isInteger(fileSize) &&
    fileSize === application.cv_size &&
    fileSize > 0 &&
    fileSize <= MAX_CV_SIZE_BYTES &&
    file.metadata.mimetype === 'application/pdf' &&
    application.cv_mime === 'application/pdf'
  );
}

Deno.serve(async (request) => {
  const corsResponse = handleCors(request);
  if (corsResponse) return corsResponse;

  if (request.method !== 'POST') {
    return jsonResponse(request, { error: 'Método no permitido.' }, 405);
  }

  let body: { applicationId?: unknown };
  try {
    body = await request.json();
  } catch {
    return jsonResponse(request, { error: 'Solicitud inválida.' }, 400);
  }

  if (!isUuid(body.applicationId)) {
    return jsonResponse(request, { error: 'Solicitud inválida.' }, 400);
  }

  try {
    const supabase = createSupabaseAdminClient();
    const { data: application, error: applicationError } = await supabase
      .from('job_applications')
      .select('id, full_name, email, phone, message, office, cv_bucket, cv_path, cv_size, cv_mime, status, notification_status, campaign:job_application_campaigns(position)')
      .eq('id', body.applicationId)
      .maybeSingle<StoredApplication>();

    if (applicationError || !application) {
      return jsonResponse(request, { error: 'Solicitud inválida.' }, 400);
    }

    const isNotificationRetry = application.status === 'received' && application.notification_status === 'failed';

    if (application.status === 'received' && !isNotificationRetry) {
      return jsonResponse(request, {
        status: 'received',
        notificationStatus: application.notification_status === 'sent' ? 'sent' : 'failed'
      });
    }

    if (
      (application.status !== 'pending_upload' && !isNotificationRetry) ||
      application.cv_bucket !== JOB_APPLICATION_BUCKET ||
      application.office !== 'rio-gallegos'
    ) {
      return jsonResponse(request, { error: 'La postulación no está disponible.' }, 409);
    }

    const path = splitPath(application.cv_path);
    if (!path) {
      return jsonResponse(request, { error: 'No pudimos confirmar la postulación.' }, 500);
    }

    const { data: files, error: listError } = await supabase.storage
      .from(application.cv_bucket)
      .list(path.directory, { limit: 10, search: path.fileName });
    const storedFile = (files as StorageObject[] | null)?.find(file => file.name === path.fileName);

    if (listError || !storedFileIsExpected(storedFile, application)) {
      return jsonResponse(request, { error: 'No pudimos confirmar la postulación.' }, 400);
    }

    if (isNotificationRetry) {
      const { data: retryClaim, error: retryClaimError } = await supabase
        .from('job_applications')
        .update({ notification_status: 'pending' })
        .eq('id', application.id)
        .eq('status', 'received')
        .eq('notification_status', 'failed')
        .select('id')
        .maybeSingle();

      if (retryClaimError || !retryClaim) {
        const { data: currentApplication } = await supabase
          .from('job_applications')
          .select('notification_status')
          .eq('id', application.id)
          .maybeSingle<{ notification_status: 'pending' | 'sent' | 'failed' }>();

        return jsonResponse(request, {
          status: 'received',
          notificationStatus: currentApplication?.notification_status === 'sent' ? 'sent' : 'failed'
        });
      }
    } else {
      const now = new Date().toISOString();
      const { data: receivedApplication, error: updateError } = await supabase
        .from('job_applications')
        .update({
          status: 'received',
          uploaded_at: now,
          notification_status: 'pending'
        })
        .eq('id', application.id)
        .eq('status', 'pending_upload')
        .select('id')
        .maybeSingle();

      if (updateError || !receivedApplication) {
        return jsonResponse(request, { error: 'No pudimos confirmar la postulación.' }, 409);
      }
    }

    const { data: signedUrl, error: signedUrlError } = await supabase.storage
      .from(application.cv_bucket)
      .createSignedUrl(application.cv_path, SIGNED_CV_URL_TTL_SECONDS);

    if (signedUrlError || !signedUrl?.signedUrl) {
      await supabase
        .from('job_applications')
        .update({ notification_status: 'failed' })
        .eq('id', application.id);

      return jsonResponse(request, { status: 'received', notificationStatus: 'failed' });
    }

    const notificationSent = await notifyJobApplication({
      fullName: application.full_name,
      email: application.email,
      phone: application.phone,
      message: application.message,
      cvUrl: signedUrl.signedUrl
    });

    await supabase
      .from('job_applications')
      .update(notificationSent
        ? { notification_status: 'sent', notified_at: new Date().toISOString() }
        : { notification_status: 'failed' })
      .eq('id', application.id);

    return jsonResponse(request, {
      status: 'received',
      notificationStatus: notificationSent ? 'sent' : 'failed'
    });
  } catch {
    return jsonResponse(request, { error: 'No pudimos confirmar la postulación.' }, 500);
  }
});
