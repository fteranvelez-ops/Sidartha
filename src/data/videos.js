/*
 * Catálogo de vídeo — canal oficial de YouTube «Sidartha Films»
 * (UCMCmmBCqMf2JbqxOg-vYj9g), leído en julio de 2026.
 *
 * `raw` es el título tal cual está publicado en YouTube; `title` es ese mismo
 * título con mayúsculas y numeración de montaje normalizadas para poder
 * mostrarlo. No se traduce ni se reescribe: si el original dice «GENÉRICO
 * V1», el título mostrado es «Genérico», no una descripción inventada.
 *
 * Las miniaturas están descargadas en /assets/originals/yt/<id>.jpg en vez de
 * enlazadas a i.ytimg.com: así el sitio no depende de YouTube para pintar la
 * página, no filtra visitas a Google antes de que nadie pulse play, y el
 * preview sin red también las muestra.
 *
 * Aviso de contenido: la mayoría son piezas de encargo y masters de montaje
 * (versiones V1/V2), no la línea documental de autor. Están agrupadas por el
 * proyecto al que pertenecen.
 */

export const YT_CHANNEL = {
  handle: '@sidarthafilms9543',
  id: 'UCMCmmBCqMf2JbqxOg-vYj9g',
  url: 'https://www.youtube.com/@sidarthafilms9543',
  name: 'Sidartha Films',
};

/* La ruta viaja en cada vídeo como cadena literal. Construirla con una
   plantilla dejaba al empaquetador de un archivo sin nada que buscar, y las
   miniaturas desaparecían del preview sin avisar. */
export const thumb = (v) => (typeof v === 'string' ? `/assets/originals/yt/${v}.jpg` : v.thumb);
export const watchUrl = (id) => `https://www.youtube.com/watch?v=${id}`;
/* nocookie: no deja rastro en el visitante hasta que decide reproducir. */
export const embedUrl = (id) => `https://www.youtube-nocookie.com/embed/${id}?rel=0`;

