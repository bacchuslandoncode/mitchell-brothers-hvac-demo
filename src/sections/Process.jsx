import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { staggerContainer, staggerItem } from '../components/motionVariants'

const steps = [
  { n: '01', title: 'Call or request service',       body: 'Call now, any hour, and we’ll confirm an appointment as soon as one’s available.' },
  { n: '02', title: 'Get a clear diagnosis',          body: 'A Mitchell Brothers tech inspects your system on-site and walks you through what’s wrong and what it costs before starting.' },
  { n: '03', title: 'Get your comfort back',          body: 'Most repairs are completed the same visit, so your home is back to comfortable fast.' },
]

export default function Process() {
  return (
    <section id="process" style={{ position: 'relative', background: 'var(--bg)', overflow: 'hidden' }}>
      {/* Fine brass hairline grid — architectural/trade motif */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(168,103,46,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(168,103,46,0.7) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }} />

      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '108px var(--gutter) 116px', position: 'relative' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.24em',
              textTransform: 'uppercase', color: 'var(--accent)',
            }}>How It Works</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: 'clamp(30px, 4vw, 50px)', lineHeight: 1.14,
            letterSpacing: '-0.005em', color: 'var(--text)', margin: 0, marginBottom: '64px',
          }}>
            Three steps back to comfortable
          </h2>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)' }}
          className="process-grid"
        >
          {steps.map(s => (
            <motion.div key={s.n} variants={staggerItem} style={{
              background: 'var(--surface)',
              boxShadow: '0 8px 24px rgba(168,103,46,0.06)',
              padding: '36px 32px',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px',
              }}>{s.n}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '22px',
                letterSpacing: '-0.015em', color: 'var(--text)', marginBottom: '12px', lineHeight: 1.15,
              }}>{s.title}</h3>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.75,
                color: 'var(--text-muted)', margin: 0,
              }}>{s.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
