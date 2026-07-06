import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import ReviewHighlights from '../sections/ReviewHighlights'

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
    </>
  )
}
