import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import ServiceArea from '../sections/ServiceArea'
import FinalCTA from '../sections/FinalCTA'

export default function ServiceAreaPage() {
  useEffect(() => {
    document.title = 'Service Area | Callahan Air Conditioning'
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Service Area"
        title="Where Callahan works"
      />
      <ServiceArea />
      <FinalCTA />
    </>
  )
}
