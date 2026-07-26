import React from 'react';

export function Eyebrow({ n, children, light }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        letterSpacing: '.16em',
        textTransform: 'uppercase',
        color: light ? 'var(--teal-300)' : 'var(--teal-600)',
        fontWeight: 600,
      }}
    >
      {n && <span style={{ color: light ? 'rgba(255,255,255,.4)' : 'var(--gray-400)' }}>{n}</span>}
      <span
        style={{
          width: 26,
          height: 1,
          background: light ? 'var(--teal-400)' : 'var(--teal-500)',
        }}
      />
      {children}
    </div>
  );
}

/* Heading whose lines rise out of a mask on scroll. Pass lines as an array. */
export function MaskHead({ lines, style, tag = 'h2' }) {
  return React.createElement(
    tag,
    { style: { margin: 0, ...style } },
    lines.map((l, i) => (
      <span className="mask" data-mask key={i} style={{ transitionDelay: i * 90 + 'ms' }}>
        <span style={{ transitionDelay: i * 90 + 'ms' }}>{l}</span>
      </span>
    ))
  );
}

/*
 * ImageSlot — production stand-in for the kit's <image-slot> web component.
 *
 * The kit's version is an authoring affordance: drag-and-drop, reframing, and
 * persistence to a sidecar JSON. None of that belongs on a live site. This
 * renders the real photo when there is one and a labelled placeholder when
 * there isn't, so the layout holds its shape until art direction lands.
 */
export function ImageSlot({ src, alt = '', label, shape = 'rounded', radius = 12, dark }) {
  const borderRadius =
    shape === 'circle' ? '50%' : shape === 'pill' ? 9999 : shape === 'rect' ? 0 : radius;

  if (src) {
    return (
      <div className="islot islot--filled" style={{ borderRadius }}>
        <img src={src} alt={alt} loading="lazy" />
      </div>
    );
  }

  return (
    <div
      className={'islot' + (dark ? ' islot--dark' : '')}
      style={{ borderRadius }}
      role="img"
      aria-label={label ? `Imagen pendiente: ${label}` : 'Imagen pendiente'}
    >
      <span>{label}</span>
    </div>
  );
}
