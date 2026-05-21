"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1635108198322-18c814f9b70f?w=800&q=80&auto=format&fit=crop',
    alt: 'Cluttered garage full of tools and junk ready for cleanout',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1755742204274-14fce63e051a?w=800&q=80&auto=format&fit=crop',
    alt: 'Suburban South Shore neighborhood homes with garages',
  },
  {
    src: 'https://images.unsplash.com/photo-1647299852821-40401c0b0976?w=800&q=80&auto=format&fit=crop',
    alt: 'Packed garage filled with items ready for junk removal',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1732652605028-ab8c5d4bd403?w=800&q=80&auto=format&fit=crop',
    alt: 'Stacked cardboard boxes ready for hauling',
  },
  {
    src: 'https://images.unsplash.com/photo-1753911371922-fea40946a1af?w=800&q=80&auto=format&fit=crop',
    alt: 'Clean empty room after a full property cleanout',
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
