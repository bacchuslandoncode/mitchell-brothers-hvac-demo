import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from '../components/Reveal'
import ImageSlot from '../components/ImageSlot'
import heatPhoto from '../assets/photos/phoenix-heat-condenser.webp'

const stages = [
  {
    stat: '115°F+',
    title: 'Phoenix heat',
    body: 'Valley summers push outdoor condenser units past their design limits for weeks at a time.',
  },
  {
    stat: '2-3x',
    title: 'System stress',
    body: 'Compressors and capacitors run harder and hotter, accelerating wear on aging equipment.',
  },
  {
    stat: 'Peak day',
    title: 'Breakdown risk',
    body: 'The hottest afternoons are exactly when an overworked system is most likely to fail.',
  },
  {
    stat: 'Same-day',
    title: 'Fast repair',
    body: 'Callahan gets to your home same-day, before a small issue turns into a no-AC emergency.',
  },
]

export default function PhoenixHeat() {
  const trackRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 0.75', 'end 0.4'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className="section-dark" style={{ position: 'relative', background: 'var(--bg)', overflow: 'hidden' }}>
      {/* Cool glow */}
      <div style={{
        position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
        width: '900px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(56,189,248,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div ref={trackRef} style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '108px var(--gutter) 116px', position: 'relative' }}>
        <div className="heat-intro" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '56px', alignItems: 'center', marginBottom: '76px' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
              <div style={{ width: '32px', height: '1px', background: 'var(--urgency-light)' }} />
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.24em',
                textTransform: 'uppercase', color: 'var(--urgency-light)',
              }}>Why Timing Matters</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(32px, 4.4vw, 54px)', lineHeight: 1.08,
              letterSpacing: '-0.02em', color: 'var(--text)', margin: 0,
              maxWidth: '22ch',
            }}>
              The hotter it gets, the harder your system works. That makes a breakdown more likely.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <ImageSlot
              src={heatPhoto}
              label="AC condenser unit under desert sun / Phoenix heat"
              alt="Outdoor AC condenser unit under the Phoenix desert sun"
              aspect="4 / 3"
            />
          </Reveal>
        </div>

        {/* Connector line — thermostat ramp: heat (red/orange/amber) cooling into the icy accent as the fix arrives */}
        <div className="heat-track" style={{
          position: 'relative', height: '4px', borderRadius: '2px', background: 'var(--border)',
          marginBottom: '48px', display: 'none', overflow: 'hidden',
        }}>
          <motion.div style={{
            position: 'absolute', inset: 0, borderRadius: '2px',
            background: 'linear-gradient(90deg, #EF4444 0%, #F97316 35%, #FACC15 55%, #38BDF8 78%, #00A8E8 100%)',
            boxShadow: '0 0 10px rgba(239,68,68,0.30), 0 0 16px rgba(0,168,232,0.30)',
            transformOrigin: 'left', scaleX: lineScale,
          }} />
        </div>

        <div className="heat-stages" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)' }}>
          {stages.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div style={{ background: 'var(--bg)', padding: '32px 26px', height: '100%' }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '32px',
                  color: i === stages.length - 1 ? 'var(--accent-light)' : 'var(--accent-dim)',
                  marginBottom: '16px', letterSpacing: '-0.02em',
                }}>{s.stat}</div>
                <h3 style={{
                  fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '15px',
                  letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '10px',
                }}>{s.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '14.5px', lineHeight: 1.7,
                  color: 'var(--text-muted)', margin: 0,
                }}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 761px) { .heat-track { display: block !important; } }
        @media (max-width: 900px) {
          .heat-stages { grid-template-columns: repeat(2, 1fr) !important; }
          .heat-intro { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 560px) {
          .heat-stages { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
