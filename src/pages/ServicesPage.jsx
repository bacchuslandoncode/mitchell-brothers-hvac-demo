import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import Services from '../sections/Services'
import MaintenanceCTA from '../sections/MaintenanceCTA'
import FinalCTA from '../sections/FinalCTA'

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Services: AC Repair, Maintenance, Heating & Installation | Mitchell Brothers Heating And Cooling'
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="AC repair, maintenance, and system installation"
        subtitle="24-hour service for Tempe and East Valley homes, from emergency repairs to system installation."
      />
      <Services />
      <MaintenanceCTA />
      <FinalCTA />
    </>
  )
}
