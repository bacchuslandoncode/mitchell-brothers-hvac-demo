import { useEffect } from 'react'
import PhoenixHeat from '../sections/PhoenixHeat'
import WhyCallahan from '../sections/WhyCallahan'
import Process from '../sections/Process'
import FinalCTA from '../sections/FinalCTA'

export default function WhyCallahanPage() {
  useEffect(() => {
    document.title = 'Why Callahan | Callahan Air Conditioning'
  }, [])

  return (
    <>
      <PhoenixHeat />
      <WhyCallahan />
      <Process />
      <FinalCTA />
    </>
  )
}
