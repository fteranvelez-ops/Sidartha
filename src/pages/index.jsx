/*
 * Las páginas del sitio.
 *
 * Cada entrada del menú es una página con contenido propio, no un tramo de
 * una página larga. La portada resume y enlaza; las interiores desarrollan.
 */
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { ROUTES } from '../routes.js';
import { WRAP, DEPARTMENTS, ORIGINALS_FORMATS, ORIGINALS_INTRO } from '../data/site.js';
import { LEGAL } from '../data/legal.js';
import { CLIENTS_LOGOS } from '../data/clients.js';
import { COMPANY_FACTS, SERVICES_OFFICIAL } from '../data/research.js';
import { ALL_VIDEOS, VIDEO_COLLECTIONS, YT_CHANNEL } from '../data/videos.js';
import { Hero, KineticMarquee, About, Fundamentos, Statement, Departments, Process } from '../sections/parts.jsx';
import { Portfolio, Stats, BudhAi, Manifesto, Contacto, CallCTA } from '../sections/home.jsx';
import { DirectorSection, Filmography } from '../sections/director.jsx';
import { VideoCatalogue, ClientWall } from '../sections/videos.jsx';
import Brief from '../sections/brief.jsx';

/* Cabecera de las páginas interiores. La portada no la usa: allí manda el Hero. */
function PageHead({ eyebrow, title, lead }) {
  return (
    <header className="phead">
      <div style={{ ...WRAP }}>
        <Reveal>
          <p className="phead-eyebrow">{eyebrow}</p>
          <h1 className="phead-title">{title}</h1>
          {lead && <p className="phead-lead">{lead}</p>}
        </Reveal>
      </div>
    </header>
  );
}

