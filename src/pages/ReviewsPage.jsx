import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import ReviewHighlights from '../sections/ReviewHighlights'
import FinalCTA from '../sections/FinalCTA'

export default function ReviewsPage() {
  useEffect(() => {
    document.title = 'Reviews | Mitchell Brothers Heating And Cooling'
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title="What Mitchell Brothers customers mention"
      />
      <ReviewHighlights />
      <FinalCTA />
    </>
  )
}
