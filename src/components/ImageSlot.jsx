/*
 * ImageSlot — stand-in for the kit's ui_kits/marketing-site/image-slot.js.
 *
 * Renders a labelled, correctly-proportioned placeholder so layouts hold
 * their real shape before art direction exists. Swap the internals for the
 * kit's implementation once it syncs; keep the props.
 */
export default function ImageSlot({ ratio = '16 / 9', label, alt = '', src }) {
  if (src) {
    return (
      <figure className="image-slot" style={{ aspectRatio: ratio }}>
        <img src={src} alt={alt} className="image-slot__img" />
      </figure>
    );
  }

  return (
    <figure
      className="image-slot image-slot--empty"
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label ? `Imagen pendiente: ${label}` : 'Imagen pendiente'}
    >
      <span className="image-slot__label">{label ?? 'Imagen'}</span>
    </figure>
  );
}
