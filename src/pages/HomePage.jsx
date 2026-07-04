import { useEffect } from 'react'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import FinalCTA from '../sections/FinalCTA'

export default function HomePage() {
  useEffect(() => {
    document.title = 'Callahan Air Conditioning: Same-Day AC Repair in Phoenix, AZ (Redesign Concept)'
  }, [])

  return (
    <>
      <Hero />
      <Projects />
      <FinalCTA />
    </>
  )
}
