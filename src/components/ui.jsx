/*
 * Sidartha design system — component library.
 *
 * Ported 1:1 from the Claude Design handoff (components/core, components/forms,
 * components/marketing). React.createElement calls became JSX; styles, tokens,
 * and prop contracts are unchanged.
 *
 * Inputs additionally forward `name`, `required` and `id` so the contact form
 * is usable and submittable — the prototype had no working form.
 */
import { useId } from 'react';

export function Badge({ children, variant = 'tint' }) {
  const variants = {
    tint: { background: 'var(--color-accent-tint)', color: 'var(--teal-700)' },
    solid: { background: 'var(--color-accent)', color: '#fff' },
    outline: {
      background: 'transparent',
      color: 'var(--navy-700)',
      border: '1px solid var(--color-border-strong)',
    },
  };
  return (
    <span
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: '12px',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        padding: '4px 12px',
        borderRadius: 'var(--radius-full)',
        display: 'inline-block',
        ...variants[variant],
      }}
    >
      {children}
    </span>
  );
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  onClick,
  type = 'button',
  style: styleOverride,
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: '13px' },
    md: { padding: '12px 24px', fontSize: '15px' },
    lg: { padding: '16px 32px', fontSize: '17px' },
  };
  const variants = {
    primary: { background: 'var(--color-accent)', color: '#fff', border: '1px solid transparent' },
    secondary: { background: 'var(--navy-800)', color: '#fff', border: '1px solid transparent' },
    ghost: {
      background: 'transparent',
      color: 'var(--color-text-primary)',
      border: '1px solid var(--color-border-strong)',
    },
  };
  const style = {
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-medium)',
    borderRadius: 'var(--radius-full)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all var(--duration-fast) var(--ease-standard)',
    ...sizes[size],
    ...variants[variant],
    ...styleOverride,
  };
  return (
    <button style={style} disabled={disabled} onClick={onClick} type={type}>
      {icon}
      {children}
    </button>
  );
}

export function Card({ eyebrow, title, description, image, children }) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {image && <img src={image} alt="" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />}
      <div
        style={{
          padding: 'var(--space-5)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-2)',
        }}
      >
        {eyebrow && (
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: 'var(--tracking-wide)',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
            }}
          >
            {eyebrow}
          </span>
        )}
        {title && (
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-lg)',
              fontWeight: 500,
              color: 'var(--navy-800)',
            }}
          >
            {title}
          </h3>
        )}
        {description && (
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--color-text-secondary)',
            }}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}

export function Input({ label, placeholder, error, type = 'text', value, onChange, name, required }) {
  const id = useId();
  return (
    <label
      htmlFor={id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        fontFamily: 'var(--font-body)',
        width: '100%',
      }}
    >
      {label && (
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy-700)' }}>{label}</span>
      )}
      <input
        id={id}
        name={name}
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={error ? true : undefined}
        style={{
          padding: '12px 14px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid ' + (error ? '#D6584C' : 'var(--color-border-strong)'),
          fontSize: '14px',
          fontFamily: 'var(--font-body)',
          outline: 'none',
          color: 'var(--navy-800)',
        }}
      />
      {error && <span style={{ fontSize: '12px', color: '#D6584C' }}>{error}</span>}
    </label>
  );
}

export function Textarea({ label, placeholder, rows = 4, value, onChange, name, required }) {
  const id = useId();
  return (
    <label
      htmlFor={id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        fontFamily: 'var(--font-body)',
        width: '100%',
      }}
    >
      {label && (
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy-700)' }}>{label}</span>
      )}
      <textarea
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
        style={{
          padding: '12px 14px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-strong)',
          fontSize: '14px',
          fontFamily: 'var(--font-body)',
          outline: 'none',
          resize: 'vertical',
          color: 'var(--navy-800)',
        }}
      />
    </label>
  );
}

export function QuoteCard({ quote, author, role }) {
  return (
    <div
      style={{
        background: 'var(--navy-800)',
        color: '#fff',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-7)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 300,
          fontSize: 'var(--text-xl)',
          lineHeight: 'var(--leading-snug)',
          margin: 0,
        }}
      >
        {'“' + quote + '”'}
      </p>
      {(author || role) && (
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--teal-200)' }}>
          {author}
          {role && <span style={{ color: 'var(--navy-500)' }}>{' — ' + role}</span>}
        </div>
      )}
    </div>
  );
}

export function StatBlock({ number, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontFamily: 'var(--font-display)' }}>
      <span
        style={{
          fontSize: 'var(--text-3xl)',
          fontWeight: 300,
          color: 'var(--navy-800)',
          lineHeight: 1,
        }}
      >
        {number}
      </span>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-muted)' }}>
        {label}
      </span>
    </div>
  );
}
