/*
  Reusable image slot. Pass `src` once a real photo is sourced — until then it
  renders a clearly-labeled placeholder so the layout reads correctly without
  faking a photo. Never put stock/AI imagery here directly; swap in a real
  `src` import from src/assets when available.
*/
export default function ImageSlot({ src, alt, label, aspect = '4 / 3', decorative = false, style, className }) {
  if (src) {
    return (
      <div className={className} style={{ aspectRatio: aspect, overflow: 'hidden', borderRadius: '4px', ...style }}>
        <img
          src={src}
          alt={decorative ? '' : alt}
          aria-hidden={decorative ? 'true' : undefined}
          loading="lazy"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    )
  }

  return (
    <div className={className} style={{
      aspectRatio: aspect,
      borderRadius: '4px',
      border: '1px dashed var(--border-strong)',
      background: 'repeating-linear-gradient(45deg, var(--bg-alt) 0px, var(--bg-alt) 10px, var(--surface) 10px, var(--surface) 20px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px',
      gap: '10px',
      ...style,
    }}>
      <CameraIcon />
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em',
        textTransform: 'uppercase', color: 'var(--text-dim)', maxWidth: '22ch', lineHeight: 1.6,
      }}>
        Photo needed: {label}
      </span>
    </div>
  )
}

function CameraIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--text-dim)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 8h3l2-3h6l2 3h3a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  )
}