/* Cierre de página: lleva al brief, que es la conversión que importa. */
function EndCTA({
  title = '¿Empezamos un proyecto?',
  lead = 'Cuéntanos qué necesitas en unos minutos y te respondemos con una propuesta.',
  cta = 'Comenzar el brief',
  to = ROUTES.proyecto,
}) {
  return (
    <section className="endcta">
      <div style={{ ...WRAP }}>
        <Reveal className="endcta-inner">
          <div>
            <h2>{title}</h2>
            <p>{lead}</p>
          </div>
          <Link to={to} className="btnx btnx-primary" style={{ padding: '16px 30px', fontSize: 16 }}>
            {cta} <Icon name="arrow-right" size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* Tarjetas que llevan de una página a la siguiente. Sin esto, cada página
   interior es un callejón sin salida. */
function MoreLinks({ items }) {
  return (
    <section className="more">
      <div style={{ ...WRAP }}>
        <Reveal>
          <p className="more-eyebrow">Sigue por aquí</p>
        </Reveal>
        <div className="more-grid">
          {items.map((it, i) => (
            <Reveal key={it.to} delay={i * 60}>
              <Link to={it.to} className="more-card">
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
                <span className="more-go">
                  Ver <Icon name="arrow-right" size={16} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <KineticMarquee />
      <About />
      <Fundamentos />
      <Statement />
      <Stats />
      <ClientWall clients={CLIENTS_LOGOS} />
      <Manifesto />
      <MoreLinks
        items={[
          { to: ROUTES.trabajo, title: 'Nuestro trabajo', desc: 'Documentales, campañas y eventos para instituciones y marcas.' },
          { to: ROUTES.originals, title: 'Sidartha Originals', desc: `${ALL_VIDEOS.length} piezas publicadas en nuestro canal.` },
          { to: ROUTES.nosotros, title: 'Quiénes somos', desc: 'El equipo, la dirección y la obra documental.' },
        ]}
      />
      <CallCTA />
    </>
  );
}

export function NosotrosPage() {
  return (
    <>
      <PageHead eyebrow="Quiénes somos" title="Una agencia que sabe contar historias." lead={COMPANY_FACTS.experience} />
      <About />
      <Fundamentos />
      <DirectorSection />
      <Filmography />
      <Stats />
      <ClientWall clients={CLIENTS_LOGOS} />
      <MoreLinks
        items={[
          { to: ROUTES.areas, title: 'Qué hacemos', desc: 'Las tres áreas y cómo trabajamos.' },
          { to: ROUTES.trabajo, title: 'Nuestro trabajo', desc: 'El portafolio por formato.' },
        ]}
      />
      <EndCTA />
    </>
  );
}

export function AreasPage() {
  return (
    <>
      <PageHead
        eyebrow="Qué hacemos"
        title="Nuestras áreas"
        lead="Son tres, pero trabajan al unísono. Ninguna produce sin que las otras dos hayan entendido el problema."
      />

      {/* Las líneas de servicio tal como las nombra la empresa. */}
      <section className="svc">
        <div style={{ ...WRAP }}>
          <Reveal>
            <p className="svc-eyebrow">Líneas de servicio</p>
          </Reveal>
          <div className="svc-grid">
            {SERVICES_OFFICIAL.map((s, i) => (
              <Reveal key={s} className="svc-item" delay={i * 60}>
                <span className="svc-n">{String(i + 1).padStart(2, '0')}</span>
                <h2>{s}</h2>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Departments />
      <Process />
      <MoreLinks
        items={[
          { to: ROUTES.trabajo, title: 'Ver el trabajo', desc: 'Cómo se traduce esto en piezas concretas.' },
          { to: ROUTES.budhai, title: 'budh.ai', desc: 'Nuestra conciencia AI: pregunta antes de responder.' },
        ]}
      />
      <EndCTA />
    </>
  );
}

export function TrabajoPage() {
  return (
    <>
      <Portfolio as="h1" />
      <Filmography />
      <ClientWall clients={CLIENTS_LOGOS} />
      <MoreLinks
        items={[
          { to: ROUTES.originals, title: 'Sidartha Originals', desc: `${ALL_VIDEOS.length} piezas en vídeo, agrupadas por proyecto.` },
          { to: ROUTES.areas, title: 'Nuestras áreas', desc: 'Qué hacemos y cómo lo hacemos.' },
        ]}
      />
      <EndCTA />
    </>
  );
}

export function OriginalsPage() {
  return (
    <>
      <VideoCatalogue as="h1" />

      {/* Lo que Originals quiere ser, además de lo ya publicado. */}
      <section className="oform">
        <div style={{ ...WRAP }}>
          <Reveal>
            <h2 className="oform-head">La línea editorial</h2>
            <p className="oform-lead">{ORIGINALS_INTRO}</p>
          </Reveal>
          <div className="oform-grid">
            {ORIGINALS_FORMATS.map((f, i) => (
              <Reveal key={f.label} className="oform-item" delay={i * 60}>
                <span>{f.n}</span>
                {f.label}
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="oform-note">
              El catálogo completo vive en{' '}
              <a href={YT_CHANNEL.url} target="_blank" rel="noopener noreferrer">
                nuestro canal de YouTube
              </a>
              . {VIDEO_COLLECTIONS.length} colecciones, {ALL_VIDEOS.length} piezas.
            </p>
          </Reveal>
        </div>
      </section>

      <EndCTA
        title="¿Tienes una historia que contar?"
        lead="Si crees que encaja con lo que hacemos, cuéntanosla."
        cta="Presentar un proyecto"
      />
    </>
  );
}

export function BudhAiPage() {
  return (
    <>
      <BudhAi as="h1" />
      <MoreLinks
        items={[
          { to: ROUTES.areas, title: 'Nuestras áreas', desc: 'Dónde encaja budh.ai en lo que hacemos.' },
          { to: ROUTES.nosotros, title: 'Quiénes somos', desc: 'La gente detrás del método.' },
        ]}
      />
      <EndCTA />
    </>
  );
}

export function ProyectoPage() {
  return (
    <>
      <PageHead
        eyebrow="Empecemos"
        title="Cuéntanos tu proyecto."
        lead="Nueve preguntas, una por pantalla. Unos cinco minutos. Al final ves todo lo que respondiste antes de enviarlo."
      />
      <Brief />
    </>
  );
}

export function ContactoPage() {
  return (
    <>
      <PageHead
        eyebrow="Conecta con nosotros"
        title="Conversemos frente a un café."
        lead="Aunque sea virtual. Si prefieres contarnos el proyecto con calma, usa el brief guiado."
      />
      <Contacto />
      <MoreLinks
        items={[{ to: ROUTES.proyecto, title: 'Brief de proyecto', desc: 'Nueve preguntas guiadas para cotizar bien.' }]}
      />
    </>
  );
}

/* Las dos páginas legales comparten plantilla. */
export function LegalPage({ which }) {
  const doc = LEGAL[which];
  const otherKey = which === 'terminos' ? 'privacidad' : 'terminos';

  return (
    <>
      <PageHead eyebrow="Legal" title={doc.label} lead={`Última actualización: ${doc.updated}.`} />
      <section className="legal-page">
        <div style={{ ...WRAP }}>
          <Reveal>
            <div className="legal-body">
              {doc.body.map(([tag, text], i) => {
                if (tag === 'h') return <h2 key={i}>{text}</h2>;
                if (tag === 'li') return <p key={i} className="legal-li">{text}</p>;
                return <p key={i}>{text}</p>;
              })}
            </div>
            <p className="legal-meta">
              {COMPANY_FACTS.tradeName} · RUC {COMPANY_FACTS.ruc} · Licencia {COMPANY_FACTS.fsc}
              <br />
              {COMPANY_FACTS.fscNote}
            </p>
            <p className="legal-meta">
              <Link to={ROUTES[otherKey]}>Leer también: {LEGAL[otherKey].label}</Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function NotFoundPage() {
  return (
    <section className="nf">
      <div style={{ ...WRAP }}>
        <p className="nf-code">404</p>
        <h1>Esta página no existe.</h1>
        <p className="nf-lead">
          Puede que el enlace esté roto o que la página se haya movido. Desde el inicio llegas a todo.
        </p>
        <Link to={ROUTES.home} className="btnx btnx-primary" style={{ padding: '15px 28px', fontSize: 15 }}>
          Volver al inicio <Icon name="arrow-right" size={17} />
        </Link>
      </div>
    </section>
  );
}
