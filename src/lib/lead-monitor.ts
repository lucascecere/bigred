// SERVER-ONLY. Reports every real (non-spam) lead to the YWF Command Center,
// with whether the "New Moving Lead" email actually went out. If it didn't,
// the CC alarms Lucas within minutes. Same contract as the ACoast site.
//
// Best-effort by design: it never throws and times out fast, and the route runs
// it inside after(), so it can never block or fail a lead.
// Env: LEAD_EVENT_URL (the CC endpoint) + LEAD_EVENT_SECRET (this site's key).

import type { LeadFormData } from '@/types/lead'

const SITE = 'big-red-moving'

export async function reportLeadToCommandCenter(input: {
  data: LeadFormData
  clientNotified: boolean
  notifyError: string | null
}): Promise<void> {
  const url = process.env.LEAD_EVENT_URL
  const key = process.env.LEAD_EVENT_SECRET
  if (!url || !key) {
    console.warn('[LEAD_MONITOR] LEAD_EVENT_URL / LEAD_EVENT_SECRET not set, lead not reported')
    return
  }
  const { data } = input
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': key, 'x-lead-site': SITE },
      body: JSON.stringify({
        site: SITE,
        occurred_at: new Date().toISOString(),
        name: data.name,
        email: data.email,
        phone: data.phone || undefined,
        form: 'moving quote',
        summary: [
          data.serviceType && `Service: ${data.serviceType}`,
          `From: ${data.movingFrom}`,
          `To: ${data.movingTo}`,
          data.moveDate && `Move date: ${data.moveDate}`,
          data.notes,
        ].filter(Boolean).join('\n'),
        client_notified: input.clientNotified,
        notify_error: input.notifyError,
      }),
      signal: AbortSignal.timeout(5000),
    })
    if (!res.ok) console.error('[LEAD_MONITOR_FAILED]', res.status, await res.text().catch(() => ''))
  } catch (err) {
    console.error('[LEAD_MONITOR_FAILED]', err)
  }
}
