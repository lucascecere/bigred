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
            <div className="text-base md:text-lg mb-8">
              {about.body.split('\n\n').map((para, i) => (
                <p key={i} className="text-[var(--brand-steel)] leading-relaxed mt-4 first:mt-0">
                  {para}
                </p>
              ))}
            </div>

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
            <div className="bg-[var(--brand-charcoal)] aspect-[3/4] w-full max-w-xs rounded-[4px] border-2 border-[var(--brand-red)] shadow-[6px_6px_0_var(--brand-red-deep)] flex flex-col items-center justify-center gap-4 p-6">
              {/* Truck icon */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <rect x="4" y="20" width="36" height="28" rx="2" fill="#C8102E"/>
                <rect x="40" y="28" width="20" height="20" rx="2" fill="#C8102E"/>
                <polygon points="40,28 56,28 60,36 40,36" fill="#8B0A1F"/>
                <circle cx="16" cy="50" r="6" fill="#1A1A1A" stroke="#C8102E" strokeWidth="2"/>
                <circle cx="48" cy="50" r="6" fill="#1A1A1A" stroke="#C8102E" strokeWidth="2"/>
                <rect x="8" y="24" width="20" height="14" rx="1" fill="#F8F5F0" opacity="0.15"/>
              </svg>
              <p className="text-[var(--brand-cream)] text-sm text-center opacity-60 leading-snug">
                Owner photo<br/>coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
