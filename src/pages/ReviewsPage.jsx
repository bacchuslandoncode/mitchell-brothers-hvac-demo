import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import Reviews from '../sections/Reviews'
import FinalCTA from '../sections/FinalCTA'

export default function ReviewsPage() {
  useEffect(() => {
    document.title = 'Reviews | Callahan Air Conditioning'
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title="Feedback from Callahan customers"
      />
      <Reviews />
      <FinalCTA />
    </>
  )
}
