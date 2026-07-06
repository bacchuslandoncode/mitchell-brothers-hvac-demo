import { Link } from 'react-router-dom'
import { MITCHELL_PHONE, MITCHELL_PHONE_TEL, MITCHELL_ADDRESS, BrandMark } from './Nav'
import { hoursRows } from '../data/hours'

const serviceLinks = [
  { label: 'AC Repair',            to: '/services'      },
  { label: 'AC Maintenance',       to: '/services'      },
  { label: 'Heating Repair',       to: '/services'      },
  { label: 'System Installation',  to: '/services'      },
  { label: 'Emergency Service',    to: '/services'      },
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
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.025,
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(94,215,229,1) 0px, rgba(94,215,229,1) 1px, transparent 0px, transparent 50%)',
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
            <div style={{ marginBottom: '18px' }}>
              <BrandMark size={56} />
            </div>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 600,
              fontSize: '22px', color: 'var(--text)', marginBottom: '14px',
            }}>
              Mitchell Brothers <span style={{ color: 'var(--accent)' }}>Heating &amp; Cooling</span>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 400,
              lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: '32ch',
            }}>
              24-hour AC repair, heating repair, and system installation for Tempe and the East Valley.
            </p>
          </div>

          {/* Col 2: Contact */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '22px',
            }}>Contact</div>
            <a href={MITCHELL_PHONE_TEL} style={{
              fontFamily: 'var(--font-mono)', fontSize: '16px', letterSpacing: '0.03em',
              color: 'var(--accent)', display: 'block', marginBottom: '14px', textDecoration: 'none',
            }}>{MITCHELL_PHONE}</a>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.6, color: 'var(--text-muted)', margin: 0,
            }}>{MITCHELL_ADDRESS}</p>
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
            }}>We take calls around the clock.</p>
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
            © {new Date().getFullYear()} Mitchell Brothers Heating And Cooling.
            <div style={{ marginTop: '6px', opacity: 0.75 }}>
              This is a demo concept site built for design and pitch purposes, based on publicly
              available business information. Some copy and layout details are placeholders and
              should be verified with the business before launch.
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
