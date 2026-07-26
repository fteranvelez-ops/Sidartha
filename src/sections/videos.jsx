import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import Rail from '../components/Rail.jsx';
import VideoCard from '../components/VideoCard.jsx';
import { WRAP } from '../data/site.js';
import { VIDEO_COLLECTIONS, ALL_VIDEOS, YT_CHANNEL, thumb } from '../data/videos.js';

/*
 * El catálogo de vídeo real del canal, en carruseles por colección.
 *
 * El billboard usa una miniatura de fondo en vez de un póster ilustrado:
 * aquí sí hay material propio, y una imagen del trabajo dice más que un
 * fondo abstracto.
 */
export function VideoCatalogue({ as: Heading = 'h2' }) {
  const featured = ALL_VIDEOS.find((v) => v.id === 'XB7sz2VcphM') || ALL_VIDEOS[0];

  return (
    <section id="originals" className="orig">
      <div className="orig-billboard">
        <img className="orig-billboard-bg" src={thumb(featured)} alt="" aria-hidden="true" />
        <div className="orig-billboard-scrim" />

        <div className="orig-billboard-inner" style={{ ...WRAP }}>
          <div className="orig-lockup">
            <span className="orig-lockup-a">Sidartha</span>
            <span className="orig-lockup-b">Originals</span>
          </div>

          <Heading className="orig-billboard-title">
            Historias propias con
            <br />
            mirada documental.
          </Heading>

          <p className="orig-billboard-copy">
            {ALL_VIDEOS.length} piezas publicadas en nuestro canal: series por territorio, testimonios a cámara,
            campañas y proyectos de casa.
          </p>

          <div className="orig-billboard-cta">
            <a
              href={YT_CHANNEL.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btnx btnx-light"
              style={{ padding: '15px 28px', fontSize: 15 }}
            >
              <Icon name="play" size={17} /> Ver el canal
            </a>
          </div>
        </div>
      </div>

      <div className="orig-rails">
        {VIDEO_COLLECTIONS.map((c) => (
          <div key={c.slug} id={`col-${c.slug}`}>
            <Rail
              id={`rail-${c.slug}`}
              title={c.client ? `${c.title} — ${c.client}` : c.title}
              subtitle={c.blurb}
            >
              {c.videos.map((v) => (
                <VideoCard key={v.id} video={{ ...v, collection: c.title, year: v.year || c.year }} />
              ))}
            </Rail>
          </div>
        ))}
      </div>
    </section>
  );
}

/*
 * Muro de clientes. Cuando hay archivo de logo se pinta el logo; cuando no,
 * una placa con el nombre — que es honesto y no obliga a usar material con
 * derechos que no tenemos.
 */
export function ClientWall({ clients }) {
  return (
    <section className="cwall">
      <div style={{ ...WRAP }}>
        <Reveal>
          <p className="cwall-eyebrow">Hemos trabajado con</p>
        </Reveal>
        <div className="cwall-grid">
          {clients.map((c, i) => (
            <Reveal key={c.name} className="cwall-item" delay={Math.min(i * 40, 320)}>
              {c.logo ? (
                <img src={c.logo} alt={c.full || c.name} loading="lazy" />
              ) : (
                <span className="cwall-word" title={c.full || c.name}>
                  {c.name}
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
