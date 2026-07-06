import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { staggerContainer, staggerItem } from '../components/motionVariants'
import { reviewHighlights, reviewSummary } from '../data/reviewHighlights'

export default function ReviewHighlights() {
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
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', marginBottom: '56px' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 600,
              fontSize: 'clamp(30px, 4vw, 50px)', lineHeight: 1.14,
              letterSpacing: '-0.005em', color: 'var(--text)', margin: 0,
              maxWidth: '18ch',
            }}>
              What customers mention
            </h2>
            <RatingBadge />
          </div>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}
          className="highlights-grid"
        >
          {reviewHighlights.map(h => <HighlightCard key={h.id} highlight={h} />)}
        </motion.div>

        <Reveal delay={0.1}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.04em',
            color: 'var(--text-dim)', marginTop: '32px', lineHeight: 1.6,
          }}>
            Themes summarized from the business's public review listing, not individually quoted.
          </p>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .highlights-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .highlights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function RatingBadge() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '12px',
      padding: '14px 20px', border: '1px solid var(--border-strong)', borderRadius: '4px',
      background: 'var(--surface)', flexShrink: 0,
    }}>
      <div style={{ display: 'flex', gap: '2px' }}>
        {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
      </div>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '18px', color: 'var(--text)',
      }}>{reviewSummary.rating.toFixed(1)}</span>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)', whiteSpace: 'nowrap',
      }}>Customer Review Highlights</span>
    </div>
  )
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent)" aria-hidden="true">
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8L6 21l1.6-7L2.2 9.2l7.1-.6z" />
    </svg>
  )
}

function HighlightCard({ highlight }) {
  return (
    <motion.div variants={staggerItem} style={{
      background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '4px', padding: '26px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
        <CheckDot />
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '17px',
          color: 'var(--text)', margin: 0,
        }}>{highlight.title}</h3>
      </div>
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: '14.5px', lineHeight: 1.7,
        color: 'var(--text-muted)', margin: 0,
      }}>{highlight.body}</p>
    </motion.div>
  )
}

function CheckDot() {
  return (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="7" cy="7" r="7" fill="var(--accent)" fillOpacity="0.16" />
      <path d="M4 7.2L6.1 9.3L10 5" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
