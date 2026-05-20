import { Hero } from '@/components/sections/Hero'
import { StatsBar } from '@/components/sections/StatsBar'
import { Services } from '@/components/sections/Services'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { WhyUs } from '@/components/sections/WhyUs'
import { Testimonials } from '@/components/sections/Testimonials'
import { ServiceArea } from '@/components/sections/ServiceArea'
import { FAQ } from '@/components/sections/FAQ'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <ServiceArea />
      <FAQ />
      <About />
      <Contact />
    </main>
  )
}
