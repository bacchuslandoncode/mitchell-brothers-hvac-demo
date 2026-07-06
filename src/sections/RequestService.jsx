import { useState } from 'react'
import { MITCHELL_PHONE, MITCHELL_PHONE_TEL } from '../components/Nav'

const serviceOptions = [
  'AC Repair', 'AC Maintenance', 'Heating Repair', 'System Installation', 'Emergency Service', 'Other',
]

const timeOptions = [
  'ASAP / Emergency', 'Morning', 'Afternoon', 'Evening', 'Flexible',
]

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function RequestService() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = Object.fromEntries(new FormData(form))
    setStatus('sending')
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(data),
    })
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'))
  }

  return (
    <div style={{
      background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: '6px', padding: '36px',
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.18em',
        textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '10px',
      }}>Request Service</div>
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: '14.5px', lineHeight: 1.7,
        color: 'var(--text-muted)', marginBottom: '26px',
      }}>
        Prefer to talk it through? <a href={MITCHELL_PHONE_TEL} style={{ color: 'var(--accent-dim)' }}>Call {MITCHELL_PHONE}</a>. For
        anything urgent, calling is the fastest way to reach us.
      </p>

      {status === 'success' ? (
        <p role="status" style={{
          fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--accent-dim)', margin: 0,
        }}>
          Thanks. Your request has been sent. We'll be in touch, or call {MITCHELL_PHONE} for anything urgent.
        </p>
      ) : (
        <form
          name="request-service"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="request-service" />
          <p style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
            <label>
              Leave this field blank
              <input name="bot-field" tabIndex="-1" autoComplete="off" />
            </label>
          </p>

          <div className="request-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px', marginBottom: '18px' }}>
            <Field label="Name" id="rs-name" name="name" type="text" autoComplete="name" required />
            <Field label="Phone" id="rs-phone" name="phone" type="tel" autoComplete="tel" required />
          </div>

          <div className="request-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px', marginBottom: '18px' }}>
            <SelectField label="Service Needed" id="rs-service" name="service" options={serviceOptions} required />
            <SelectField label="Preferred Time" id="rs-time" name="preferredTime" options={timeOptions} required />
          </div>

          <div style={{ marginBottom: '22px' }}>
            <label htmlFor="rs-message" style={labelStyle}>Message</label>
            <textarea
              id="rs-message"
              name="message"
              rows={4}
              style={{
                width: '100%', fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text)',
                background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '3px',
                padding: '12px 14px', resize: 'vertical',
              }}
            />
          </div>

          <button type="submit" disabled={status === 'sending'} style={{
            fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--dark)',
            background: 'linear-gradient(135deg, var(--primary), var(--accent-2))',
            border: 'none', borderRadius: '2px', padding: '15px 28px',
            width: '100%', cursor: status === 'sending' ? 'default' : 'pointer',
            opacity: status === 'sending' ? 0.7 : 1,
          }}>
            {status === 'sending' ? 'Sending...' : 'Send Request'}
          </button>

          {status === 'error' && (
            <p role="alert" style={{
              fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--urgency-dim)',
              marginTop: '16px', marginBottom: 0,
            }}>
              Something went wrong sending this. Please call {MITCHELL_PHONE} instead.
            </p>
          )}
        </form>
      )}

      <style>{`
        @media (max-width: 480px) {
          .request-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
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

function SelectField({ label, id, name, options, required = false }) {
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>
        {label}{required ? ' *' : ''}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        style={{
          width: '100%',
          fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text)',
          background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '3px',
          padding: '12px 14px',
        }}
      >
        <option value="" disabled>Select one</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}
