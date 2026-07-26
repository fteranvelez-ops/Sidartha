import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Icon from './components/Icon.jsx';
import useMotion from './lib/useMotion.js';
import { ROUTES } from './routes.js';
import { Nav } from './sections/parts.jsx';
import { Footer } from './sections/home.jsx';
import {
  HomePage,
  NosotrosPage,
  AreasPage,
  TrabajoPage,
  OriginalsPage,
  BudhAiPage,
  ContactoPage,
  LegalPage,
  NotFoundPage,
} from './pages/index.jsx';

/*
 * Al navegar entre páginas el navegador conserva el scroll, así que una
 * página nueva se abriría por la mitad. Se sube al principio en cada
 * cambio de ruta — salvo cuando la URL trae un ancla, que entonces manda
 * el ancla.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

/*
 * Un cambio de ruta no mueve el foco por sí solo: quien navega con teclado o
 * lector de pantalla se queda donde estaba y no se entera de que la página
 * cambió. Esto lleva el foco al contenido y lo anuncia.
 */
function FocusOnRouteChange({ targetRef }) {
  const { pathname } = useLocation();
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    /* preventScroll es imprescindible: enfocar un elemento lo desplaza a la
       vista, y <main> empieza justo debajo de la barra fija, así que cada
       navegación aterrizaba 77px más abajo del principio de la página. */
    targetRef.current?.focus({ preventScroll: true });
  }, [pathname, targetRef]);
  return null;
}

export default function App() {
  const topRef = useRef(null);
  const mainRef = useRef(null);

  useMotion({ topRef });

  return (
    <div>
      <ScrollToTop />
      <FocusOnRouteChange targetRef={mainRef} />

      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>

      <Nav />

      <main id="contenido" ref={mainRef} tabIndex={-1}>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.nosotros} element={<NosotrosPage />} />
          <Route path={ROUTES.areas} element={<AreasPage />} />
          <Route path={ROUTES.trabajo} element={<TrabajoPage />} />
          <Route path={ROUTES.originals} element={<OriginalsPage />} />
          <Route path={ROUTES.budhai} element={<BudhAiPage />} />
          <Route path={ROUTES.contacto} element={<ContactoPage />} />
          <Route path={ROUTES.terminos} element={<LegalPage which="terminos" />} />
          <Route path={ROUTES.privacidad} element={<LegalPage which="privacidad" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />

      <button
        ref={topRef}
        className="totop"
        aria-label="Volver arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon name="arrow-up" size={21} />
      </button>
    </div>
  );
}
