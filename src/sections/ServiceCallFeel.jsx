import Reveal from '../components/Reveal'

const steps = [
  { label: 'Call',                       body: 'Reach a real person, any hour, and describe what is going on.' },
  { label: 'Diagnose',                   body: 'A technician inspects the system on-site to find the actual cause.' },
  { label: 'Explain options',            body: 'You hear the findings and the choices, in plain language, before anything starts.' },
  { label: 'Repair or plan next steps',  body: 'Most repairs happen the same visit. Bigger jobs get a clear next step.' },
]

export default function ServiceCallFeel() {
  return (
    <section className="section-dark" style={{ position: 'relative', background: 'var(--bg)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '108px var(--gutter) 116px', position: 'relative' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--accent-light)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.24em',
              textTransform: 'uppercase', color: 'var(--accent-light)',
            }}>How a Service Call Feels</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: 'clamp(30px, 4vw, 50px)', lineHeight: 1.14,
            letterSpacing: '-0.005em', color: 'var(--text)', margin: 0, marginBottom: '72px',
            maxWidth: '22ch',
          }}>
            From the first call to a comfortable home
          </h2>
        </Reveal>

        <div className="feel-timeline" style={{ position: 'relative' }}>
          <div className="feel-line" aria-hidden="true" style={{
            position: 'absolute', top: '20px', left: '20px', right: '20px', height: '1.5px', background: 'var(--border)',
          }} />
          <div className="feel-row" style={{ display: 'flex', position: 'relative' }}>
            {steps.map((step, i) => (
              <Reveal key={step.label} delay={i * 0.08} className="feel-step" style={{ flex: '1 1 0', paddingRight: '20px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                  border: '1.5px solid var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent-light)', background: 'var(--bg)',
                  position: 'relative', zIndex: 1, marginBottom: '22px',
                }}>{i + 1}</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '18px',
                  color: 'var(--text)', marginBottom: '10px',
                }}>{step.label}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '14.5px', lineHeight: 1.7,
                  color: 'var(--text-muted)', margin: 0,
                }}>{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .feel-line { display: none; }
          .feel-row { flex-direction: column !important; }
          .feel-step { padding-right: 0 !important; padding-bottom: 36px !important; }
        }
      `}</style>
    </section>
  )
}
