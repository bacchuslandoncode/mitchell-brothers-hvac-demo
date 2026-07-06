import { useState } from 'react'
import Reveal from '../components/Reveal'

const faqs = [
  {
    q: 'Do you offer 24-hour HVAC service in Tempe?',
    a: 'Yes. Mitchell Brothers Heating And Cooling is based in Tempe, AZ and takes calls 24 hours a day, every day.',
  },
  {
    q: 'What should I do if my AC stops working during a Tempe heat wave?',
    a: 'Call any time, day or night. Mitchell Brothers takes emergency calls around the clock and can help you get a visit scheduled as soon as one is available.',
  },
  {
    q: 'Can I call for both heating and cooling issues?',
    a: 'Yes. Services include AC repair, AC maintenance, heating repair, system installation, and emergency service.',
  },
  {
    q: 'Will I get clear repair options before work starts?',
    a: 'Customers mention receiving honest diagnostics and clear repair options before any work begins, so the repair-vs-replace decision is an informed one.',
  },
  {
    q: 'Do you service homes near Tempe and the East Valley?',
    a: 'Tempe is the confirmed home base. Nearby East Valley areas are also served, though the exact service radius should be confirmed directly. See the Service Area page for details.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" style={{ position: 'relative', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '104px var(--gutter) 108px' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.24em',
              textTransform: 'uppercase', color: 'var(--accent)',
            }}>FAQ</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: 'clamp(30px, 4vw, 50px)', lineHeight: 1.14,
            letterSpacing: '-0.005em', color: 'var(--text)', margin: 0, marginBottom: '48px',
            maxWidth: '18ch',
          }}>
            Common questions
          </h2>
        </Reveal>

        <div style={{ maxWidth: '760px' }}>
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05}>
              <FAQItem item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '20px', padding: '22px 0', textAlign: 'left', cursor: 'pointer',
          background: 'none', border: 'none',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '18px',
          letterSpacing: '-0.005em', color: 'var(--text)',
        }}>{item.q}</span>
        <PlusIcon open={open} />
      </button>
      <div style={{
        maxHeight: open ? '240px' : '0px',
        overflow: 'hidden',
        transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.75,
          color: 'var(--text-muted)', margin: '0 0 22px', maxWidth: '62ch',
        }}>{item.a}</p>
      </div>
    </div>
  )
}

function PlusIcon({ open }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M8 2v12M2 8h12" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round"
        style={{ transition: 'transform 0.25s ease', transformOrigin: 'center', transform: open ? 'rotate(45deg)' : 'none' }}
      />
    </svg>
  )
}
