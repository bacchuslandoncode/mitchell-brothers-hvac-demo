import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/callahan-logo/callahan-logo.webp'

export const CALLAHAN_PHONE = '(602) 897-0971'
export const CALLAHAN_PHONE_TEL = 'tel:+16028970971'
export const CALLAHAN_EMAIL = 'Office@Callahanair.com'

const links = [
  { label: 'Services',      to: '/services'      },
  { label: 'Why Callahan',  to: '/why-callahan'   },
  { label: 'Reviews',       to: '/reviews'        },
  { label: 'Service Area',  to: '/service-area'   },
  { label: 'Apply',         to: '/apply'          },
  { label: 'Contact',       to: '/contact'        },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 200,
      transform: 'translateZ(0)',
      willChange: 'transform',
      transition: 'background 0.4s ease, border-color 0.4s ease',
      background: scrolled
        ? 'rgba(7,17,31,0.97)'
        : 'linear-gradient(to bottom, rgba(7,17,31,0.72) 0%, transparent 100%)',
      backdropFilter: scrolled ? 'blur(10px) saturate(1.2)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(10px) saturate(1.2)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(56,189,248,0.16)' : '1px solid transparent',
      /* Nav always sits over a dark hero — force dark-section tokens */
      '--text':         '#EEF7FF',
      '--text-muted':   '#9FB4C7',
      '--text-dim':     '#6E8598',
      '--accent':       '#38BDF8',
      '--accent-light': '#7DD3FC',
      '--accent-dim':   '#0EA5E9',
      '--bg':           '#07111F',
    }}>
      <div style={{
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        padding: '0 var(--gutter)',
        height: '84px',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        alignItems: 'center',
        columnGap: '32px',
      }}>

        {/* Wordmark + logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '9px', flexShrink: 0, textDecoration: 'none', justifySelf: 'start' }}>
          <span className="nav-logo-chip" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '40px', height: '40px', borderRadius: '7px',
            background: '#fff', padding: '4px', flexShrink: 0,
            boxShadow: '0 2px 10px rgba(0,0,0,0.28)',
          }}>
            <img
              src={logoImg}
              alt="Callahan Air Conditioning logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
            />
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(15px, 1.5vw, 20px)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              color: 'var(--text)',
              lineHeight: 1,
              whiteSpace: 'nowrap',
            }}>Callahan <span style={{ color: 'var(--accent)' }}>Air Conditioning</span></span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(175,195,210,0.85)',
              lineHeight: 1,
            }}>Phoenix, AZ</span>
          </span>
        </Link>

        {/* Desktop nav — centered within the middle grid track, never overlapping the brand or CTA columns */}
        <nav className="nav-desktop" aria-label="Main navigation" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '22px',
          height: '84px',
          minWidth: 0,
          flexShrink: 1,
        }}>
          {links.map(l => <NavAnchor key={l.to} {...l} />)}
        </nav>

        {/* Right column: desktop CTA + mobile hamburger share the same grid track */}
        <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'end', flexShrink: 0 }}>
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center' }}>
            <CallNowButton compact />
          </div>

          <button
            className="nav-mobile"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            style={{
              color: 'var(--text)',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span style={{
              display: 'block', width: '22px', height: '1px',
              background: 'currentColor',
              transition: 'transform 0.2s, opacity 0.2s',
              transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '16px', height: '1px',
              background: 'currentColor',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.2s',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '1px',
              background: 'currentColor',
              transition: 'transform 0.2s, opacity 0.2s',
              transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div style={{
        maxHeight: menuOpen ? '480px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: 'rgba(7,17,31,0.98)',
        backdropFilter: 'blur(16px)',
        borderTop: menuOpen ? '1px solid var(--border)' : '1px solid transparent',
      }}>
        <div style={{ padding: '28px var(--gutter) 36px', display: 'flex', flexDirection: 'column' }}>
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={closeMenu}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                letterSpacing: '0.11em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                padding: '15px 0',
                borderBottom: i < links.length - 1 ? '1px solid var(--border)' : 'none',
                textDecoration: 'none',
                display: 'block',
              }}
            >
              {l.label}
            </Link>
          ))}
          <div style={{ marginTop: '22px' }}>
            <CallNowButton full onClick={closeMenu} />
          </div>
        </div>
      </div>

      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-mobile  { display: none !important; }
        @media (max-width: 1239px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: flex !important; }
        }
        @media (max-width: 420px) {
          .nav-logo-chip { width: 38px !important; height: 38px !important; }
        }
      `}</style>
    </header>
  )
}

function NavAnchor({ label, to }) {
  const [hov, setHov] = useState(false)
  const { pathname } = useLocation()
  const isActive = pathname === to
  return (
    <Link
      to={to}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '10.5px',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color: (hov || isActive) ? 'var(--text)' : 'var(--text-muted)',
        transition: 'color 0.18s ease',
        padding: '4px 0',
        position: 'relative',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
      <span style={{
        position: 'absolute',
        bottom: '-2px', left: 0,
        width: '100%',
        height: '1px',
        background: 'var(--accent)',
        transform: (hov || isActive) ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
      }} />
    </Link>
  )
}

export function CallNowButton({ compact = false, full = false, onClick }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={CALLAHAN_PHONE_TEL}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: compact ? '11px' : '13px',
        letterSpacing: compact ? '0.06em' : '0.1em',
        textTransform: 'uppercase',
        display: full ? 'flex' : 'inline-flex',
        alignItems: 'center',
        justifyContent: full ? 'center' : 'flex-start',
        gap: '8px',
        whiteSpace: 'nowrap',
        textDecoration: 'none',
        color: 'var(--dark)',
        background: hov
          ? 'linear-gradient(135deg, var(--accent-2), #7DD3FC)'
          : 'linear-gradient(135deg, var(--primary), var(--accent-2))',
        border: '1px solid transparent',
        padding: compact ? '10px 16px' : '15px 24px',
        borderRadius: '2px',
        transition: 'all 0.2s ease',
        width: full ? '100%' : 'auto',
        boxShadow: hov ? '0 6px 22px rgba(0,168,232,0.32)' : '0 2px 10px rgba(0,168,232,0.14)',
      }}
    >
      <PhoneIcon />
      {compact ? 'Call Now' : `Call ${CALLAHAN_PHONE}`}
    </a>
  )
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="currentColor"/>
    </svg>
  )
}
