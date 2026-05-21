import Link from 'next/link'
import { siteContent } from '@content/site-content'
import { StarIcon } from '@/components/ui/StarIcon'

const priorityTownLinks: Record<string, string> = {
  Hingham: '/moving-company-hingham-ma',
  Quincy: '/moving-company-quincy-ma',
  Weymouth: '/moving-company-weymouth-ma',
  Braintree: '/moving-company-braintree-ma',
  Scituate: '/moving-company-scituate-ma',
  Marshfield: '/moving-company-marshfield-ma',
  Duxbury: '/moving-company-duxbury-ma',
  Norwell: '/moving-company-norwell-ma',
}

export function ServiceArea() {
  const { serviceArea } = siteContent

  return (
    <section
      id="service-area"
      className="bg-white py-20 md:py-28"
      aria-labelledby="service-area-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Section header */}
        <div className="mb-10 md:mb-14">
          <p className="text-[var(--brand-red)] text-sm font-bold uppercase tracking-[0.2em] mb-2">
            Where We Work
          </p>
          <h2
            id="service-area-heading"
            className="font-display text-4xl md:text-5xl uppercase text-[var(--brand-black)] leading-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {serviceArea.heading}
          </h2>
          <p className="mt-4 text-[var(--brand-steel)] text-lg max-w-2xl">
            {serviceArea.subhead}
          </p>
        </div>

        {/* Towns list — semantic <ul> for SEO */}
        <ul
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 list-none mb-14"
          aria-label="Towns we serve"
        >
          {serviceArea.towns.map((town) => (
            <li key={town} className="flex items-center gap-2">
              <span className="text-[var(--brand-red)] shrink-0">
                <StarIcon size={12} />
              </span>
              {priorityTownLinks[town] ? (
                <Link
                  href={priorityTownLinks[town]}
                  className="text-[var(--brand-black)] font-medium text-sm md:text-base hover:text-[var(--brand-red)] transition-colors underline-offset-2 hover:underline"
                >
                  {town}
                </Link>
              ) : (
                <span className="text-[var(--brand-black)] font-medium text-sm md:text-base">
                  {town}
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* SEO copy clusters */}
        <div className="max-w-3xl space-y-5">
          {serviceArea.clusters.map((cluster) => (
            <p
              key={cluster.name}
              className="text-[var(--brand-steel)] leading-relaxed"
            >
              {cluster.body}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
