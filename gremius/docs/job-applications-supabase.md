# Postulaciones laborales con Supabase

## Arquitectura

Sólo el flujo **Quiero postularme** usa esta infraestructura. Las consultas generales de `/contact` conservan el envío directo existente de EmailJS.

```text
Angular valida PDF → prepare-job-application → URL firmada de carga
                       ↓
                bucket privado job-applications
                       ↓
              confirm-job-application → EmailJS (sin adjunto)
```

La URL firmada del CV se genera durante la confirmación, dura siete días y sólo se incluye en la notificación; nunca se guarda en PostgreSQL.

## Infraestructura versionada

- Migración: `supabase/migrations/20260923210000_job_applications.sql`
- Bucket privado: `job-applications`, PDF únicamente y límite de 3 MB.
- Functions públicas sin JWT: `prepare-job-application` y `confirm-job-application`.
- La tabla `job_applications`, la tabla de campañas y la de rate limit tienen RLS habilitado y no conceden permisos a `anon` ni a `authenticated`.

La migración crea estas tablas:

| Tabla | Finalidad |
| --- | --- |
| `job_application_campaigns` | Configuración privada de las campañas permitidas por el servidor. |
| `job_applications` | Postulación, ruta privada del CV y estados de carga/notificación. |
| `job_application_rate_limits` | Huella SHA-256 de IP + pepper; no guarda la IP. |

`job_applications.status` puede ser `pending_upload`, `received` o `expired`; `notification_status` puede ser `pending`, `sent` o `failed`.

La ruta es generada por la Function con esta forma: `administrativo-rg/AAAA/MM/<uuid>.pdf`. No contiene datos personales.

## Configuración Angular

La clave **publishable** (`sb_publishable_...`) del proyecto quedó configurada en:

- `src/environments/environment.ts` para desarrollo.
- `src/environments/environment.production.ts` para producción.

El Project URL ya está configurado. La clave publishable puede estar en el navegador; no usar en esos archivos una secret key, `service_role`, contraseña de base de datos ni ninguna clave `sb_secret_...`.

## Secrets de Edge Functions

Las Functions reciben `SUPABASE_URL` y `SUPABASE_SECRET_KEYS` desde Supabase. No hay que copiarlos al repositorio. Crear un archivo local ignorado a partir de la plantilla:

```bash
cp supabase/.env.example supabase/.env
```

Completar en ese archivo:

- `RATE_LIMIT_PEPPER`: valor aleatorio largo y estable. Se utiliza para hashear la IP antes de guardar el rate limit.
- `EMAILJS_SERVICE_ID`: el servicio de EmailJS.
- `EMAILJS_TEMPLATE_ID`: la plantilla compartida para consultas generales y postulaciones laborales.
- `EMAILJS_PUBLIC_KEY`: la clave pública de EmailJS requerida por su API REST.
- `EMAILJS_PRIVATE_KEY`: la private key de EmailJS cuando está habilitada la opción **Use Private Key**.
- `EMAILJS_TO_EMAIL`: destinatario de Río Gallegos.

No subir `supabase/.env`, ni registrar estos valores en logs.

## Configuración manual de EmailJS

El flujo general de Río Gallegos y las postulaciones laborales reutilizan `service_ck9nnbd` y `template_wluyfpg`; no se crea una tercera plantilla. La plantilla debe usar estos campos de cabecera:

```text
Subject: {{subject}}
From Name: {{name}}
Reply To: {{email}}
```

El parámetro `is_job_application` distingue una postulación laboral de una consulta general.

La plantilla no debe incluir adjuntos. Para postulaciones, configurar:

```text
Para: gremiojudicialesrg@gmail.com
Subject: {{subject}}
From Name: {{name}}
Reply To: {{email}}

NUEVA POSTULACIÓN LABORAL

Puesto: {{position}}
Sede: {{office}}
Nombre: {{full_name}}
Email: {{email}}
Teléfono: {{phone}}

Presentación:
{{message}}

Ver Currículum Vitae:
{{cv_url}}
```

El código siempre genera el asunto `Nueva postulación administrativa - <nombre>` y no transmite el PDF a EmailJS.

## Deploy remoto

La CLI no estaba instalada/autenticada durante la implementación, así que estos pasos no fueron ejecutados. Con Docker si se quiere probar localmente y una sesión de Supabase con permisos sobre el proyecto:

```bash
npx supabase login
npx supabase link --project-ref cjprsgroaierjsxklbhx
npx supabase db push
openssl rand -hex 32
npx supabase secrets set --env-file supabase/.env
npx supabase functions deploy prepare-job-application
npx supabase functions deploy confirm-job-application
```

Luego compilar y publicar el frontend con la Publishable Key configurada:

```bash
npm run build
```

Para una ejecución local, iniciar la pila con `npx supabase start`, preparar los secrets equivalentes para las Functions y usar `npx supabase functions serve <nombre> --env-file supabase/.env`. La Function usa la clave privilegiada que inyecta el runtime; no colocarla en Angular.

## Prueba real de una postulación

1. Aplicar migración, secrets y Functions, y publicar el frontend configurado.
2. Abrir `/contact`, elegir **Quiero postularme** y completar nombre, email, teléfono y presentación.
3. Adjuntar un PDF real menor a 3 MB. Un `.docx`, un MIME distinto de `application/pdf` o un archivo superior al límite se rechazan antes de hacer requests.
4. En Supabase, comprobar que hay una fila `received` en `job_applications`, con `cv_bucket = job-applications`, ruta UUID y `uploaded_at` completo.
5. Verificar que el objeto no se puede abrir mediante una URL pública y que el email no tiene adjuntos: debe contener la URL temporal del CV.
6. Comprobar que `notification_status` es `sent`. Si EmailJS falla, la postulación sigue en `received` y queda con `notification_status = failed`; el usuario igualmente recibe confirmación de recepción. Reenviar `confirm-job-application` con el mismo `applicationId` para reintentar sólo la notificación: valida el PDF ya guardado, crea una URL firmada nueva y no crea ni carga una postulación nueva.

Los pendientes de más de 24 horas pasan a `expired` cuando se procesa una preparación posterior. También se puede ejecutar manualmente desde el SQL Editor con:

```sql
select public.expire_stale_job_applications();
```

## Activar o cerrar la convocatoria

Para ocultar el flujo de la web cambiar `enabled: false` en `src/app/contact/contact-campaign.config.ts` y publicar el frontend.

Como la Function debe rechazar también requests directos, cerrar la campaña en el servidor con:

```sql
update public.job_application_campaigns
set enabled = false, updated_at = now()
where campaign_key = 'administrativo-rg-2026';
```

Al reabrirla, restablecer ambos valores a `true`. Esta segunda medida es intencional: una configuración exclusivamente en Angular no puede proteger un endpoint público.
