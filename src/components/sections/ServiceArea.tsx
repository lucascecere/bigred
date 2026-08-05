import Link from 'next/link'
import { siteContent } from '@content/site-content'
import { getTownLinks } from '@content/location-pages'
import { StarIcon } from '@/components/ui/StarIcon'

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

        {/* Towns list — semantic <ul> for SEO. Each town links to whichever
            local pages exist for it, so no town page is left orphaned. */}
        <ul
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4 list-none mb-14"
          aria-label="Towns we serve"
        >
          {serviceArea.towns.map((town) => {
            const links = getTownLinks(town)
            return (
              <li key={town} className="flex items-start gap-2">
                <span className="text-[var(--brand-red)] shrink-0 mt-1">
                  <StarIcon size={12} />
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-[var(--brand-black)] font-semibold text-sm md:text-base">
                    {town}
                  </span>
                  <span className="flex flex-wrap gap-x-2 text-xs text-[var(--brand-steel)]">
                    {links.junkRemoval && (
                      <Link
                        href={`/${links.junkRemoval}`}
                        className="hover:text-[var(--brand-red)] transition-colors underline-offset-2 hover:underline"
                      >
                        Junk Removal
                      </Link>
                    )}
                    {links.junkRemoval && links.moving && (
                      <span aria-hidden="true" className="opacity-40">·</span>
                    )}
                    {links.moving && (
                      <Link
                        href={`/${links.moving}`}
                        className="hover:text-[var(--brand-red)] transition-colors underline-offset-2 hover:underline"
                      >
                        Moving
                      </Link>
                    )}
                  </span>
                </div>
              </li>
            )
          })}
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
