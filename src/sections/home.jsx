/*
 * Sections ported from the kit's ui_kits/marketing-site/Home.jsx.
 *
 * Production deltas, all marked inline:
 *  - the contact and newsletter forms actually submit (the prototype only
 *    flipped a local flag and claimed success);
 *  - the budh.ai CTA scrolls to its section, since the separate budh-ai kit
 *    is not part of this build.
 */
import { useEffect, useState } from 'react';
import Icon from '../components/Icon.jsx';
import { Eyebrow, MaskHead, ImageSlot } from '../components/primitives.jsx';
import Rail from '../components/Rail.jsx';
import { Input, Textarea, Button } from '../components/ui.jsx';
import { submitForm } from '../lib/forms.js';
import {
  WRAP,
  MARK,
  HORIZ_LIGHT,
  PROJECTS,
  PHOTOS,
  STATS,
  CLIENTS,
  FOUNDERS,
  LEGAL,
  SOCIAL,
  ORIGINALS_INTRO,
  ORIGINALS_FORMATS,
  ORIGINALS_COLLECTIONS,
} from '../data/site.js';

/* Agrupa los proyectos por categoría para armar un carrusel por cada una.
   Las categorías con una sola pieza no sostienen una fila propia, así que
   caen juntas en «Otros formatos»; con esto la sección se reordena sola
   cuando entren proyectos nuevos, sin tocar el componente. */
function projectRails(projects) {
  const byCat = new Map();
  projects.forEach((p) => {
    if (!byCat.has(p.cat)) byCat.set(p.cat, []);
    byCat.get(p.cat).push(p);
  });

  /* Una primera fila con todo el catálogo: es la que da la medida del
     volumen de trabajo, y al desbordar deja claro que las filas se
     recorren en horizontal antes de llegar a las de categoría. */
  const rails = [{ key: 'todos', title: 'Todos los trabajos', items: projects }];
  const leftovers = [];
  byCat.forEach((items, cat) => {
    if (items.length >= 2) rails.push({ key: cat, title: cat, items });
    else leftovers.push(...items);
  });
  if (leftovers.length) rails.push({ key: 'otros', title: 'Otros formatos', items: leftovers });
  return rails;
}

export function Portfolio() {
  const featured = PROJECTS[0];
  const rails = projectRails(PROJECTS);

  return (
    <section id="trabajo" className="port">
      <div className="port-billboard">
        <div className="port-billboard-art">
          <ImageSlot src={featured.img} alt="" shape="rect" label={featured.title} dark />
        </div>
        <div className="port-billboard-scrim" />

        <div className="port-billboard-inner" style={{ ...WRAP }}>
          <Eyebrow n="05" light>
            Portafolio
          </Eyebrow>
          <h2 className="port-billboard-title">Nuestros últimos trabajos</h2>
          <p className="port-billboard-copy">
            Documentales, campañas 360° y eventos para instituciones, ONGs y marcas. Explora por formato.
          </p>
          <div className="port-billboard-cta">
            <a href="#contacto" className="btnx btnx-primary" style={{ padding: '15px 28px', fontSize: 15 }}>
              Escríbenos <Icon name="arrow-right" size={17} />
            </a>
            <a href="#originals" className="btnx btnx-glass" style={{ padding: '15px 28px', fontSize: 15 }}>
              <Icon name="info" size={17} /> Sidartha Originals
            </a>
          </div>
        </div>
      </div>

      <div className="port-rails">
        {rails.map((r) => (
          <Rail key={r.key} id={`port-${r.key}`} title={r.title}>
            {r.items.map((p) => (
              <article key={p.id} className="card card--wide">
                {/* Todavía no hay ficha por proyecto, así que la tarjeta lleva
                    al contacto. El aria-label lo dice: si no, un lector de
                    pantalla anuncia catorce enlaces distintos que van al
                    mismo sitio sin explicar por qué. */}
                <a className="card-link" href="#contacto" aria-label={`${p.title} — escríbenos para ver este trabajo`}>
                  <div className="card-art">
                    {/* Etiqueta corta: el título va justo debajo de la ficha y
                        repetirlo dentro lo duplicaba en pantalla. */}
                    <ImageSlot src={p.img} alt="" shape="rect" label="Imagen" dark />
                  </div>
                  <h4 className="card-title">{p.title}</h4>
                  <p className="card-meta">{p.cat}</p>
                </a>
              </article>
            ))}
          </Rail>
        ))}
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section style={{ ...WRAP, padding: '84px 40px' }}>
      <div className="stag grid-4-tight" data-stag style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32 }}>
        {STATS.map((s, i) => (
          <div key={i} style={{ borderLeft: '2px solid var(--teal-500)', paddingLeft: 22 }}>
            <div
              className="count"
              data-val={s.k}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(40px,4.5vw,60px)',
                color: 'var(--navy-900)',
                lineHeight: 1,
              }}
            >
              {s.k}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--color-text-muted)', marginTop: 10 }}>
              {s.v}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- budh.ai band ---------- */
