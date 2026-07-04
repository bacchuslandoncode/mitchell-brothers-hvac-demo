import Reveal, { staggerContainer, staggerItem } from '../components/Reveal'
import { motion } from 'framer-motion'

const symptoms = [
  { label: 'AC not cooling',     icon: 'thermometer' },
  { label: 'Warm air',           icon: 'wave'         },
  { label: 'Weak airflow',       icon: 'wind'         },
  { label: 'Strange noises',     icon: 'bolt'         },
  { label: 'Thermostat issues',  icon: 'dial'         },
  { label: 'System breakdown',   icon: 'alert'        },
]

export default function EmergencyStrip() {
  return (
    <section style={{ position: 'relative', background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '40px var(--gutter)' }}>
        <Reveal>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'var(--urgency-dim)', marginBottom: '20px',
          }}>
            Sound familiar? We fix it same-day.
          </div>
        </Reveal>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '10px',
          }}
          className="emergency-grid"
        >
          {symptoms.map(s => (
            <motion.div key={s.label} variants={staggerItem} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '14px 16px',
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: '3px',
            }}>
              <SymptomIcon kind={s.icon} />
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '13.5px', fontWeight: 500,
                color: 'var(--text-muted)', lineHeight: 1.3,
              }}>{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .emergency-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .emergency-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}

function SymptomIcon({ kind }) {
  const common = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'var(--urgency-dim)', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' }
  const paths = {
    thermometer: <path d="M12 2a2 2 0 00-2 2v9.5a4 4 0 102-9.5A2 2 0 0012 2z" />,
    wave:        <path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />,
    wind:        <path d="M3 8h11a2.5 2.5 0 100-5M3 16h15a2.5 2.5 0 110 5M3 12h8" />,
    bolt:        <path d="M13 2L4 14h6l-1 8 9-12h-6z" />,
    dial:        <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></>,
    alert:       <><path d="M12 9v4M12 17h.01" /><path d="M10.3 3.9L2.5 18a1.5 1.5 0 001.3 2.2h16.4a1.5 1.5 0 001.3-2.2L13.7 3.9a1.5 1.5 0 00-2.6 0z" /></>,
  }
  return <svg {...common} style={{ flexShrink: 0 }}>{paths[kind]}</svg>
}
