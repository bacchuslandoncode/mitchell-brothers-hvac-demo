import Reveal from './Reveal'

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="section-dark" style={{ position: 'relative', background: 'var(--bg)', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 70% at 50% 0%, rgba(56,189,248,0.16) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '156px var(--gutter) 64px', position: 'relative' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.24em',
              textTransform: 'uppercase', color: 'var(--accent)',
            }}>{eyebrow}</span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(32px, 4.6vw, 56px)', lineHeight: 1.08,
            letterSpacing: '-0.02em', color: 'var(--text)', margin: 0,
            maxWidth: '20ch',
          }}>{title}</h1>
          {subtitle && (
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.75,
              color: 'var(--text-muted)', maxWidth: '52ch', marginTop: '18px', marginBottom: 0,
            }}>{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
