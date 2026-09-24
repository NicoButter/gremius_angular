export const JOB_APPLICATION_BUCKET = 'job-applications';
export const MAX_CV_SIZE_BYTES = 3 * 1024 * 1024;
export const SIGNED_CV_URL_TTL_SECONDS = 7 * 24 * 60 * 60;

export interface PreparedApplicationInput {
  campaignKey: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  fileName: string;
  fileSize: number;
  fileMime: string;
  honeypot: string;
}

type ParseResult =
  | { valid: true; value: PreparedApplicationInput }
  | { valid: false; honeypot: boolean };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+() .-]{6,40}$/;
const controlCharacterPattern = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;

function stringValue(value: unknown): string | null {
  return typeof value === 'string' ? value.trim() : null;
}

function hasValidLength(value: string | null, min: number, max: number): value is string {
  return value !== null && value.length >= min && value.length <= max;
}

function hasInvalidControlCharacters(value: string): boolean {
  return controlCharacterPattern.test(value);
}

export function parsePreparedApplicationInput(body: unknown): ParseResult {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { valid: false, honeypot: false };
  }

  const data = body as Record<string, unknown>;
  const honeypot = stringValue(data['honeypot']);
  if (honeypot) return { valid: false, honeypot: true };

  const campaignKey = stringValue(data['campaignKey']);
  const fullName = stringValue(data['fullName']);
  const email = stringValue(data['email'])?.toLowerCase() ?? null;
  const phone = stringValue(data['phone']);
  const message = stringValue(data['message']);
  const fileName = stringValue(data['fileName']);
  const fileSize = data['fileSize'];
  const fileMime = stringValue(data['fileMime']);

  const valid =
    hasValidLength(campaignKey, 3, 100) &&
    hasValidLength(fullName, 2, 160) &&
    !hasInvalidControlCharacters(fullName) &&
    hasValidLength(email, 3, 254) &&
    emailPattern.test(email) &&
    hasValidLength(phone, 6, 40) &&
    phonePattern.test(phone) &&
    hasValidLength(message, 20, 2000) &&
    !hasInvalidControlCharacters(message) &&
    hasValidLength(fileName, 5, 255) &&
    !fileName.includes('/') &&
    !fileName.includes('\\') &&
    fileName.toLowerCase().endsWith('.pdf') &&
    typeof fileSize === 'number' &&
    Number.isInteger(fileSize) &&
    fileSize > 0 &&
    fileSize <= MAX_CV_SIZE_BYTES &&
    fileMime === 'application/pdf';

  if (!valid) return { valid: false, honeypot: false };

  return {
    valid: true,
    value: {
      campaignKey,
      fullName,
      email,
      phone,
      message,
      fileName,
      fileSize,
      fileMime,
      honeypot: ''
    }
  };
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();

  return request.headers.get('cf-connecting-ip') ?? request.headers.get('x-real-ip') ?? 'unavailable';
}

export async function getRateLimitFingerprint(request: Request, pepper: string): Promise<string> {
  const source = `${getClientIp(request)}:${pepper}`;
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(source));

  return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
}

export function buildCvPath(storagePrefix: string, applicationId: string, now = new Date()): string {
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  return `${storagePrefix}/${year}/${month}/${applicationId}.pdf`;
}
