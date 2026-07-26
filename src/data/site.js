/* Site content. Ported verbatim from the Claude Design handoff
   (ui_kits/marketing-site/parts.jsx + Home.jsx). */

export const MARK = '/assets/logos/sidartha-mark.png';
export const HORIZ_DARK = '/assets/logos/sidartha-horizontal-dark.png';
export const HORIZ_LIGHT = '/assets/logos/sidartha-horizontal.png';
export const OFFICE = '/assets/photography/office-sidartha-films.jpeg';

export const WRAP = { maxWidth: 1240, margin: '0 auto', padding: '0 40px' };

/* Enlaces del footer. `href: null` deja el icono fuera del render en vez de
   dejarlo apuntando a ninguna parte: un icono que no lleva a su perfil es
   peor que un icono ausente. */
export const SOCIAL = [
  { icon: 'instagram', label: 'Instagram de Sidartha', href: 'https://www.instagram.com/sidarthafilmsec/' },
  { icon: 'facebook', label: 'Facebook de Sidartha', href: 'https://www.facebook.com/sidarthacomunicacion' },
  { icon: 'globe', label: 'sidarthafilms.com', href: 'https://sidarthafilms.com' },
];

export const DEPARTMENTS = [
  {
    n: '01',
    title: 'Comunicación Integral',
    tag: 'Estrategia & Eventos',
    desc: 'Diseñamos experiencias únicas para marcas, instituciones y comunidades. Estrategias 360° que generan impacto.',
    chips: ['Ferias', 'Lanzamientos', 'Foros', 'Activaciones de marca', 'Estrategia 360°'],
  },
  {
    n: '02',
    title: 'Producción Audiovisual',
    tag: 'Historias con impacto',
    desc: 'Contamos historias auténticas con una estética poderosa y enfoque social, ambiental, cultural y comercial.',
    chips: ['Documentales', 'Series', 'Cortometrajes', 'Contenido institucional', 'Fotografía'],
  },
  {
    n: '03',
    title: 'Network',
    tag: 'Colaboración & Expansión',
    desc: 'Un ecosistema para conectar marcas, profesionales y creativos, potenciando oportunidades en diversos sectores.',
    chips: ['Redes de contacto', 'Alianzas estratégicas', 'Proyectos colaborativos', 'Innovación'],
  },
];

export const VALUES = [
  { icon: 'eye', title: 'Mirada clara', tag: 'Estrategia', desc: 'Ver el problema real antes de proponer piezas. Ninguna producción arranca sin diagnóstico.' },
  { icon: 'ear', title: 'Escucha profunda', tag: 'Investigación', desc: 'Ir al territorio y hablar con la gente. La historia la tiene el protagonista, no el brief.' },
  { icon: 'message-square-quote', title: 'Palabra justa', tag: 'Comunicación', desc: 'Decir lo necesario, sin inflar. No prometemos alcances que no podemos sostener.' },
  { icon: 'infinity', title: 'Camino continuo', tag: 'Relación', desc: 'Acompañar después del entregable. 20 años se construyen quedándose.' },
];

export const PROCESS = [
  { n: '01', title: 'Escuchamos tu historia', desc: 'Conectamos comunidades y equipos técnicos para entender qué te hace único.' },
  { n: '02', title: 'Creamos la estrategia', desc: 'Desarrollamos estrategias de comunicación 360° para el desarrollo y el cambio.' },
  { n: '03', title: 'Producimos', desc: 'Damos vida a historias con impacto: audiovisuales, eventos y experiencias.' },
  { n: '04', title: 'Generamos impacto', desc: 'Diseñamos experiencias que conectan, inspiran y transforman realidades.' },
];

/*
 * Fotografía.
 *
 * Cada `img` en null se dibuja como un placeholder etiquetado, que mantiene la
 * caja del layout y anuncia lo que falta. Para poner una foto real: copia el
 * archivo a public/assets/photography/ y escribe aquí su ruta, por ejemplo
 *
 *   img: '/assets/photography/manabi.jpg'
 *
 * La ruta arranca en / porque public/ se sirve desde la raíz del sitio.
 * No hace falta tocar ningún componente.
 */
