import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import WhatCustomersCareAbout from '../sections/WhatCustomersCareAbout'
import ServiceCallFeel from '../sections/ServiceCallFeel'
import TempeComfort from '../sections/TempeComfort'

export default function WhyMitchellBrothersPage() {
  useEffect(() => {
    document.title = 'Why Mitchell Brothers | Mitchell Brothers Heating And Cooling'
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Why Mitchell Brothers"
        title="Built for urgent HVAC calls in Tempe."
        subtitle="Mitchell Brothers Heating And Cooling is reachable 24 hours a day for heating and cooling help, from a quick question to an emergency repair."
      />
      <WhatCustomersCareAbout />
      <ServiceCallFeel />
      <TempeComfort />
    </>
  )
}
