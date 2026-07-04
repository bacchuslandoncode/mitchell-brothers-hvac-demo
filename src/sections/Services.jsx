import { motion } from 'framer-motion'
import Reveal, { staggerContainer, staggerItem } from '../components/Reveal'
import { services } from '../data/services'
import repairPhoto from '../assets/photos/hero-hvac-technician.webp'
import installPhoto from '../assets/photos/ac-installation.webp'
import tuneUpPhoto from '../assets/photos/ac-tuneups.webp'
import emergencyPhoto from '../assets/photos/emergency-ac-service.webp'
import heatingPhoto from '../assets/photos/heating-repair.webp'
import maintenancePhoto from '../assets/photos/services-tools-gauges.webp'

/* Correlated photo per card — every card now has a dedicated, distinct photo. */
const photoMap = {
  'ac-repair':         repairPhoto,
  'ac-installation':   installPhoto,
  'ac-tune-ups':       tuneUpPhoto,
  'emergency-ac':      emergencyPhoto,
  'heating-repair':    heatingPhoto,
  'maintenance-plans': maintenancePhoto,
}

export default function Services() {
  return (
    <section id="services" style={{ position: 'relative', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '104px var(--gutter) 108px' }}>

        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.24em',
              textTransform: 'uppercase', color: 'var(--accent)',
            }}>What We Do</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(36px, 4.6vw, 60px)', lineHeight: 1.05,
            letterSpacing: '-0.025em', color: 'var(--text)', margin: 0, marginBottom: '64px',
            maxWidth: '18ch',
          }}>
            Cooling &amp; heating services for Valley homes
          </h2>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
          }}
          className="services-grid"
        >
          {services.map(s => <ServiceCard key={s.id} service={s} photo={photoMap[s.id]} />)}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ServiceCard({ service, photo }) {
  return (
    <motion.div variants={staggerItem} className="service-card" style={{
      position: 'relative',
      minHeight: '300px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '28px 30px',
    }}>
      {photo ? (
        <>
          <img
            src={photo}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="service-card-img"
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(7,17,31,0.18) 0%, rgba(10,40,58,0.55) 50%, rgba(7,17,31,0.92) 100%)',
          }} />
          {/* Frosted glass edge — subtle cyan hairline for a premium, icy finish */}
          <div style={{
            position: 'absolute', inset: 0,
            boxShadow: 'inset 0 0 0 1px rgba(125,211,252,0.14)',
            pointerEvents: 'none',
          }} />
        </>
      ) : (
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, var(--brand-navy) 0%, var(--brand-navy-mid) 60%, var(--brand-navy-deep) 100%)' }} />
      )}

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          width: '40px', height: '40px', borderRadius: '3px',
          border: '1px solid rgba(255,255,255,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '18px',
        }}>
          <ServiceIcon kind={service.icon} />
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 600,
          fontSize: '21px', letterSpacing: '-0.01em', color: '#fff', marginBottom: '8px',
        }}>{service.title}</h3>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '14.5px', lineHeight: 1.65,
          color: 'rgba(255,255,255,0.82)', margin: 0,
        }}>{service.body}</p>
      </div>

      <style>{`
        .service-card-img { transform: scale(1.02); }
        .service-card:hover .service-card-img { transform: scale(1.09); }
        @media (prefers-reduced-motion: reduce) {
          .service-card:hover .service-card-img { transform: scale(1.02); }
        }
      `}</style>
    </motion.div>
  )
}

function ServiceIcon({ kind }) {
  const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: '#fff', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' }
  const paths = {
    wrench:   <path d="M14.7 6.3a4 4 0 11-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 015.4-5.4l-3 3-2-2z" />,
    unit:     <><rect x="3" y="7" width="18" height="10" rx="1.5" /><path d="M7 17v2M12 17v2M17 17v2M7 11h.01M11 11h.01" /></>,
    gauge:    <><circle cx="12" cy="13" r="8" /><path d="M12 13l3.5-3.5M9 5h6" /></>,
    alert:    <><path d="M12 9v4M12 17h.01" /><path d="M10.3 3.9L2.5 18a1.5 1.5 0 001.3 2.2h16.4a1.5 1.5 0 001.3-2.2L13.7 3.9a1.5 1.5 0 00-2.6 0z" /></>,
    flame:    <path d="M12 2c1 3-2 4-2 7a3 3 0 106 0c1.5 1.5 2 3.5 2 5a6 6 0 11-12 0c0-4 3-6 4-9 .5-1.2.5-2.2 2-3z" />,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18M8 15h.01M12 15h.01M16 15h.01" /></>,
  }
  return <svg {...common}>{paths[kind]}</svg>
}
