/*
 * Sections ported from the kit's ui_kits/marketing-site/parts.jsx.
 *
 * Structure, copy and styling follow the design. Two production additions,
 * both marked inline: a mobile nav (the 1440px mockup had none, so links
 * would otherwise be unreachable on a phone) and responsive class hooks
 * consumed by the media queries in styles/site.css.
 */
import { useState } from 'react';
import Icon from '../components/Icon.jsx';
import { Marquee, Eyebrow, MaskHead, ImageSlot } from '../components/primitives.jsx';
import { WRAP, MARK, HORIZ_DARK, OFFICE, DEPARTMENTS, VALUES, PROCESS } from '../data/site.js';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const links = [
    { label: 'Inicio', href: '#top' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Áreas', href: '#areas' },
    { label: 'Trabajo', href: '#trabajo' },
    { label: 'budh.ai', href: '#budhai' },
  ];
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,.82)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div style={{ ...WRAP, height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#top">
          <img src={HORIZ_DARK} alt="Sidartha Comunicación" style={{ height: 40 }} />
        </a>

        <div
          className="nav-links"
          style={{ display: 'flex', alignItems: 'center', gap: 30, fontFamily: 'var(--font-body)', fontSize: 15 }}
        >
          {links.map((l) => (
            <a key={l.label} className="navlink" href={l.href} style={{ color: 'var(--navy-700)', textDecoration: 'none' }}>
              {l.label}
            </a>
          ))}
          {/* Production fix: the mockup opened this menu on hover from a <span>,
              so it was unreachable by keyboard and on touch. Now a real button
              that toggles on click, still opens on hover, and closes on Escape. */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
          >
            <button
              type="button"
              className="navlink"
              aria-expanded={open}
              aria-haspopup="true"
              onClick={() => setOpen((v) => !v)}
              style={{
                color: 'var(--navy-700)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                background: 'none',
                border: 'none',
                padding: 0,
                fontSize: 'inherit',
                cursor: 'pointer',
              }}
            >
              Servicios <Icon name="chevron-down" size={15} />
            </button>
            {open && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: 14,
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: 14,
                  boxShadow: 'var(--shadow-lg)',
                  padding: 8,
                  minWidth: 250,
                }}
              >
                {DEPARTMENTS.map((d) => (
                  <a
                    key={d.n}
                    href="#areas"
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'block',
                      padding: '10px 14px',
                      borderRadius: 10,
                      color: 'var(--navy-800)',
                      textDecoration: 'none',
                      fontSize: 14,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-surface)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <span style={{ color: 'var(--teal-600)', fontWeight: 600, marginRight: 8 }}>{d.n}</span>
                    {d.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="#contacto" data-magnetic className="btnx btnx-primary" style={{ padding: '11px 22px', fontSize: 14 }}>
            Conversemos <Icon name="arrow-right" size={16} />
          </a>
          {/* Production addition: mobile menu toggle. */}
          <button
            className="nav-burger"
            aria-label="Menú"
            aria-expanded={mobile}
            onClick={() => setMobile((v) => !v)}
            style={{
              display: 'none',
              width: 42,
              height: 42,
              borderRadius: '50%',
              border: '1px solid var(--color-border-strong)',
              background: '#fff',
              color: 'var(--navy-800)',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Icon name={mobile ? 'x' : 'menu'} size={18} />
          </button>
        </div>
      </div>

      {mobile && (
        <div
          className="nav-mobile"
          style={{ borderTop: '1px solid var(--color-border)', background: '#fff', padding: '10px 24px 18px' }}
        >
          {[...links, { label: 'Contacto', href: '#contacto' }].map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobile(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                color: 'var(--navy-700)',
                textDecoration: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export function Hero() {
  return (
    <header id="top" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--navy-800)', color: '#fff' }}>
        <Marquee dur="26s" sep={<span style={{ margin: '0 26px', color: 'var(--teal-400)' }}>✳</span>}>
          {['Sabemos contar historias', 'Comunicación 360°', 'Producción audiovisual', 'Eventos que conectan', 'Historias con impacto'].map(
            (t, i) => (
              <span key={i} className="chip" style={{ fontSize: 15, letterSpacing: '.14em', textTransform: 'uppercase', color: '#fff' }}>
                {t}
              </span>
            )
          )}
        </Marquee>
      </div>

      <div
        className="hero-grid"
        style={{
          ...WRAP,
          paddingTop: 92,
          paddingBottom: 92,
          display: 'grid',
          gridTemplateColumns: '1.08fr .92fr',
          gap: 60,
          alignItems: 'center',
        }}
      >
        <div>
          <div className="reveal" style={{ marginBottom: 26 }}>
            <Eyebrow>Agencia de comunicación · Ecuador</Eyebrow>
          </div>
          <MaskHead
            tag="h1"
            lines={[
              'Valoramos tu historia',
              <span key="l2">
                y tu <span style={{ fontWeight: 600, color: 'var(--teal-500)' }}>marca</span>.
              </span>,
            ]}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(44px,5vw,74px)',
              lineHeight: 1.04,
              color: 'var(--navy-900)',
              letterSpacing: '-.025em',
            }}
          />
          <p
            className="reveal"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 19,
              lineHeight: 1.6,
              color: 'var(--color-text-secondary)',
              maxWidth: 500,
              marginTop: 26,
            }}
          >
            Contamos lo que te hace único — o lo descubrimos juntos. Estrategia, producción audiovisual y eventos con
            enfoque estratégico, con más de 20 años de trayectoria.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 16, marginTop: 38, flexWrap: 'wrap' }}>
            <a href="#trabajo" data-magnetic className="btnx btnx-primary" style={{ padding: '16px 30px', fontSize: 16 }}>
              Ver nuestro trabajo <Icon name="arrow-right" size={18} />
            </a>
            <a href="#contacto" data-magnetic className="btnx btnx-ghost" style={{ padding: '16px 30px', fontSize: 16 }}>
              ¿Empezamos?
            </a>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div
            className="clipr"
            data-clip
            style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '4/5' }}
          >
            <img
              src={OFFICE}
              alt="Estudio Sidartha"
              data-par
              data-speed="-0.06"
              style={{ width: '100%', height: '110%', objectFit: 'cover' }}
            />
          </div>
          <img
            src={MARK}
            alt=""
            data-par
            data-speed="0.16"
            style={{
              position: 'absolute',
              bottom: -34,
              left: -44,
              width: 150,
              opacity: 0.9,
              filter: 'drop-shadow(0 10px 24px rgba(38,49,59,.18))',
            }}
          />
          <div
            className="reveal"
            style={{
              position: 'absolute',
              top: -20,
              right: -14,
              background: '#fff',
              borderRadius: 16,
              boxShadow: 'var(--shadow-md)',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <span
              className="count"
              data-val="20+"
              style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 300, color: 'var(--navy-800)' }}
            >
              20+
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.3 }}>
              años
              <br />
              contando
              <br />
              historias
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export function KineticMarquee() {
  const rowA = ['Historias', 'Estrategia', 'Audiovisual', 'Eventos'];
  const rowB = ['Comunicación 360°', 'Impacto', 'Producción', 'Network'];
  const row = (words, rev) => (
    <Marquee dur="30s" reverse={rev} sep={<span className="out" style={{ margin: '0 .35em' }}>—</span>}>
      {words.map((w, i) => (
        <span key={i} className={i % 2 ? 'out' : 'fill'}>
          {w}
        </span>
      ))}
    </Marquee>
  );
  return (
    <section className="kmq" style={{ padding: '70px 0', borderBottom: '1px solid var(--color-border)' }}>
      {row(rowA, false)}
      <div style={{ marginTop: 8 }}>{row(rowB, true)}</div>
    </section>
  );
}

export function About() {
  return (
    <section id="nosotros" style={{ ...WRAP, padding: '110px 40px' }}>
      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 68, alignItems: 'center' }}>
        <div>
          <div className="reveal">
            <Eyebrow n="01">Quiénes somos</Eyebrow>
          </div>
          <MaskHead
            lines={['Una agencia que sabe', 'contar historias.']}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(30px,3.6vw,48px)',
              color: 'var(--navy-900)',
              margin: '20px 0 22px',
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
              color: 'var(--color-text-secondary)',
              margin: '0 0 18px',
            }}
          >
            Somos una agencia de comunicación con un equipo de profesionales con más de{' '}
            <strong style={{ color: 'var(--navy-800)', fontWeight: 600 }}>20 años de trayectoria</strong> en la creación
            de estrategias de comunicación 360° y productos audiovisuales innovadores.
          </p>
          <p
            className="reveal"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 17.5,
              lineHeight: 1.65,
              color: 'var(--color-text-secondary)',
              margin: 0,
            }}
          >
            Diseñamos experiencias únicas para marcas, instituciones y comunidades — desde ferias y lanzamientos hasta
            documentales y foros — con una mirada estratégica y un fuerte enfoque social.
          </p>
        </div>

        <div
          className="clipr"
          data-clip
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '190px 190px', gap: 16 }}
        >
          <div style={{ gridRow: 'span 2', borderRadius: 18, overflow: 'hidden' }}>
            <ImageSlot label="Rodaje / territorio" shape="rounded" radius={18} />
          </div>
          <div style={{ borderRadius: 18, overflow: 'hidden' }}>
            <img src={OFFICE} alt="Equipo Sidartha" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ borderRadius: 18, overflow: 'hidden' }}>
            <ImageSlot label="Evento / stand" shape="rounded" radius={18} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* The four fundamentos — the brand concept made concrete. */
