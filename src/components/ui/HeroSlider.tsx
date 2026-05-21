"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1698917414969-feade59e3343?w=800&q=80&auto=format&fit=crop',
    alt: 'Big Red Moving crew unloading furniture from a moving truck',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1661409078904-42334551db0c?w=800&q=80&auto=format&fit=crop',
    alt: 'Moving boxes and furniture ready for a South Shore move',
  },
  {
    src: 'https://images.unsplash.com/photo-1714647211902-bb711d643a17?w=800&q=80&auto=format&fit=crop',
    alt: 'Movers loading a truck for a local South Shore move',
  },
  {
    src: 'https://images.unsplash.com/photo-1517478615425-ea923377dac7?w=800&q=80&auto=format&fit=crop',
    alt: 'Moving team handling large furniture on the South Shore',
  },
  {
    src: 'https://images.unsplash.com/photo-1601654717399-7486d5ebedca?w=800&q=80&auto=format&fit=crop',
    alt: 'Big Red Moving crew preparing for a residential move in Hingham MA',
  },
]

export function HeroSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative w-full max-w-lg aspect-[4/3] rounded-[4px] overflow-hidden border-4 border-[var(--brand-red)] shadow-[8px_8px_0_var(--brand-red-deep)]">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 512px"
          />
        </div>
      ))}
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[var(--brand-black)] opacity-20 z-10" aria-hidden="true" />
    </div>
  )
}
