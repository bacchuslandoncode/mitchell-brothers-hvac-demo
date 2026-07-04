import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { CallNowButton, BrandMark } from '../components/Nav'
import maintenancePhoto from '../assets/photos/maintenance-tuneup.webp'

export default function FinalCTA() {
  return (
    <section className="section-dark" style={{ position: 'relative', background: 'var(--bg)', overflow: 'hidden' }}>
      {/* Background texture — visible HVAC/tools photo, tinted with a warm charcoal wash */}
      <img
        src={maintenancePhoto}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.28, pointerEvents: 'none',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(27,24,21,0.68) 0%, rgba(27,24,21,0.76) 50%, rgba(27,24,21,0.7) 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(160deg, rgba(85,58,26,0.35) 0%, transparent 45%, rgba(85,58,26,0.28) 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 70% at 50% 0%, rgba(216,152,92,0.2) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '108px var(--gutter)', position: 'relative', textAlign: 'center' }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
            <BrandMark size={64} />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: 1.1,
            letterSpacing: '-0.01em', color: 'var(--text)', margin: '0 auto 20px', maxWidth: '16ch',
          }}>
            Need heating or cooling help today?
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '18px', lineHeight: 1.7,
            color: 'var(--text-muted)', maxWidth: '48ch', margin: '0 auto 40px',
          }}>
            Open 24 hours across Tempe and the East Valley. Call now or schedule a visit online.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px', flexWrap: 'wrap' }}>
            <CallNowButton />
            <Link to="/contact" style={{
              fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.1em',
              textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '10px',
              color: 'var(--text)', border: '1px solid rgba(185,172,154,0.4)',
              padding: '15px 24px', borderRadius: '2px', textDecoration: 'none',
              transition: 'border-color 0.2s ease, background 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(185,172,154,0.08)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(185,172,154,0.4)' }}
            >
              Schedule Service
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
