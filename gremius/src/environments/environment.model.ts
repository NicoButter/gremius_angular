export interface AppEnvironment {
  production: boolean;
  supabase: {
    url: string;
    publishableKey: string;
  };
}
