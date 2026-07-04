import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { CallNowButton } from '../components/Nav'
import logoImg from '../assets/callahan-logo/callahan-logo.webp'
import maintenancePhoto from '../assets/photos/maintenance-tuneup.webp'

export default function FinalCTA() {
  return (
    <section className="section-dark" style={{ position: 'relative', background: 'var(--bg)', overflow: 'hidden' }}>
      {/* Background texture — visible HVAC/tools photo, tinted with a cyan-leaning dark wash instead of near-black */}
      <img
        src={maintenancePhoto}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.3, pointerEvents: 'none',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(7,17,31,0.62) 0%, rgba(7,17,31,0.7) 50%, rgba(7,17,31,0.64) 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(160deg, rgba(14,58,85,0.38) 0%, transparent 45%, rgba(14,58,85,0.3) 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 70% at 50% 0%, rgba(56,189,248,0.22) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '108px var(--gutter)', position: 'relative', textAlign: 'center' }}>
        <Reveal>
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: '64px', height: '64px', borderRadius: '10px',
            background: '#fff', padding: '7px', marginBottom: '28px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
          }}>
            <img
              src={logoImg}
              alt="Callahan Air Conditioning logo"
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
            />
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(36px, 5.6vw, 68px)', lineHeight: 1.05,
            letterSpacing: '-0.025em', color: 'var(--text)', margin: '0 auto 20px', maxWidth: '16ch',
          }}>
            Need AC help today?
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '18px', lineHeight: 1.7,
            color: 'var(--text-muted)', maxWidth: '48ch', margin: '0 auto 40px',
          }}>
            Same-day appointments across the Phoenix Valley. Call now or schedule a visit online.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px', flexWrap: 'wrap' }}>
            <CallNowButton />
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
          </div>
        </Reveal>
      </div>
    </section>
  )
}
