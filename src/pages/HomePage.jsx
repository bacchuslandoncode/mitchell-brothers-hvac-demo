import { useEffect } from 'react'
import Hero from '../sections/Hero'
import EmergencyStrip from '../sections/EmergencyStrip'
import ReviewHighlights from '../sections/ReviewHighlights'
import ServiceScenarios from '../sections/ServiceScenarios'
import FinalCTA from '../sections/FinalCTA'

export default function HomePage() {
  useEffect(() => {
    document.title = 'Mitchell Brothers Heating And Cooling: 24-Hour HVAC Service in Tempe, AZ (Demo Concept)'
  }, [])

  return (
    <>
      <Hero />
      <EmergencyStrip />
      <ReviewHighlights />
      <ServiceScenarios />
      <FinalCTA />
    </>
  )
}
