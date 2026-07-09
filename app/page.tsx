import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Journey } from '@/components/journey'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main className="relative">
      <SiteNav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Journey />
      <Contact />
    </main>
  )
}
