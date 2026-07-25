import ImageSlot from './ImageSlot.jsx';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Sidartha</p>
          <h1 className="hero__title">
            Un titular que el design system todavía no ha definido.
          </h1>
          <p className="hero__lede">
            Esta estructura está lista y desplegada. El contenido y la
            identidad visual entran cuando se sincronice el kit de Claude
            Design en <code>ui_kits/marketing-site/</code>.
          </p>
          <div className="hero__actions">
            <a href="#contacto" className="btn btn--primary">
              Empezar
            </a>
            <a href="#servicios" className="btn btn--ghost">
              Ver servicios
            </a>
          </div>
        </div>

        <div className="hero__media">
          <ImageSlot ratio="4 / 3" label="Hero" />
        </div>
      </div>
    </section>
  );
}
