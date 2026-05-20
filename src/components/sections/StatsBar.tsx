import { siteContent } from '@content/site-content'

export function StatsBar() {
  const items = [...siteContent.stats, ...siteContent.stats]

  return (
    <section
      className="bg-[var(--brand-red)] border-y-2 border-[var(--brand-red-deep)] overflow-hidden"
      aria-label="Company stats"
    >
      <div
        className="flex py-6 w-max"
        style={{ animation: 'marquee-scroll 28s linear infinite' }}
      >
        {items.map((stat, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-10 shrink-0"
          >
            {/* Star divider */}
            <span className="text-white/40 text-lg select-none" aria-hidden="true">★</span>
            {/* Stat value */}
            <span
              className="text-white font-bold text-2xl leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {stat.value}
            </span>
            {/* Stat label */}
            <span className="text-white/80 text-sm uppercase tracking-widest font-semibold">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
