/*
 * Contenido verificado sobre Sidartha y su director.
 *
 * Todo lo de este archivo procede de fuentes públicas consultadas en julio
 * de 2026 y cada bloque lleva su origen. Se mantiene aparte de site.js —
 * que es copy de marketing y puede reescribirse a gusto — precisamente
 * porque esto no se puede editar libremente: son hechos, premios y créditos
 * de terceros. Si un dato cambia, hay que volver a la fuente.
 *
 * Fuentes:
 *  - sidarthafilms.com (sitio oficial)
 *  - premioscolibri.ec — ficha de «Diez historias en abril»
 *  - FilmAffinity, El Telégrafo, Ocho y Medio, Universidad del Azuay
 *  - SRI / RUC 1303186306001 (Terán Vélez Fabricio Raúl)
 */

/* Ficha del director. La cita sobre el método de trabajo es suya, recogida
   en prensa a propósito de «Diez historias en abril». */
export const DIRECTOR = {
  name: 'Fabricio Terán Vélez',
  role: 'Director general y fundador',
  company: 'Sidartha Films',
  bio: [
    'Fabricio Terán Vélez dirige Sidartha, la casa desde la que produce documentales, series y estrategias de comunicación en Ecuador. Su trabajo parte de una convicción: la comunicación sirve para transformar realidades, y eso obliga a tratar cada historia con responsabilidad hacia quien la cuenta.',
    'Esa manera de trabajar quedó clara en «Diez historias en abril», el documental que dirigió tras el terremoto del 16 de abril de 2016 en Manabí y Esmeraldas. En lugar de repetir imágenes de destrucción, buscó a diez sobrevivientes y les dio el tiempo de contar cómo el dolor se les había vuelto un camino de sabiduría.',
  ],
  quote:
    'Se trataba de tratar el tema con respeto y responsabilidad hacia las víctimas, evitar las imágenes repetitivas de la destrucción y llegar a la esencia de lo que estaba pasando.',
  quoteContext: 'Fabricio Terán sobre el rodaje de «Diez historias en abril»',
};

/* Reconocimientos declarados por Sidartha en su sitio oficial y
   contrastados con la ficha de Premios Colibrí donde fue posible. */
export const AWARDS = [
  {
    year: '2020',
    title: 'Premio Colibrí — Mejor Serie de Televisión',
    work: 'Diez historias en abril',
    kind: 'Ganador',
  },
  {
    year: '2020',
    title: 'Premio Colibrí — Mejor Serie de Televisión, tercera edición',
    work: 'Con Luz Propia',
    kind: 'Nominación',
    note: 'Fabricio Terán como director general.',
  },
];

/*
 * Obra documental verificable. Es deliberadamente corta: solo entra aquí lo
 * que tiene ficha pública con créditos. El resto del portafolio vive en
 * site.js como títulos de proyectos de cliente, sin créditos inventados.
 */
export const FILMOGRAPHY = [
  {
    slug: 'diez-historias-en-abril',
    title: 'Diez historias en abril',
    year: '2017',
    runtime: '46 min',
    country: 'Ecuador',
    language: 'Español',
    format: 'Documental',
    synopsis:
      'Tras el terremoto del 16 de abril de 2016 en Manabí y Esmeraldas, diez sobrevivientes reflexionan sobre el sentido de la vida a través del arte y la creación. Un año después miran el hecho como una enseñanza donde la memoria, las relaciones humanas y la identidad cultural son bases indispensables para seguir adelante.',
    credits: [
      ['Dirección', 'Fabricio Terán Vélez'],
      ['Producción', 'Gonzalo Ponce Leiva'],
      ['Casas productoras', 'Sidartha Films · GPL Comunicación'],
      ['Guion', 'Adolfo Macías · Fabricio Terán · Manolo Sarmiento'],
      ['Fotografía', 'Manuel Suquilanda · Byron Sigcha'],
    ],
    notes: 'Emitido por Ecuador TV. Proyectado en Ocho y Medio y en la Universidad del Azuay.',
  },
];

/*
 * Clientes e instituciones listados por Sidartha en su sitio oficial.
 *
 * Ojo: no coinciden con la lista de CLIENTS en site.js, que venía del kit de
 * diseño. Estos son los publicados por la propia empresa.
 */
export const CLIENTS_VERIFIED = [
  'MAGAP',
  'BIESS',
  'BAN Ecuador',
  'Ministerio del Ambiente',
  'Huawei',
  'Municipio de Quito',
  'BID',
  'OEI',
];

/* Líneas de servicio tal como las nombra el sitio oficial. */
export const SERVICES_OFFICIAL = ['Producción audiovisual', 'Eventos', 'Estrategias', 'Material de archivo'];

/* Datos registrales y de sostenibilidad publicados por la empresa. */
export const COMPANY_FACTS = {
  legalName: 'Terán Vélez Fabricio Raúl',
  tradeName: 'Sidartha Films',
  ruc: '1303186306001',
  fsc: 'FSC-N004123',
  fscNote: 'Licencia de manejo forestal responsable y protección de la vida silvestre.',
  /* El sitio antiguo decía «más de 15 años»; Fabricio confirma que son 20.
     Se mantiene la cifra que da la empresa, que es la fuente que manda. */
  experience: 'Más de 20 años acompañando proyectos de desarrollo humano.',
};

/*
 * Copy oficial, extraído de sidarthafilms.com (Wix) en julio de 2026.
 *
 * Es lo que la empresa dice de sí misma, con sus palabras. Se guarda literal
 * para poder usarlo sin reescribirlo: cambiarle el tono sería inventar una voz
 * que no es la suya.
 *
 * Nota: el sitio antiguo repite «más de 15 años» en varias páginas. La cifra
 * correcta es 20, confirmada por Fabricio, y así se usa en el sitio nuevo.
 */
