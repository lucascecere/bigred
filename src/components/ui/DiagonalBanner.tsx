export function DiagonalBanner({ className }: { className?: string }) {
  return (
    <div
      className={`h-2 bg-[var(--brand-red)] w-full ${className ?? ''}`}
      style={{ transform: 'skewX(-12deg)', transformOrigin: 'left' }}
      aria-hidden="true"
    />
  )
}
