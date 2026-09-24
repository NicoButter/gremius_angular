import { createClient, type SupabaseClient } from 'npm:@supabase/supabase-js@2';

function requiredEnvironment(name: string): string {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

function getDefaultSecretKey(): string {
  const rawKeys = requiredEnvironment('SUPABASE_SECRET_KEYS');
  const keys: unknown = JSON.parse(rawKeys);

  if (!keys || typeof keys !== 'object' || !('default' in keys) || typeof keys.default !== 'string') {
    throw new Error('The default Supabase secret key is not available.');
  }

  return keys.default;
}

export function createSupabaseAdminClient(): SupabaseClient {
  return createClient(requiredEnvironment('SUPABASE_URL'), getDefaultSecretKey(), {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

export function getRequiredSecret(name: string): string {
  return requiredEnvironment(name);
}
