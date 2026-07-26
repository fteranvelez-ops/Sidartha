import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App.jsx';

const Router = import.meta.env.VITE_HASH_ROUTER ? HashRouter : BrowserRouter;

/* Design system, in the order styles.css declares it. */
import './styles/tokens/fonts.css';
import './styles/tokens/colors.css';
import './styles/tokens/typography.css';
import './styles/tokens/spacing.css';
import './styles/base.css';

/* Marketing site styles. */
import './styles/site.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* En producción, rutas reales: Firebase Hosting reescribe ** →
        /index.html, así que /nosotros responde igual entrando directo o
        compartiendo el enlace.

        El empaquetado de un solo archivo se abre sin servidor detrás (un
        artifact, un file://), donde no hay nada que reescriba esas rutas:
        allí se compila con VITE_HASH_ROUTER=1 y la navegación va por hash. */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
