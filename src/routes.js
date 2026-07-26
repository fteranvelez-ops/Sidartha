/*
 * Mapa de rutas, en un archivo aparte porque lo consumen tres sitios: el
 * router, la navegación y el footer. Tenerlo una sola vez evita que un
 * enlace del footer sobreviva a una ruta que ya se renombró.
 */
export const ROUTES = {
  home: '/',
  nosotros: '/nosotros',
  areas: '/areas',
  trabajo: '/trabajo',
  originals: '/originals',
  budhai: '/budh-ai',
  contacto: '/contacto',
  proyecto: '/proyecto',
  terminos: '/terminos',
  privacidad: '/privacidad',
};

/* Barra de navegación. budh.ai queda fuera a propósito: la página sigue
   publicada y se llega desde el footer y desde Áreas, pero no compite en el
   menú con las secciones que sostienen el negocio. */
export const NAV_LINKS = [
  { label: 'Nosotros', to: ROUTES.nosotros },
  { label: 'Áreas', to: ROUTES.areas },
  { label: 'Trabajo', to: ROUTES.trabajo },
  { label: 'Originals', to: ROUTES.originals },
];

export const LEGAL_LINKS = [
  { label: 'Términos y Condiciones', to: ROUTES.terminos },
  { label: 'Política de Privacidad', to: ROUTES.privacidad },
];
