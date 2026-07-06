import { useEffect } from 'react'
import Hero from '../sections/Hero'
import TrustStrip from '../components/TrustStrip'
import EmergencyStrip from '../sections/EmergencyStrip'
import ReviewHighlights from '../sections/ReviewHighlights'
import ServiceScenarios from '../sections/ServiceScenarios'
import FAQ from '../sections/FAQ'
import FinalCTA from '../sections/FinalCTA'

export default function HomePage() {
  useEffect(() => {
    document.title = 'Mitchell Brothers Heating And Cooling | 24-Hour HVAC Service in Tempe, AZ'
  }, [])

  return (
    <>
      <Hero />
      <TrustStrip />
      <EmergencyStrip />
      <ReviewHighlights />
      <ServiceScenarios />
      <FAQ />
      <FinalCTA />
    </>
  )
}
