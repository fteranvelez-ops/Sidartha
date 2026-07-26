import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';

/*
 * Rail — a horizontally scrolling row of cards, the browse pattern the
 * streaming services made familiar.
 *
 * It scrolls natively, so a trackpad, a touch swipe and a screen reader's
 * own scrolling all work without JavaScript. The arrows are an extra
 * affordance layered on top for mouse users, and they only appear when
 * there is actually something to scroll to in that direction.
 *
 * Keyboard access comes from the cards themselves: they are links, so
 * tabbing moves through them and the browser scrolls each into view. The
 * arrows are given aria-hidden and tabindex -1 — they would otherwise be
 * two extra tab stops that do nothing a keyboard user cannot already do,
 * and they would announce as unlabelled duplicates of the cards.
 */
export default function Rail({ title, subtitle, children, id }) {
  const scrollerRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  const measure = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    /* 2px of slack: fractional layout widths mean scrollLeft rarely lands
       exactly on the maximum, which would leave the arrow permanently lit. */
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    measure();
    el.addEventListener('scroll', measure, { passive: true });
    /* Card widths are in vw units, so a resize changes what fits. */
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', measure);
      ro.disconnect();
    };
  }, [measure]);

  const page = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    /* Scroll by a viewport of the rail minus one card's worth of overlap, so
       the card at the edge stays partly visible and the eye keeps its place. */
    el.scrollBy({ left: dir * el.clientWidth * 0.86, behavior: reduce ? 'auto' : 'smooth' });
  };

  const headingId = id ? `${id}-title` : undefined;

  return (
    <section className="rail" aria-labelledby={headingId}>
      <div className="rail-head">
        <h3 className="rail-title" id={headingId}>
          {title}
        </h3>
        {subtitle && <p className="rail-sub">{subtitle}</p>}
      </div>

      <div className="rail-body">
        <div className="rail-scroller" ref={scrollerRef}>
          {children}
        </div>

        <button
          type="button"
          className="rail-arrow rail-arrow--prev"
          onClick={() => page(-1)}
          disabled={atStart}
          aria-hidden="true"
          tabIndex={-1}
        >
          <Icon name="chevron-left" size={26} />
        </button>
        <button
          type="button"
          className="rail-arrow rail-arrow--next"
          onClick={() => page(1)}
          disabled={atEnd}
          aria-hidden="true"
          tabIndex={-1}
        >
          <Icon name="chevron-right" size={26} />
        </button>
      </div>
    </section>
  );
}
