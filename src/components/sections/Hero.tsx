import Image from 'next/image'
import { siteContent } from '@content/site-content'
import { PhoneCTA } from '@/components/ui/PhoneCTA'
import { StarIcon } from '@/components/ui/StarIcon'

export function Hero() {
  const { hero, phone } = siteContent

  return (
    <section
      id="top"
      className="relative bg-[var(--brand-black)] grain-overlay overflow-hidden min-h-[80vh] flex items-center"
      aria-label="Hero"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left: text */}
        <div>
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-none tracking-tight text-white animate-headline"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            HINGHAM&apos;S
            <br />
            MOVING
            <br />
            COMPANY.
          </h1>

          <p className="mt-6 text-[var(--brand-cream)] text-lg md:text-xl max-w-lg">
            {hero.subhead}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={hero.ctaPrimary.href}
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--brand-red)] text-white font-bold uppercase tracking-wider border-2 border-[var(--brand-black)] shadow-[6px_6px_0_var(--brand-black)] hover:bg-[var(--brand-red-deep)] transition-colors text-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {hero.ctaPrimary.label}
            </a>
            <PhoneCTA variant="hero" href={phone.href}>
              Call {phone.display}
            </PhoneCTA>
          </div>

          {/* Trust strip — scrollable on mobile, wrap on desktop */}
          <div className="mt-8">
            {/* Mobile: horizontal scroll slider */}
            <div className="md:hidden overflow-x-auto scrollbar-hide -mx-5 px-5">
              <div className="flex gap-5 pb-1 w-max">
                {siteContent.hero.trustStrip.map((item) => (
                  <span key={item} className="flex items-center gap-1.5 shrink-0 text-[var(--brand-gold)] text-sm uppercase tracking-[0.12em] font-semibold">
                    <StarIcon size={11} />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Desktop: flex wrap */}
            <div className="hidden md:flex flex-wrap gap-x-4 gap-y-2 text-[var(--brand-gold)] text-sm uppercase tracking-[0.15em]">
              {siteContent.hero.trustStrip.map((item, i) => (
                <span key={item} className="flex items-center gap-1.5">
                  <StarIcon size={12} />
                  {item}
                  {i < siteContent.hero.trustStrip.length - 1 && (
                    <span className="ml-2 opacity-40" aria-hidden="true">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: moving photo */}
        <div className="hidden md:flex items-center justify-center relative">
          <div className="relative w-full max-w-lg aspect-[4/3] rounded-[4px] overflow-hidden border-4 border-[var(--brand-red)] shadow-[8px_8px_0_var(--brand-red-deep)]">
            <Image
              src="https://images.unsplash.com/photo-1698917414969-feade59e3343?w=800&q=80&auto=format&fit=crop"
              alt="Big Red Moving crew unloading furniture from a moving truck"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-[var(--brand-black)] opacity-20" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
