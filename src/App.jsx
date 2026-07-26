import { useRef, useState } from 'react';
import Icon from './components/Icon.jsx';
import useMotion from './lib/useMotion.js';
import { Nav, Hero, KineticMarquee, About, Fundamentos, Statement, Departments, Process } from './sections/parts.jsx';
import { Portfolio, Stats, Originals, BudhAi, Trust, Manifesto, Contacto, CallCTA, Footer, LegalModal } from './sections/home.jsx';

export default function App() {
  const topRef = useRef(null);
  const launchRef = useRef(null);
  const [legal, setLegal] = useState(null);

  useMotion({ topRef, launchRef });

  return (
    <div>
      <Nav />
      <Hero />
      <KineticMarquee />
      <About />
      <Fundamentos />
      <Statement />
      <Departments />
      <Process />
      <Portfolio />
      <Stats />
      <Originals />
      <BudhAi />
      <Trust />
      <Manifesto />
      <Contacto />
      <CallCTA />
      <Footer onLegal={setLegal} />

      <button
        ref={topRef}
        className="totop"
        aria-label="Volver arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon name="arrow-up" size={21} />
      </button>

      <a ref={launchRef} href="#budhai" className="launcher">
        <span style={{ position: 'relative', width: 34, height: 34, flexShrink: 0 }}>
          <span className="ring" style={{ borderColor: 'var(--teal-400)' }} />
          <span style={{ position: 'absolute', inset: 6, borderRadius: '50%', background: 'var(--teal-500)' }} />
        </span>
        <span className="launcher-label">Pregúntale a budh.ai</span>
      </a>

      {legal && <LegalModal tab={legal} setTab={setLegal} onClose={() => setLegal(null)} />}
    </div>
  );
}