export function BudhAi() {
  return (
    <section id="budhai" style={{ background: 'var(--navy-900)', color: '#fff', padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="pat" style={{ position: 'absolute', inset: 0, opacity: 0.05 }} />
      <div className="grid-2" style={{ ...WRAP, position: 'relative', display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 64, alignItems: 'center' }}>
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <div style={{ position: 'relative', width: 190, height: 190 }}>
            <div className="ring" />
            <div style={{ position: 'absolute', inset: 11, borderRadius: '50%', overflow: 'hidden', background: 'var(--navy-800)' }}>
              <ImageSlot
                src={PHOTOS.budhaiRetrato.img}
                alt={PHOTOS.budhaiRetrato.alt}
                shape="circle"
                label={PHOTOS.budhaiRetrato.label}
                dark
              />
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 38, letterSpacing: '-.03em' }}>
              budh<span style={{ color: 'var(--teal-500)' }}>.ai</span>
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--teal-300)', marginTop: 3 }}>
              la conciencia de Sidartha
            </div>
          </div>
        </div>

        <div>
          <div className="reveal">
            <Eyebrow n="06" light>
              Inteligencia con criterio
            </Eyebrow>
          </div>
          <MaskHead
            lines={['No resuelve rápido.', 'Pregunta primero.']}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(30px,3.6vw,50px)',
              color: '#fff',
              margin: '18px 0 22px',
              letterSpacing: '-.025em',
              lineHeight: 1.1,
            }}
          />
          <p
            className="reveal"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 17.5,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,.72)',
              maxWidth: 560,
              margin: '0 0 26px',
            }}
          >
            <strong style={{ color: '#fff', fontWeight: 600 }}>budh</strong> es la raíz sánscrita de «despertar» — de
            ella nacen <em style={{ fontStyle: 'normal' }}>bodhi</em> y <em style={{ fontStyle: 'normal' }}>buddha</em>.
            Nuestra conciencia AI hereda el método, no el título: escucha, pregunta y después propone.
          </p>

          <div className="stag grid-2" data-stag style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 30 }}>
            {[
              ['message-circle-question', 'Pregunta antes de responder', 'Máximo dos por turno.'],
              ['minimize-2', 'Responde corto', 'Tres frases y para.'],
              ['circle-slash', 'Admite el límite', '«No lo sé» es válido.'],
              ['gift', 'Devuelve el crédito', 'La historia es tuya.'],
            ].map(([ic, h, d]) => (
              <div
                key={h}
                style={{
                  display: 'flex',
                  gap: 13,
                  alignItems: 'flex-start',
                  padding: '15px 17px',
                  border: '1px solid rgba(255,255,255,.13)',
                  borderRadius: 14,
                }}
              >
                <span style={{ color: 'var(--teal-400)', marginTop: 1, flexShrink: 0 }}>
                  <Icon name={ic} size={17} />
                </span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 14.5, color: '#fff', fontWeight: 500 }}>{h}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.5)' }}>{d}</div>
                </div>
              </div>
            ))}
          </div>

          {/* The kit linked to ../budh-ai/index.html — a separate UI kit that is
              not part of this build. Points at the contact form until it ships. */}
          <a href="#contacto" className="btnx btnx-primary" style={{ padding: '16px 30px', fontSize: 16 }}>
            Conversa con budh.ai <Icon name="arrow-up-right" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Sidartha Originals ----------
 * La línea editorial propia, presentada como un catálogo: un billboard
 * destacado y carruseles de fichas. Fondo negro cine (no navy) para
 * separarla del sitio corporativo, como pide la guía.
 *
 * El billboard toma la primera colección que ya tiene póster. No se elige a
 * mano para que siga funcionando cuando cambie el orden o lleguen pósters
 * nuevos. */
