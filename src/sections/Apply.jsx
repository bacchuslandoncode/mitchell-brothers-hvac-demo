import { useState } from 'react'
import Reveal from '../components/Reveal'

export default function Apply() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="apply" style={{ position: 'relative', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '104px var(--gutter) 108px' }}>
        <div className="apply-layout" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '56px', alignItems: 'start' }}>

          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
              <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.24em',
                textTransform: 'uppercase', color: 'var(--accent)',
              }}>Careers</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(32px, 4.2vw, 52px)', lineHeight: 1.08,
              letterSpacing: '-0.02em', color: 'var(--text)', margin: 0, marginBottom: '20px',
              maxWidth: '16ch',
            }}>
              Join the Callahan team
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.75,
              color: 'var(--text-muted)', maxWidth: '38ch',
            }}>
              If you're interested in working with Callahan Air Conditioning, start by sending your contact info and resume.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} style={{
              background: 'var(--glass)',
              backdropFilter: 'blur(10px) saturate(1.3)',
              WebkitBackdropFilter: 'blur(10px) saturate(1.3)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '36px',
              boxShadow: '0 12px 32px rgba(0,168,232,0.08)',
            }}>
              <div className="apply-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <Field label="Name" id="apply-name" name="name" type="text" autoComplete="name" />
                <Field label="Phone" id="apply-phone" name="phone" type="tel" autoComplete="tel" />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <Field label="Email" id="apply-email" name="email" type="email" autoComplete="email" required />
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label htmlFor="apply-resume" style={labelStyle}>Attach Resume</label>
                <input
                  id="apply-resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  style={{
                    display: 'block', width: '100%',
                    fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-muted)',
                    padding: '12px 0',
                  }}
                />
              </div>

              <button type="submit" style={{
                fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--dark)',
                background: 'linear-gradient(135deg, var(--primary), var(--accent-2))',
                border: 'none', borderRadius: '2px', padding: '15px 28px',
                width: '100%', cursor: 'pointer',
              }}>
                Submit Application
              </button>

              {submitted && (
                <p role="status" style={{
                  fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--accent-dim)',
                  marginTop: '16px', marginBottom: 0,
                }}>
                  Thanks. This demo form does not send your information anywhere yet.
                </p>
              )}

              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.03em',
                color: 'var(--text-dim)', marginTop: '18px', marginBottom: 0, lineHeight: 1.6,
              }}>
                Demo form. Connect to email or form handling before launch.
              </p>
            </form>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .apply-layout { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .apply-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em',
  textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '8px',
}

function Field({ label, id, name, type, autoComplete, required = false }) {
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>
        {label}{required ? ' *' : ''}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        style={{
          width: '100%',
          fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text)',
          background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '3px',
          padding: '12px 14px',
        }}
      />
    </div>
  )
}
