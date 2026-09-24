import type { AppEnvironment } from './environment.model';

export const environment: AppEnvironment = {
  production: true,
  supabase: {
    url: 'https://cjprsgroaierjsxklbhx.supabase.co',
    // Clave publishable del proyecto. No usar nunca una secret/service_role aquí.
    publishableKey: 'sb_publishable_RiRvFVIlNyTTpqBaiVxXEQ_6S8s5Aq7'
  }
};
