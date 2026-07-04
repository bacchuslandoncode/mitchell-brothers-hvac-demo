import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CallNowButton } from '../components/Nav'
import heroPhoto from '../assets/photos/ac-widescape.webp'

const badges = ['Same-Day Appointments', 'Upfront Pricing', 'Local Phoenix Team']

const rise = (delay, y = 26) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section id="top" className="section-dark" style={{
      position: 'relative',
      width: '100%',
      minHeight: '92svh',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      background: 'var(--bg)',
    }}>
      {/* ── Full-bleed hero visual — wide AC/HVAC landscape shot ── */}
      <img
        src={heroPhoto}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: '65% 30%',
          pointerEvents: 'none',
        }}
      />

      {/* Left-to-right scrim — keeps the headline column legible over the photo */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(7,17,31,0.95) 0%, rgba(7,17,31,0.85) 32%, rgba(7,17,31,0.6) 52%, rgba(7,17,31,0.32) 74%, rgba(7,17,31,0.18) 100%)',
        pointerEvents: 'none',
      }} />
      {/* Icy glow tint */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 60% at 78% 8%, rgba(56,189,248,0.20) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 15% 90%, rgba(0,168,232,0.14) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      {/* Top/bottom vignette — nav clearance and footer-strip legibility */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(7,17,31,0.3) 0%, transparent 22%, transparent 70%, rgba(7,17,31,0.8) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Cool glow motif */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute', top: '-120px', right: '-80px',
          width: '460px', height: '460px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56,189,248,0.28) 0%, rgba(56,189,248,0.05) 60%, transparent 75%)',
          filter: 'blur(2px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: 'calc(var(--max-w) + var(--gutter) * 2)',
        margin: '0 auto',
        padding: '100px var(--gutter) 56px',
      }}>
        <div style={{ maxWidth: 'min(600px, 54%)' }} className="hero-content-col">

          {/* Eyebrow */}
          <motion.div {...rise(0.05)} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--urgency-light)', flexShrink: 0 }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.24em',
              textTransform: 'uppercase', color: 'var(--urgency-light)',
            }}>Phoenix, AZ · Same-Day Service</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 {...rise(0.12, 34)} className="hero-h1" style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(34px, 4.6vw, 62px)', lineHeight: 1.06,
            letterSpacing: '-0.025em', color: 'var(--text)',
            marginBottom: '24px',
          }}>
            Same-Day AC Repair when Phoenix heat <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--urgency-light)' }}>won't wait.</em>
          </motion.h1>

          {/* Subtext */}
          <motion.p {...rise(0.22)} style={{
            fontFamily: 'var(--font-body)', fontSize: '17px', fontWeight: 400,
            lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: '36px',
          }}>
            Triple-digit days push AC systems past their limit fast. Our techs get to Valley homes
            same-day, find the problem, and get your cooling back before it turns into a bigger emergency.
          </motion.p>

          {/* CTAs */}
          <motion.div {...rise(0.32)} style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap', marginBottom: '36px' }}>
            <CallNowButton />
            <ScheduleButton />
          </motion.div>

          {/* Trust badges — framed as a supporting strip so the left column carries more visual weight */}
          <motion.div {...rise(0.42)} style={{
            display: 'flex', gap: '24px', flexWrap: 'wrap',
            paddingTop: '22px', borderTop: '1px solid rgba(175,195,210,0.18)',
          }}>
            {badges.map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                <CheckDot />
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: 'var(--text-dim)',
                }}>{b}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-h1 { letter-spacing: -0.02em !important; }
        }
        @media (max-width: 900px) {
          .hero-content-col { max-width: 100% !important; }
        }
      `}</style>
    </section>
  )
}

function ScheduleButton() {
  return (
    <Link to="/contact" style={{
      fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.1em',
      textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '10px',
      color: 'var(--text)', border: '1px solid rgba(175,195,210,0.4)',
      padding: '15px 24px', borderRadius: '2px', textDecoration: 'none',
      transition: 'border-color 0.2s ease, background 0.2s ease',
    }}
    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(175,195,210,0.08)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(175,195,210,0.4)' }}
    >
      Schedule Service
    </Link>
  )
}

function CheckDot() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="7" fill="var(--accent)" fillOpacity="0.16" />
      <path d="M4 7.2L6.1 9.3L10 5" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
