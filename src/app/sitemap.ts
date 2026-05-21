import type { MetadataRoute } from "next"
import { movingLocationPages, junkRemovalLocationPages } from "../../content/location-pages"

const BASE_URL = "https://bigredmovingco.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const movingLocationEntries: MetadataRoute.Sitemap = movingLocationPages.map(
    (page) => ({
      url: `${BASE_URL}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }),
  )

  const junkRemovalLocationEntries: MetadataRoute.Sitemap = junkRemovalLocationPages.map(
    (page) => ({
      url: `${BASE_URL}/${page.slug}`,
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
