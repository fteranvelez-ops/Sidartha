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
  experience: 'Más de 15 años acompañando proyectos de desarrollo humano.',
};
