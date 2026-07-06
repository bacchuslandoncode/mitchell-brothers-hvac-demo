import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import FirstLoadOverlay from './FirstLoadOverlay'
import StickyCallBar from './StickyCallBar'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="app-shell" style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <FirstLoadOverlay />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyCallBar />

      <style>{`
        @media (max-width: 640px) {
          .app-shell { padding-bottom: calc(64px + env(safe-area-inset-bottom, 0px)); }
        }
      `}</style>
    </div>
  )
}
