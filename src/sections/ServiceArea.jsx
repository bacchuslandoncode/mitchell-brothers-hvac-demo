import { motion } from 'framer-motion'
import Reveal, { staggerContainer, staggerItem } from '../components/Reveal'
import { serviceAreas } from '../data/serviceAreas'

export default function ServiceArea() {
  return (
    <section id="service-area" style={{ position: 'relative', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '104px var(--gutter) 108px' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.24em',
              textTransform: 'uppercase', color: 'var(--accent)',
            }}>Where We Work</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(34px, 4.4vw, 56px)', lineHeight: 1.08,
            letterSpacing: '-0.02em', color: 'var(--text)', margin: 0, marginBottom: '20px',
          }}>
            Serving the Greater Phoenix area
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.75,
            color: 'var(--text-muted)', maxWidth: '52ch', marginBottom: '52px',
          }}>
            Same-day AC repair and installation across the Valley. Wherever the heat hits, we go.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}
        >
          {serviceAreas.map(city => (
            <motion.div key={city} variants={staggerItem} style={{
              display: 'flex', alignItems: 'center', gap: '9px',
              padding: '13px 22px',
              border: '1px solid var(--border-strong)',
              borderRadius: '999px',
            }}>
              <PinIcon />
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, color: 'var(--text)',
              }}>{city}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.2" />
    </svg>
  )
}
