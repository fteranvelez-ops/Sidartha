import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { Eyebrow } from '../components/primitives.jsx';
import { WRAP } from '../data/site.js';
import { OFFICIAL_COPY, PHOTOS_OFFICIAL, COMPANY_FACTS } from '../data/research.js';

/*
 * Quiénes somos y Lo que nos mueve, con el copy oficial de la empresa y sus
 * propias fotografías. Sustituye al texto de relleno que traía el kit.
 */
export function QuienesSomos() {
  return (
    <section id="quienes-somos" className="qs">
      <div style={{ ...WRAP }}>
        <div className="qs-grid">
          <div>
            <Reveal>
              <Eyebrow n="01">Quiénes somos</Eyebrow>
            </Reveal>
            {OFFICIAL_COPY.quienesSomos.map((p, i) => (
              <Reveal key={i} as="p" className="qs-p" delay={60 + i * 50}>
                {p}
              </Reveal>
            ))}
          </div>

          <Reveal className="qs-media" delay={80}>
            <img src={PHOTOS_OFFICIAL.rodaje.src} alt={PHOTOS_OFFICIAL.rodaje.alt} loading="lazy" />
          </Reveal>
        </div>

        <div className="qs-grid qs-grid--flip">
          <Reveal className="qs-media" delay={80}>
            <img src={PHOTOS_OFFICIAL.faro.src} alt={PHOTOS_OFFICIAL.faro.alt} loading="lazy" />
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow n="02">Lo que nos mueve</Eyebrow>
            </Reveal>
            {OFFICIAL_COPY.loQueNosMueve.map((p, i) => (
              <Reveal key={i} as="p" className="qs-p" delay={60 + i * 50}>
                {p}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* El compromiso FSC, que la empresa publica y no estaba en el sitio nuevo. */
export function Sostenibilidad() {
  return (
    <section className="sost">
      <div style={{ ...WRAP }}>
        <Reveal className="sost-inner">
          <img src="/assets/clients/fsc.webp" alt="Forest Stewardship Council — Bosques para todos para siempre" />
          <div>
            <h2>Sostenibilidad</h2>
            <p>{OFFICIAL_COPY.sostenibilidad}</p>
            <p className="sost-lic">
              <Icon name="check" size={15} /> Licencia {COMPANY_FACTS.fsc}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
