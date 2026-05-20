import { siteContent } from '@content/site-content'
import { DiagonalBanner } from '@/components/ui/DiagonalBanner'

// Inline SVG icons per service — no lucide-react
function HomeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function PackageIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m7.5 4.27 9 5.15"/>
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
      <path d="m3.3 7 8.7 5 8.7-5"/>
      <path d="M12 22V12"/>
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/>
      <rect width="7" height="7" x="14" y="12" rx="1"/>
      <path d="M16 12V7a1 1 0 0 1 1-1h2.33a1 1 0 0 1 .77.36l2.67 3.14a1 1 0 0 1 .23.64V17a1 1 0 0 1-1 1h-1"/>
      <circle cx="7" cy="17" r="2"/>
      <circle cx="17" cy="17" r="2"/>
    </svg>
  )
}

const serviceIcons: Record<string, React.ReactNode> = {
  'home': <HomeIcon />,
  'map-pin': <MapPinIcon />,
  'package': <PackageIcon />,
  'truck': <TruckIcon />,
}

export function Services() {
  return (
    <section
      id="services"
      className="bg-[var(--brand-cream)] py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="text-[var(--brand-red)] text-sm font-bold uppercase tracking-[0.2em] mb-2">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="font-display text-4xl md:text-5xl uppercase text-[var(--brand-black)] leading-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Services
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.services.map((service) => (
            <article
              key={service.id}
              className="bg-white border-2 border-[var(--brand-black)] shadow-[6px_6px_0_var(--brand-black)] rounded-[4px] overflow-hidden flex flex-col"
            >
              <DiagonalBanner />
              <div className="p-6 flex flex-col flex-1">
                <div className="w-10 h-10 flex items-center justify-center bg-[var(--brand-red)] text-white rounded-[4px] mb-4 shrink-0">
                  {serviceIcons[service.icon] ?? <TruckIcon />}
                </div>
                <h3
                  className="font-display text-xl uppercase text-[var(--brand-black)] leading-tight mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {service.title}
                </h3>
                <p className="text-[var(--brand-steel)] text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