export const VIDEO_COLLECTIONS = [
  {
    slug: 'entrelazado',
    title: 'Entrelazado',
    client: 'CNT',
    year: '2017',
    blurb:
      'Serie de piezas por provincia para la Corporación Nacional de Telecomunicaciones. Un capítulo por territorio, con la misma estructura narrativa.',
    videos: [
      { id: '4sREmHj6fF0', raw: '01 CNT IMBABURA ENTRELAZADO', title: 'Imbabura', thumb: '/assets/originals/yt/4sREmHj6fF0.jpg' },
      { id: '7QaXpP1G0Po', raw: '02 CNT TUNGURAHUA ENTRELAZADO', title: 'Tungurahua', thumb: '/assets/originals/yt/7QaXpP1G0Po.jpg' },
      { id: 'QeMYWaHPdmU', raw: '03 CNT CHIMBORAZO ENTRELAZADO', title: 'Chimborazo', thumb: '/assets/originals/yt/QeMYWaHPdmU.jpg' },
      { id: '-qxZ1cvaFGA', raw: '04 CNT BOLIVAR ENTRELAZADO', title: 'Bolívar', thumb: '/assets/originals/yt/-qxZ1cvaFGA.jpg' },
      { id: 'hmVYYK-mukg', raw: '05 CNT Sto DOMINGO ENTRELAZADO', title: 'Santo Domingo', thumb: '/assets/originals/yt/hmVYYK-mukg.jpg' },
      { id: '59iOgSb6DqA', raw: '06 CNT MANABI ENTRELAZADO', title: 'Manabí', thumb: '/assets/originals/yt/59iOgSb6DqA.jpg' },
      { id: 'uk-0fDWK8lQ', raw: '07 CNT EL ORO EDICION ENTRELAZADO', title: 'El Oro', thumb: '/assets/originals/yt/uk-0fDWK8lQ.jpg' },
      { id: '3TWxKSuMRLw', raw: '09 CNT SANTA ELENA ENTRELAZADO', title: 'Santa Elena', thumb: '/assets/originals/yt/3TWxKSuMRLw.jpg' },
    ],
  },
  {
    slug: 'esmeraldas',
    title: 'Cantones de Esmeraldas',
    blurb:
      'Retratos de cantón de la provincia de Esmeraldas. Cada pieza recorre un territorio y su gente.',
    videos: [
      { id: 'JNZcKj7MHss', raw: 'ESMERALDAS V1', title: 'Esmeraldas', thumb: '/assets/originals/yt/JNZcKj7MHss.jpg' },
      { id: 'FN09yJyAzJ4', raw: 'SAN LORENZO V1 1', title: 'San Lorenzo', thumb: '/assets/originals/yt/FN09yJyAzJ4.jpg' },
      { id: 'p0gAZrMkKfk', raw: 'ELOY ALFARO V1 1', title: 'Eloy Alfaro', thumb: '/assets/originals/yt/p0gAZrMkKfk.jpg' },
      { id: 'kRJUXnQXB2E', raw: 'RÍO VERDE V1', title: 'Río Verde', thumb: '/assets/originals/yt/kRJUXnQXB2E.jpg' },
      { id: 'b713HVc22Dk', raw: 'QUININDE v1', title: 'Quinindé', thumb: '/assets/originals/yt/b713HVc22Dk.jpg' },
      { id: 'SHJCdJlD1ik', raw: 'MUISNE v1 1', title: 'Muisne', thumb: '/assets/originals/yt/SHJCdJlD1ik.jpg' },
      { id: 'Mf0tN8t2wTw', raw: 'ATACAMES V2 1', title: 'Atacames', thumb: '/assets/originals/yt/Mf0tN8t2wTw.jpg' },
      { id: 'EwyhggA__9Y', raw: 'GENÉRICO V1', title: 'Genérico', thumb: '/assets/originals/yt/EwyhggA__9Y.jpg' },
    ],
  },
  {
    slug: 'testimonios',
    title: 'Testimonios',
    year: '2017',
    blurb: 'Historias contadas en primera persona, a cámara, sin voz en off.',
    videos: [
      { id: '0bBE6Rxo9YA', raw: '01 JESSICA RAMIREZ', title: 'Jessica Ramírez', thumb: '/assets/originals/yt/0bBE6Rxo9YA.jpg' },
      { id: 'c5K-i32HRZU', raw: '02 LIDIA VACA', title: 'Lidia Vaca', thumb: '/assets/originals/yt/c5K-i32HRZU.jpg' },
      { id: 'I8llMadZhFE', raw: '03 PATRICIA HOLGUIN', title: 'Patricia Holguín', thumb: '/assets/originals/yt/I8llMadZhFE.jpg' },
      { id: 'L_XKOzCHZGA', raw: '04 DIANA ALARCON', title: 'Diana Alarcón', thumb: '/assets/originals/yt/L_XKOzCHZGA.jpg' },
      { id: 'qNsVM54RCEc', raw: 'JESSICA Y LIDIA SUBTITULADO', title: 'Jessica y Lidia (subtitulado)', thumb: '/assets/originals/yt/qNsVM54RCEc.jpg' },
    ],
  },
  {
    slug: 'campanas',
    title: 'Campañas sociales',
    blurb: 'Piezas de sensibilización sobre infancia y violencia intrafamiliar.',
    videos: [
      { id: 'wr-Sc-Ygbaw', raw: '001 DIA DEL NIÑOV2', title: 'Día del niño', thumb: '/assets/originals/yt/wr-Sc-Ygbaw.jpg' },
      { id: 'ow7ak_kW57k', raw: '002 DIA DEL NIÑAV2', title: 'Día de la niña', thumb: '/assets/originals/yt/ow7ak_kW57k.jpg' },
      { id: 'zDsZDeb-zIA', raw: '004 VIOLENCIA INTRAFAMILIAR V2', title: 'Violencia intrafamiliar', thumb: '/assets/originals/yt/zDsZDeb-zIA.jpg' },
      { id: 'tvLhydI2Oys', raw: '007 Experimento 1', title: 'Experimento', thumb: '/assets/originals/yt/tvLhydI2Oys.jpg' },
    ],
  },
  {
    slug: 'proyectos',
    title: 'Proyectos y piezas de casa',
    blurb: 'Teasers, reels de la productora y trabajos que no pertenecen a una serie.',
    videos: [
      { id: 'XB7sz2VcphM', raw: 'TEASER PROYECTO MULUTA', title: 'Proyecto Muluta (teaser)', year: '2018', thumb: '/assets/originals/yt/XB7sz2VcphM.jpg' },
      { id: 'zZlmmOYlUCw', raw: 'SIDARTHA 2018', title: 'Sidartha 2018', year: '2018', thumb: '/assets/originals/yt/zZlmmOYlUCw.jpg' },
      { id: 'ihmGNsRqFVo', raw: 'Rio Mira', title: 'Río Mira', thumb: '/assets/originals/yt/ihmGNsRqFVo.jpg' },
      { id: 'ZJayQLMNnik', raw: 'JUAN DE LA CRUZ EDICION V5', title: 'Juan de la Cruz', thumb: '/assets/originals/yt/ZJayQLMNnik.jpg' },
      { id: 'd9oXzsZwzEw', raw: 'TRACK 12 SOLO CANCION', title: 'Track 12', thumb: '/assets/originals/yt/d9oXzsZwzEw.jpg' },
    ],
  },
];

export const ALL_VIDEOS = VIDEO_COLLECTIONS.flatMap((c) =>
  c.videos.map((v) => ({ ...v, collection: c.title, collectionSlug: c.slug }))
);
