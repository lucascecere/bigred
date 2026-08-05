import type { MetadataRoute } from "next"
import { movingLocationPages, junkRemovalLocationPages } from "@content/location-pages"
import { subServicePages } from "@content/sub-service-pages"
import { SITE_URL } from "@/lib/site"

// Content-change date, bumped by hand when page copy is edited.
// Using `new Date()` here would stamp every URL with the build time, telling
// Google the whole site changed on every unrelated deploy — a signal it learns
// to ignore.
const LAST_CONTENT_UPDATE = new Date("2026-08-05")

export default function sitemap(): MetadataRoute.Sitemap {
  const movingLocationEntries: MetadataRoute.Sitemap = movingLocationPages.map(
    (page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }),
  )

  const junkRemovalLocationEntries: MetadataRoute.Sitemap = junkRemovalLocationPages.map(
    (page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }),
  )

  return [
    {
      url: SITE_URL,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/junk-removal`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/moving`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Service pages rank for their own intent and sit above town pages
    ...subServicePages.map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/contact`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    ...junkRemovalLocationEntries,
    ...movingLocationEntries,
  ]
}
