import { useEffect } from 'react';

/*
 * Shows the "back to top" button and the budh.ai launcher once the visitor
 * has scrolled past the hero. The entrance animations, custom cursor,
 * parallax, scroll-linked marquees and the pinned horizontal gallery that
 * used to live here were removed — the site renders statically now.
 */
export default function useMotion({ topRef, launchRef }) {
  useEffect(() => {
    const onScroll = () => {
      const show = window.scrollY > 700;
      if (topRef.current) topRef.current.classList.toggle('show', show);
      if (launchRef.current) launchRef.current.classList.toggle('show', show);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [topRef, launchRef]);
}
