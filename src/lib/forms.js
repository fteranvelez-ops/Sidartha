/*
 * Form submission.
 *
 * The prototype's forms only flipped a local flag and told the visitor
 * "te contactaremos" without sending anything. On a live site that loses
 * leads silently, so submission is real here.
 *
 * Two modes:
 *  - VITE_CONTACT_ENDPOINT set  -> POST the payload as JSON. Works with a
 *    Firebase Function, Formspree, or any handler that accepts JSON.
 *  - not set (default)          -> hand off to the visitor's mail client with
 *    the message prefilled, addressed to CONTACT_EMAIL. Nothing is lost, but
 *    the visitor still has to press send.
 *
 * Configure the endpoint before launch — see README.
 */

const CONTACT_EMAIL = 'sidartha@sidarthafilms.com';
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

const LABELS = {
  nombre: 'Nombre',
  correo: 'Correo',
  mensaje: 'Mensaje',
};

function mailtoFallback(kind, data) {
  const subject =
    kind === 'newsletter' ? 'Suscripción a novedades — sidartha.com' : 'Nuevo mensaje desde sidartha.com';
  const body = Object.entries(data)
    .map(([k, v]) => `${LABELS[k] ?? k}: ${v}`)
    .join('\n');

  const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
  return true;
}

export async function submitForm(kind, data) {
  if (!ENDPOINT) return mailtoFallback(kind, data);

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ kind, ...data }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
