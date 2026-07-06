import { Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import './index.css'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import WhyMitchellBrothersPage from './pages/WhyMitchellBrothersPage'
import ReviewsPage from './pages/ReviewsPage'
import ServiceAreaPage from './pages/ServiceAreaPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/why-us" element={<WhyMitchellBrothersPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/service-area" element={<ServiceAreaPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </MotionConfig>
  )
}