export function Fundamentos() {
  return (
    <section style={{ background: 'var(--color-surface)', padding: '104px 0' }}>
      <div style={{ ...WRAP }}>
        <div
          className="reveal"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 40 }}
        >
          <div>
            <Eyebrow n="02">Fundamentos</Eyebrow>
            <MaskHead
              lines={['Cuatro fundamentos', 'que sí son operativos.']}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(30px,3.6vw,48px)',
                color: 'var(--navy-900)',
                margin: '18px 0 0',
                letterSpacing: '-.025em',
                lineHeight: 1.1,
              }}
            />
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--color-text-muted)', maxWidth: 320 }}>
            No son valores de pared: cada uno describe una conducta que puedes verificar.
          </p>
        </div>

        <div className="stag grid-4-tight" data-stag style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="vcard"
              style={{
                background: '#fff',
                border: '1px solid var(--color-border)',
                borderRadius: 20,
                padding: 26,
                display: 'flex',
                flexDirection: 'column',
                minHeight: 210,
              }}
            >
              <span
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 13,
                  background: 'var(--color-accent-tint)',
                  color: 'var(--teal-700)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon name={v.icon} size={22} />
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 19, color: 'var(--navy-900)', margin: '18px 0 4px' }}>
                {v.title}
              </h3>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11.5,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'var(--teal-600)',
                  fontWeight: 600,
                  marginBottom: 10,
                }}
              >
                {v.tag}
              </span>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, color: 'var(--color-text-muted)', margin: 0 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Statement() {
  const text =
    'Nos movemos entre la comunicación online y offline, entre eventos y producción audiovisual, entre marcas y comunidades. Creamos estrategias 360° que transforman realidades.';
  return (
    <section data-fill style={{ background: 'var(--navy-900)', color: '#fff', padding: '130px 0', position: 'relative', overflow: 'hidden' }}>
      <img src={MARK} alt="" data-par data-speed="0.1" style={{ position: 'absolute', right: -80, top: '50%', width: 460, opacity: 0.07 }} />
      <div style={{ ...WRAP, position: 'relative' }}>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(28px,3.5vw,50px)',
            lineHeight: 1.28,
            margin: 0,
            maxWidth: 1000,
            letterSpacing: '-.015em',
          }}
        >
          {text.split(' ').map((w, i) => (
            <span key={i} className="fw" style={{ display: 'inline-block', color: 'rgba(255,255,255,.22)' }}>
              {w}&nbsp;
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

export function Departments() {
  return (
    <section id="areas" style={{ ...WRAP, padding: '110px 40px' }}>
      <div
        className="reveal"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 28 }}
      >
        <div>
          <Eyebrow n="03">Qué hacemos</Eyebrow>
          <MaskHead
            lines={['Nuestras áreas']}
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
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--color-text-muted)', maxWidth: 340 }}>
          Son tres, pero trabajan al unísono.
        </p>
      </div>

      <div className="stag" data-stag>
        {DEPARTMENTS.map((d) => (
          <a
            key={d.n}
            href="#trabajo"
            className="dept dept-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '96px 1.1fr 1.5fr auto',
              gap: 28,
              alignItems: 'start',
              padding: '40px 0',
              textDecoration: 'none',
            }}
          >
            <span className="dept-idx" style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 40, color: 'var(--gray-300)' }}>
              {d.n}
            </span>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 26, color: 'var(--navy-900)', margin: '0 0 6px' }}>
                {d.title}
              </h3>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  color: 'var(--teal-600)',
                  fontWeight: 600,
                }}
              >
                {d.tag}
              </span>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: '0 0 14px' }}>
                {d.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {d.chips.map((c) => (
                  <span key={c} className="schip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <span
              className="dept-go"
              style={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                border: '1px solid var(--color-border-strong)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--navy-700)',
                flexShrink: 0,
                marginTop: 4,
              }}
            >
              <Icon name="arrow-up-right" size={22} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section style={{ background: 'var(--color-surface)', padding: '110px 0' }}>
      <div style={{ ...WRAP }}>
        <div className="reveal" style={{ marginBottom: 44 }}>
          <Eyebrow n="04">Cómo trabajamos</Eyebrow>
          <MaskHead
            lines={['De la idea al impacto']}
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
        <div className="stag grid-4-tight" data-stag style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22 }}>
          {PROCESS.map((p) => (
            <div
              key={p.n}
              className="pcard"
              style={{
                background: '#fff',
                border: '1px solid var(--color-border)',
                borderRadius: 20,
                padding: 28,
                minHeight: 220,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span className="pnum" style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 44, color: 'var(--gray-300)' }}>
                {p.n}
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 20, color: 'var(--navy-900)', margin: '18px 0 10px' }}>
                {p.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, color: 'var(--color-text-muted)', margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
