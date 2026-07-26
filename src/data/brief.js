/*
 * El brief guiado.
 *
 * Las preguntas son las que hacen falta para cotizar un proyecto de
 * comunicación o producción: qué se quiere, para quién, cuándo, con cuánto y
 * cómo se sabrá si funcionó. Están en el orden en que se preguntarían en una
 * primera reunión — lo fácil primero, el presupuesto cuando ya hay contexto.
 *
 * Cada paso es una pregunta o un grupo corto. Nada de formularios de veinte
 * campos: es lo que separa esto de la ficha de contacto que ya existe.
 *
 * Tipos: 'choice' (una opción), 'multi' (varias), 'text', 'textarea',
 * 'email', 'tel'. `required` marca los que bloquean el avance.
 */
export const BRIEF_STEPS = [
  {
    id: 'tipo',
    eyebrow: 'Empecemos',
    question: '¿Qué necesitas?',
    help: 'Si aún no lo tienes claro, elige lo que más se acerque. Lo afinamos juntos.',
    type: 'choice',
    required: true,
    options: [
      { value: 'audiovisual', label: 'Producción audiovisual', desc: 'Documental, serie, institucional, spot' },
      { value: 'evento', label: 'Un evento', desc: 'Feria, lanzamiento, foro, activación' },
      { value: 'estrategia', label: 'Estrategia de comunicación', desc: 'Campaña 360°, posicionamiento, contenidos' },
      { value: 'mixto', label: 'Una mezcla de varias', desc: 'Un proyecto con varios frentes' },
      { value: 'otro', label: 'Otra cosa', desc: 'Cuéntanos y lo vemos' },
    ],
  },
  {
    id: 'organizacion',
    eyebrow: 'Quién eres',
    question: '¿Desde dónde nos escribes?',
    type: 'choice',
    required: true,
    options: [
      { value: 'empresa', label: 'Empresa privada' },
      { value: 'publica', label: 'Institución pública' },
      { value: 'ong', label: 'ONG o cooperación' },
      { value: 'independiente', label: 'Proyecto independiente' },
    ],
  },
  {
    id: 'proyecto',
    eyebrow: 'El proyecto',
    question: 'Cuéntanos qué tienes en mente.',
    help: 'No hace falta que esté cerrado. Con la idea y el problema que quieres resolver nos basta para empezar.',
    type: 'textarea',
    required: true,
    placeholder: 'Queremos contar cómo…',
    rows: 5,
  },
  {
    id: 'audiencia',
    eyebrow: 'El proyecto',
    question: '¿A quién le tiene que llegar?',
    help: 'Cuanto más concreto, mejor. «Comunidades de la costa» dice más que «público general».',
    type: 'textarea',
    required: true,
    placeholder: 'Nuestra audiencia principal es…',
    rows: 3,
  },
  {
    id: 'objetivo',
    eyebrow: 'El proyecto',
    question: '¿Cómo sabremos que funcionó?',
    help: 'El resultado que esperas: que se entienda algo, que alguien actúe, que una historia se conozca.',
    type: 'textarea',
    required: false,
    placeholder: 'Para nosotros sería un éxito si…',
    rows: 3,
  },
  {
    id: 'formatos',
    eyebrow: 'Alcance',
    question: '¿Qué entregables imaginas?',
    help: 'Puedes marcar varios, o ninguno si prefieres que lo propongamos nosotros.',
    type: 'multi',
    required: false,
    options: [
      { value: 'documental', label: 'Documental' },
      { value: 'serie', label: 'Serie' },
      { value: 'institucional', label: 'Vídeo institucional' },
      { value: 'spot', label: 'Spot / pieza corta' },
      { value: 'fotografia', label: 'Fotografía' },
      { value: 'evento', label: 'Evento' },
      { value: 'redes', label: 'Contenido para redes' },
      { value: 'archivo', label: 'Material de archivo' },
    ],
  },
  {
    id: 'plazo',
    eyebrow: 'Alcance',
    question: '¿Para cuándo?',
    type: 'choice',
    required: true,
    options: [
      { value: 'urgente', label: 'Menos de un mes', desc: 'Hay una fecha que no se mueve' },
      { value: 'trimestre', label: 'Uno a tres meses' },
      { value: 'semestre', label: 'Tres a seis meses' },
      { value: 'abierto', label: 'Sin fecha todavía', desc: 'Estamos explorando' },
    ],
  },
  {
    id: 'presupuesto',
    eyebrow: 'Alcance',
    question: '¿Con qué presupuesto contamos?',
    help: 'Una horquilla basta. Saberlo desde el principio evita proponerte algo que no encaja y nos ahorra tiempo a los dos.',
    type: 'choice',
    required: false,
    options: [
      { value: 'menos-5k', label: 'Menos de USD 5.000' },
      { value: '5-15k', label: 'USD 5.000 – 15.000' },
      { value: '15-40k', label: 'USD 15.000 – 40.000' },
      { value: 'mas-40k', label: 'Más de USD 40.000' },
      { value: 'sin-definir', label: 'Aún por definir' },
    ],
  },
  {
    id: 'contacto',
    eyebrow: 'Casi está',
    question: '¿Con quién hablamos?',
    help: 'Te respondemos nosotros mismos, normalmente en menos de dos días laborables.',
    type: 'group',
    required: true,
    fields: [
      { id: 'nombre', label: 'Nombre y apellido', type: 'text', required: true, placeholder: 'Tu nombre' },
      { id: 'organizacionNombre', label: 'Organización', type: 'text', required: false, placeholder: 'Dónde trabajas' },
      { id: 'correo', label: 'Correo', type: 'email', required: true, placeholder: 'tu@correo.com' },
      { id: 'telefono', label: 'Teléfono (opcional)', type: 'tel', required: false, placeholder: '09…' },
    ],
  },
];

/* Etiqueta legible de una respuesta, para el resumen final y el correo. */
export function labelFor(step, value) {
  if (value == null || value === '') return null;
  if (step.type === 'choice') {
    return step.options.find((o) => o.value === value)?.label || value;
  }
  if (step.type === 'multi') {
    if (!Array.isArray(value) || !value.length) return null;
    return value.map((v) => step.options.find((o) => o.value === v)?.label || v).join(', ');
  }
  return String(value);
}
