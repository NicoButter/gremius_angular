create table if not exists public.job_application_campaigns (
  campaign_key text primary key,
  office text not null,
  position text not null,
  storage_prefix text not null unique,
  enabled boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint job_application_campaigns_key_length check (char_length(campaign_key) between 3 and 100),
  constraint job_application_campaigns_prefix_format check (storage_prefix ~ '^[a-z0-9][a-z0-9-]*$')
);

alter table public.job_application_campaigns enable row level security;
revoke all on table public.job_application_campaigns from anon, authenticated;

insert into public.job_application_campaigns (
  campaign_key,
  office,
  position,
  storage_prefix,
  enabled
)
values (
  'administrativo-rg-2026',
  'rio-gallegos',
  'Personal administrativo',
  'administrativo-rg',
  true
)
on conflict (campaign_key) do update
set
  office = excluded.office,
  position = excluded.position,
  storage_prefix = excluded.storage_prefix,
  enabled = excluded.enabled,
  updated_at = now();

create table if not exists public.job_applications (
  id uuid primary key,
  campaign_key text not null references public.job_application_campaigns(campaign_key),
  full_name text not null,
  email text not null,
  phone text not null,
  message text not null,
  office text not null,
  cv_bucket text not null,
  cv_path text not null unique,
  cv_size bigint not null,
  cv_mime text not null,
  status text not null default 'pending_upload',
  notification_status text not null default 'pending',
  created_at timestamptz not null default now(),
  uploaded_at timestamptz,
  notified_at timestamptz,
  constraint job_applications_full_name_length check (char_length(full_name) between 2 and 160),
  constraint job_applications_email_length check (char_length(email) between 3 and 254),
  constraint job_applications_phone_length check (char_length(phone) between 6 and 40),
  constraint job_applications_message_length check (char_length(message) between 20 and 2000),
  constraint job_applications_cv_size check (cv_size > 0 and cv_size <= 3145728),
  constraint job_applications_cv_mime check (cv_mime = 'application/pdf'),
  constraint job_applications_status check (status in ('pending_upload', 'received', 'expired')),
  constraint job_applications_notification_status check (notification_status in ('pending', 'sent', 'failed'))
);

create index if not exists job_applications_status_created_at_idx
  on public.job_applications (status, created_at);

create index if not exists job_applications_campaign_created_at_idx
  on public.job_applications (campaign_key, created_at desc);

alter table public.job_applications enable row level security;
revoke all on table public.job_applications from anon, authenticated;

create table if not exists public.job_application_rate_limits (
  fingerprint text primary key,
  window_started_at timestamptz not null default now(),
  attempt_count integer not null default 0,
  updated_at timestamptz not null default now(),
  constraint job_application_rate_limits_attempt_count check (attempt_count >= 0)
);

alter table public.job_application_rate_limits enable row level security;
revoke all on table public.job_application_rate_limits from anon, authenticated;

create or replace function public.consume_job_application_rate_limit(
  p_fingerprint text,
  p_limit integer default 10
)
returns boolean
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  current_attempt_count integer;
begin
  if p_fingerprint is null or char_length(p_fingerprint) <> 64 or p_limit < 1 then
    raise exception 'invalid rate limit input';
  end if;

  delete from public.job_application_rate_limits
  where updated_at < now() - interval '2 hours';

  insert into public.job_application_rate_limits as limits (
    fingerprint,
    window_started_at,
    attempt_count,
    updated_at
  )
  values (p_fingerprint, now(), 1, now())
  on conflict (fingerprint) do update
  set
    attempt_count = case
      when limits.window_started_at <= now() - interval '1 hour' then 1
      else limits.attempt_count + 1
    end,
    window_started_at = case
      when limits.window_started_at <= now() - interval '1 hour' then now()
      else limits.window_started_at
    end,
    updated_at = now()
  returning attempt_count into current_attempt_count;

  return current_attempt_count <= p_limit;
end;
$$;

revoke all on function public.consume_job_application_rate_limit(text, integer) from public, anon, authenticated;
grant execute on function public.consume_job_application_rate_limit(text, integer) to service_role;

create or replace function public.expire_stale_job_applications()
returns integer
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  expired_count integer;
begin
  update public.job_applications
  set status = 'expired'
  where status = 'pending_upload'
    and created_at < now() - interval '24 hours';

  get diagnostics expired_count = row_count;
  return expired_count;
end;
$$;

revoke all on function public.expire_stale_job_applications() from public, anon, authenticated;
grant execute on function public.expire_stale_job_applications() to service_role;

insert into storage.buckets (
  id,
  name,
  public,
  file_size_limit,
  allowed_mime_types
)
values (
  'job-applications',
  'job-applications',
  false,
  3145728,
  array['application/pdf']::text[]
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

-- No se agregan policies a storage.objects: el bucket permanece privado y
-- únicamente las URLs firmadas emitidas por las Edge Functions permiten subir o leer archivos.
