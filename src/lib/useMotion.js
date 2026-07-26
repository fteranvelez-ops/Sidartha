import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/*
 * Dos cosas, las únicas que necesitan JavaScript:
 *
 *  1. Revelar los bloques marcados con .reveal / .stag al entrar en pantalla.
 *     Son los ganchos que el kit dejó repartidos por las secciones; el
 *     componente <Reveal> hace lo mismo por su cuenta para lo nuevo.
 *  2. Mostrar el botón «volver arriba» pasada la primera pantalla.
 *
 * El observador se vuelve a montar en cada cambio de ruta, porque la página
 * nueva trae bloques nuevos que el observador anterior nunca vio.
 */
export default function useMotion({ topRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll('.reveal:not(.in), .stag:not(.in)');

    if (reduce) {
      targets.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          /* En un .stag cada hijo entra escalonado. 70ms es suficiente para
             leerse como cascada sin que el último tarde en aparecer. */
          if (e.target.classList.contains('stag')) {
            [...e.target.children].forEach((c, i) => {
              c.style.transitionDelay = i * 70 + 'ms';
            });
          }
          e.target.classList.add('in');
          io.unobserve(e.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (topRef.current) topRef.current.classList.toggle('show', window.scrollY > 700);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [topRef]);
}
