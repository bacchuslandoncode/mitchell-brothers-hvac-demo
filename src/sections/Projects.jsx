import { motion } from 'framer-motion'
import Reveal, { staggerContainer, staggerItem } from '../components/Reveal'
import butterfieldPhoto from '../assets/photos/butterfield-commons.webp'
import cottonwoodPhoto from '../assets/photos/cottonwood-ranch.webp'
import glendalePhoto from '../assets/photos/glendale-senior-living.webp'
import thunderbirdPhoto from '../assets/photos/reserve-at-thunderbird.webp'

const projects = [
  {
    id: 'butterfield-commons',
    name: 'Butterfield Commons',
    tag: 'Multi-family HVAC project',
    photo: butterfieldPhoto,
    alt: 'Butterfield Commons multifamily project',
  },
  {
    id: 'cottonwood-ranch',
    name: 'Cottonwood Ranch',
    tag: 'Multi-family HVAC project',
    photo: cottonwoodPhoto,
    alt: 'Cottonwood Ranch multifamily project',
  },
  {
    id: 'glendale-senior-living',
    name: 'Glendale Senior Living',
    tag: 'Community property HVAC work',
    photo: glendalePhoto,
    alt: 'Glendale Senior Living project',
  },
  {
    id: 'reserve-at-thunderbird',
    name: 'Reserve at Thunderbird',
    tag: 'Multi-family HVAC project',
    photo: thunderbirdPhoto,
    alt: 'Reserve at Thunderbird multifamily project',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ position: 'relative', background: 'var(--surface-raised)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '108px var(--gutter) 116px' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.24em',
              textTransform: 'uppercase', color: 'var(--accent)',
            }}>Projects</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(34px, 4.4vw, 56px)', lineHeight: 1.08,
            letterSpacing: '-0.02em', color: 'var(--text)', margin: 0, marginBottom: '20px',
            maxWidth: '20ch',
          }}>
            Built for homes and larger communities
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.75,
            color: 'var(--text-muted)', maxWidth: '58ch', marginBottom: '56px',
          }}>
            From single-home service calls to multi-family properties, this section shows how
            Callahan's project experience can be presented clearly.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px' }}
          className="projects-grid"
        >
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </motion.div>

        <Reveal delay={0.1}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.04em',
            color: 'var(--text-dim)', marginTop: '32px', lineHeight: 1.6,
          }}>
            Project details shown for demo layout and should be verified before launch.
          </p>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.div variants={staggerItem} style={{
      position: 'relative',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      borderRadius: '6px',
      border: '1px solid var(--border)',
    }}>
      <img
        src={project.photo}
        alt={project.alt}
        loading="lazy"
        decoding="async"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover',
        }}
      />
      {/* Frosted glass caption panel */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        background: 'rgba(15,29,46,0.55)',
        backdropFilter: 'blur(10px) saturate(1.3)',
        WebkitBackdropFilter: 'blur(10px) saturate(1.3)',
        borderTop: '1px solid rgba(255,255,255,0.14)',
        padding: '18px 22px',
      }}>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '19px',
          color: '#fff', margin: 0, marginBottom: '4px',
        }}>{project.name}</h3>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.78)', margin: 0,
        }}>{project.tag}</p>
      </div>
    </motion.div>
  )
}
