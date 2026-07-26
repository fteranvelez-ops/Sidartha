/*
 * Clientes e instituciones.
 *
 * `logo` solo apunta a un archivo cuando existe una versión con licencia que
 * permite redistribuirla — los cuatro que hay vienen de Wikimedia Commons en
 * dominio público. El resto se dibuja como placa tipográfica: es preferible a
 * sacar el logo de la web del cliente, que sería material con derechos
 * usado sin permiso.
 *
 * Para completarlos hay que pedir el manual de marca o el kit de prensa a
 * cada cliente y dejar el SVG en /assets/clients/.
 */
export const CLIENTS_LOGOS = [
  {
    name: 'Banco Mundial',
    logo: '/assets/clients/banco-mundial.svg',
    credit: 'Wikimedia Commons · dominio público',
  },
  {
    name: 'BID',
    full: 'Banco Interamericano de Desarrollo',
    logo: '/assets/clients/bid.png',
    credit: 'Wikimedia Commons · dominio público',
  },
  {
    name: 'OEI',
    full: 'Organización de Estados Iberoamericanos',
    logo: '/assets/clients/oei.svg',
    credit: 'Wikimedia Commons · dominio público',
  },
  {
    name: 'CNT',
    full: 'Corporación Nacional de Telecomunicaciones',
    logo: '/assets/clients/cnt.svg',
    credit: 'Wikimedia Commons · dominio público',
  },
  { name: 'MAGAP', full: 'Ministerio de Agricultura y Ganadería', logo: null },
  { name: 'BIESS', full: 'Banco del IESS', logo: null },
  { name: 'BanEcuador', logo: null },
  { name: 'Ministerio del Ambiente', logo: null },
  { name: 'Municipio de Quito', logo: null },
  { name: 'Huawei', logo: null },
  { name: 'ACNUR', logo: null },
  { name: 'Lundin Gold', logo: null },
  { name: 'Zaimella', logo: null },
];
