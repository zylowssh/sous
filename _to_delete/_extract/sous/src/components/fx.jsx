import { useEffect, useRef } from 'react';

/* Révélation mot à mot des titres. Volontairement lente et sans rotation :
   le mouvement doit être calme, pas espiègle. */
export const MaskWords = ({ text, step = 60, start = 0, className = '' }) => (
  <span className={className}>
    {text.split(' ').map((w, i) => (
      <span key={i} className="mask-line mr-[0.26em] last:mr-0">
        <span style={{ '--wd': `${start + i * step}ms` }}>{w}</span>
      </span>
    ))}
  </span>
);

export function Parallax({ children, speed = 0.08, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.parentElement.getBoundingClientRect();
        const d = r.top + r.height / 2 - window.innerHeight / 2;
        el.style.transform = `translateY(${d * -speed}px)`;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (ref.current) ref.current.style.transform = `scaleX(${p || 0})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-sauge"
      style={{ transform: 'scaleX(0)' }}
    />
  );
}

/* Grain papier très léger : donne la texture éditoriale sans salir le texte. */
export const Grain = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 z-[70] opacity-[0.035] mix-blend-multiply"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    }}
  />
);

export function goToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
