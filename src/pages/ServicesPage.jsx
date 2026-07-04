import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import EmergencyStrip from '../sections/EmergencyStrip'
import Services from '../sections/Services'
import MaintenanceCTA from '../sections/MaintenanceCTA'
import FinalCTA from '../sections/FinalCTA'

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Services: AC Repair, Installation, and Maintenance | Callahan Air Conditioning'
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="AC repair, installation, and maintenance"
        subtitle="Same-day service for Phoenix homes, from emergency repairs to seasonal tune-ups."
      />
      <EmergencyStrip />
      <Services />
      <MaintenanceCTA />
      <FinalCTA />
    </>
  )
}
