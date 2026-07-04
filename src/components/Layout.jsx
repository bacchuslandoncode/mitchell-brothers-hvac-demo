import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import FirstLoadOverlay from './FirstLoadOverlay'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <FirstLoadOverlay />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
