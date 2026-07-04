import { useEffect } from 'react'
import DesertHeat from '../sections/DesertHeat'
import WhyMitchellBrothers from '../sections/WhyMitchellBrothers'
import Process from '../sections/Process'
import FinalCTA from '../sections/FinalCTA'

export default function WhyMitchellBrothersPage() {
  useEffect(() => {
    document.title = 'Why Mitchell Brothers | Mitchell Brothers Heating And Cooling'
  }, [])

  return (
    <>
      <DesertHeat />
      <WhyMitchellBrothers />
      <Process />
      <FinalCTA />
    </>
  )
}
