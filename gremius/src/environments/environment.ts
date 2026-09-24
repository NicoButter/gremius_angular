import type { AppEnvironment } from './environment.model';

export const environment: AppEnvironment = {
  production: false,
  supabase: {
    url: 'https://cjprsgroaierjsxklbhx.supabase.co',
    // Clave publishable (sb_publishable_...). No usar nunca una secret/service_role aquí.
    publishableKey: 'sb_publishable_RiRvFVIlNyTTpqBaiVxXEQ_6S8s5Aq7'
  }
};
