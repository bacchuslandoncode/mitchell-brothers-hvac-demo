import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const offers = [
  { title: 'Seasonal tune-ups', body: 'Pre-summer checkups that catch wear before peak heat arrives.' },
  { title: 'Maintenance plans', body: 'Scheduled visits that keep your system running efficiently year-round.' },
  { title: 'Replacement consultations', body: 'Honest guidance on repair-vs-replace when a system is nearing end of life.' },
]

export default function MaintenanceCTA() {
  return (
    <section style={{ position: 'relative', background: 'var(--accent-glow-sm)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '88px var(--gutter)' }}>
        <Reveal>
          <div className="maint-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px', alignItems: 'start' }}>
            {offers.map(o => (
              <div key={o.title}>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '19px',
                  color: 'var(--text)', marginBottom: '8px',
                }}>{o.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '14.5px', lineHeight: 1.7,
                  color: 'var(--text-muted)', margin: 0,
                }}>{o.body}</p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '40px', paddingTop: '28px', borderTop: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '14.5px', color: 'var(--text-dim)', fontStyle: 'italic',
              }}>Financing options</span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--urgency-dim)',
                border: '1px solid var(--urgency-dim)', borderRadius: '2px', padding: '2px 6px',
              }}>Pending verification</span>
            </div>
            <Link to="/contact" style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--accent-dim)', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}>
              Ask About a Maintenance Plan
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M0 4H11M7.5 1L11 4L7.5 7" stroke="currentColor" strokeWidth="1.2"/></svg>
            </Link>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .maint-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  )
}
