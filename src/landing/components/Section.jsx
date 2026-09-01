import { useEffect, useRef } from 'react';

export default function Section({ id, bg = 'bg-cream', className = '', stack = true, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !stack) return;
    const mq = window.matchMedia('(min-width: 1024px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0;

    const update = () => {
      raf = 0;
      if (!mq.matches || reduced.matches) {
        el.style.transform = '';
        el.style.filter = '';
        return;
      }
      let next = el.nextElementSibling;
      while (next && !next.classList.contains('section-stack')) next = next.nextElementSibling;
      if (!next) return;

      const p = Math.min(1, Math.max(0, 1 - next.getBoundingClientRect().top / window.innerHeight));
      el.style.transform = `scale(${1 - p * 0.06})`;
      el.style.filter = `brightness(${1 - p * 0.25})`;
    };

    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
      el.style.transform = '';
      el.style.filter = '';
    };
  }, [stack]);

  return (
    <section
      ref={ref}
      id={id}
      className={`section-stack flex items-center ${bg} ${!stack ? 'no-stick' : ''} ${className}`}
    >
      {children}
    </section>
  );
}