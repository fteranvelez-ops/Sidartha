import { useEffect } from 'react';

/*
 * Motion engine — ported from the kit's Home.jsx effect.
 *
 * Drives: entrance reveals, staggered cascades, count-ups, scroll progress,
 * parallax, word-fill statement, the pinned horizontal gallery, scroll-velocity
 * marquees, the custom cursor and magnetic buttons.
 *
 * Everything is opt-out under prefers-reduced-motion, and every listener and
 * observer is torn down on unmount.
 *
 * Refs are read once on mount, so the elements must exist by then — App renders
 * all sections eagerly, which is what the design assumes anyway.
 */
export default function useMotion({ ringRef, dotRef, topRef, progRef, launchRef }) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* --- entrance observers: reveal / stagger / mask / clip --- */
    const observers = [];
    const mkObserver = (sel, cb, threshold) => {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              cb(e.target);
              io.unobserve(e.target);
            }
          });
        },
        { threshold }
      );
      document.querySelectorAll(sel).forEach((el) => io.observe(el));
      return io;
    };

    if (reduce) {
      document.querySelectorAll('.reveal,.stag,.mask,.clipr').forEach((el) => el.classList.add('in'));
    } else {
      observers.push(mkObserver('.reveal', (el) => el.classList.add('in'), 0.1));
      observers.push(mkObserver('.clipr', (el) => el.classList.add('in'), 0));
      observers.push(mkObserver('[data-mask]', (el) => el.classList.add('in'), 0.4));
      observers.push(
        mkObserver(
          '[data-stag]',
          (el) => {
            [...el.children].forEach((c, i) => {
              c.style.transitionDelay = i * 95 + 'ms';
            });
            el.classList.add('in');
          },
          0.12
        )
      );
    }

    /* Fallback: Chrome skips IntersectionObserver callbacks for targets fully
       hidden by clip-path, so drive entrances from scroll position too.
       Idempotent. */
    const markInView = () => {
      if (reduce) return;
      const vh = window.innerHeight;
      document
        .querySelectorAll('.reveal:not(.in),.clipr:not(.in),[data-mask]:not(.in),[data-stag]:not(.in)')
        .forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < vh * 0.94 && r.bottom > 0) {
            if (el.hasAttribute('data-stag')) {
              [...el.children].forEach((c, i) => {
                c.style.transitionDelay = i * 95 + 'ms';
              });
            }
            el.classList.add('in');
          }
        });
    };

    /* --- count-up --- */
    const parseNum = (s) => {
      const m = String(s).match(/([+~]?)(\d+)(.*)/);
      return m ? { pre: m[1], num: +m[2], suf: m[3] } : null;
    };
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const p = parseNum(el.dataset.val);
          cio.unobserve(el);
          if (!p || reduce) {
            el.textContent = el.dataset.val;
            return;
          }
          const t0 = performance.now();
          const D = 1200;
          const tick = (t) => {
            const k = Math.min(1, (t - t0) / D);
            const e2 = 1 - Math.pow(1 - k, 3);
            el.textContent = p.pre + Math.round(p.num * e2) + p.suf;
            if (k < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.6 }
    );
    document.querySelectorAll('.count').forEach((el) => cio.observe(el));
    observers.push(cio);

    /* --- scroll-driven --- */
    const pars = [...document.querySelectorAll('[data-par]')];
    const fills = [...document.querySelectorAll('[data-fill]')].map((sec) => ({
      sec,
      words: [...sec.querySelectorAll('.fw')],
    }));
    const pins = [...document.querySelectorAll('[data-pin]')].map((w) => ({
      wrap: w,
      track: w.querySelector('[data-pin-track]'),
    }));
    const tracks = [...document.querySelectorAll('.mq-track')];
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      const y = window.scrollY;
      markInView();
      const top = topRef.current;
      const lau = launchRef.current;
      if (top) top.classList.toggle('show', y > 700);
      if (lau) lau.classList.toggle('show', y > 700);
      if (ticking || reduce) {
        lastY = y;
        return;
      }
      ticking = true;
      requestAnimationFrame(() => {
        const vh = window.innerHeight;
        const max = document.documentElement.scrollHeight - vh;
        if (progRef.current) {
          progRef.current.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
        }

        pars.forEach((el) => {
          const r = el.getBoundingClientRect();
          const c = r.top + r.height / 2 - vh / 2;
          el.style.transform = 'translateY(' + c * parseFloat(el.dataset.speed) + 'px)';
        });

        fills.forEach(({ sec, words }) => {
          const r = sec.getBoundingClientRect();
          const prog = (vh * 0.85 - r.top) / (r.height * 0.7);
          const lit = Math.max(0, Math.min(words.length, prog * words.length));
          words.forEach((w, i) => {
            w.style.color =
              i < lit ? '#fff' : i < lit + 1 ? 'var(--teal-400)' : 'rgba(255,255,255,.22)';
          });
        });

        // pinned horizontal travel
        pins.forEach(({ wrap, track }) => {
          if (!track) return;
          const r = wrap.getBoundingClientRect();
          const travel = Math.max(0, track.scrollWidth - window.innerWidth);
          const total = wrap.offsetHeight - vh;
          const k = Math.max(0, Math.min(1, -r.top / (total || 1)));
          track.style.transform = 'translate3d(' + -k * travel + 'px,0,0)';
        });

        // marquee speed responds to scroll velocity
        const v = Math.min(3.2, 1 + Math.abs(y - lastY) / 26);
        tracks.forEach((t) => {
          t.style.animationDuration =
            (parseFloat(getComputedStyle(t).getPropertyValue('--mq-dur')) || 32) / v + 's';
        });

        lastY = y;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    requestAnimationFrame(onScroll);

    /* --- cursor + magnetic --- */
    let cleanupCursor = () => {};
    const fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
    if (fine && !reduce && ringRef.current && dotRef.current) {
      document.body.classList.add('cursor-on');
      const ring = ringRef.current;
      const dot = dotRef.current;
      let mx = innerWidth / 2;
      let my = innerHeight / 2;
      let rx = mx;
      let ry = my;
      let raf;
      const loop = () => {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)';
        dot.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
        raf = requestAnimationFrame(loop);
      };
      loop();

      const HOT = 'a,button,[data-magnetic],.pcell,.dept,input,textarea';
      const move = (e) => {
        mx = e.clientX;
        my = e.clientY;
      };
      const over = (e) => {
        if (e.target.closest(HOT)) ring.classList.add('lg');
      };
      const out = (e) => {
        if (e.target.closest(HOT)) ring.classList.remove('lg');
      };
      const leave = () => ring.classList.add('hide');
      const enter = () => ring.classList.remove('hide');
      window.addEventListener('mousemove', move);
      document.addEventListener('mouseover', over);
      document.addEventListener('mouseout', out);
      document.addEventListener('mouseleave', leave);
      document.addEventListener('mouseenter', enter);

      const bound = [...document.querySelectorAll('[data-magnetic]')].map((el) => {
        const h = (e) => {
          const r = el.getBoundingClientRect();
          el.style.transform =
            'translate(' +
            (e.clientX - r.left - r.width / 2) * 0.25 +
            'px,' +
            (e.clientY - r.top - r.height / 2) * 0.35 +
            'px)';
        };
        const l = () => {
          el.style.transform = '';
        };
        el.addEventListener('mousemove', h);
        el.addEventListener('mouseleave', l);
        return { el, h, l };
      });

      cleanupCursor = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('mousemove', move);
        document.removeEventListener('mouseover', over);
        document.removeEventListener('mouseout', out);
        document.removeEventListener('mouseleave', leave);
        document.removeEventListener('mouseenter', enter);
        bound.forEach(({ el, h, l }) => {
          el.removeEventListener('mousemove', h);
          el.removeEventListener('mouseleave', l);
        });
        document.body.classList.remove('cursor-on');
      };
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      observers.forEach((o) => o.disconnect());
      cleanupCursor();
    };
  }, [ringRef, dotRef, topRef, progRef, launchRef]);
}
