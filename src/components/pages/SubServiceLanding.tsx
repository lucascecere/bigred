import Link from 'next/link'
import { siteContent } from '@content/site-content'
import type { SubServicePage } from '@content/sub-service-pages'
import { getSubServicesFor } from '@content/sub-service-pages'
import {
  getSubServiceSchema,
  getBreadcrumbSchema,
  getFAQSchema,
} from '@/lib/schema'
import { SITE_URL } from '@/lib/site'

const PARENT_META = {
  'junk-removal': { label: 'Junk Removal South Shore MA', href: '/junk-removal' },
  moving: { label: 'Moving Company South Shore MA', href: '/moving' },
} as const

export function SubServiceLanding({ page }: { page: SubServicePage }) {
  const parent = PARENT_META[page.parent]
  const siblings = getSubServicesFor(page.parent).filter((p) => p.slug !== page.slug)
  const url = `${SITE_URL}/${page.slug}`

  return (
    <main>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getSubServiceSchema({ name: page.h1, description: page.metaDescription, url })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: parent.label, url: `${SITE_URL}${parent.href}` },
              { name: page.navLabel, url },
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
              <Link href={parent.href} className="hover:text-white transition-colors">
                {parent.label}
              </Link>
            </li>
            <li aria-hidden="true"> › </li>
            <li>
              <span className="text-white" aria-current="page">
                {page.navLabel}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[var(--brand-black)] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <p className="text-[var(--brand-red)] text-sm font-bold uppercase tracking-[0.2em] mb-4">
            {page.navLabel}
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

      {/* Body sections */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="space-y-12">
            {page.sections.map((section, index) => (
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

      {/* FAQ */}
      <section className="bg-[var(--brand-cream)] py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="mb-10">
            <h2
              className="font-display text-4xl md:text-5xl uppercase text-[var(--brand-black)] leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Questions
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

      {/* Related services */}
      {siblings.length > 0 && (
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <h2
              className="font-display text-3xl md:text-4xl uppercase text-[var(--brand-black)] leading-none mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              We Also Do
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {siblings.map((sibling) => (
                <Link
                  key={sibling.slug}
                  href={`/${sibling.slug}`}
                  className="border border-[var(--brand-black)]/20 rounded-[4px] p-4 hover:border-[var(--brand-red)] transition-colors flex flex-col gap-1"
                >
                  <span
                    className="font-display text-lg uppercase text-[var(--brand-black)] leading-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {sibling.navLabel}
                  </span>
                  <span className="text-[var(--brand-steel)] text-sm">Learn More →</span>
                </Link>
              ))}
              <Link
                href={parent.href}
                className="border border-[var(--brand-black)]/20 rounded-[4px] p-4 hover:border-[var(--brand-red)] transition-colors flex flex-col gap-1"
              >
                <span
                  className="font-display text-lg uppercase text-[var(--brand-black)] leading-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  All {page.parent === 'moving' ? 'Moving' : 'Junk Removal'}
                </span>
                <span className="text-[var(--brand-steel)] text-sm">See Service Area →</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="bg-[var(--brand-red)] py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 text-center">
          <h2
            className="font-display text-4xl md:text-5xl uppercase text-white leading-none mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {page.ctaHeading}
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-xl mx-auto mb-8">
            {page.ctaSubhead}
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
