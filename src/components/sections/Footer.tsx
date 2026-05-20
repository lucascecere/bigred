import { siteContent } from '@content/site-content'
import { StarIcon } from '@/components/ui/StarIcon'

export function Footer() {
  const { footer, phone, email, serviceArea } = siteContent

  return (
    <footer className="bg-[var(--brand-black)] border-t-4 border-[var(--brand-red)] pt-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10">
          {/* Column 1: NAP */}
          <div>
            {/* Logo */}
            <div className="mb-4">
              <span
                className="font-display text-2xl text-[var(--brand-red)] uppercase tracking-tight leading-none block"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                BIG RED MOVING
              </span>
              <span className="text-[var(--brand-gold)] text-xs uppercase tracking-[0.2em] font-bold block mt-0.5">
                HINGHAM, MA
              </span>
            </div>

            <p className="text-[var(--brand-cream)] text-sm opacity-70 mb-4 leading-relaxed">
              {footer.tagline}
            </p>

            {/* NAP — microformat address element */}
            <address className="not-italic text-[var(--brand-cream)] text-sm space-y-1 opacity-80">
              <p className="font-semibold text-white">Big Red Moving Company</p>
              <p>
                {footer.address.city}, {footer.address.state} {footer.address.zip}
              </p>
              <p>
                <a
                  href={phone.href}
                  className="hover:text-[var(--brand-red)] transition-colors"
                >
                  {phone.display}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-[var(--brand-red)] transition-colors"
                >
                  {email}
                </a>
              </p>
            </address>
          </div>

          {/* Column 2: Service area */}
          <div>
            <h3
              className="font-display text-base uppercase text-white tracking-wide mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Service Area
            </h3>
            <ul className="list-none space-y-1.5">
              {serviceArea.towns.map((town) => (
                <li key={town} className="flex items-center gap-2">
                  <span className="text-[var(--brand-red)] shrink-0">
                    <StarIcon size={10} />
                  </span>
                  <a
                    href="#service-area"
                    className="text-[var(--brand-cream)] text-sm opacity-70 hover:opacity-100 hover:text-[var(--brand-red)] transition-colors"
                  >
                    {town}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: License + links */}
          <div>
            <h3
              className="font-display text-base uppercase text-white tracking-wide mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Legal & Info
            </h3>
            <div className="space-y-3 text-[var(--brand-cream)] text-sm opacity-70">
              <p>{footer.license}</p>
              <ul className="list-none space-y-2">
                <li>
                  <a href="#services" className="hover:text-[var(--brand-red)] transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[var(--brand-red)] transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[var(--brand-red)] transition-colors">
                    Get a Quote
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[var(--brand-cream)] text-xs opacity-50">
          <p>{footer.copyright}</p>
          <p>
            <a
              href={footer.creditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              {footer.credit}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
