/*
 * El director y la obra verificable.
 *
 * Todo lo que se muestra aquí sale de data/research.js, que a su vez sale de
 * fuentes públicas citadas. Ninguna cifra ni crédito de esta sección está
 * inventado: si un dato no se pudo verificar, no aparece.
 */
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { ImageSlot, Eyebrow } from '../components/primitives.jsx';
import { WRAP, PHOTOS } from '../data/site.js';
import { DIRECTOR, AWARDS, FILMOGRAPHY } from '../data/research.js';

export function DirectorSection() {
  return (
    <section id="director" className="dir">
      <div style={{ ...WRAP }}>
        <Reveal>
          <Eyebrow n="03">Dirección</Eyebrow>
        </Reveal>

        <div className="dir-grid">
          <Reveal className="dir-portrait">
            <ImageSlot src={PHOTOS.director.img} alt={DIRECTOR.name} shape="rounded" radius={20} label="Retrato del director" />
          </Reveal>

          <div>
            <Reveal delay={60}>
              <h2 className="dir-name">{DIRECTOR.name}</h2>
              <p className="dir-role">
                {DIRECTOR.role} · {DIRECTOR.company}
              </p>
            </Reveal>

            {DIRECTOR.bio.map((par, i) => (
              <Reveal key={i} as="p" className="dir-bio" delay={100 + i * 60}>
                {par}
              </Reveal>
            ))}

            <Reveal as="blockquote" className="dir-quote" delay={220}>
              <Icon name="message-square-quote" size={22} />
              <p>«{DIRECTOR.quote}»</p>
              <cite>{DIRECTOR.quoteContext}</cite>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <h3 className="dir-subhead">Reconocimientos</h3>
        </Reveal>
        <div className="dir-awards">
          {AWARDS.map((a, i) => (
            <Reveal key={a.title + a.work} className="dir-award" delay={i * 70}>
              <span className="dir-award-year">{a.year}</span>
              <span className={'dir-award-kind' + (a.kind === 'Ganador' ? ' is-win' : '')}>{a.kind}</span>
              <h4>{a.title}</h4>
              <p>{a.work}</p>
              {a.note && <p className="dir-award-note">{a.note}</p>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Filmography() {
  return (
    <section id="filmografia" className="film">
      <div style={{ ...WRAP }}>
        <Reveal>
          <Eyebrow n="04" light>
            Obra documental
          </Eyebrow>
          <h2 className="film-head">Fichas completas</h2>
          <p className="film-intro">
            Solo entran aquí los trabajos con ficha pública y créditos verificables. El resto del portafolio son proyectos
            de cliente, que se muestran sin atribuir créditos que no podemos confirmar.
          </p>
        </Reveal>

        {FILMOGRAPHY.map((f) => (
          <Reveal key={f.slug} className="film-card">
            <div className="film-card-art">
              <ImageSlot src={f.poster} alt="" shape="rect" label="Fotograma" dark />
            </div>

            <div className="film-card-body">
              <h3>{f.title}</h3>
              <p className="film-meta">
                {[f.year, f.runtime, f.format, f.country, f.language].filter(Boolean).join(' · ')}
              </p>
              <p className="film-syn">{f.synopsis}</p>

              <dl className="film-credits">
                {f.credits.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>

              {f.notes && <p className="film-notes">{f.notes}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
