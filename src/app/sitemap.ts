import type { MetadataRoute } from "next"
import { movingLocationPages } from "../../content/location-pages"

const BASE_URL = "https://bigredmovingco.com"

const JUNK_REMOVAL_SLUGS = [
  "junk-removal-quincy-ma",
  "junk-removal-weymouth-ma",
  "junk-removal-braintree-ma",
  "junk-removal-hingham-ma",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const movingLocationEntries: MetadataRoute.Sitemap = movingLocationPages.map(
    (page) => ({
      url: `${BASE_URL}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }),
  )

  const junkRemovalLocationEntries: MetadataRoute.Sitemap = JUNK_REMOVAL_SLUGS.map(
    (slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }),
  )

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/moving`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/junk-removal`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...movingLocationEntries,
    ...junkRemovalLocationEntries,
  ]
}
