'use client'

import { useEffect } from 'react'

// The browser half of the form token (server half: src/lib/spam.ts). Fetched
// when the form mounts; formToken() also waits out the server's 2.5s minimum
// if someone is quicker than that, so a real person is never taken for a bot.

const MIN_AGE_MS = 2_700

let pending: Promise<{ token: string; at: number } | null> | null = null

function fetchToken(attempt = 0): Promise<{ token: string; at: number } | null> {
  return fetch('/api/form-token', { cache: 'no-store' })
    .then((r) => (r.ok ? r.json() : null))
    .then((j: { token?: string } | null) => (j?.token ? { token: j.token, at: performance.now() } : null))
    .catch(() => null)
    .then((got) => {
      if (got || attempt >= 2) return got
      return new Promise<{ token: string; at: number } | null>((r) => setTimeout(r, 1000 * (attempt + 1))).then(() =>
        fetchToken(attempt + 1),
      )
    })
}

export function prefetchFormToken(): void {
  if (!pending) {
    pending = fetchToken().then((got) => {
      if (!got) pending = null
      return got
    })
  }
}

const MAX_AGE_MS = 30 * 60 * 1000

export const FORM_TOKEN_FAILED =
  'This form could not load properly. Please refresh the page and try again, or call us.'

// A token older than 30 minutes is fetched fresh (the wait below keeps it from
// reading as too fast). THROWS when no token can be had, so the form never
// sends a request the server would refuse as a bot (2026-11-16).
export async function formToken(): Promise<string> {
  prefetchFormToken()
  let got = await pending
  if (got && performance.now() - got.at > MAX_AGE_MS) {
    pending = null
    prefetchFormToken()
    got = await pending
  }
  if (!got) throw new Error(FORM_TOKEN_FAILED)
  const wait = MIN_AGE_MS - (performance.now() - got.at)
  if (wait > 0) await new Promise((r) => setTimeout(r, wait))
  return got.token
}

export function useFormToken(): void {
  useEffect(() => {
    prefetchFormToken()
  }, [])
}