export function Originals() {
  const featured = ORIGINALS_COLLECTIONS.find((c) => c.poster) || ORIGINALS_COLLECTIONS[0];

  return (
    <section id="originals" className="orig">
      <div className="orig-billboard">
        {featured.poster && (
          <img className="orig-billboard-bg" src={featured.poster} alt="" aria-hidden="true" />
        )}
        <div className="orig-billboard-scrim" />

        <div className="orig-billboard-inner" style={{ ...WRAP }}>
          <div className="orig-lockup">
            <span className="orig-lockup-a">Sidartha</span>
            <span className="orig-lockup-b">Originals</span>
          </div>

          <h2 className="orig-billboard-title">
            Historias propias con
            <br />
            mirada documental.
          </h2>

          <p className="orig-billboard-copy">{ORIGINALS_INTRO}</p>

          <ul className="orig-formats">
            {ORIGINALS_FORMATS.map((f) => (
              <li key={f.label}>
                <span className="orig-formats-n">{f.n}</span>
                {f.label}
              </li>
            ))}
          </ul>

          <div className="orig-billboard-cta">
            <a href="#contacto" className="btnx btnx-light" style={{ padding: '15px 28px', fontSize: 15 }}>
              <Icon name="arrow-right" size={17} /> Presentar un proyecto
            </a>
            <a href="#trabajo" className="btnx btnx-glass" style={{ padding: '15px 28px', fontSize: 15 }}>
              <Icon name="info" size={17} /> Ver el trabajo
            </a>
          </div>
        </div>
      </div>

      {/* Sin WRAP inline: su `padding: 0 40px` es un atajo que pone el padding
          vertical a 0 y, al ser inline, gana siempre. El ancho y el aire los
          define .orig-rails en el CSS. */}
      <div className="orig-rails">
        <Rail
          id="orig-colecciones"
          title="Colecciones editoriales"
          subtitle="Las líneas temáticas que articulan el catálogo."
        >
          {ORIGINALS_COLLECTIONS.map((c) => (
            <article key={c.slug} className="card card--poster">
              <a className="card-link" href="#contacto" aria-label={`${c.title} — escríbenos sobre esta colección`}>
                <div className="card-art">
                  {/* El título va debajo de la ficha: repetirlo dentro del
                      póster lo duplicaba en pantalla y en lectores. */}
                  <ImageSlot src={c.poster} alt="" shape="rect" label="Póster" dark />
                </div>
                <h4 className="card-title">{c.title}</h4>
                <p className="card-meta">Colección</p>
              </a>
            </article>
          ))}
        </Rail>
      </div>
    </section>
  );
}

export function Trust() {
  return (
    <section style={{ background: 'var(--navy-800)', color: '#fff', padding: '100px 0 70px' }}>
      <div style={{ ...WRAP }}>
        <div className="reveal grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', marginBottom: 58 }}>
          <div>
            <Eyebrow n="07" light>
              Confianza
            </Eyebrow>
            <MaskHead
              lines={['La confianza se refleja', 'en resultados.']}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(30px,3.6vw,46px)',
                margin: '18px 0 0',
                letterSpacing: '-.025em',
                lineHeight: 1.15,
                color: '#fff',
              }}
            />
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: 'var(--teal-200)', margin: 0 }}>
            Trabajamos con ONGs, instituciones privadas y públicas en proyectos de comunicación, sostenibilidad y
            cultura. Nuestra experiencia nos permite diseñar estrategias a la medida de cada cliente.
          </p>
        </div>
      </div>

      <p
        style={{
          ...WRAP,
          fontFamily: 'var(--font-body)',
          fontSize: 12,
          letterSpacing: '.16em',
          textTransform: 'uppercase',
          color: 'var(--navy-500)',
          marginBottom: 26,
        }}
      >
        Hemos trabajado con
      </p>
      <div style={{ ...WRAP, display: 'flex', flexWrap: 'wrap', gap: '14px 40px' }}>
        {CLIENTS.map((c, i) => (
          <span key={i} className="chip" style={{ fontSize: 30, color: 'rgba(255,255,255,.72)', fontWeight: 400 }}>
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}

export function Manifesto() {
  return (
    <section style={{ padding: '120px 0', position: 'relative', overflow: 'hidden', background: 'var(--sand-100)' }}>
      <div style={{ ...WRAP, position: 'relative', textAlign: 'center' }} className="reveal">
        <img src={MARK} alt="" style={{ width: 66, opacity: 0.9, margin: '0 auto 30px' }} />
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(28px,3.6vw,46px)',
            lineHeight: 1.3,
            margin: '0 auto',
            maxWidth: 900,
            letterSpacing: '-.015em',
            color: 'var(--navy-900)',
          }}
        >
          «No solo creamos contenido, diseñamos experiencias que{' '}
          <span style={{ color: 'var(--clay-500)' }}>conectan, inspiran y generan impacto</span>.»
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--sand-500)', marginTop: 24 }}>— En Sidartha</p>
      </div>
    </section>
  );
}

