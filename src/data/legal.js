/*
 * Textos legales.
 *
 * Redactados para el caso real de Sidartha: un sitio informativo que recoge
 * datos por dos formularios (contacto y brief) y los trata por correo. No hay
 * cuentas de usuario, ni pasarela de pago, ni analítica de terceros, así que
 * no se prometen ni se regulan cosas que el sitio no hace.
 *
 * Se apoya en la LOPDP ecuatoriana (Ley Orgánica de Protección de Datos
 * Personales, 2021) porque es la que aplica a una empresa domiciliada en
 * Ecuador que trata datos de residentes.
 *
 * ADVERTENCIA: esto es un texto base cuidado, no asesoría jurídica. Antes de
 * publicarlo conviene que lo revise un abogado, sobre todo los plazos de
 * conservación y el nombre del responsable de datos, que están marcados.
 *
 * Formato: ['h', …] titular, ['p', …] párrafo, ['li', …] punto de lista.
 */

const RESPONSABLE = 'Sidartha Films (Terán Vélez Fabricio Raúl), RUC 1303186306001, Ecuador';
const CORREO = 'sidartha@sidarthafilms.com';
const ACTUALIZADO = 'julio de 2026';

export const LEGAL = {
  terminos: {
    label: 'Términos y Condiciones',
    updated: ACTUALIZADO,
    body: [
      ['p', `Estos términos regulan el acceso y uso del sitio web de Sidartha. El responsable del sitio es ${RESPONSABLE}. Al navegarlo aceptas lo que sigue; si no estás de acuerdo, te pedimos que no lo utilices.`],

      ['h', '1. Qué es este sitio'],
      ['p', 'Es un sitio informativo. Presenta nuestros servicios de comunicación, producción audiovisual y eventos, muestra trabajos realizados y ofrece dos vías de contacto: un formulario breve y un brief guiado de proyecto.'],
      ['p', 'No es una tienda: no se venden servicios ni se cobran pagos a través del sitio. Nada de lo publicado aquí constituye una oferta contractual vinculante ni un presupuesto en firme.'],

      ['h', '2. Uso permitido'],
      ['p', 'Puedes consultar, descargar y reproducir los contenidos para uso personal e informativo. Queda prohibido:'],
      ['li', 'Reproducir o distribuir los contenidos con fines comerciales sin autorización escrita.'],
      ['li', 'Extraer sistemáticamente contenidos por medios automatizados que degraden el servicio.'],
      ['li', 'Introducir código malicioso o intentar acceder a partes no públicas del sitio.'],
      ['li', 'Usar los formularios para enviar publicidad no solicitada o contenido ilícito.'],

      ['h', '3. Propiedad intelectual'],
      ['p', 'La marca Sidartha, su logotipo, los textos, las fotografías, los vídeos y el diseño del sitio son propiedad de Sidartha o de sus respectivos titulares, y están protegidos por la legislación ecuatoriana e internacional de propiedad intelectual.'],
      ['p', 'Los vídeos se muestran incrustados desde nuestro canal oficial de YouTube y siguen alojados allí; su reproducción se rige además por los términos de YouTube.'],
      ['p', 'Las marcas de terceros que aparecen en la sección de clientes pertenecen a sus titulares y se muestran únicamente para identificar trabajos realizados. Su presencia no implica que esas organizaciones patrocinen o avalen este sitio.'],

      ['h', '4. Contenidos de terceros y enlaces'],
      ['p', 'El sitio enlaza a perfiles y plataformas externas —YouTube, Instagram, Facebook— sobre las que no tenemos control. No respondemos de sus contenidos, disponibilidad ni políticas de privacidad.'],

      ['h', '5. Envío de propuestas e ideas'],
      ['p', 'Si nos envías una idea o proyecto a través del brief, sigue siendo tuyo: no adquirimos derechos sobre lo que nos cuentes por el solo hecho de recibirlo. Tratamos esa información con reserva y la usamos exclusivamente para valorar y responder tu solicitud.'],
      ['p', 'Ten en cuenta, no obstante, que un formulario web no sustituye a un acuerdo de confidencialidad. Si tu proyecto exige uno, dínoslo y lo firmamos antes de que nos des detalles sensibles.'],

      ['h', '6. Exactitud de la información'],
      ['p', 'Procuramos que la información publicada esté actualizada y sea correcta, pero puede contener errores u omisiones, y podemos modificarla en cualquier momento sin aviso previo. Las cifras de trayectoria, premios y clientes reflejan nuestra experiencia y no constituyen garantía de resultados en proyectos futuros.'],

      ['h', '7. Disponibilidad y responsabilidad'],
      ['p', 'No garantizamos que el sitio esté disponible de forma ininterrumpida. Podemos suspenderlo temporalmente por mantenimiento o causas técnicas.'],
      ['p', 'En la medida en que lo permita la ley, no respondemos por daños indirectos derivados del uso o de la imposibilidad de uso del sitio. Nada en estos términos excluye la responsabilidad que legalmente no pueda excluirse.'],

      ['h', '8. Cambios en estos términos'],
      ['p', `Podemos actualizar estos términos. La versión vigente es siempre la publicada en esta página, con su fecha de actualización. Última revisión: ${ACTUALIZADO}.`],

      ['h', '9. Ley aplicable y jurisdicción'],
      ['p', 'Estos términos se rigen por la legislación de la República del Ecuador. Cualquier controversia se someterá a los jueces y tribunales competentes del Ecuador.'],

      ['h', '10. Contacto'],
      ['p', `Para cualquier consulta sobre estos términos, escríbenos a ${CORREO}.`],
    ],
  },

  privacidad: {
    label: 'Política de Privacidad',
    updated: ACTUALIZADO,
    body: [
      ['p', `Esta política explica qué datos personales recogemos, para qué los usamos y qué puedes hacer al respecto. El responsable del tratamiento es ${RESPONSABLE}, con correo de contacto ${CORREO}.`],
      ['p', 'Se ha redactado conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador.'],

      ['h', '1. Qué datos recogemos'],
      ['p', 'Solo los que nos facilitas voluntariamente:'],
      ['li', 'Formulario de contacto: nombre, correo electrónico y el mensaje que escribas.'],
      ['li', 'Brief de proyecto: además de lo anterior, organización, teléfono si lo indicas, y las respuestas sobre tipo de proyecto, audiencia, objetivos, formatos, plazo y rango de presupuesto.'],
      ['li', 'Suscripción al boletín: tu correo electrónico.'],
      ['p', 'No recogemos datos sensibles y te pedimos que no los incluyas en los campos de texto libre.'],

      ['h', '2. Para qué los usamos'],
      ['li', 'Responder a tu consulta y, si procede, preparar una propuesta.'],
      ['li', 'Dar seguimiento a la relación comercial mientras esté viva.'],
      ['li', 'Enviarte el boletín, si te suscribiste expresamente.'],
      ['p', 'No usamos tus datos para elaborar perfiles ni para tomar decisiones automatizadas.'],

      ['h', '3. Base legal'],
      ['p', 'Tratamos tus datos con tu consentimiento, que das al enviar el formulario, y para la ejecución de medidas precontractuales solicitadas por ti —es decir, preparar la propuesta que nos pides.'],

      ['h', '4. Con quién los compartimos'],
      ['p', 'No vendemos ni cedemos tus datos. Solo acceden a ellos las personas del equipo que intervienen en responderte, y los proveedores que hacen posible el servicio: nuestro proveedor de correo electrónico y el alojamiento del sitio (Firebase Hosting, de Google), que pueden implicar transferencia internacional de datos con las garantías que exige la ley.'],

      ['h', '5. Cuánto tiempo los conservamos'],
      ['p', 'Las consultas que no derivan en proyecto se conservan un máximo de dos años. Los datos de clientes se conservan mientras dure la relación y después durante los plazos que exija la normativa tributaria y mercantil ecuatoriana. La suscripción al boletín se mantiene hasta que te des de baja.'],
      ['p', 'Estos plazos son los previstos con carácter general; conviene confirmarlos con asesoría legal para tu caso concreto.'],

      ['h', '6. Cookies y medición'],
      ['p', 'El sitio no instala cookies de analítica, publicidad ni seguimiento de terceros. Solo se usa el almacenamiento técnico imprescindible para que la página funcione.'],
      ['p', 'Los vídeos se cargan desde youtube-nocookie.com y solo cuando pulsas reproducir: hasta ese momento no se envía ninguna petición a YouTube ni se instala ninguna cookie suya. Al reproducir, se aplican las condiciones de YouTube.'],

      ['h', '7. Tus derechos'],
      ['p', 'Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, eliminación, oposición, limitación del tratamiento, portabilidad y a no ser objeto de decisiones automatizadas.'],
      ['p', `Para ejercerlos, escribe a ${CORREO} indicando cuál quieres ejercer. Te responderemos en los plazos legales. Si consideras que no hemos atendido tu solicitud correctamente, puedes reclamar ante la Superintendencia de Protección de Datos Personales del Ecuador.`],

      ['h', '8. Seguridad'],
      ['p', 'Aplicamos medidas técnicas y organizativas razonables para proteger tus datos. El sitio se sirve íntegramente sobre conexión cifrada (HTTPS). Aun así, ningún sistema es completamente infalible.'],

      ['h', '9. Menores'],
      ['p', 'El sitio no está dirigido a menores de edad y no recogemos datos de menores de forma consciente. Si detectas que un menor nos ha facilitado datos, escríbenos y los eliminaremos.'],

      ['h', '10. Cambios en esta política'],
      ['p', `Podemos actualizarla. La versión vigente es la publicada en esta página. Última revisión: ${ACTUALIZADO}.`],
    ],
  },
};
