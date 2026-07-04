import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import Apply from '../sections/Apply'

export default function ApplyPage() {
  useEffect(() => {
    document.title = 'Apply | Mitchell Brothers Heating And Cooling'
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Work with Mitchell Brothers"
      />
      <Apply />
    </>
  )
}
