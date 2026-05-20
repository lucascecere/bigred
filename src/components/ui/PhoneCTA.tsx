interface PhoneCTAProps {
  href: string
  children: React.ReactNode
  variant?: 'header' | 'hero' | 'contact'
  className?: string
}

export function PhoneCTA({ href, children, variant = 'header', className }: PhoneCTAProps) {
  const variantClasses = {
    header:
      'inline-flex items-center gap-2 px-4 py-2 bg-[var(--brand-red)] text-white text-sm font-bold border-2 border-[var(--brand-black)] shadow-[3px_3px_0_var(--brand-black)] uppercase tracking-wide hover:bg-[var(--brand-red-deep)] transition-colors',
    hero:
      'inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-[var(--brand-red)] transition-colors',
    contact:
      'block w-full text-center px-6 py-4 bg-[var(--brand-red)] text-white text-2xl font-bold border-2 border-[var(--brand-black)] shadow-[4px_4px_0_var(--brand-black)] hover:bg-[var(--brand-red-deep)] transition-colors',
  }

  return (
    <a
      href={href}
      className={`${variantClasses[variant]} ${className ?? ''}`}
    >
      {children}
    </a>
  )
}
