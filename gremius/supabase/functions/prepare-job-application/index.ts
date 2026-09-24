import { handleCors, jsonResponse } from '../_shared/cors.ts';
import {
  buildCvPath,
  getRateLimitFingerprint,
  JOB_APPLICATION_BUCKET,
  parsePreparedApplicationInput
} from '../_shared/job-application.ts';
import { createSupabaseAdminClient, getRequiredSecret } from '../_shared/supabase-admin.ts';

interface JobApplicationCampaign {
  campaign_key: string;
  office: string;
  storage_prefix: string;
  enabled: boolean;
}

Deno.serve(async (request) => {
  const corsResponse = handleCors(request);
  if (corsResponse) return corsResponse;

  if (request.method !== 'POST') {
    return jsonResponse(request, { error: 'Método no permitido.' }, 405);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse(request, { error: 'Solicitud inválida.' }, 400);
  }

  const parsed = parsePreparedApplicationInput(body);
  if (!parsed.valid && parsed.honeypot) {
    return jsonResponse(request, { accepted: true }, 202);
  }

  if (!parsed.valid) {
    return jsonResponse(request, { error: 'Solicitud inválida.' }, 400);
  }

  try {
    const supabase = createSupabaseAdminClient();
    const fingerprint = await getRateLimitFingerprint(request, getRequiredSecret('RATE_LIMIT_PEPPER'));
    const { data: allowed, error: rateLimitError } = await supabase.rpc('consume_job_application_rate_limit', {
      p_fingerprint: fingerprint,
      p_limit: 10
    });

    if (rateLimitError) {
      return jsonResponse(request, { error: 'No pudimos procesar la postulación.' }, 500);
    }

    if (!allowed) {
      return jsonResponse(request, { error: 'Intentá nuevamente más tarde.' }, 429);
    }

    await supabase.rpc('expire_stale_job_applications');

    const { data: campaign, error: campaignError } = await supabase
      .from('job_application_campaigns')
      .select('campaign_key, office, storage_prefix, enabled')
      .eq('campaign_key', parsed.value.campaignKey)
      .maybeSingle<JobApplicationCampaign>();

    if (campaignError || !campaign || !campaign.enabled || campaign.office !== 'rio-gallegos') {
      return jsonResponse(request, { error: 'La convocatoria no está disponible.' }, 400);
    }

    const applicationId = crypto.randomUUID();
    const path = buildCvPath(campaign.storage_prefix, applicationId);
    const { error: insertError } = await supabase.from('job_applications').insert({
      id: applicationId,
      campaign_key: campaign.campaign_key,
      full_name: parsed.value.fullName,
      email: parsed.value.email,
      phone: parsed.value.phone,
      message: parsed.value.message,
      office: campaign.office,
      cv_bucket: JOB_APPLICATION_BUCKET,
      cv_path: path,
      cv_size: parsed.value.fileSize,
      cv_mime: parsed.value.fileMime,
      status: 'pending_upload',
      notification_status: 'pending'
    });

    if (insertError) {
      return jsonResponse(request, { error: 'No pudimos preparar la postulación.' }, 500);
    }

    const { data: signedUpload, error: signedUploadError } = await supabase.storage
      .from(JOB_APPLICATION_BUCKET)
      .createSignedUploadUrl(path, { upsert: false });

    if (signedUploadError || !signedUpload?.token) {
      return jsonResponse(request, { error: 'No pudimos preparar la postulación.' }, 500);
    }

    return jsonResponse(request, {
      applicationId,
      path,
      token: signedUpload.token
    });
  } catch {
    return jsonResponse(request, { error: 'No pudimos procesar la postulación.' }, 500);
  }
});
