import { siteContent } from '@content/site-content'
import { StarIcon } from '@/components/ui/StarIcon'

export function WhyUs() {
  return (
    <section
      className="bg-[var(--brand-charcoal)] py-20 md:py-28"
      aria-labelledby="whyus-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="text-[var(--brand-gold)] text-sm font-bold uppercase tracking-[0.2em] mb-2">
            The Difference
          </p>
          <h2
            id="whyus-heading"
            className="font-display text-4xl md:text-5xl uppercase text-white leading-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Why Big Red
          </h2>
        </div>

        {/* 4-up grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteContent.whyUs.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div className="text-[var(--brand-red)] mb-3">
                <StarIcon size={24} />
              </div>
              <h3
                className="font-display text-xl uppercase text-white leading-tight mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {item.title}
              </h3>
              <p className="text-[var(--brand-cream)] text-sm leading-relaxed opacity-80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
