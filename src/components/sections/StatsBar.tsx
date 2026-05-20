import { siteContent } from '@content/site-content'

export function StatsBar() {
  return (
    <section className="bg-[var(--brand-red)] border-y-2 border-[var(--brand-red-deep)]" aria-label="Company stats">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y-2 md:divide-y-0 md:divide-x-2 divide-white/20">
          {siteContent.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center text-center py-2 md:py-0 px-4">
              <span
                className="text-4xl md:text-5xl font-bold text-white leading-none mb-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {stat.value}
              </span>
              <span className="text-white/80 text-sm uppercase tracking-widest font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
