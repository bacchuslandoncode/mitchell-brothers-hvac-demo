import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { staggerContainer, staggerItem } from '../components/motionVariants'
import { primaryArea, nearbyAreas } from '../data/serviceAreas'

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
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: 'clamp(30px, 4vw, 50px)', lineHeight: 1.14,
            letterSpacing: '-0.005em', color: 'var(--text)', margin: 0, marginBottom: '20px',
          }}>
            Based in Tempe, serving the East Valley
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.75,
            color: 'var(--text-muted)', maxWidth: '52ch', marginBottom: '44px',
          }}>
            Mitchell Brothers Heating And Cooling is based at 805 W Baseline Rd in Tempe, AZ,
            and takes calls 24 hours a day.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '16px 26px', border: '1px solid var(--accent)', borderRadius: '4px',
            marginBottom: '40px', background: 'var(--accent-glow-sm)',
          }}>
            <PinIcon filled />
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '17px', color: 'var(--text)',
            }}>{primaryArea}</span>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--accent-dim)',
            }}>Home Base</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '18px',
          }}>Also serving nearby East Valley areas</p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}
        >
          {nearbyAreas.map(city => (
            <motion.div key={city} variants={staggerItem} style={{
              display: 'flex', alignItems: 'center', gap: '9px',
              padding: '13px 22px',
              border: '1px dashed var(--border-strong)',
              borderRadius: '999px',
            }}>
              <PinIcon />
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, color: 'var(--text-muted)',
              }}>{city}</span>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.15}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)',
            marginTop: '28px', lineHeight: 1.6,
          }}>
            Nearby-area copy shown for demo purposes — confirm exact service radius with the business before launch.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function PinIcon({ filled = false }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? 'var(--accent)' : 'none'} stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.2" fill={filled ? 'var(--bg)' : 'none'} />
    </svg>
  )
}
