import { motion } from 'framer-motion'
import Reveal, { staggerContainer, staggerItem } from '../components/Reveal'
import { reviews } from '../data/reviews'

export default function Reviews() {
  return (
    <section id="reviews" style={{ position: 'relative', background: 'var(--bg-alt)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '108px var(--gutter) 116px' }}>

        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.24em',
              textTransform: 'uppercase', color: 'var(--accent)',
            }}>Reputation</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '56px' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(34px, 4.4vw, 56px)', lineHeight: 1.08,
              letterSpacing: '-0.02em', color: 'var(--text)', margin: 0,
            }}>
              What customers say
            </h2>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--text-dim)',
              whiteSpace: 'nowrap',
            }}>As shown on callahanair.com</span>
          </div>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
          className="reviews-grid"
        >
          {reviews.map(r => <ReviewCard key={r.id} review={r} />)}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .reviews-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ReviewCard({ review }) {
  return (
    <motion.div variants={staggerItem} style={{
      background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '4px', padding: '28px',
    }}>
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: '15.5px', lineHeight: 1.75,
        color: 'var(--text-muted)', marginBottom: '20px', fontStyle: 'italic',
      }}>“{review.body}”</p>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.04em', color: 'var(--text)',
      }}>{review.reviewer}</div>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.04em', color: 'var(--text-dim)',
      }}>{review.date}</div>
    </motion.div>
  )
}
