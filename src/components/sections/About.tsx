import Image from 'next/image'
import { siteContent } from '@content/site-content'

export function About() {
  const { about } = siteContent

  return (
    <section
      id="about"
      className="bg-[var(--brand-cream)] py-20 md:py-28 border-t-2 border-[var(--brand-black)]/10"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
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

          {/* Right: team photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-xs aspect-[3/4] rounded-[4px] overflow-hidden border-4 border-[var(--brand-red)] shadow-[8px_8px_0_var(--brand-red-deep)]">
              <Image
                src="https://images.unsplash.com/photo-1601654717399-7486d5ebedca?w=600&q=80&auto=format&fit=crop"
                alt="The Big Red Moving Company crew"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