export const PROJECTS = [
  { id: 'manabi', cat: 'Documental', title: 'Manabí, gastronomía milenaria', tall: false, img: null },
  { id: 'dayana', cat: 'Institucional', title: 'Historia de Dayana — Banco Mundial', tall: true, img: null },
  { id: 'lundin', cat: 'Comunicación 360', title: '10 años de Lundin Gold', tall: false, img: null },
  { id: 'huawei', cat: 'Evento', title: 'Huawei Connect', tall: true, img: null },
  { id: 'refugiados', cat: 'Comunicación 360', title: 'Respuesta para Refugiados y Migrantes', tall: false, img: null },
  { id: 'zaimella', cat: 'Evento', title: 'Navidad con Zaimella', tall: true, img: null },
  { id: 'educom', cat: 'Comunicación 360', title: 'Proyecto Educomunicaciones', tall: false, img: null },
  { id: 'aviles', cat: 'Fotografía', title: 'Documental — Manuel Avilés', tall: true, img: null },
];

/* Las fotos sueltas que no pertenecen a ninguna lista. Mismo criterio. */
export const PHOTOS = {
  aboutRodaje: { img: null, label: 'Rodaje / territorio', alt: 'Equipo de Sidartha rodando en territorio' },
  aboutEvento: { img: null, label: 'Evento / stand', alt: 'Stand de Sidartha en un evento' },
  budhaiRetrato: { img: null, label: 'Retrato budh.ai', alt: 'budh.ai' },
  director: { img: null, label: 'Retrato del director', alt: 'Fabricio Terán Vélez' },
};

/*
 * Sidartha Originals — la línea editorial propia (cortos, series y
 * largometrajes documentales).
 *
 * No hay títulos aquí a propósito. El catálogo real todavía no está
 * definido y la guía de diseño es explícita: no inventar obras, cifras ni
 * créditos. Lo que sí es real son las líneas editoriales, así que la
 * sección se construye sobre ellas y cada póster queda como placeholder
 * etiquetado hasta que llegue el arte.
 *
 * Cuando existan los títulos, cada colección puede recibir una lista
 * `titulos` siguiendo el modelo de contenido de la guía (§24).
 */
export const ORIGINALS_INTRO =
  'Sidartha Originals es la casa de nuestros cortos, series y largometrajes documentales: historias concebidas, filmadas y producidas desde una mirada propia.';

export const ORIGINALS_FORMATS = [
  { label: 'Series documentales', n: '01' },
  { label: 'Cortos', n: '02' },
  { label: 'Largometrajes', n: '03' },
  { label: 'En desarrollo', n: '04' },
];

/*
 * Colecciones editoriales. `poster` en null → placeholder etiquetado.
 *
 * Los pósters son arte abstracto de relleno: textura, luz y grano, sin
 * personas, lugares reconocibles ni texto. Son deliberadamente NO
 * documentales, porque una foto documental inventada de una comunidad o un
 * proyecto real sería una afirmación falsa — justo lo que la guía prohíbe.
 * Sustituir por fotogramas reales en cuanto existan los títulos.
 */
export const ORIGINALS_COLLECTIONS = [
  { slug: 'territorio-y-memoria', title: 'Territorio y memoria', poster: '/assets/originals/territorio-y-memoria.webp' },
  { slug: 'mujeres-que-transforman', title: 'Mujeres que transforman', poster: '/assets/originals/mujeres-que-transforman.webp' },
  { slug: 'agua-y-ambiente', title: 'Agua y ambiente', poster: '/assets/originals/agua-y-ambiente.webp' },
  { slug: 'juventudes', title: 'Juventudes', poster: '/assets/originals/juventudes.webp' },
  { slug: 'pueblos-y-culturas', title: 'Pueblos y culturas', poster: '/assets/originals/pueblos-y-culturas.webp' },
  { slug: 'derechos', title: 'Derechos', poster: null },
];

export const STATS = [
  { k: '20+', v: 'Años de trayectoria' },
  { k: '360°', v: 'Comunicación integral' },
  { k: '3', v: 'Áreas al unísono' },
  { k: '+15', v: 'Marcas e instituciones' },
];

