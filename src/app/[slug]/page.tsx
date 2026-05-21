import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { movingLocationPages, junkRemovalLocationPages } from '@content/location-pages'
import { siteContent } from '@content/site-content'
import {
  getLocationPageSchema,
  getBreadcrumbSchema,
  getFAQSchema,
} from '@/lib/schema'

export const dynamic = 'force-static'

const allPages = [
  ...movingLocationPages.map((p) => ({ ...p, serviceType: 'moving' as const })),
  ...junkRemovalLocationPages.map((p) => ({ ...p, serviceType: 'junk-removal' as const })),
]

export function generateStaticParams() {
  return allPages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = allPages.find((p) => p.slug === slug)
  if (!page) return {}
  return {
    title: page.titleTag,
    description: page.metaDescription,
    alternates: { canonical: `https://bigredmovingco.com/${page.slug}` },
    openGraph: {
      title: page.titleTag,
      description: page.metaDescription,
      url: `/${page.slug}`,
    },
  }
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = allPages.find((p) => p.slug === slug)
  if (!page) notFound()

  const isMoving = page.serviceType === 'moving'

  // Breadcrumb middle node
  const serviceLabel = isMoving ? 'Moving Company South Shore MA' : 'Junk Removal South Shore MA'
  const serviceHref = isMoving ? '/moving' : '/junk-removal'

  // Nearby towns — 4 others from the same service type, excluding current
  const sameTypePages = isMoving ? movingLocationPages : junkRemovalLocationPages
  const nearbyPages = sameTypePages.filter((p) => p.slug !== page.slug).slice(0, 4)

  // FAQ heading
  const faqHeading = isMoving
    ? `Questions About Moving in ${page.town}`
    : `Questions About Junk Removal in ${page.town}`

  // CTA heading
  const ctaHeading = isMoving
    ? `Ready to Move in ${page.town}?`
    : `Need Junk Removal in ${page.town}?`

  return (
    <main>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getLocationPageSchema({
              town: page.town,
              serviceType: page.serviceType,
              url: `https://bigredmovingco.com/${page.slug}`,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: 'https://bigredmovingco.com' },
              { name: serviceLabel, url: `https://bigredmovingco.com${serviceHref}` },
              { name: page.titleTag, url: `https://bigredmovingco.com/${page.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(page.faq)) }}
      />

      {/* Breadcrumb nav */}
      <nav className="bg-[var(--brand-black)] border-b border-white/10 py-3" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <ol className="flex items-center gap-1 text-sm text-white/60 flex-wrap">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true"> › </li>
            <li>
              <Link href={serviceHref} className="hover:text-white transition-colors">
                {serviceLabel}
              </Link>
            </li>
            <li aria-hidden="true"> › </li>
            <li>
              <span className="text-white" aria-current="page">
                {page.town}, MA
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[var(--brand-black)] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <p className="text-[var(--brand-red)] text-sm font-bold uppercase tracking-[0.2em] mb-4">
            {page.town}, MA
          </p>
          <h1
            className="font-display text-4xl md:text-5xl uppercase text-white leading-none mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {page.h1}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
            {page.heroSubhead}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="bg-[var(--brand-red)] text-white font-bold uppercase tracking-wide px-8 py-4 rounded-[4px] hover:bg-[var(--brand-red-deep)] transition-colors text-center"
            >
              Get a Free Quote
            </Link>
            <Link
              href={siteContent.phone.href}
              className="border-2 border-white text-white font-bold uppercase tracking-wide px-8 py-4 rounded-[4px] hover:bg-white hover:text-[var(--brand-black)] transition-colors text-center"
            >
              Call {siteContent.phone.display}
            </Link>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <p className="text-[var(--brand-steel)] leading-relaxed text-lg mb-6">
            {page.bodyParagraph1}
          </p>

          {/* Trust strip */}
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="text-[var(--brand-red)] font-semibold text-sm">✓ Licensed &amp; Insured</span>
            <span className="text-[var(--brand-red)] font-semibold text-sm">✓ Flat-Rate Pricing</span>
            <span className="text-[var(--brand-red)] font-semibold text-sm">✓ 5-Star Rated</span>
          </div>

          <p className="text-[var(--brand-steel)] leading-relaxed text-lg">
            {page.bodyParagraph2}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--brand-cream)] py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="mb-10">
            <h2
              className="font-display text-4xl md:text-5xl uppercase text-[var(--brand-black)] leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {faqHeading}
            </h2>
          </div>
          <div className="space-y-4">
            {page.faq.map((item, index) => (
              <details
                key={index}
                className="border-2 border-[var(--brand-black)] rounded-[4px] shadow-[3px_3px_0_var(--brand-black)] bg-white"
              >
                <summary className="cursor-pointer p-4 font-bold text-[var(--brand-black)] select-none list-none flex justify-between items-center gap-4 hover:bg-[var(--brand-cream)] transition-colors">
                  <span>{item.question}</span>
                  <span
                    className="shrink-0 text-[var(--brand-red)] text-xl leading-none font-bold"
                    aria-hidden="true"
                  >
                    <span className="faq-icon-open">+</span>
                    <span className="faq-icon-close">−</span>
                  </span>
                </summary>
                <div className="px-4 pb-4 pt-2 text-[var(--brand-steel)] leading-relaxed border-t border-[var(--brand-black)]/10">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Towns */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h2
            className="font-display text-3xl md:text-4xl uppercase text-[var(--brand-black)] leading-none mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Also Serving Nearby Towns
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nearbyPages.map((nearby) => (
              <Link
                key={nearby.slug}
                href={`/${nearby.slug}`}
                className="border border-[var(--brand-black)]/20 rounded-[4px] p-4 hover:border-[var(--brand-red)] transition-colors flex flex-col gap-1"
              >
                <span
                  className="font-display text-lg uppercase text-[var(--brand-black)] leading-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {nearby.town}
                </span>
                <span className="text-[var(--brand-steel)] text-sm">View Local Page →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[var(--brand-red)] py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 text-center">
          <h2
            className="font-display text-4xl md:text-5xl uppercase text-white leading-none mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {ctaHeading}
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Get a flat-rate quote from Big Red Moving Company. We&apos;ll get back to you within a few
            hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-white text-[var(--brand-black)] font-bold uppercase tracking-wide px-8 py-4 rounded-[4px] hover:bg-[var(--brand-cream)] transition-colors text-center"
            >
              Get a Free Quote
            </Link>
            <Link
              href={siteContent.phone.href}
              className="border-2 border-white text-white font-bold uppercase tracking-wide px-8 py-4 rounded-[4px] hover:bg-white hover:text-[var(--brand-black)] transition-colors text-center"
            >
              {siteContent.phone.display}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
