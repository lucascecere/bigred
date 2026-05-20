import { siteContent } from '@content/site-content'
import { getFAQSchema } from '@/lib/schema'

export function FAQ() {
  return (
    <section
      id="faq"
      className="bg-[var(--brand-cream)] py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(siteContent.faq)) }}
      />

      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        {/* Section header */}
        <div className="mb-10 md:mb-14">
          <p className="text-[var(--brand-red)] text-sm font-bold uppercase tracking-[0.2em] mb-2">
            Common Questions
          </p>
          <h2
            id="faq-heading"
            className="font-display text-4xl md:text-5xl uppercase text-[var(--brand-black)] leading-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            FAQ
          </h2>
        </div>

        {/* FAQ items using details/summary — no JS needed */}
        <div className="space-y-4">
          {siteContent.faq.map((item, index) => (
            <details
              key={index}
              className="border-2 border-[var(--brand-black)] rounded-[4px] shadow-[3px_3px_0_var(--brand-black)] bg-white"
            >
              <summary className="cursor-pointer p-4 font-bold text-[var(--brand-black)] select-none list-none flex justify-between items-center gap-4 hover:bg-[var(--brand-cream)] transition-colors">
                <span>{item.question}</span>
                <span className="shrink-0 text-[var(--brand-red)] text-xl leading-none font-bold" aria-hidden="true">
                  <span className="faq-icon-open">+</span>
                  <span className="faq-icon-close">−</span>
                </span>
              </summary>
              <div className="px-4 pb-4 pt-2 text-[var(--brand-steel)] leading-relaxed border-t border-[var(--brand-black)]/10">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
