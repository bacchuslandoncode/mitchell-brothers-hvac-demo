import { reviewSummary } from '../data/reviewHighlights'

const items = [
  { icon: 'star', label: `${reviewSummary.rating.toFixed(1)} Rating` },
  { icon: 'chat', label: 'Local Customer Feedback' },
  { icon: 'clock', label: 'Open 24 Hours' },
  { icon: 'pin', label: 'Tempe, AZ' },
  { icon: 'alert', label: 'Emergency HVAC Service' },
]

export default function TrustStrip() {
  return (
    <div style={{
      position: 'relative', background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: 'var(--max-w)', margin: '0 auto', padding: '18px var(--gutter)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexWrap: 'wrap', gap: '10px 28px',
      }} className="trust-strip">
        {items.map((item, i) => (
          <span key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <TrustIcon kind={item.icon} />
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.06em',
                textTransform: 'uppercase', color: 'var(--text-muted)', whiteSpace: 'nowrap',
              }}>{item.label}</span>
            </span>
            {i < items.length - 1 && (
              <span className="trust-strip-dot" style={{
                width: '3px', height: '3px', borderRadius: '50%', background: 'var(--border-strong)', flexShrink: 0,
              }} />
            )}
          </span>
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .trust-strip-dot { display: none; }
        }
      `}</style>
    </div>
  )
}

function TrustIcon({ kind }) {
  const common = { width: 14, height: 14, viewBox: '0 0 24 24', 'aria-hidden': 'true', style: { flexShrink: 0 } }
  switch (kind) {
    case 'star':
      return (
        <svg {...common} fill="var(--accent)">
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8L6 21l1.6-7L2.2 9.2l7.1-.6z" />
        </svg>
      )
    case 'chat':
      return (
        <svg {...common} fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...common} fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
    case 'pin':
      return (
        <svg {...common} fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.9 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.2" />
        </svg>
      )
    case 'alert':
      return (
        <svg {...common} fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 9v4M12 17h.01" />
          <path d="M10.3 3.9L2.5 18a1.5 1.5 0 001.3 2.2h16.4a1.5 1.5 0 001.3-2.2L13.7 3.9a1.5 1.5 0 00-2.6 0z" />
        </svg>
      )
    default:
      return null
  }
}
