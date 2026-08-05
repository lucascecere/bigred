// Single source of truth for the site's canonical origin and NAP details.
//
// IMPORTANT: the production site is served from the www host — the apex
// (bigredmovingco.com) 307-redirects to it. Every canonical, sitemap entry,
// robots directive and schema URL must use SITE_URL so we never point search
// engines at a URL that immediately redirects.
//
// This is a constant, not an env lookup, on purpose: NEXT_PUBLIC_SITE_URL was
// set to an empty string in Vercel and to the wrong domain in .env.local, and
// a bad value here silently poisons every canonical on the site.

export const SITE_URL = 'https://www.bigredmovingco.com'

/** Stable @id for the one and only business entity. Every page's schema
 *  references this instead of describing a separate business per town. */
export const BUSINESS_ID = `${SITE_URL}/#business`

export const BUSINESS_NAME = 'Big Red Moving Company'
export const PHONE_E164 = '+1-320-321-5865'
export const EMAIL = 'info@bigredmovingco.com'

/** Google Business Profile URL. Add here once the profile is verified —
 *  it flows into schema `sameAs` automatically. */
export const GOOGLE_BUSINESS_PROFILE_URL: string | null = null

export const SOCIAL_PROFILES = [
  'https://www.facebook.com/bigredmovingco',
  'https://www.instagram.com/bigredmovingco',
]

export const SERVICE_AREA_TOWNS = [
  'Hingham', 'Cohasset', 'Hull', 'Norwell', 'Scituate',
  'Weymouth', 'Braintree', 'Quincy', 'Milton', 'Holbrook',
  'Rockland', 'Abington', 'Whitman', 'Hanover', 'Pembroke',
  'Marshfield', 'Duxbury',
]

/** Build an absolute URL for a site-relative path. */
export function absoluteUrl(path = '/'): string {
  return path === '/' ? SITE_URL : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
