// Schema.org structured data helpers.
// Use these in layout.tsx or page.tsx via <script type="application/ld+json">.
// No external schema packages — plain TypeScript objects serialized with JSON.stringify.

export function getLocalBusinessSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["MovingCompany", "LocalBusiness"],
    "name": "Big Red Moving Company",
    "telephone": "+1-781-555-0100",
    "email": "hello@bigredmoving.com",
    "url": "https://bigredmoving.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hingham",
      "addressRegion": "MA",
      "postalCode": "02043",
      "addressCountry": "US",
    },
    "areaServed": [
      "Hingham", "Cohasset", "Hull", "Norwell", "Scituate",
      "Weymouth", "Braintree", "Quincy", "Milton", "Holbrook",
      "Rockland", "Abington", "Whitman", "Hanover", "Pembroke",
      "Marshfield", "Duxbury",
    ].map((name) => ({ "@type": "City", "name": name })),
    "priceRange": "$$",
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
