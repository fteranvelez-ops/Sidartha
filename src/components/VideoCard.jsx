import { useState } from 'react';
import Icon from './Icon.jsx';
import { thumb, embedUrl, watchUrl } from '../data/videos.js';

/*
 * Ficha de vídeo con reproducción diferida.
 *
 * Hasta que alguien pulsa play solo hay una imagen local: no se carga el
 * iframe de YouTube, que pesa cientos de kilobytes y deja cookies de Google
 * en cada visitante aunque no vea nada. Al pulsar, el iframe sustituye a la
 * miniatura con autoplay, así que el clic cuenta como uno solo.
 *
 * El dominio es youtube-nocookie.com por lo mismo.
 */
export default function VideoCard({ video, wide = false }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className={'vid' + (wide ? ' vid--wide' : '')}>
      <div className="vid-frame">
        {playing ? (
          <iframe
            className="vid-embed"
            src={embedUrl(video.id) + '&autoplay=1'}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" className="vid-play" onClick={() => setPlaying(true)}>
            <img src={thumb(video)} alt="" loading="lazy" />
            <span className="vid-play-btn" aria-hidden="true">
              <Icon name="play" size={26} />
            </span>
            {/* El nombre accesible va aquí y no en el <img>: el botón es lo
                que se enfoca, y «Reproducir» explica qué hace pulsarlo. */}
            <span className="sr-only">Reproducir «{video.title}»</span>
          </button>
        )}
      </div>

      <div className="vid-meta">
        <h4>{video.title}</h4>
        <p>
          {[video.collection, video.year].filter(Boolean).join(' · ')}
          {video.collection && video.year ? '' : ''}
        </p>
        <a className="vid-yt" href={watchUrl(video.id)} target="_blank" rel="noopener noreferrer">
          Ver en YouTube <Icon name="arrow-up-right" size={13} />
        </a>
      </div>
    </article>
  );
}
