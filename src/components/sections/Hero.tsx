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

          {/* Trust strip */}
          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-[var(--brand-gold)] text-sm uppercase tracking-[0.15em]">
            {hero.trustStrip.map((item, i) => (
              <span key={item} className="flex items-center gap-1.5">
                <StarIcon size={12} />
                {item}
                {i < hero.trustStrip.length - 1 && (
                  <span className="ml-3 opacity-40">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Right: box truck SVG illustration */}
        <div className="hidden md:flex items-center justify-center">
          <TruckIllustration />
        </div>
      </div>
    </section>
  )
}

function TruckIllustration() {
  return (
    <svg
      viewBox="0 0 400 260"
      width="400"
      height="260"
      aria-label="Big Red Moving truck"
      role="img"
      className="w-full max-w-md"
    >
      {/* Truck body (cargo box) */}
      <rect x="20" y="60" width="230" height="140" rx="4" fill="var(--brand-red)" />
      {/* Cargo box door detail */}
      <rect x="30" y="70" width="210" height="120" rx="2" fill="var(--brand-red-deep)" opacity="0.4" />
      {/* Horizontal stripe on box */}
      <rect x="20" y="155" width="230" height="12" fill="var(--brand-black)" opacity="0.3" />

      {/* Cab */}
      <rect x="250" y="100" width="120" height="100" rx="4" fill="var(--brand-red)" />
      {/* Cab roof curve */}
      <path d="M255 100 Q310 60 370 100" fill="var(--brand-red)" />
      {/* Windshield */}
      <path d="M265 100 Q310 70 365 100 L365 135 L265 135 Z" fill="#1a2a3a" opacity="0.7" rx="3" />
      {/* Door panel */}
      <rect x="255" y="138" width="110" height="55" rx="2" fill="var(--brand-red-deep)" opacity="0.2" />
      {/* Door window */}
      <rect x="270" y="145" width="60" height="35" rx="2" fill="#1a2a3a" opacity="0.5" />
      {/* Door handle */}
      <rect x="325" y="160" width="20" height="5" rx="2" fill="var(--brand-gold)" />

      {/* Front bumper */}
      <rect x="360" y="170" width="30" height="30" rx="2" fill="var(--brand-charcoal)" />
      {/* Headlight */}
      <rect x="363" y="173" width="18" height="10" rx="1" fill="var(--brand-gold)" opacity="0.8" />

      {/* Chassis / undercarriage */}
      <rect x="20" y="198" width="375" height="10" rx="2" fill="var(--brand-charcoal)" />

      {/* Wheels */}
      {/* Rear axle — two wheels (dual rear) */}
      <circle cx="90" cy="215" r="30" fill="var(--brand-charcoal)" />
      <circle cx="90" cy="215" r="20" fill="#2a2a2a" />
      <circle cx="90" cy="215" r="8" fill="var(--brand-steel)" />

      <circle cx="155" cy="215" r="30" fill="var(--brand-charcoal)" />
      <circle cx="155" cy="215" r="20" fill="#2a2a2a" />
      <circle cx="155" cy="215" r="8" fill="var(--brand-steel)" />

      {/* Front axle */}
      <circle cx="305" cy="215" r="28" fill="var(--brand-charcoal)" />
      <circle cx="305" cy="215" r="18" fill="#2a2a2a" />
      <circle cx="305" cy="215" r="7" fill="var(--brand-steel)" />

      {/* "BIG RED" text on truck side */}
      <text x="135" y="138" textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="28" fill="white" fontWeight="bold" letterSpacing="2">BIG RED</text>
    </svg>
  )
}
