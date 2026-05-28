import { siteContent } from '@content/site-content'
import { StarIcon } from '@/components/ui/StarIcon'

export function Testimonials() {
  const doubled = [...siteContent.testimonials, ...siteContent.testimonials]

  return (
    <section className="bg-[var(--brand-charcoal)] py-20" aria-labelledby="testimonials-heading">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 mb-12 text-center">
        <p className="text-[var(--brand-red)] text-sm uppercase tracking-[0.2em] font-bold mb-3">
          What Our Customers Say
        </p>
        <h2
          id="testimonials-heading"
          className="text-4xl md:text-5xl uppercase text-white"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          South Shore Families Trust Big Red
        </h2>
      </div>

      {/* Marquee — edge-faded, pauses on hover */}
      <div
        className="overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div
          className="marquee-track flex gap-6 w-max px-6"
          style={{ animation: 'marquee-scroll 48s linear infinite' }}
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-80 shrink-0 bg-[var(--brand-black)] border-2 border-white/10 rounded-[4px] p-6 flex flex-col gap-4 shadow-[4px_4px_0_var(--brand-red-deep)]"
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label={`${t.stars} out of 5 stars`}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-[var(--brand-gold)]">
                    <StarIcon size={18} />
                  </span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[var(--brand-cream)] text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <p className="text-white font-bold text-sm">{t.author}</p>
                  <p className="text-[var(--brand-cream)] text-xs opacity-60">{t.town}</p>
                </div>
                <span className="text-xs text-white/40 uppercase tracking-wider font-semibold">Google Review</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
