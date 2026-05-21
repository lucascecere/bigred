import Link from 'next/link'
import type { Metadata } from 'next'
import { junkRemovalServicePage } from '@content/service-pages'
import { siteContent } from '@content/site-content'
import { junkRemovalLocationPages } from '@content/location-pages'
import {
  getServiceSchema,
  getBreadcrumbSchema,
  getFAQSchema,
} from '@/lib/schema'

export const dynamic = 'force-static'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: junkRemovalServicePage.titleTag,
    description: junkRemovalServicePage.metaDescription,
    alternates: { canonical: 'https://bigredmovingco.com/junk-removal' },
    openGraph: {
      title: junkRemovalServicePage.titleTag,
      description: junkRemovalServicePage.metaDescription,
      url: '/junk-removal',
    },
  }
}

export default function JunkRemovalServicePage() {
  return (
    <main>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema('junk-removal')) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: 'https://bigredmovingco.com' },
              { name: 'Junk Removal South Shore MA', url: 'https://bigredmovingco.com/junk-removal' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(junkRemovalServicePage.faq)) }}
      />

      {/* Hero */}
      <section className="bg-[var(--brand-black)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <p className="text-[var(--brand-red)] text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Junk Removal Services
          </p>
          <h1
            className="font-display text-4xl md:text-5xl uppercase text-white leading-none mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {junkRemovalServicePage.h1}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
            {junkRemovalServicePage.heroSubhead}
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
              Call Us
            </Link>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="space-y-12">
            {junkRemovalServicePage.sections.map((section, index) => (
              <div key={index} className="max-w-3xl">
                <h2
                  className="font-display text-3xl md:text-4xl uppercase text-[var(--brand-black)] leading-none mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {section.heading}
                </h2>
                <p className="text-[var(--brand-steel)] leading-relaxed text-lg">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Grid */}
      <section className="bg-[var(--brand-cream)] py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="mb-10">
            <h2
              className="font-display text-4xl md:text-5xl uppercase text-[var(--brand-black)] leading-none mb-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Junk Removal by Town
            </h2>
            <p className="text-[var(--brand-steel)] leading-relaxed text-lg max-w-2xl">
              We serve the South Shore. Click your town for local details.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {junkRemovalLocationPages.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                className="bg-white border-2 border-[var(--brand-black)] shadow-[3px_3px_0_var(--brand-black)] rounded-[4px] p-5 hover:-translate-y-1 transition-transform flex flex-col gap-1"
              >
                <span
                  className="font-display text-xl uppercase text-[var(--brand-black)] leading-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {loc.town}
                </span>
                <span className="text-[var(--brand-steel)] text-sm">Junk Removal</span>
                <span className="text-[var(--brand-red)] font-bold mt-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="mb-10">
            <h2
              className="font-display text-4xl md:text-5xl uppercase text-[var(--brand-black)] leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Junk Removal FAQ
            </h2>
          </div>
          <div className="space-y-4">
            {junkRemovalServicePage.faq.map((item, index) => (
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

      {/* CTA Banner */}
      <section className="bg-[var(--brand-red)] py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 text-center">
          <h2
            className="font-display text-4xl md:text-5xl uppercase text-white leading-none mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {junkRemovalServicePage.ctaHeading}
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-xl mx-auto mb-8">
            {junkRemovalServicePage.ctaSubhead}
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
