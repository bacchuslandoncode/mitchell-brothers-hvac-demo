import Reveal from '../components/Reveal'

const items = [
  { title: 'Fast response',          body: 'Getting scheduled quickly after reaching out matters as much as the repair itself.' },
  { title: 'Clear repair options',    body: 'Knowing the choices, and the cost of each, before any work begins.' },
  { title: 'Honest diagnostics',      body: 'A straight answer about what is actually wrong, explained in plain terms.' },
  { title: 'On-time arrival',         body: 'Showing up within the window given, without an open-ended wait.' },
  { title: 'Reliable workmanship',    body: 'A repair that holds, not a quick fix that turns into a second visit.' },
]

export default function WhatCustomersCareAbout() {
  return (
    <section style={{ position: 'relative', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '104px var(--gutter) 108px' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.24em',
              textTransform: 'uppercase', color: 'var(--accent)',
            }}>What Customers Care About</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: 'clamp(30px, 4vw, 50px)', lineHeight: 1.14,
            letterSpacing: '-0.005em', color: 'var(--text)', margin: 0, marginBottom: '56px',
            maxWidth: '20ch',
          }}>
            The details that build trust on every call
          </h2>
        </Reveal>

        <div>
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="care-row" style={{
                display: 'flex', alignItems: 'baseline', gap: '28px', padding: '26px 0',
                borderBottom: i < items.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-dim)',
                  flexShrink: 0, width: '28px',
                }}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className="care-title" style={{
                  fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '20px',
                  color: 'var(--text)', margin: 0, flexShrink: 0, width: '230px',
                }}>{item.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.7,
                  color: 'var(--text-muted)', margin: 0,
                }}>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .care-row { flex-direction: column !important; gap: 8px !important; }
          .care-title { width: auto !important; }
        }
      `}</style>
    </section>
  )
}
