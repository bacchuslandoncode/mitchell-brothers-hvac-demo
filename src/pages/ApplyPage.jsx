import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import Apply from '../sections/Apply'

export default function ApplyPage() {
  useEffect(() => {
    document.title = 'Apply | Callahan Air Conditioning'
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Work with Callahan"
      />
      <Apply />
    </>
  )
}