export const OFFICIAL_COPY = {
  quienesSomos: [
    'Sidartha es más que una alianza organizacional; es un grupo de profesionales comunicadores con una vasta trayectoria en el campo. Nos destacamos por nuestra propuesta de comunicación que se fundamenta en el sentido y las acciones positivas.',
    'Nuestro enfoque no solo se limita a transmitir mensajes, sino que busca inspirar, motivar y generar un impacto positivo en la audiencia. Nos esforzamos por crear conexiones auténticas y significativas, tanto con nuestros clientes como con sus audiencias, utilizando estrategias innovadoras y creativas.',
    'En Sidartha, creemos en el poder de la comunicación para transformar realidades y construir un mundo mejor.',
  ],
  loQueNosMueve: [
    'Trabajamos en proyectos que impulsan el desarrollo humano, adaptando cada producto a las necesidades específicas de nuestros clientes.',
    'Buscamos la esencia en todo lo que hacemos, desde relaciones hasta eventos, fusionando el profesionalismo de nuestro equipo con los objetivos de quienes nos contratan.',
    'Para lograrlo, aplicamos estrategias basadas en nuestra experiencia, siempre manteniendo la curiosidad y la capacidad de asombro para encontrar soluciones innovadoras que se adapten a las necesidades de nuestros clientes.',
  ],
  sostenibilidad:
    'Bajo licencia FSC-N004123, Sidartha Comunicación S.A. promueve en sus proyectos un manejo forestal responsable en todo el mundo, el cuidado de los bosques para las generaciones futuras, y el cuidado de las personas y la vida.',
};

/*
 * Las cuatro áreas tal como las describe el sitio oficial, con su copy.
 * Sustituyen a los tres «departamentos» que venía inventando el kit de diseño.
 */
export const AREAS_OFFICIAL = [
  {
    slug: 'audiovisual',
    n: '01',
    title: 'Producción Audiovisual',
    photo: '/assets/photography/camara.webp',
    intro:
      'Con más de 20 años de experiencia en la creación de productos audiovisuales, nuestro equipo ofrece soluciones adaptadas a las necesidades específicas de cada cliente. Nuestra continua investigación y curiosidad nos permiten descubrir nuevas perspectivas en constante evolución.',
    closing:
      'Descubre nuestra visión única al narrar historias, fusionando respeto por las experiencias humanas con una ejecución magistral de la imagen. Cada contenido, documental o de ficción, se destaca por su rigurosa investigación y equilibrio entre silencio y palabra. Nos comprometemos a transmitir información efectivamente, conscientes del poder de las palabras para moldear la realidad.',
    items: [
      'Documentales',
      'Videos corporativos',
      'Programas de televisión',
      'Publicidad',
      'Fotografía y fotografía aérea',
      'Proyectos transmedia: TV, web, aplicaciones y actividades culturales',
    ],
  },
  {
    slug: 'eventos',
    n: '02',
    title: 'Eventos',
    photo: '/assets/photography/stand-huawei.webp',
    intro:
      'El intercambio y la conexión humana han sido pilares fundamentales en la historia. Creemos en la importancia de crear espacios armoniosos que fomenten el diálogo y el respeto mutuo. En nuestra área de eventos ofrecemos nuestra experiencia y creatividad para organizar encuentros que reflejen sus ideas y valores.',
    items: [
      'Eventos artísticos y culturales',
      'Talleres y charlas inspiradoras',
      'Activaciones y ferias',
      'Renders y stands',
    ],
  },
  {
    slug: 'estrategias',
    n: '03',
    title: 'Estrategias',
    photo: '/assets/photography/apuntando-alto.webp',
    intro:
      'Tener la mente en calma nos permite entender las necesidades de nuestros clientes. Basados en principios éticos, colaboramos estrechamente para desarrollar estrategias y promocionar productos con transparencia. Nos destacamos por nuestra credibilidad y nuestro lema: «Lo pensamos, lo hacemos». Especializados en campañas publicitarias creativas y efectivas.',
    items: ['Campañas publicitarias', 'Estrategia de comunicación', 'Posicionamiento', 'Acompañamiento continuo'],
  },
  {
    slug: 'archivo',
    n: '04',
    title: 'Material de archivo',
    photo: '/assets/photography/vista-aerea.webp',
    intro:
      'Explorando nuestro propio camino, hemos capturado innumerables personajes y paisajes que ahora forman parte de nuestra extensa filmoteca. Con fotografías, videos y tomas aéreas mostramos la belleza de nuestra tierra, disponible para quienes busquen utilizarla.',
    items: ['Filmoteca propia', 'Fotografía', 'Tomas aéreas', 'Licenciamiento de material'],
  },
];

/* Fotografías propias, descargadas del sitio oficial y reoptimizadas. */
export const PHOTOS_OFFICIAL = {
  faro: { src: '/assets/photography/faro-costa.webp', alt: 'Faro en la costa ecuatoriana al atardecer' },
  standHuawei: { src: '/assets/photography/stand-huawei.webp', alt: 'Stand de Huawei producido por Sidartha' },
  apuntandoAlto: { src: '/assets/photography/apuntando-alto.webp', alt: 'Artesana tejiendo, proyecto Apuntando Alto' },
  renders: { src: '/assets/photography/renders-stands.webp', alt: 'Del render y los planos al stand construido' },
  vistaAerea: { src: '/assets/photography/vista-aerea.webp', alt: 'Vista aérea de una población costera' },
  camara: { src: '/assets/photography/camara.webp', alt: 'Cámara de cine durante un rodaje' },
  rodaje: { src: '/assets/photography/rodaje-equipo.webp', alt: 'Equipo de Sidartha durante un rodaje' },
};
