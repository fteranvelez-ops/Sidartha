/*
 * Las páginas del sitio.
 *
 * Cada una compone secciones que ya existían; la diferencia con la versión
 * de una sola página es que ahora cada entrada del menú tiene su URL, se
 * puede compartir y se puede indexar por separado.
 *
 * La portada no repite las páginas enteras: muestra lo justo para dar a
 * entender qué hay detrás y enlaza. Si la portada dijera todo, las demás
 * páginas no tendrían razón de existir.
 */
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { ROUTES } from '../routes.js';
import { WRAP, LEGAL } from '../data/site.js';
import { COMPANY_FACTS, CLIENTS_VERIFIED } from '../data/research.js';
import { Hero, KineticMarquee, About, Fundamentos, Statement, Departments, Process } from '../sections/parts.jsx';
import { Portfolio, Stats, Originals, BudhAi, Trust, Manifesto, Contacto, CallCTA } from '../sections/home.jsx';
import { DirectorSection, Filmography } from '../sections/director.jsx';

/* Cabecera compartida por las páginas interiores. La portada no la usa:
   allí manda el Hero. */
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

/* Cierre común: una llamada a contacto al final de cada página interior. */
function EndCTA() {
  return (
    <section className="endcta">
      <div style={{ ...WRAP }}>
        <Reveal className="endcta-inner">
          <div>
            <h2>¿Conversamos?</h2>
            <p>Cuéntanos tu idea y diseñamos juntos la estrategia para contarla.</p>
          </div>
          <Link to={ROUTES.contacto} className="btnx btnx-primary" style={{ padding: '16px 30px', fontSize: 16 }}>
            Escríbenos <Icon name="arrow-right" size={18} />
          </Link>
        </Reveal>
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
      <Originals />
      <Trust />
      <Manifesto />
      <CallCTA />
    </>
  );
}

export function NosotrosPage() {
  return (
    <>
      <PageHead
        eyebrow="Quiénes somos"
        title="Una agencia que sabe contar historias."
        lead={COMPANY_FACTS.experience}
      />
      <About />
      <Fundamentos />
      <DirectorSection />
      <Filmography />
      <Stats />
      <Trust />
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
        lead="Son tres, pero trabajan al unísono."
      />
      <Departments />
      <Process />
      <EndCTA />
    </>
  );
}

export function TrabajoPage() {
  return (
    <>
      <Portfolio as="h1" />
      <Filmography />
      <EndCTA />
    </>
  );
}

export function OriginalsPage() {
  return (
    <>
      <Originals as="h1" />
      <EndCTA />
    </>
  );
}

export function BudhAiPage() {
  return (
    <>
      <BudhAi as="h1" />
      <EndCTA />
    </>
  );
}

export function ContactoPage() {
  return (
    <>
      <PageHead
        eyebrow="Conecta con nosotros"
        title="Conversemos frente a un café."
        lead="Aunque sea virtual. Escríbenos y te respondemos nosotros mismos."
      />
      <Contacto />
    </>
  );
}

/* Las dos páginas legales comparten plantilla: solo cambia el bloque de
   texto que reciben. */
export function LegalPage({ which }) {
  const doc = LEGAL[which];
  return (
    <>
      <PageHead eyebrow="Legal" title={doc.label} />
      <section className="legal-page">
        <div style={{ ...WRAP }}>
          <Reveal>
            {doc.body.map(([tag, text], i) =>
              tag === 'h' ? <h2 key={i}>{text}</h2> : <p key={i}>{text}</p>
            )}
            <p className="legal-meta">
              {COMPANY_FACTS.tradeName} · RUC {COMPANY_FACTS.ruc}
              <br />
              Licencia {COMPANY_FACTS.fsc} — {COMPANY_FACTS.fscNote}
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

export { CLIENTS_VERIFIED };