export const CLIENTS = [
  'Banco Mundial',
  'Lundin Gold',
  'Huawei',
  'Zaimella',
  'ACNUR',
  'ONGs',
  'Instituciones públicas',
  'Instituciones privadas',
];

export const FOUNDERS = [
  { name: 'Fabricio Terán Vélez', role: 'Fundador · Dirección de cuentas', tel: '0998103186', mail: 'fabricioteran@sidarthafilms.com', slot: 'fabricio', img: null },
  { name: 'Paulina Carrera Burbano', role: 'Comunicación · Proyectos', tel: '0998373892', mail: 'sidartha@sidarthafilms.com', slot: 'paulina', img: null },
];

export const LEGAL = {
  terminos: {
    label: 'Términos y Condiciones',
    body: [
      ['p', 'El presente sitio es propiedad de Sidartha Comunicación (Ecuador). El acceso y uso del sitio implica la aceptación de estos términos. Si no estás de acuerdo, te pedimos no utilizar el sitio.'],
      ['h', '1. Uso del sitio'],
      ['p', 'Los contenidos tienen fines informativos sobre nuestros servicios de comunicación, producción audiovisual y eventos. Nos reservamos el derecho de modificar o actualizar la información en cualquier momento sin previo aviso.'],
      ['h', '2. Propiedad intelectual'],
      ['p', 'La marca Sidartha, su logotipo, los textos, videos, fotografías y demás materiales son propiedad de Sidartha Comunicación o de sus respectivos titulares, y están protegidos por la legislación de propiedad intelectual. Queda prohibida su reproducción total o parcial sin autorización.'],
      ['h', '3. Responsabilidad'],
      ['p', 'Sidartha Comunicación no se responsabiliza por el uso que terceros hagan de la información publicada, ni por daños derivados del acceso o imposibilidad de acceso al sitio.'],
      ['h', '4. Legislación aplicable'],
      ['p', 'Estos términos se rigen por la legislación ecuatoriana. Cualquier controversia se someterá a los tribunales competentes del Ecuador.'],
    ],
  },
  privacidad: {
    label: 'Política de Privacidad',
    body: [
      ['p', 'En Sidartha Comunicación valoramos tu privacidad. Esta política describe cómo recopilamos y tratamos los datos personales que nos facilitas.'],
      ['h', '1. Datos que recopilamos'],
      ['p', 'Recopilamos los datos que nos proporcionas voluntariamente a través del formulario de contacto (nombre, correo electrónico y el mensaje sobre tu proyecto), con el único fin de responder a tu solicitud.'],
      ['h', '2. Finalidad del tratamiento'],
      ['p', 'Utilizamos tus datos para contactarte, elaborar propuestas y dar seguimiento a tu consulta. No cedemos ni vendemos tus datos a terceros.'],
      ['h', '3. Conservación'],
      ['p', 'Conservamos tus datos únicamente durante el tiempo necesario para gestionar tu solicitud y las obligaciones legales derivadas.'],
      ['h', '4. Tus derechos'],
      ['p', 'Puedes ejercer tus derechos de acceso, rectificación, eliminación y oposición escribiéndonos a sidartha@sidarthafilms.com.'],
    ],
  },
  cookies: {
    label: 'Política de Cookies',
    body: [
      ['p', 'Este sitio utiliza cookies para mejorar tu experiencia de navegación y analizar el uso del sitio de forma anónima.'],
      ['h', '1. Qué son las cookies'],
      ['p', 'Son pequeños archivos que se almacenan en tu dispositivo cuando visitas un sitio web, y permiten recordar tus preferencias.'],
      ['h', '2. Tipos de cookies'],
      ['p', 'Utilizamos cookies técnicas (necesarias para el funcionamiento del sitio) y cookies analíticas (para entender cómo se usa el sitio y mejorarlo).'],
      ['h', '3. Gestión'],
      ['p', 'Puedes configurar o desactivar las cookies desde los ajustes de tu navegador en cualquier momento. Desactivarlas puede afectar el funcionamiento del sitio.'],
    ],
  },
};