export function Contacto() {
  const [state, setState] = useState('idle'); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setState('sending');
    const ok = await submitForm('contacto', data);
    setState(ok ? 'sent' : 'error');
  };

  return (
    <section
      id="contacto"
      className="grid-2"
      style={{ ...WRAP, padding: '110px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 70 }}
    >
      <div>
        <div className="reveal">
          <Eyebrow n="08">Conecta con nosotros</Eyebrow>
        </div>
        <MaskHead
          lines={[
            <span key="c">
              Conversemos frente a un café<span style={{ color: 'var(--teal-500)' }}>.</span>
            </span>,
          ]}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(30px,3.6vw,46px)',
            color: 'var(--navy-900)',
            margin: '18px 0 18px',
            letterSpacing: '-.025em',
            lineHeight: 1.12,
          }}
        />
        <p
          className="reveal"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 17,
            lineHeight: 1.6,
            color: 'var(--color-text-secondary)',
            maxWidth: 440,
            marginBottom: 32,
          }}
        >
          Aunque sea virtual. Cuéntanos tu idea y diseñamos juntos la estrategia para contarla.
        </p>

        <div className="stag" data-stag style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {FOUNDERS.map((f) => (
            <div
              key={f.slot}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 18,
                padding: '18px 20px',
                background: 'var(--color-surface)',
                borderRadius: 18,
              }}
            >
              <div style={{ width: 62, height: 62, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, background: 'var(--navy-800)' }}>
                <ImageSlot src={f.img} alt={f.name} shape="circle" label="Foto" dark />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 500, color: 'var(--navy-900)' }}>{f.name}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 5 }}>{f.role}</div>
                <div style={{ display: 'flex', gap: 16, fontFamily: 'var(--font-body)', fontSize: 13 }}>
                  <a href={'tel:' + f.tel} style={{ color: 'var(--teal-700)', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                    <Icon name="phone" size={13} />
                    {f.tel}
                  </a>
                  <a href={'mailto:' + f.mail} style={{ color: 'var(--teal-700)', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                    <Icon name="mail" size={13} />
                    Correo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="reveal"
        style={{
          background: '#fff',
          border: '1px solid var(--color-border)',
          borderRadius: 24,
          padding: 36,
          boxShadow: 'var(--shadow-md)',
        }}
      >
        {state === 'sent' ? (
          <div
            style={{
              height: '100%',
              minHeight: 340,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: 14,
            }}
          >
            <span
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'var(--teal-100)',
                color: 'var(--teal-700)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon name="check" size={30} />
            </span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24, color: 'var(--navy-900)', margin: 0 }}>
              ¡Gracias!
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', margin: 0 }}>
              Te contactaremos muy pronto.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Input label="Nombre" name="nombre" required placeholder="Tu nombre" />
            <Input label="Correo" name="correo" type="email" required placeholder="tu@correo.com" />
            <Textarea
              label="Cuéntanos sobre tu proyecto"
              name="mensaje"
              required
              rows={4}
              placeholder="Una idea, un evento, una historia…"
            />
            <Button size="lg" type="submit" disabled={state === 'sending'}>
              {state === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
            </Button>
            {state === 'error' && (
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#D6584C', margin: 0 }}>
                No pudimos enviar el mensaje. Escríbenos a{' '}
                <a href="mailto:sidartha@sidarthafilms.com" style={{ color: 'var(--teal-700)' }}>
                  sidartha@sidarthafilms.com
                </a>
                .
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}

export function CallCTA() {
  return (
    <section style={{ background: 'var(--navy-900)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <img src={MARK} alt="" style={{ position: 'absolute', left: -70, bottom: -70, width: 340, opacity: 0.08 }} />
      <div
        style={{
          ...WRAP,
          padding: '90px 40px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 30,
        }}
        className="reveal"
      >
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(30px,3.4vw,44px)', margin: 0, letterSpacing: '-.025em' }}>
            ¿Tienes clara tu idea?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--teal-200)', marginTop: 12 }}>
            Agenda 30 minutos con nuestro equipo — hablarás directamente con nosotros.
          </p>
        </div>
        <a href="#contacto" className="btnx btnx-primary" style={{ padding: '18px 34px', fontSize: 17 }}>
          <Icon name="calendar-days" size={19} /> Agenda una llamada
        </a>
      </div>
    </section>
  );
}

function Newsletter() {
  const [state, setState] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setState('sending');
    const ok = await submitForm('newsletter', data);
    setState(ok ? 'ok' : 'error');
  };

  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,.1)' }}>
      <div className="grid-2" style={{ ...WRAP, padding: '48px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(22px,2.4vw,30px)', color: '#fff', margin: 0 }}>
            Historias, proyectos y novedades.
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--navy-500)', marginTop: 8 }}>
            Suscríbete y recibe lo mejor de Sidartha.
          </p>
        </div>

        {state === 'ok' ? (
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--teal-300)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon name="check" size={18} /> ¡Suscripción registrada!
          </p>
        ) : (
          <form onSubmit={onSubmit} style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <input className="nlinput" type="email" name="correo" required placeholder="tu@correo.com" aria-label="Correo" />
            <button
              className="btnx btnx-primary"
              type="submit"
              disabled={state === 'sending'}
              style={{ padding: '13px 24px', fontSize: 15, whiteSpace: 'nowrap' }}
            >
              {state === 'sending' ? 'Enviando…' : 'Suscribirme'} <Icon name="arrow-right" size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export function Footer({ onLegal }) {
  const cols = [
    {
      h: 'Explorar',
      links: [
        ['Inicio', '#top'],
        ['Nosotros', '#nosotros'],
        ['Áreas', '#areas'],
        ['Trabajo', '#trabajo'],
        ['Contacto', '#contacto'],
      ],
    },
    {
      h: 'Servicios',
      links: [
        ['Comunicación Integral', '#areas'],
        ['Producción Audiovisual', '#areas'],
        ['Network', '#areas'],
        ['Sidartha Originals', '#originals'],
        ['budh.ai', '#budhai'],
      ],
    },
  ];

  return (
    <footer style={{ background: 'var(--navy-800)', color: '#fff' }}>
      <Newsletter />

      <div
        className="footer-grid"
        style={{ ...WRAP, padding: '64px 40px', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.1fr', gap: 40 }}
      >
        <div>
          <img src={HORIZ_LIGHT} alt="Sidartha Comunicación" style={{ height: 56, marginBottom: 20 }} />
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 19, maxWidth: 260, lineHeight: 1.35, margin: '0 0 20px' }}>
            Sabemos contar historias.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            {SOCIAL.filter((s) => s.href).map((s) => (
              <a
                key={s.icon}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.h}>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--navy-500)',
                marginBottom: 16,
              }}
            >
              {col.h}
            </div>
            {col.links.map(([l, h]) => (
              <a key={l} href={h} style={{ display: 'block', color: 'var(--teal-200)', textDecoration: 'none', fontSize: 15, marginBottom: 11 }}>
                {l}
              </a>
            ))}
          </div>
        ))}

        <div>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: 'var(--navy-500)',
              marginBottom: 16,
            }}
          >
            Contacto
          </div>
          <a href="mailto:sidartha@sidarthafilms.com" style={{ display: 'block', color: 'var(--teal-200)', textDecoration: 'none', fontSize: 15, marginBottom: 11 }}>
            sidartha@sidarthafilms.com
          </a>
          <a href="tel:0998103186" style={{ display: 'block', color: 'var(--teal-200)', textDecoration: 'none', fontSize: 15, marginBottom: 11 }}>
            099 810 3186
          </a>
          <a href="tel:0998373892" style={{ display: 'block', color: 'var(--teal-200)', textDecoration: 'none', fontSize: 15, marginBottom: 11 }}>
            099 837 3892
          </a>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--navy-500)', marginTop: 6, lineHeight: 1.5 }}>
            Ecuador
            <br />
            @sidarthafilmsec · @sidarthacomunicacion
          </p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,.1)' }}>
        <div
          style={{
            ...WRAP,
            padding: '22px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 14,
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            color: 'var(--navy-500)',
          }}
        >
          <span>© {new Date().getFullYear()} Sidartha Comunicación · Todos los derechos reservados</span>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {Object.keys(LEGAL).map((k) => (
              <button key={k} className="flink" onClick={() => onLegal(k)}>
                {LEGAL[k].label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function LegalModal({ tab, setTab, onClose }) {
  useEffect(() => {
    const esc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', esc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', esc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="lm-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={LEGAL[tab].label}>
      <div className="lm-panel" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '24px 34px 16px' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {Object.keys(LEGAL).map((k) => (
              <button key={k} className={'lm-tab' + (k === tab ? ' on' : '')} onClick={() => setTab(k)}>
                {LEGAL[k].label}
              </button>
            ))}
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              border: '1px solid var(--color-border)',
              background: '#fff',
              color: 'var(--navy-800)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <Icon name="x" size={18} />
          </button>
        </div>
        <div className="lm-body">
          <h4 style={{ marginTop: 0 }}>{LEGAL[tab].label}</h4>
          {LEGAL[tab].body.map((row, i) => (row[0] === 'h' ? <h4 key={i}>{row[1]}</h4> : <p key={i}>{row[1]}</p>))}
        </div>
      </div>
    </div>
  );
}
