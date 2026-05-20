import { NextRequest } from 'next/server'
import { LeadFormSchema } from '@/types/lead'
import { sendLeadEmail } from '@/lib/email'
import { siteContent } from '../../../../content/site-content'

// In-memory rate limiter.
// NOTE: This resets on Vercel cold starts (per-instance). Acceptable for a simple lead gen
// site — a determined attacker would need to spin up many instances simultaneously to bypass.
// For stricter rate limiting, swap this out for an Upstash Redis-backed limiter.
const rateLimiter = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 3          // max submissions per IP per window
const WINDOW_MS = 60 * 60 * 1000 // 1 hour

function checkRateLimit(ip: string): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now()
  const record = rateLimiter.get(ip)

  if (!record || now > record.resetAt) {
    // First request in this window (or window expired) — reset
    rateLimiter.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return { allowed: true, retryAfterSeconds: 0 }
  }

  if (record.count >= RATE_LIMIT) {
    const retryAfterSeconds = Math.ceil((record.resetAt - now) / 1000)
    return { allowed: false, retryAfterSeconds }
  }

  record.count += 1
  return { allowed: true, retryAfterSeconds: 0 }
}

export async function POST(request: NextRequest): Promise<Response> {
  // 1. Extract IP — NextRequest.ip was removed in Next.js v15+; read from headers instead
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'

  // 2. Rate limit check
  const { allowed, retryAfterSeconds } = checkRateLimit(ip)
  if (!allowed) {
    return Response.json(
      {
        success: false,
        error: `Too many requests. Please try again in ${Math.ceil(retryAfterSeconds / 60)} minutes or call us directly.`,
      },
      {
        status: 429,
        headers: { 'Retry-After': String(retryAfterSeconds) },
      },
    )
  }

  // 3. Parse request body
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json(
      { success: false, error: 'Invalid request.' },
      { status: 400 },
    )
  }

  // 4. Validate with Zod
  const result = LeadFormSchema.safeParse(body)
  if (!result.success) {
    return Response.json(
      {
        success: false,
        error: result.error.issues[0]?.message ?? 'Invalid form data.',
      },
      { status: 400 },
    )
  }

  // 5. Send notification email via Resend
  try {
    await sendLeadEmail(result.data)
  } catch {
    return Response.json(
      {
        success: false,
        error: `Failed to submit. Please call us directly at ${siteContent.phone.display}.`,
      },
      { status: 500 },
    )
  }

  return Response.json({ success: true })
}
