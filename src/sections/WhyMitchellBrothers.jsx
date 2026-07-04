import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { staggerContainer, staggerItem } from '../components/motionVariants'
import ImageSlot from '../components/ImageSlot'
import whyPhoto from '../assets/photos/why-tech-service.webp'

const reasons = [
  { title: 'Open 24 hours',                   body: 'A broken system doesn’t wait for business hours, and neither do we. Calls are answered around the clock.' },
  { title: 'Fast, on-time response',           body: 'Customers consistently mention how quickly we arrive and how well we keep to the scheduled window.' },
  { title: 'Honest diagnostics',               body: 'A clear, on-site explanation of what’s wrong before any work starts. No guessing games.' },
  { title: 'Clear repair options',             body: 'We lay out the options and the cost of each, so the decision is yours to make.' },
  { title: 'Reliable workmanship',             body: 'Work that holds up, with a noticeable improvement in system performance afterward.' },
]

const pendingBadge = {
  title: 'Licensed & insured',
  body: 'License and insurance details to be added once verified with the business.',
}

export default function WhyMitchellBrothers() {
  return (
    <section id="why-mitchell-brothers" style={{ position: 'relative', background: 'var(--bg-alt)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '108px var(--gutter) 116px' }}>

        <div className="why-header" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '48px', alignItems: 'center', marginBottom: '64px' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
              <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.24em',
                textTransform: 'uppercase', color: 'var(--accent)',
              }}>Why Mitchell Brothers</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 600,
              fontSize: 'clamp(30px, 4vw, 50px)', lineHeight: 1.14,
              letterSpacing: '-0.005em', color: 'var(--text)', margin: 0,
              maxWidth: '20ch',
            }}>
              A straightforward HVAC contractor for Tempe homeowners
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
