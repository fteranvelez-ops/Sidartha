import { useRef, useState } from 'react';
import Icon from '../components/Icon.jsx';
import { WRAP } from '../data/site.js';
import { BRIEF_STEPS, labelFor } from '../data/brief.js';
import { submitForm } from '../lib/forms.js';

/*
 * Brief guiado: una pregunta por pantalla.
 *
 * Decisiones que sostienen el formato:
 *  - Una sola pregunta a la vista. Un brief completo en una pantalla ahuyenta;
 *    de uno en uno se responde.
 *  - No se avanza solo al elegir. El salto automático se siente rápido en la
 *    demo y hostil de verdad: quita el margen para cambiar de idea y rompe a
 *    quien navega con teclado.
 *  - Enter avanza, salvo dentro de un textarea, donde hace falta para
 *    escribir párrafos.
 *  - Antes de enviar se muestra todo lo respondido, con un enlace para
 *    corregir cada punto. Nadie debería enviar un brief a ciegas.
 */
export default function Brief() {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState({});
  const [touched, setTouched] = useState(false);
  const [state, setState] = useState('idle'); // idle | review | sending | sent | error
  const headingRef = useRef(null);

  const step = BRIEF_STEPS[i];
  const total = BRIEF_STEPS.length;
  const value = answers[step.id];

  const isFilled = (s, v) => {
    if (s.type === 'group') return s.fields.every((f) => !f.required || (v?.[f.id] || '').trim());
    if (s.type === 'multi') return Array.isArray(v) && v.length > 0;
    return v != null && String(v).trim() !== '';
  };
  const canAdvance = !step.required || isFilled(step, value);

  const set = (v) => setAnswers((a) => ({ ...a, [step.id]: v }));
  const setField = (fid, v) => setAnswers((a) => ({ ...a, [step.id]: { ...(a[step.id] || {}), [fid]: v } }));

  /* El foco vuelve al titular en cada paso: sin esto, quien usa lector de
     pantalla no se entera de que la pregunta cambió. */
  const focusHeading = () => requestAnimationFrame(() => headingRef.current?.focus());

  const next = () => {
    if (!canAdvance) {
      setTouched(true);
      return;
    }
    setTouched(false);
    if (i === total - 1) setState('review');
    else setI(i + 1);
    focusHeading();
  };
  const back = () => {
    setTouched(false);
    if (state === 'review') setState('idle');
    else if (i > 0) setI(i - 1);
    focusHeading();
  };
  const goTo = (idx) => {
    setState('idle');
    setI(idx);
    focusHeading();
  };

  const onKeyDown = (e) => {
    if (e.key !== 'Enter') return;
    if (e.target.tagName === 'TEXTAREA') return;
    e.preventDefault();
    next();
  };

  const send = async () => {
    setState('sending');
    /* Se manda el brief ya legible, no un volcado de claves internas: quien
       lo reciba no debería tener que traducir «mas-40k». */
    const payload = { asunto: 'Nuevo brief de proyecto' };
    BRIEF_STEPS.forEach((s) => {
      if (s.type === 'group') {
        s.fields.forEach((f) => {
          const v = answers[s.id]?.[f.id];
          if (v) payload[f.label] = v;
        });
      } else {
        const l = labelFor(s, answers[s.id]);
        if (l) payload[s.question] = l;
      }
    });
    const ok = await submitForm('brief', payload);
    setState(ok ? 'sent' : 'error');
  };

  if (state === 'sent') {
    return (
      <section className="brief">
        <div style={{ ...WRAP }}>
          <div className="brief-done">
            <span className="brief-done-icon">
              <Icon name="check" size={32} />
            </span>
            <h2>Recibido. Gracias.</h2>
            <p>
              Ya tenemos tu brief. Te escribimos nosotros mismos, normalmente en menos de dos días laborables. Si es
              urgente, llámanos al 099 810 3186.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const answered = BRIEF_STEPS.map((s, idx) => {
    if (s.type === 'group') {
      const v = answers[s.id] || {};
      const parts = s.fields.map((f) => (v[f.id] ? `${f.label}: ${v[f.id]}` : null)).filter(Boolean);
      return { idx, q: s.question, a: parts.length ? parts.join(' · ') : null };
    }
    return { idx, q: s.question, a: labelFor(s, answers[s.id]) };
  });

  return (
    <section className="brief">
      <div style={{ ...WRAP }}>
        <div className="brief-shell" onKeyDown={onKeyDown}>
          <div className="brief-bar" role="progressbar" aria-valuemin={1} aria-valuemax={total} aria-valuenow={state === 'review' ? total : i + 1} aria-label="Progreso del brief">
            <span style={{ width: `${((state === 'review' ? total : i) / total) * 100}%` }} />
          </div>

          {state === 'review' ? (
            <div className="brief-step">
              <p className="brief-eyebrow">Revisa antes de enviar</p>
              <h2 className="brief-q" ref={headingRef} tabIndex={-1}>
                Esto es lo que nos vas a contar.
              </h2>

              <dl className="brief-review">
                {answered.map((r) => (
                  <div key={r.idx}>
                    <dt>{r.q}</dt>
                    <dd>
                      {r.a || <span className="brief-empty">Sin responder</span>}
                      <button type="button" className="brief-edit" onClick={() => goTo(r.idx)}>
                        Cambiar
                      </button>
                    </dd>
                  </div>
                ))}
              </dl>

              {state === 'error' && (
                <p className="brief-error">
                  No pudimos enviarlo. Escríbenos a{' '}
                  <a href="mailto:sidartha@sidarthafilms.com">sidartha@sidarthafilms.com</a>.
                </p>
              )}

              <div className="brief-nav">
                <button type="button" className="brief-back" onClick={back}>
                  <Icon name="chevron-left" size={17} /> Atrás
                </button>
                <button type="button" className="btnx btnx-primary brief-next" onClick={send} disabled={state === 'sending'}>
                  {state === 'sending' ? 'Enviando…' : 'Enviar el brief'} <Icon name="arrow-right" size={17} />
                </button>
              </div>
            </div>
          ) : (
            <div className="brief-step">
              <p className="brief-eyebrow">
                {step.eyebrow} · {i + 1} de {total}
              </p>
              <h2 className="brief-q" ref={headingRef} tabIndex={-1}>
                {step.question}
              </h2>
              {step.help && <p className="brief-help">{step.help}</p>}

              <div className="brief-field">
                {step.type === 'choice' &&
                  step.options.map((o) => (
                    <button
                      key={o.value}
                      type="button"
                      className={'brief-opt' + (value === o.value ? ' is-on' : '')}
                      aria-pressed={value === o.value}
                      onClick={() => set(o.value)}
                    >
                      <span className="brief-opt-label">{o.label}</span>
                      {o.desc && <span className="brief-opt-desc">{o.desc}</span>}
                      {value === o.value && (
                        <span className="brief-opt-check" aria-hidden="true">
                          <Icon name="check" size={16} />
                        </span>
                      )}
                    </button>
                  ))}

                {step.type === 'multi' && (
                  <div className="brief-multi">
                    {step.options.map((o) => {
                      const on = Array.isArray(value) && value.includes(o.value);
                      return (
                        <button
                          key={o.value}
                          type="button"
                          className={'brief-chip' + (on ? ' is-on' : '')}
                          aria-pressed={on}
                          onClick={() => {
                            const cur = Array.isArray(value) ? value : [];
                            set(on ? cur.filter((v) => v !== o.value) : [...cur, o.value]);
                          }}
                        >
                          {on && <Icon name="check" size={14} />}
                          {o.label}
                        </button>
                      );
                    })}
                  </div>
                )}

                {step.type === 'textarea' && (
                  <textarea
                    className="brief-input brief-textarea"
                    rows={step.rows || 4}
                    placeholder={step.placeholder}
                    value={value || ''}
                    onChange={(e) => set(e.target.value)}
                    aria-label={step.question}
                  />
                )}

                {step.type === 'group' && (
                  <div className="brief-group">
                    {step.fields.map((f) => (
                      <label key={f.id} className="brief-label">
                        {f.label}
                        {f.required && <span aria-hidden="true"> *</span>}
                        <input
                          className="brief-input"
                          type={f.type}
                          required={f.required}
                          placeholder={f.placeholder}
                          value={value?.[f.id] || ''}
                          onChange={(e) => setField(f.id, e.target.value)}
                        />
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {touched && !canAdvance && (
                <p className="brief-error" role="alert">
                  Necesitamos esta respuesta para seguir.
                </p>
              )}

              <div className="brief-nav">
                <button type="button" className="brief-back" onClick={back} disabled={i === 0}>
                  <Icon name="chevron-left" size={17} /> Atrás
                </button>
                <button type="button" className="btnx btnx-primary brief-next" onClick={next}>
                  {i === total - 1 ? 'Revisar' : 'Siguiente'} <Icon name="arrow-right" size={17} />
                </button>
              </div>

              {!step.required && (
                <button type="button" className="brief-skip" onClick={next}>
                  Prefiero no responder esto
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
