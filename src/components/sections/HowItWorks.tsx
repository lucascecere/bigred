import { siteContent } from '@content/site-content'

export function HowItWorks() {
  return (
    <section className="bg-[var(--brand-cream)] py-20 px-5 sm:px-6" id="how-it-works" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto">
        <h2
          id="how-it-works-heading"
          className="text-center text-4xl md:text-5xl uppercase text-[var(--brand-black)] mb-16"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {siteContent.process.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {siteContent.process.steps.map((step) => (
            <div key={step.step} className="relative flex flex-col items-center text-center md:items-start md:text-left">
              {/* Step number circle */}
              <div
                className="w-20 h-20 rounded-full bg-[var(--brand-red)] border-4 border-[var(--brand-red-deep)] flex items-center justify-center mb-6 shrink-0 shadow-[4px_4px_0_var(--brand-red-deep)] z-10"
              >
                <span
                  className="text-white text-3xl font-bold leading-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.step}
                </span>
              </div>

              <h3
                className="text-xl uppercase text-[var(--brand-black)] mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {step.title}
              </h3>
              <p className="text-[var(--brand-steel)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
