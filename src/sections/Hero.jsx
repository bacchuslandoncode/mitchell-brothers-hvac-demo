import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CallNowButton } from '../components/Nav'
import heroPhoto from '../assets/photos/modern-room-wall-ac.webp'

const badges = [
  { label: 'Open 24 Hours', icon: 'clock' },
  { label: 'Tempe & East Valley', icon: 'pin' },
  { label: 'Upfront Pricing', icon: 'check' },
]

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
      {/* Fine cool-cyan hairline grid — architectural/trade motif, not a photo backdrop */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(94,215,229,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(94,215,229,0.6) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />
      {/* Icy radial glow, upper-left — cooling relief against the graphite */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 55% at 12% 0%, rgba(94,215,229,0.16) 0%, transparent 55%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: 'calc(var(--max-w) + var(--gutter) * 2)',
        margin: '0 auto',
        padding: '132px var(--gutter) 72px',
      }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '56px', alignItems: 'center' }}>

          {/* Left: content column */}
          <div>
            {/* Eyebrow */}
            <motion.div {...rise(0.05)} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
              <div style={{ width: '32px', height: '1px', background: 'var(--accent-light)', flexShrink: 0 }} />
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.24em',
                textTransform: 'uppercase', color: 'var(--accent-light)',
              }}>Tempe, AZ · Open 24 Hours</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 {...rise(0.12, 34)} className="hero-h1" style={{
              fontFamily: 'var(--font-display)', fontWeight: 600,
              fontSize: 'clamp(32px, 4.2vw, 58px)', lineHeight: 1.1,
              letterSpacing: '-0.01em', color: 'var(--text)',
              marginBottom: '24px',
            }}>
              Heating and cooling done right, <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--accent-light)' }}>day or night.</em>
            </motion.h1>

            {/* Subtext */}
            <motion.p {...rise(0.22)} style={{
              fontFamily: 'var(--font-body)', fontSize: '17px', fontWeight: 400,
              lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: '36px', maxWidth: '46ch',
            }}>
              Mitchell Brothers Heating And Cooling is a Tempe-based HVAC contractor open 24 hours
              a day. Honest diagnostics, clear repair options, and reliable workmanship for East
              Valley homes.
            </motion.p>

            {/* CTAs */}
            <motion.div {...rise(0.32)} style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <CallNowButton />
              <ScheduleButton />
            </motion.div>

            {/* Trust badges */}
            <motion.div {...rise(0.42)} style={{
              display: 'flex', gap: '14px', flexWrap: 'wrap',
            }}>
              {badges.map(b => (
                <div key={b.label} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '10px 16px', borderRadius: '3px',
                  border: '1px solid rgba(168,190,194,0.28)',
                }}>
                  <BadgeIcon kind={b.icon} />
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.06em',
                    textTransform: 'uppercase', color: 'var(--text-dim)',
                  }}>{b.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: framed image card — contained, not full-bleed */}
          <motion.div
            className="hero-image-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              aspectRatio: '4 / 5',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid rgba(94,215,229,0.3)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
            }}
          >
            <img
              src={heroPhoto}
              alt="Newly installed modern wall-mounted mini-split AC unit"
              fetchPriority="high"
              decoding="async"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(32,42,46,0) 55%, rgba(32,42,46,0.75) 100%)',
              pointerEvents: 'none',
            }} />
            {/* Emergency-service ribbon — stands out through border weight, a bold
                label, and a pulsing dot rather than a separate "hot" color */}
            <div style={{
              position: 'absolute', top: '18px', left: '18px',
              display: 'flex', alignItems: 'center', gap: '8px',
              background: 'rgba(32,42,46,0.85)', backdropFilter: 'blur(6px)',
              border: '1.5px solid var(--urgency-light)', borderRadius: '999px',
              padding: '8px 14px',
              boxShadow: '0 0 0 3px rgba(94,215,229,0.16)',
            }}>
              <span className="ribbon-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--urgency-light)', flexShrink: 0 }} />
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: '#F8F5EF',
              }}>24-Hour Emergency Service</span>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .hero-image-col { aspect-ratio: 16 / 10 !important; order: -1; }
        }
        .ribbon-dot { animation: ribbon-pulse 2s ease-in-out infinite; }
        @keyframes ribbon-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.55; transform: scale(0.85); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ribbon-dot { animation: none; }
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
      color: 'var(--text)', border: '1px solid rgba(168,190,194,0.4)',
      padding: '15px 24px', borderRadius: '2px', textDecoration: 'none',
      transition: 'border-color 0.2s ease, background 0.2s ease',
    }}
    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,190,194,0.08)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(168,190,194,0.4)' }}
    >
      Schedule Service
    </Link>
  )
}

function BadgeIcon({ kind }) {
  const common = { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'var(--accent-light)', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' }
  const paths = {
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    pin:   <><path d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.9 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.2" /></>,
    check: <path d="M4 12.5l5 5L20 6" />,
  }
  return <svg {...common} style={{ flexShrink: 0 }}>{paths[kind]}</svg>
}
