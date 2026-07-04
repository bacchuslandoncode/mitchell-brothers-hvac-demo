import { useState, useEffect } from 'react'

export default function FirstLoadOverlay() {
  // Lazy initializer runs once before first paint — safe for sessionStorage/matchMedia
  const [phase, setPhase] = useState(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const played = sessionStorage.getItem('callahan-intro-played')
    if (played || prefersReduced) return 'done'
    sessionStorage.setItem('callahan-intro-played', '1')
    return 'visible'
  })

  useEffect(() => {
    // Skip timers when animation was suppressed by the initializer
    if (phase !== 'visible') return

    const fadeTimer = setTimeout(() => setPhase('fading'), 120)
    const doneTimer = setTimeout(() => setPhase('done'), 900)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (phase === 'done') return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: '#07111F',
        pointerEvents: 'none',
        opacity: phase === 'fading' ? 0 : 1,
        transition: phase === 'fading' ? 'opacity 0.78s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
      }}
    />
  )
}
