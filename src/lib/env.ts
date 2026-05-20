// SERVER-ONLY — do NOT import this file in client components or pages marked 'use client'.
// This module validates required environment variables at startup and throws immediately
// if any are missing, preventing silent failures in production.

import { z } from 'zod'

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1),
  LEAD_NOTIFICATION_EMAIL: z.string().email(),
  NEXT_PUBLIC_SITE_URL: z.string().optional().default('https://bigredmoving.com'),
})

export const env = envSchema.parse(process.env)
