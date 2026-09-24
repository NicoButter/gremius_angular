import { getRequiredSecret } from './supabase-admin.ts';

interface EmailNotificationData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  cvUrl: string;
}

export async function notifyJobApplication(data: EmailNotificationData): Promise<boolean> {
  try {
    const payload: Record<string, unknown> = {
      service_id: getRequiredSecret('EMAILJS_SERVICE_ID'),
      template_id: getRequiredSecret('EMAILJS_TEMPLATE_ID'),
      user_id: getRequiredSecret('EMAILJS_PUBLIC_KEY'),
      template_params: {
        is_job_application: true,
        subject: `Nueva postulación administrativa - ${data.fullName}`,
        name: data.fullName,
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        message: data.message,
        position: 'Personal administrativo',
        office: 'Río Gallegos',
        cv_url: data.cvUrl
      }
    };

    const privateKey = Deno.env.get('EMAILJS_PRIVATE_KEY');
    if (privateKey) payload.accessToken = privateKey;

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (response.status !== 200) {
      console.error(`EmailJS notification failed with status ${response.status}.`);
      return false;
    }

    return true;
  } catch {
    console.error('EmailJS notification could not be sent.');
    return false;
  }
}
