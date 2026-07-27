import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { WRAP } from '../data/site.js';
import { AREAS_OFFICIAL } from '../data/research.js';

/*
 * Las cuatro áreas, cada una con su fotografía y su copy oficial.
 *
 * Alterna el lado de la imagen para que la página no se lea como una lista
 * repetida, y cada bloque lleva su ancla (#area-audiovisual) para poder
 * enlazarlo desde el menú de Servicios.
 */
export default function Areas() {
  return (
    <div className="areas">
      {AREAS_OFFICIAL.map((a, i) => (
        <section key={a.slug} id={`area-${a.slug}`} className={'area' + (i % 2 ? ' area--flip' : '')}>
          <div style={{ ...WRAP }} className="area-grid">
            <Reveal className="area-media">
              <img src={a.photo} alt="" loading="lazy" />
            </Reveal>

            <div className="area-body">
              <Reveal>
                <span className="area-n">{a.n}</span>
                <h2 className="area-title">{a.title}</h2>
              </Reveal>

              <Reveal as="p" className="area-intro" delay={60}>
                {a.intro}
              </Reveal>

              <Reveal delay={120}>
                <ul className="area-list">
                  {a.items.map((it) => (
                    <li key={it}>
                      <Icon name="check" size={15} />
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {a.closing && (
                <Reveal as="p" className="area-closing" delay={180}>
                  {a.closing}
                </Reveal>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
