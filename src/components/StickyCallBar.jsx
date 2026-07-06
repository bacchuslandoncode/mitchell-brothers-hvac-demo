import { MITCHELL_PHONE, MITCHELL_PHONE_TEL } from './Nav'

export default function StickyCallBar() {
  return (
    <a
      href={MITCHELL_PHONE_TEL}
      className="sticky-call-bar"
      style={{
        position: 'fixed',
        left: 0, right: 0, bottom: 0,
        zIndex: 250,
        display: 'none',
        alignItems: 'center', justifyContent: 'center',
        gap: '10px',
        padding: 'calc(16px + env(safe-area-inset-bottom, 0px)) 16px 16px',
        background: 'linear-gradient(135deg, var(--primary), var(--accent-2))',
        color: 'var(--dark)',
        textDecoration: 'none',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.25)',
      }}
    >
      <PhoneIcon />
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.06em',
        textTransform: 'uppercase', fontWeight: 600,
      }}>
        Open 24/7 · Call {MITCHELL_PHONE}
      </span>

      <style>{`
        @media (max-width: 640px) {
          .sticky-call-bar { display: flex !important; }
        }
      `}</style>
    </a>
  )
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="currentColor"/>
    </svg>
  )
}
