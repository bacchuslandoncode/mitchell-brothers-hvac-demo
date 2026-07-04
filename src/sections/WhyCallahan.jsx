import { motion } from 'framer-motion'
import Reveal, { staggerContainer, staggerItem } from '../components/Reveal'
import ImageSlot from '../components/ImageSlot'
import whyPhoto from '../assets/photos/why-tech-service.webp'

const reasons = [
  { title: 'Local Phoenix HVAC service',        body: 'Based in the Valley and familiar with what triple-digit summers do to home cooling systems.' },
  { title: 'Fast-response focus',                body: 'We prioritize same-day appointments during peak heat. A broken AC in Phoenix can’t wait a week.' },
  { title: 'Clear communication',                body: 'Straightforward diagnosis and pricing before any work starts. No surprise charges.' },
  { title: 'Repair-first mindset',                body: 'We fix what can be fixed. Replacement is a recommendation, never the default answer.' },
  { title: 'Residential cooling specialists',     body: 'We focus on home AC and heating systems. We don’t spread thin across commercial and industrial work.' },
]

const pendingBadge = {
  title: 'Licensed & insured',
  body: 'License and insurance details to be added once verified with the business.',
}

export default function WhyCallahan() {
  return (
    <section id="why-callahan" style={{ position: 'relative', background: 'var(--bg-alt)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '108px var(--gutter) 116px' }}>

        <div className="why-header" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '48px', alignItems: 'center', marginBottom: '64px' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
              <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.24em',
                textTransform: 'uppercase', color: 'var(--accent)',
              }}>Why Callahan</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(34px, 4.4vw, 56px)', lineHeight: 1.08,
              letterSpacing: '-0.02em', color: 'var(--text)', margin: 0,
              maxWidth: '20ch',
            }}>
              A straightforward HVAC company for Valley homeowners
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ImageSlot
              src={whyPhoto}
              label="Technician performing residential HVAC service"
              alt="HVAC technician performing residential service"
              aspect="4 / 3"
            />
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}
          className="why-grid"
        >
          {reasons.map(r => (
            <motion.div key={r.title} variants={staggerItem} style={{
              borderLeft: '2px solid var(--accent)', paddingLeft: '22px',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '19px',
                letterSpacing: '-0.01em', color: 'var(--text)', marginBottom: '10px',
              }}>{r.title}</h3>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.75,
                color: 'var(--text-muted)', margin: 0,
              }}>{r.body}</p>
            </motion.div>
          ))}

          {/* Placeholder badge — not an asserted claim */}
          <motion.div variants={staggerItem} style={{
            borderLeft: '2px dashed var(--border-strong)', paddingLeft: '22px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '10px' }}>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '19px',
                letterSpacing: '-0.01em', color: 'var(--text-dim)', margin: 0,
              }}>{pendingBadge.title}</h3>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--urgency-dim)',
                border: '1px solid var(--urgency-dim)', borderRadius: '2px', padding: '2px 6px',
              }}>Pending</span>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.75,
              color: 'var(--text-dim)', margin: 0, fontStyle: 'italic',
            }}>{pendingBadge.body}</p>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .why-header { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
        @media (max-width: 560px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
