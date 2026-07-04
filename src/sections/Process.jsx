import { motion } from 'framer-motion'
import Reveal, { staggerContainer, staggerItem } from '../components/Reveal'
import iceTexture from '../assets/textures/cold-ice.webp'

const steps = [
  { n: '01', title: 'Call or request service',    body: 'Call now or send a service request, and we’ll confirm a same-day or next-day appointment.' },
  { n: '02', title: 'Get a clear diagnosis',       body: 'A Callahan tech inspects your system on-site and walks you through what’s wrong and what it costs before starting.' },
  { n: '03', title: 'Get your home cooling again', body: 'Most repairs are completed the same visit, so your home is back to comfortable fast.' },
]

export default function Process() {
  return (
    <section id="process" style={{ position: 'relative', background: 'var(--bg)', overflow: 'hidden' }}>
      {/* Subtle icy texture — cooling motif behind the "back to cool" copy, kept low-opacity for readability */}
      <img
        src={iceTexture}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.3, pointerEvents: 'none',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(223,246,255,0.65) 0%, rgba(223,246,255,0.76) 50%, rgba(223,246,255,0.65) 100%)',
        pointerEvents: 'none',
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
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(34px, 4.4vw, 56px)', lineHeight: 1.08,
            letterSpacing: '-0.02em', color: 'var(--text)', margin: 0, marginBottom: '64px',
          }}>
            Three steps back to cool
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
              background: 'var(--glass)',
              backdropFilter: 'blur(6px) saturate(1.3)',
              WebkitBackdropFilter: 'blur(6px) saturate(1.3)',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.6), 0 8px 24px rgba(0,168,232,0.08)',
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
