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
import { Marquee, Eyebrow, MaskHead, ImageSlot } from '../components/primitives.jsx';
import { Input, Textarea, Button } from '../components/ui.jsx';
import { submitForm } from '../lib/forms.js';
import { WRAP, MARK, HORIZ_LIGHT, PROJECTS, STATS, CLIENTS, FOUNDERS, LEGAL } from '../data/site.js';

/* ---------- pinned horizontal gallery ---------- */
export function Portfolio() {
  return (
    <section id="trabajo" style={{ background: 'var(--white)', borderTop: '1px solid var(--color-border)' }}>
      <div style={{ ...WRAP, paddingTop: 100, paddingBottom: 20 }}>
        <div
          className="reveal"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}
        >
          <div>
            <Eyebrow n="05">Portafolio</Eyebrow>
            <MaskHead
              lines={['Nuestros últimos trabajos']}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(32px,4vw,52px)',
                color: 'var(--navy-900)',
                margin: '18px 0 0',
                letterSpacing: '-.025em',
              }}
            />
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              color: 'var(--color-text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: 9,
            }}
          >
            <Icon name="mouse-pointer-2" size={16} /> Desplázate para recorrer la galería
          </p>
        </div>
      </div>

      {/* tall wrapper drives the horizontal travel of the sticky stage */}
      <div className="pin-wrap" data-pin style={{ height: '320vh' }}>
        <div className="pin-stage">
          <div className="pin-track" data-pin-track>
            {PROJECTS.map((p) => (
              <div key={p.id} className={'pcell' + (p.tall ? ' tall' : '')}>
                <div className="pimg">
                  <ImageSlot shape="rect" label={p.title} dark />
                </div>
                <div className="pscrim" />
                <div className="pmeta">
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 12,
                        letterSpacing: '.12em',
                        textTransform: 'uppercase',
                        color: 'var(--teal-300)',
                        fontWeight: 600,
                        marginBottom: 7,
                      }}
                    >
                      {p.cat}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 400,
                        fontSize: p.tall ? 22 : 27,
                        color: '#fff',
                        lineHeight: 1.12,
                      }}
                    >
                      {p.title}
                    </div>
                  </div>
                  <span className="parrow">
                    <Icon name="arrow-up-right" size={20} />
                  </span>
                </div>
              </div>
            ))}

            <div
              className="pcell"
              style={{
                background: 'var(--navy-900)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'min(34vw,420px)',
              }}
            >
              <div style={{ textAlign: 'center', padding: 30 }}>
                <img src={MARK} alt="" style={{ width: 74, margin: '0 auto 20px', opacity: 0.9 }} />
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 300,
                    fontSize: 25,
                    color: '#fff',
                    marginBottom: 18,
                    lineHeight: 1.2,
                  }}
                >
                  ¿Vemos el portafolio completo?
                </div>
                <a href="#contacto" className="btnx btnx-light" style={{ padding: '13px 26px', fontSize: 15 }}>
                  Escríbenos <Icon name="arrow-right" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
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
              <ImageSlot shape="circle" label="Retrato budh.ai" dark />
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
          <a href="#contacto" data-magnetic className="btnx btnx-primary" style={{ padding: '16px 30px', fontSize: 16 }}>
            Conversa con budh.ai <Icon name="arrow-up-right" size={18} />
          </a>
        </div>
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
      <Marquee dur="40s" sep={<span style={{ margin: '0 40px', color: 'var(--teal-400)' }}>·</span>}>
        {CLIENTS.map((c, i) => (
          <span key={i} className="chip" style={{ fontSize: 30, color: 'rgba(255,255,255,.72)', fontWeight: 400 }}>
            {c}
          </span>
        ))}
      </Marquee>
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
                <ImageSlot shape="circle" label="Foto" dark />
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
      <img
        src={MARK}
        alt=""
        data-par
        data-speed="0.08"
        style={{ position: 'absolute', left: -70, bottom: -70, width: 340, opacity: 0.08 }}
      />
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
        <a href="#contacto" data-magnetic className="btnx btnx-primary" style={{ padding: '18px 34px', fontSize: 17 }}>
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
          <form onSubmit={onSubmit} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <input className="nlinput" type="email" name="correo" required placeholder="tu@correo.com" aria-label="Correo" />
            <button
              data-magnetic
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
            {['instagram', 'facebook', 'globe'].map((ic) => (
              <a
                key={ic}
                href="#top"
                aria-label={ic}
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
                <Icon name={ic} size={18} />
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
