const allowedOrigins = new Set([
  'https://judicialesdesantacruz.org.ar',
  'https://www.judicialesdesantacruz.org.ar',
  'http://localhost:4200',
  'http://127.0.0.1:4200'
]);

function corsHeaders(request: Request): HeadersInit | null {
  const origin = request.headers.get('origin');
  if (!origin || !allowedOrigins.has(origin)) return null;

  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Vary': 'Origin'
  };
}

export function handleCors(request: Request): Response | null {
  const headers = corsHeaders(request);
  if (!headers) {
    return new Response(JSON.stringify({ error: 'Origen no permitido.' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  return null;
}

export function jsonResponse(request: Request, body: object, status = 200): Response {
  const headers = corsHeaders(request);
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...(headers ?? {}),
      'Content-Type': 'application/json'
    }
  });
}
