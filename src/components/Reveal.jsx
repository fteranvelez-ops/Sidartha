import { useEffect, useRef, useState } from 'react';

/*
 * Reveal — una sola animación de entrada para todo el sitio: el bloque sube
 * unos píxeles y aparece cuando entra en pantalla.
 *
 * El kit original traía cinco efectos distintos a la vez (cascadas, máscaras
 * por línea, recortes de imagen, parallax, contadores) y el resultado era
 * ruido. Aquí hay un solo gesto, corto, y se usa siempre igual.
 *
 * Se desactiva por completo con prefers-reduced-motion: el contenido se
 * pinta ya visible, sin observador ni transición.
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(() =>
    typeof window === 'undefined' ? true : window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (shown) return;
    const el = ref.current;
    if (!el) return;

    /* Si el bloque ya está en pantalla al cargar (la primera pantalla), se
       muestra sin esperar: animar lo que el visitante ya está mirando se
       percibe como lentitud, no como estilo. */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  return (
    <Tag
      ref={ref}
      className={`rv${shown ? ' rv-in' : ''}${className ? ' ' + className : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
