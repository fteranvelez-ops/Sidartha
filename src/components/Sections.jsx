import ImageSlot from './ImageSlot.jsx';

const SERVICES = [
  { title: 'Servicio uno', body: 'Descripción pendiente del design system.' },
  { title: 'Servicio dos', body: 'Descripción pendiente del design system.' },
  { title: 'Servicio tres', body: 'Descripción pendiente del design system.' },
];

const STEPS = [
  { n: '01', title: 'Diagnóstico', body: 'Copy pendiente.' },
  { n: '02', title: 'Propuesta', body: 'Copy pendiente.' },
  { n: '03', title: 'Ejecución', body: 'Copy pendiente.' },
];

export function Services() {
  return (
    <section className="section section--subtle" id="servicios">
      <div className="container">
        <p className="eyebrow">Servicios</p>
        <h2 className="section__title">Qué hacemos</h2>

        <div className="grid grid--3">
          {SERVICES.map((s) => (
            <article key={s.title} className="card">
              <ImageSlot ratio="3 / 2" label={s.title} />
              <h3 className="card__title">{s.title}</h3>
              <p className="card__body">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section" id="proceso">
      <div className="container">
        <p className="eyebrow">Proceso</p>
        <h2 className="section__title">Cómo trabajamos</h2>

        <ol className="steps">
          {STEPS.map((step) => (
            <li key={step.n} className="step">
              <span className="step__n">{step.n}</span>
              <h3 className="card__title">{step.title}</h3>
              <p className="card__body">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section section--subtle" id="nosotros">
      <div className="container split">
        <div className="split__media">
          <ImageSlot ratio="1 / 1" label="Nosotros" />
        </div>
        <div className="split__copy">
          <p className="eyebrow">Nosotros</p>
          <h2 className="section__title">Quiénes somos</h2>
          <p className="card__body">
            Bloque reservado. El texto definitivo llega con el contenido del
            kit.
          </p>
        </div>
      </div>
    </section>
  );
}
