import { Link } from 'react-router-dom'
import { CALLAHAN_PHONE, CALLAHAN_PHONE_TEL, CALLAHAN_EMAIL } from './Nav'
import logoImg from '../assets/callahan-logo/callahan-logo.webp'

const serviceLinks = [
  { label: 'AC Repair',            to: '/services'      },
  { label: 'AC Installation',      to: '/services'      },
  { label: 'AC Tune-Ups',          to: '/services'      },
  { label: 'Emergency AC Service', to: '/services'      },
  { label: 'Heating Repair',       to: '/services'      },
  { label: 'Maintenance Plans',    to: '/services'      },
]

export const hoursRows = [
  { days: 'Monday to Friday', time: '9am to 5pm' },
  { days: 'Saturday and Sunday', time: 'By appointment only' },
]

export default function Footer() {
  return (
    <footer className="section-dark" style={{
      position: 'relative',
      background: 'var(--surface)',
      overflow: 'hidden',
    }}>
      {/* Diagonal grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.02,
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(56,189,248,1) 0px, rgba(56,189,248,1) 1px, transparent 0px, transparent 50%)',
        backgroundSize: '28px 28px',
      }} />

      {/* Full-width top rule */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(to right, transparent, var(--accent-dim) 20%, var(--accent) 50%, var(--accent-dim) 80%, transparent)',
      }} />

      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '72px var(--gutter) 0', position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr 0.9fr 1fr',
          gap: '40px',
          paddingBottom: '56px',
          borderBottom: '1px solid var(--border)',
        }} className="footer-grid">

          {/* Col 1: Brand */}
          <div>
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: '56px', height: '56px', borderRadius: '9px',
              background: '#fff', padding: '6px', marginBottom: '18px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.28)',
            }}>
              <img
                src={logoImg}
                alt="Callahan Air Conditioning logo"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              />
            </span>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 600,
              fontSize: '22px', color: 'var(--text)', marginBottom: '14px',
            }}>
              Callahan <span style={{ color: 'var(--accent)' }}>Air Conditioning</span>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 400,
              lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: '32ch',
            }}>
              Same-day AC repair, installation, and maintenance for the Greater Phoenix area.
            </p>
          </div>

          {/* Col 2: Contact */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '22px',
            }}>Contact</div>
            <a href={CALLAHAN_PHONE_TEL} style={{
              fontFamily: 'var(--font-mono)', fontSize: '16px', letterSpacing: '0.03em',
              color: 'var(--accent)', display: 'block', marginBottom: '10px', textDecoration: 'none',
            }}>{CALLAHAN_PHONE}</a>
            <a href={`mailto:${CALLAHAN_EMAIL}`} style={{
              fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.02em',
              color: 'var(--text-dim)', display: 'block', marginBottom: '14px', textDecoration: 'none',
              wordBreak: 'break-word',
            }}>{CALLAHAN_EMAIL}</a>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-muted)', margin: 0,
            }}>Arizona, USA</p>
          </div>

          {/* Col 3: Hours */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '22px',
            }}>Hours</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
              {hoursRows.map(row => (
                <div key={row.days}>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text)' }}>{row.days}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-muted)' }}>{row.time}</div>
                </div>
              ))}
            </div>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-muted)', margin: 0,
            }}>We take calls 24/7.</p>
          </div>

          {/* Col 4: Services */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '22px',
            }}>Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
              {serviceLinks.map(l => (
                <Link key={l.label} to={l.to} style={{
                  fontFamily: 'var(--font-body)', fontSize: '15px',
                  color: 'var(--text-muted)', textDecoration: 'none',
                }}>{l.label}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
          padding: '24px 0 32px', gap: '24px', flexWrap: 'wrap',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.06em',
            color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '62ch',
          }}>
            © {new Date().getFullYear()} Callahan Air Conditioning.
            <div style={{ marginTop: '6px', opacity: 0.75 }}>
              This is a redesign concept: a conversion-focused refresh of the existing Callahan
              Air Conditioning site, built for design and pitch purposes. Some service and
              project details shown here are placeholders and should be verified before launch.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  )
}
