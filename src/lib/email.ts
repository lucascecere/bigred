// SERVER-ONLY — do NOT import this file in client components or pages marked 'use client'.

import { Resend } from 'resend'
import { env } from './env'
import type { LeadFormData } from '@/types/lead'

const resend = new Resend(env.RESEND_API_KEY)

export async function sendLeadEmail(data: LeadFormData): Promise<void> {
  await resend.emails.send({
    from: 'Big Red Moving <leads@bigredmovingco.com>',
    replyTo: 'info@bigredmovingco.com',
    to: env.LEAD_NOTIFICATION_EMAIL,
    subject: `New Moving Lead — ${data.name}`,
    html: buildEmailHtml(data),
  })
}

function buildEmailHtml(data: LeadFormData): string {
  const row = (label: string, value: string | undefined) =>
    value
      ? `<tr>
          <td style="padding:10px 16px;background:#f9f9f9;border-bottom:1px solid #e5e5e5;font-family:sans-serif;font-size:14px;color:#555;font-weight:600;width:160px;vertical-align:top;">${label}</td>
          <td style="padding:10px 16px;border-bottom:1px solid #e5e5e5;font-family:sans-serif;font-size:14px;color:#111;vertical-align:top;">${escapeHtml(value)}</td>
        </tr>`
      : ''

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Moving Lead</title>
</head>
<body style="margin:0;padding:0;background:#f0f0f0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f0;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td colspan="2" style="background:#C8102E;padding:24px 32px;">
              <p style="margin:0;font-family:sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.7);">Big Red Moving Company</p>
              <h1 style="margin:4px 0 0;font-family:sans-serif;font-size:22px;font-weight:800;color:#ffffff;">NEW MOVING LEAD</h1>
            </td>
          </tr>

          <!-- Lead details -->
          <tr>
            <td colspan="2">
              <table width="100%" cellpadding="0" cellspacing="0">
                ${row('Name', data.name)}
                ${row('Phone', data.phone)}
                ${row('Email', data.email)}
                ${row('Moving From', data.movingFrom)}
                ${row('Moving To', data.movingTo)}
                ${row('Move Date', data.moveDate)}
                ${row('Notes', data.notes)}
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td colspan="2" style="padding:20px 32px;border-top:2px solid #C8102E;">
              <p style="margin:0;font-family:sans-serif;font-size:12px;color:#888;">
                Big Red Moving Company &mdash; Hingham, MA
              </p>
              <p style="margin:4px 0 0;font-family:sans-serif;font-size:12px;color:#aaa;">
                This lead was submitted via bigredmovingco.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\n/g, '<br />')
}
