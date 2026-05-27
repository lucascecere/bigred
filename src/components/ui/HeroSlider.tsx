"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'

const slides = [
  {
    src: '/images/team/crew-action.png',
    alt: 'Big Red Moving crew loading boxes onto their red truck',
  },
  {
    src: '/images/team/crew-group.jpg',
    alt: 'Andrew, Anthony, and Charles — the Big Red Moving team',
  },
  {
    src: '/images/team/owner-andrew.png',
    alt: 'Andrew Concannon, co-founder of Big Red Moving Company',
  },
  {
    src: '/images/team/owner-anthony.png',
    alt: 'Anthony Fabrizio, co-founder of Big Red Moving Company',
  },
  {
    src: '/images/team/owner-charles.png',
    alt: 'Charles Even, co-founder of Big Red Moving Company',
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
