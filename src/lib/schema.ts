// Schema.org structured data helpers.
// Use these in layout.tsx or page.tsx via <script type="application/ld+json">.
// No external schema packages — plain TypeScript objects serialized with JSON.stringify.

export function getLocalBusinessSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["MovingCompany", "LocalBusiness"],
    "name": "Big Red Moving Company",
    "telephone": "+1-617-874-6030",
    "email": "info@bigredmovingco.com",
    "url": "https://bigredmovingco.com",
    "image": "https://bigredmovingco.com/IMG_5595.png",
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
    "areaServed": [
      "Hingham", "Cohasset", "Hull", "Norwell", "Scituate",
      "Weymouth", "Braintree", "Quincy", "Milton", "Holbrook",
      "Rockland", "Abington", "Whitman", "Hanover", "Pembroke",
      "Marshfield", "Duxbury",
    ].map((name) => ({ "@type": "City", "name": name })),
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/bigredmovingco",
      "https://www.instagram.com/bigredmovingco",
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "47",
      "bestRating": "5",
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
  const provider = {
    "@type": "MovingCompany",
    "name": "Big Red Moving Company",
    "url": "https://bigredmovingco.com",
    "telephone": "+1-617-874-6030",
  }

  const areaServed = [
    "Hingham", "Cohasset", "Hull", "Norwell", "Scituate",
    "Weymouth", "Braintree", "Quincy", "Milton", "Holbrook",
    "Rockland", "Abington", "Whitman", "Hanover", "Pembroke",
    "Marshfield", "Duxbury",
  ].map((name) => ({ "@type": "City", "name": name }))

  if (serviceType === "moving") {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "MovingService",
      "name": "Local & Short-Distance Moving",
      "description":
        "Professional local and short-distance moving services across the South Shore of Massachusetts. We handle apartment moves, single-family homes, and office relocations throughout Hingham, Quincy, Weymouth, Braintree, Scituate, Marshfield, Duxbury, Norwell, and surrounding towns.",
      "provider": provider,
      "areaServed": areaServed,
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "HomeAndConstructionBusiness",
    "name": "Junk Removal & Hauling",
    "description":
      "Full-service junk removal and hauling across the South Shore of Massachusetts. We haul away furniture, appliances, electronics, and yard debris, and handle complete garage cleanouts, basement cleanouts, and estate clearing for residential and commercial clients.",
    "provider": provider,
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

export function getLocationPageSchema(params: {
  town: string
  serviceType: "moving" | "junk-removal"
  url: string
}): Record<string, unknown> {
  const { town, serviceType, url } = params
  const types =
    serviceType === "moving"
      ? ["MovingCompany", "LocalBusiness"]
      : ["HomeAndConstructionBusiness", "LocalBusiness"]

  return {
    "@context": "https://schema.org",
    "@type": types,
    "name": `Big Red Moving Company — ${town}, MA`,
    "url": url,
    "telephone": "+1-617-874-6030",
    "email": "info@bigredmovingco.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hingham",
      "addressRegion": "MA",
      "postalCode": "02043",
      "addressCountry": "US",
    },
    "areaServed": {
      "@type": "City",
      "name": town,
      "containedInPlace": {
        "@type": "State",
        "name": "Massachusetts",
      },
    },
    "priceRange": "$$",
    "image": "https://bigredmovingco.com/IMG_5595.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "47",
      "bestRating": "5",
    },
  }
}

export function getWebsiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://bigredmovingco.com",
    "name": "Big Red Moving Company",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://bigredmovingco.com/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }
}
