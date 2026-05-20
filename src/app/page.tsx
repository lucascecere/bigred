import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { WhyUs } from '@/components/sections/WhyUs'
import { ServiceArea } from '@/components/sections/ServiceArea'
import { FAQ } from '@/components/sections/FAQ'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <ServiceArea />
      <FAQ />
      <About />
      <Contact />
    </main>
  )
}
