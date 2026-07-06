import Reveal from '../components/Reveal'
import ImageSlot from '../components/ImageSlot'
import { CallNowButton } from '../components/Nav'
import heatPhoto from '../assets/photos/phoenix-heat-condenser.webp'

export default function TempeComfort() {
  return (
    <section style={{ position: 'relative', background: 'var(--bg-alt)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '108px var(--gutter) 116px' }}>
        <div className="comfort-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '56px', alignItems: 'center' }}>
          <Reveal>
            <ImageSlot
              src={heatPhoto}
              label="AC condenser unit under desert sun"
              alt="Outdoor AC condenser unit under the Tempe desert sun"
              aspect="4 / 3"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
              <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.24em',
                textTransform: 'uppercase', color: 'var(--accent)',
              }}>Tempe &amp; East Valley Comfort</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 600,
              fontSize: 'clamp(28px, 3.6vw, 44px)', lineHeight: 1.16,
              letterSpacing: '-0.005em', color: 'var(--text)', marginBottom: '20px', maxWidth: '20ch',
            }}>
              Built for Arizona heat, not just around it
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.85,
              color: 'var(--text-muted)', marginBottom: '28px', maxWidth: '56ch',
            }}>
              Tempe summers regularly push cooling systems past{' '}
              <StatBadge>110°F+</StatBadge> for weeks at a time. That is why Mitchell
              Brothers stays reachable <StatBadge>24 hours</StatBadge> a day, ready to
              help before a strained system turns into a bigger problem. On the handful
              of genuinely cold East Valley nights, the same team handles the heating
              side too.
            </p>
            <CallNowButton />
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .comfort-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  )
}

function StatBadge({ children }) {
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 500,
      color: 'var(--accent)', border: '1px solid var(--border-strong)',
      borderRadius: '999px', padding: '2px 10px', whiteSpace: 'nowrap',
    }}>{children}</span>
  )
}
