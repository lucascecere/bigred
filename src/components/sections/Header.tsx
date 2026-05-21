import Image from 'next/image'
import { siteContent } from '@content/site-content'
import { PhoneCTA } from '@/components/ui/PhoneCTA'

export function Header() {
  return (
    <>
      {/* Main sticky header */}
      <header className="sticky top-0 z-50 bg-[var(--brand-black)] border-b-2 border-[var(--brand-red)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="/"
            className="flex flex-col leading-none shrink-0"
            aria-label="Big Red Moving Company — Home"
          >
            <Image
              src="/IMG_5595.png"
              alt="Big Red Moving Company — Hingham, MA"
              width={96}
              height={96}
              priority
              className="rounded-sm"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {siteContent.header.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white text-sm font-medium uppercase tracking-wide hover:text-[var(--brand-red)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <PhoneCTA
            href={siteContent.phone.href}
            variant="header"
            className="hidden md:inline-flex"
          >
            {/* Phone icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.15 3.44 2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/>
            </svg>
            {siteContent.phone.display}
          </PhoneCTA>
        </div>
      </header>

      {/* Mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--brand-red)] border-t-2 border-[var(--brand-black)] p-3">
        <a
          href={siteContent.phone.href}
          className="flex items-center justify-center gap-3 w-full text-white font-bold text-lg uppercase tracking-wide"
        >
          {/* Phone icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.15 3.44 2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/>
          </svg>
          Call {siteContent.phone.display}
        </a>
      </div>
    </>
  )
}
