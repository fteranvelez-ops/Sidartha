import { useRef, useState } from 'react';
import Icon from './components/Icon.jsx';
import useMotion from './lib/useMotion.js';
import { Nav, Hero, KineticMarquee, About, Fundamentos, Statement, Departments, Process } from './sections/parts.jsx';
import { Portfolio, Stats, BudhAi, Trust, Manifesto, Contacto, CallCTA, Footer, LegalModal } from './sections/home.jsx';

export default function App() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const topRef = useRef(null);
  const progRef = useRef(null);
  const launchRef = useRef(null);
  const [legal, setLegal] = useState(null);

  useMotion({ ringRef, dotRef, topRef, progRef, launchRef });

  return (
    <div>
      <div ref={progRef} className="prog" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />

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
        Pregúntale a budh.ai
      </a>

      {legal && <LegalModal tab={legal} setTab={setLegal} onClose={() => setLegal(null)} />}
    </div>
  );
}
