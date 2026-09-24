import { Injectable } from '@angular/core';
import type { SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import type { ContactCampaignConfig } from '../contact/contact-campaign.config';

export interface JobApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string;
}

interface PreparedJobApplication {
  applicationId: string;
  path: string;
  token: string;
}

interface ConfirmedJobApplication {
  status: 'received';
  notificationStatus: 'sent' | 'failed';
}

@Injectable({ providedIn: 'root' })
export class JobApplicationService {
  private client: SupabaseClient | null = null;

  async submit(
    campaign: ContactCampaignConfig,
    formData: JobApplicationFormData,
    file: File
  ): Promise<ConfirmedJobApplication> {
    const client = await this.getClient();
    const prepared = await this.invoke<PreparedJobApplication>(client, 'prepare-job-application', {
      campaignKey: campaign.campaignKey,
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
      fileName: file.name,
      fileSize: file.size,
      fileMime: file.type,
      honeypot: formData.honeypot
    });

    if (!this.isPreparedApplication(prepared)) {
      throw new Error('No se pudo preparar la postulación.');
    }

    const { error: uploadError } = await client.storage
      .from('job-applications')
      .uploadToSignedUrl(prepared.path, prepared.token, file, {
        contentType: file.type
      });

    if (uploadError) {
      throw new Error('No se pudo subir el currículum.');
    }

    const confirmation = await this.invoke<ConfirmedJobApplication>(client, 'confirm-job-application', {
      applicationId: prepared.applicationId
    });

    if (!this.isConfirmedApplication(confirmation)) {
      throw new Error('No se pudo confirmar la postulación.');
    }

    return confirmation;
  }

  private async getClient(): Promise<SupabaseClient> {
    if (this.client) return this.client;

    if (!environment.supabase.url || !environment.supabase.publishableKey) {
      throw new Error('La configuración pública de Supabase no está disponible.');
    }

    const { createClient } = await import('@supabase/supabase-js');
    this.client = createClient(environment.supabase.url, environment.supabase.publishableKey, {
      auth: {
        autoRefreshToken: false,
        detectSessionInUrl: false,
        persistSession: false
      }
    });

    return this.client;
  }

  private async invoke<T>(client: SupabaseClient, functionName: string, body: object): Promise<T> {
    const { data, error } = await client.functions.invoke<T>(functionName, { body });

    if (error || !data) {
      throw new Error('No se pudo procesar la postulación.');
    }

    return data;
  }

  private isPreparedApplication(value: PreparedJobApplication): boolean {
    return Boolean(value?.applicationId && value.path && value.token);
  }

  private isConfirmedApplication(value: ConfirmedJobApplication): boolean {
    return value?.status === 'received' && (value.notificationStatus === 'sent' || value.notificationStatus === 'failed');
  }
}
