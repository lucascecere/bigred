import Link from 'next/link'
import type { Metadata } from 'next'
import { siteContent } from '@content/site-content'
import { getSubServicesFor } from '@content/sub-service-pages'
import { getBreadcrumbSchema } from '@/lib/schema'
import { SITE_URL, BUSINESS_ID, EMAIL } from '@/lib/site'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Contact Big Red Moving Company | Hingham, MA',
  description:
    'Call, text or email Big Red Moving Company in Hingham, MA for junk removal and moving across the South Shore. Open Monday–Saturday, 7am–7pm. Free flat-rate quotes.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Big Red Moving Company | Hingham, MA',
    description:
      'Junk removal and moving across the South Shore. Call or text for a free flat-rate quote. Open Mon–Sat, 7am–7pm.',
    url: '/contact',
  },
}

// ContactPage referencing the single business entity declared in the layout,
// rather than restating the NAP as a second business.
function getContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/contact#page`,
    url: `${SITE_URL}/contact`,
    name: 'Contact Big Red Moving Company',
    about: { '@id': BUSINESS_ID },
    mainEntity: { '@id': BUSINESS_ID },
  }
}

export default function ContactPage() {
  const { phone, serviceArea, contact } = siteContent

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContactPageSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'Contact', url: `${SITE_URL}/contact` },
            ])
          ),
        }}
      />

      {/* Breadcrumb */}
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
              <span className="text-white" aria-current="page">
                Contact
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[var(--brand-black)] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <p className="text-[var(--brand-red)] text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Get In Touch
          </p>
          <h1
            className="font-display text-4xl md:text-5xl uppercase text-white leading-none mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Contact Big Red Moving Company
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
            Based in Hingham, serving {serviceArea.towns.length} towns across the South Shore.
            Call or text and you&apos;ll get one of the owners — Andrew, Anthony or Charles — not a
            call center.
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Call */}
            <div className="border-2 border-[var(--brand-black)] rounded-[4px] shadow-[6px_6px_0_var(--brand-black)] p-6">
              <h2
                className="font-display text-2xl uppercase text-[var(--brand-black)] leading-none mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Call or Text
              </h2>
              <p className="text-[var(--brand-steel)] leading-relaxed mb-4">
                Fastest way to get a quote. Tell us what you need hauled or moved and we&apos;ll
                give you a flat price.
              </p>
              <a
                href={phone.href}
                className="text-[var(--brand-red)] font-bold text-xl hover:text-[var(--brand-red-deep)] transition-colors"
              >
                {phone.display}
              </a>
            </div>

            {/* Email */}
            <div className="border-2 border-[var(--brand-black)] rounded-[4px] shadow-[6px_6px_0_var(--brand-black)] p-6">
              <h2
                className="font-display text-2xl uppercase text-[var(--brand-black)] leading-none mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Email
              </h2>
              <p className="text-[var(--brand-steel)] leading-relaxed mb-4">
                Send photos of what needs to go and we can usually quote straight from those.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="text-[var(--brand-red)] font-bold hover:text-[var(--brand-red-deep)] transition-colors break-all"
              >
                {EMAIL}
              </a>
            </div>

            {/* Hours + location */}
            <div className="border-2 border-[var(--brand-black)] rounded-[4px] shadow-[6px_6px_0_var(--brand-black)] p-6">
              <h2
                className="font-display text-2xl uppercase text-[var(--brand-black)] leading-none mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Hours & Base
              </h2>
              <address className="not-italic text-[var(--brand-steel)] leading-relaxed space-y-2">
                <p className="font-semibold text-[var(--brand-black)]">
                  {contact.rightCard.hours}
                </p>
                <p>Hingham, MA 02043</p>
                <p className="text-sm">
                  We&apos;re a mobile crew — we come to you rather than operating a storefront.
                </p>
              </address>
            </div>
          </div>

          {/* Quote CTA */}
          <div className="mt-12 max-w-3xl">
            <h2
              className="font-display text-3xl md:text-4xl uppercase text-[var(--brand-black)] leading-none mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Prefer a Form?
            </h2>
            <p className="text-[var(--brand-steel)] leading-relaxed text-lg mb-6">
              Fill out the quote form and we&apos;ll get back to you within a few hours. Include
              rough details — home size, what needs to go, and where it is in the house — and
              we can usually quote without a site visit.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-[var(--brand-red)] text-white font-bold uppercase tracking-wide px-8 py-4 rounded-[4px] hover:bg-[var(--brand-red-deep)] transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* What we do + where */}
      <section className="bg-[var(--brand-cream)] py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h2
            className="font-display text-3xl md:text-4xl uppercase text-[var(--brand-black)] leading-none mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            What Are You Calling About?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { href: '/junk-removal', label: 'Junk Removal' },
              { href: '/moving', label: 'Moving' },
              ...getSubServicesFor('junk-removal').map((s) => ({
                href: `/${s.slug}`,
                label: s.navLabel,
              })),
              ...getSubServicesFor('moving').map((s) => ({
                href: `/${s.slug}`,
                label: s.navLabel,
              })),
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white border-2 border-[var(--brand-black)] shadow-[3px_3px_0_var(--brand-black)] rounded-[4px] p-4 hover:-translate-y-1 transition-transform"
              >
                <span
                  className="font-display text-lg uppercase text-[var(--brand-black)] leading-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <h2
            className="font-display text-3xl md:text-4xl uppercase text-[var(--brand-black)] leading-none mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Towns We Serve
          </h2>
          <p className="text-[var(--brand-steel)] leading-relaxed max-w-3xl">
            {serviceArea.towns.join(', ')}. Don&apos;t see your town? Call us anyway — we may
            still be able to help.
          </p>
        </div>
      </section>
    </main>
  )
}
