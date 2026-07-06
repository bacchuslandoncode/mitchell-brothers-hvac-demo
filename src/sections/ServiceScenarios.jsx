import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { staggerContainer, staggerItem } from '../components/motionVariants'
import residentialPhoto from '../assets/photos/condensers-exterior.jpg'
import installPhoto from '../assets/photos/outside-ac-unit.jpg'
import communityPhoto from '../assets/photos/scenario-community-property.webp'
import multiFamilyPhoto from '../assets/photos/scenario-multi-family.webp'

const scenarios = [
  {
    id: 'residential-repair',
    name: 'Residential Repair Call',
    tag: 'Single-family AC & heating repair',
    photo: residentialPhoto,
    alt: 'Multiple outdoor AC condenser units at a single-family home',
  },
  {
    id: 'system-installation',
    name: 'New System Installation',
    tag: 'Right-sized replacement systems',
    photo: installPhoto,
    alt: 'Newly installed outdoor AC condenser unit beside a home',
  },
  {
    id: 'community-property',
    name: 'Community Property Service',
    tag: 'Senior living & community HVAC',
    photo: communityPhoto,
    alt: 'HVAC service at a community property',
  },
  {
    id: 'multi-family',
    name: 'Multi-Family Service',
    tag: 'Apartment & multi-family HVAC',
    photo: multiFamilyPhoto,
    alt: 'Multi-family property HVAC service',
  },
]

export default function ServiceScenarios() {
  return (
    <section id="service-scenarios" style={{ position: 'relative', background: 'var(--surface-raised)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '108px var(--gutter) 116px' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.24em',
              textTransform: 'uppercase', color: 'var(--accent)',
            }}>The Kind of Work We Do</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: 'clamp(30px, 4vw, 50px)', lineHeight: 1.14,
            letterSpacing: '-0.005em', color: 'var(--text)', margin: 0, marginBottom: '20px',
            maxWidth: '20ch',
          }}>
            From single homes to larger properties
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.75,
            color: 'var(--text-muted)', maxWidth: '58ch', marginBottom: '56px',
          }}>
            These are illustrative service scenarios, not specific past jobs, showing the range
            of work Mitchell Brothers can present clearly to homeowners and property managers alike.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px' }}
          className="scenarios-grid"
        >
          {scenarios.map(s => <ScenarioCard key={s.id} scenario={s} />)}
        </motion.div>

        <Reveal delay={0.1}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.04em',
            color: 'var(--text-dim)', marginTop: '32px', lineHeight: 1.6,
          }}>
            Scenario photos shown for demo layout purposes and should be swapped for real project
            photography before launch.
          </p>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .scenarios-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ScenarioCard({ scenario }) {
  return (
    <motion.div variants={staggerItem} style={{
      position: 'relative',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      borderRadius: '6px',
      border: '1px solid var(--border)',
    }}>
      <img
        src={scenario.photo}
        alt={scenario.alt}
        loading="lazy"
        decoding="async"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover',
        }}
      />
      {/* Frosted caption panel */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        background: 'rgba(32,42,46,0.6)',
        backdropFilter: 'blur(10px) saturate(1.2)',
        WebkitBackdropFilter: 'blur(10px) saturate(1.2)',
        borderTop: '1px solid rgba(255,255,255,0.14)',
        padding: '18px 22px',
      }}>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '19px',
          color: '#fff', margin: 0, marginBottom: '4px',
        }}>{scenario.name}</h3>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.78)', margin: 0,
        }}>{scenario.tag}</p>
      </div>
    </motion.div>
  )
}
