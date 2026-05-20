import { siteContent } from '@content/site-content'

export function About() {
  const { about } = siteContent

  return (
    <section
      id="about"
      className="bg-[var(--brand-cream)] py-20 md:py-28 border-t-2 border-[var(--brand-black)]/10"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-[var(--brand-red)] text-sm font-bold uppercase tracking-[0.2em] mb-2">
              Our Story
            </p>
            <h2
              id="about-heading"
              className="font-display text-4xl md:text-5xl uppercase text-[var(--brand-black)] leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {about.heading}
            </h2>
            <p className="text-[var(--brand-steel)] text-base md:text-lg leading-relaxed mb-8">
              {about.body}
            </p>

            {/* Owner credit */}
            <div>
              <div className="h-0.5 w-12 bg-[var(--brand-gold)] mb-3" />
              <p className="font-bold text-[var(--brand-red)] text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                — {about.ownerName}
              </p>
              <p className="text-[var(--brand-steel)] text-sm uppercase tracking-wide mt-0.5">
                {about.ownerTitle}
              </p>
            </div>
          </div>

          {/* Right: photo placeholder */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-[var(--brand-charcoal)] border-2 border-[var(--brand-black)] shadow-[6px_6px_0_var(--brand-black)] aspect-[3/4] w-full max-w-xs rounded-[4px] flex items-center justify-center text-[var(--brand-steel)] text-sm text-center p-4">
              Photo of {about.ownerName} goes here
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
