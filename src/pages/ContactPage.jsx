import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { CallNowButton, MITCHELL_PHONE, MITCHELL_PHONE_TEL, MITCHELL_ADDRESS } from '../components/Nav'
import { hoursRows } from '../data/hours'

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | Mitchell Brothers Heating And Cooling'
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch with Mitchell Brothers"
        subtitle="Call any time for service — Mitchell Brothers takes calls 24 hours a day."
      />

      <section style={{ position: 'relative', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '80px var(--gutter) 108px' }}>
          <Reveal>
            <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>

              {/* Contact details */}
              <div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '18px',
                }}>Phone</div>
                <a href={MITCHELL_PHONE_TEL} style={{
                  fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(24px, 3vw, 32px)',
                  color: 'var(--text)', display: 'block', marginBottom: '32px', textDecoration: 'none',
                }}>{MITCHELL_PHONE}</a>

                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '18px',
                }}>Address</div>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--text-muted)', margin: 0,
                }}>{MITCHELL_ADDRESS}</p>
              </div>

              {/* Hours + CTA */}
              <div style={{
                background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: '6px', padding: '36px',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '22px',
                }}>Hours</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '18px' }}>
                  {hoursRows.map(row => (
                    <div key={row.days}>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--text)' }}>{row.days}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '14.5px', color: 'var(--text-muted)' }}>{row.time}</div>
                    </div>
                  ))}
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '14.5px', color: 'var(--text-muted)',
                  marginBottom: '28px',
                }}>Mitchell Brothers takes calls 24 hours a day, every day.</p>
                <CallNowButton />
              </div>
            </div>
          </Reveal>
        </div>

        <style>{`
          @media (max-width: 760px) {
            .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>
    </>
  )
}
