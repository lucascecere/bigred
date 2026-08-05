// Schema.org structured data helpers.
// Use these in layout.tsx or page.tsx via <script type="application/ld+json">.
// No external schema packages — plain TypeScript objects serialized with JSON.stringify.
//
// Two rules this file follows deliberately:
//  1. There is ONE business entity, identified by BUSINESS_ID. Town pages
//     reference it rather than declaring a second business with the same NAP —
//     24 near-identical LocalBusiness entities reads as doorway spam.
//  2. No aggregateRating / Review markup. Google disallows self-serving review
//     markup for LocalBusiness, so it earns nothing and risks a manual action.
//     Ratings live in the on-page testimonials, not in structured data.

import {
  SITE_URL,
  BUSINESS_ID,
  BUSINESS_NAME,
  PHONE_E164,
  EMAIL,
  GOOGLE_BUSINESS_PROFILE_URL,
  SOCIAL_PROFILES,
  SERVICE_AREA_TOWNS,
} from "./site"

const areaServed = SERVICE_AREA_TOWNS.map((name) => ({
  "@type": "City",
  "name": name,
  "containedInPlace": { "@type": "State", "name": "Massachusetts" },
}))

const sameAs = [
  ...(GOOGLE_BUSINESS_PROFILE_URL ? [GOOGLE_BUSINESS_PROFILE_URL] : []),
  ...SOCIAL_PROFILES,
]

/** Lightweight reference to the single business entity declared in the root layout. */
const providerRef = { "@id": BUSINESS_ID }

export function getLocalBusinessSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["MovingCompany", "LocalBusiness"],
    "@id": BUSINESS_ID,
    "name": BUSINESS_NAME,
    "description":
      "Family-owned junk removal, hauling and local moving company based in Hingham, MA, serving 17 towns across the South Shore.",
    "telephone": PHONE_E164,
    "email": EMAIL,
    "url": SITE_URL,
    "image": `${SITE_URL}/logo.png`,
    "logo": `${SITE_URL}/logo.png`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hingham",
      "addressRegion": "MA",
      "postalCode": "02043",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.2417,
      "longitude": -70.8897,
    },
    "areaServed": areaServed,
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "sameAs": sameAs,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Junk Removal & Hauling",
            "url": `${SITE_URL}/junk-removal`,
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local & Short-Distance Moving",
            "url": `${SITE_URL}/moving`,
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Labor-Only Loading & Unloading",
            "url": `${SITE_URL}/moving`,
          },
        },
      ],
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        "opens": "07:00",
        "closes": "19:00",
      },
    ],
  }
}

export function getFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  }
}

export function getServiceSchema(
  serviceType: "moving" | "junk-removal",
): Record<string, unknown> {
  if (serviceType === "moving") {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/moving#service`,
      "serviceType": "Moving service",
      "name": "Local & Short-Distance Moving",
      "url": `${SITE_URL}/moving`,
      "description":
        "Professional local and short-distance moving services across the South Shore of Massachusetts. We handle apartment moves, single-family homes, and office relocations throughout Hingham, Quincy, Weymouth, Braintree, Scituate, Marshfield, Duxbury, Norwell, and surrounding towns.",
      "provider": providerRef,
      "areaServed": areaServed,
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/junk-removal#service`,
    "serviceType": "Junk removal service",
    "name": "Junk Removal & Hauling",
    "url": `${SITE_URL}/junk-removal`,
    "description":
      "Full-service junk removal and hauling across the South Shore of Massachusetts. We haul away furniture, appliances, electronics, and yard debris, and handle complete garage cleanouts, basement cleanouts, and estate clearing for residential and commercial clients.",
    "provider": providerRef,
    "areaServed": areaServed,
  }
}

/** Schema for a specific sub-service (estate cleanouts, mattress disposal, …). */
export function getSubServiceSchema(params: {
  name: string
  description: string
  url: string
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${params.url}#service`,
    "name": params.name,
    "description": params.description,
    "url": params.url,
    "provider": providerRef,
    "areaServed": areaServed,
  }
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  }
}

/**
 * Town page schema. Describes the SERVICE as offered in one town and points
 * `provider` at the single business entity — it does not invent a second
 * business located in that town.
 */
export function getLocationPageSchema(params: {
  town: string
  serviceType: "moving" | "junk-removal"
  url: string
}): Record<string, unknown> {
  const { town, serviceType, url } = params
  const isMoving = serviceType === "moving"

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    "serviceType": isMoving ? "Moving service" : "Junk removal service",
    "name": isMoving
      ? `Moving Company in ${town}, MA`
      : `Junk Removal in ${town}, MA`,
    "url": url,
    "provider": providerRef,
    "areaServed": {
      "@type": "City",
      "name": town,
      "containedInPlace": {
        "@type": "State",
        "name": "Massachusetts",
      },
    },
    "isPartOf": {
      "@type": "WebPage",
      "url": url,
    },
  }
}

export function getWebsiteSchema(): Record<string, unknown> {
  // No SearchAction — the site has no search endpoint, and advertising one
  // that doesn't exist is a false signal.
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "url": SITE_URL,
    "name": BUSINESS_NAME,
    "publisher": providerRef,
    "inLanguage": "en-US",
  }
}
