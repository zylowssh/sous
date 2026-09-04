/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef, useState } from 'react';

export const MaskWords = ({ text, step = 70, start = 0, className = '' }) => (
  <span className={className}>
    {text.split(' ').map((w, i) => (
      <span key={`${w}-${i}`}>
        {i > 0 ? ' ' : null}
        <span className="mask-line">
          <span style={{ '--wd': `${start + i * step}ms` }}>{w}</span>
        </span>
      </span>
    ))}
  </span>
);

export function Magnetic({ children, className = '', strength = 0.25 }) {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className={`inline-block transition-transform duration-300 ease-out ${className}`}
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect();
        ref.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * strength}px, ${(e.clientY - r.top - r.height / 2) * strength}px)`;
      }}
      onMouseLeave={() => (ref.current.style.transform = 'translate(0,0)')}
    >
      {children}
    </div>
  );
}

export function Tilt({ children, className = '', max = 7 }) {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ref.current.style.transform = `perspective(1000px) rotateY(${px * max}deg) rotateX(${-py * max}deg)`;
      }}
      onMouseLeave={() => (ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)')}
    >
      {children}
    </div>
  );
}

export function Parallax({ children, speed = 0.12, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    let raf;
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
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, [speed]);

  return <div ref={ref} className={className}>{children}</div>;
}

const SECTIONS = [
  { id: 'top', label: 'Intro' },
  { id: 'product', label: 'Produit' },
  { id: 'how', label: 'Comment ça marche' },
  { id: 'examples', label: 'Exemples' },
  { id: 'tell', label: 'Dites-le à Sous' },
  { id: 'menu', label: 'Menu' },
  { id: 'testimonial', label: 'Témoignage' },
  { id: 'pricing', label: 'Tarifs' },
  { id: 'faq', label: 'FAQ' },
  { id: 'help', label: 'Aide' },
];

const DARK_SECTIONS = ['tell', 'testimonial'];

// Shared with useStackSnap below so the magnet-snap logic never fights a
// user-triggered scroll (e.g. clicking a dot) mid-animation.
let programmaticNav = false;
let programmaticNavTimer = 0;

// True document-flow offset of an element inside <main>. On desktop every
// section is sticky and pins at top:0, so getBoundingClientRect() reports 0
// for ALL sections already scrolled past , which made backward dot-nav clicks
// scroll nowhere. Walking main's children by layout height (offsetHeight is
// immune to sticky pinning and to the scale transform) gives the real,
// stable anchor of each section.
function anchorInMain(el) {
  const main = el.closest('main');
  if (!main) return el.getBoundingClientRect().top + window.scrollY;
  let y = main.getBoundingClientRect().top + window.scrollY;
  for (const child of main.children) {
    if (child === el) return y;
    y += child.offsetHeight;
  }
  return y;
}

export function goToSection(id) {
  const el = document.getElementById(id);
  if (!el) {
    // Coming from a legal page: go home first, scroll once it has rendered.
    if (window.location.hash) {
      window.location.hash = '';
      setTimeout(() => goToSection(id), 80);
    }
    return;
  }
  const desktop = window.matchMedia('(min-width: 1024px)').matches;
  const y = desktop ? anchorInMain(el) : el.getBoundingClientRect().top + window.scrollY;
  programmaticNav = true;
  clearTimeout(programmaticNavTimer);
  window.scrollTo({ top: y, behavior: 'smooth' });
  programmaticNavTimer = setTimeout(() => {
    programmaticNav = false;
  }, 900);
}

export function DotsNav({
  sections = SECTIONS,
  darkSectionIds = DARK_SECTIONS,
  appearance = 'standard',
  ariaLabel = 'Navigation entre les sections',
}) {
  const [active, setActive] = useState(sections[0]?.id ?? '');

  useEffect(() => {
    setActive(sections[0]?.id ?? '');
  }, [sections]);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const marker = window.scrollY + window.innerHeight * 0.45;
      let current = sections[0]?.id ?? '';

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        if (anchorInMain(el) <= marker) current = section.id;
        else break;
      }

      setActive((previous) => (previous === current ? previous : current));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [sections]);

  // Explicit colors instead of mix-blend-difference: difference turned the
  // dots cyan over the flame section. Ink reads on every light section,
  // white on the dark ones (tell, testimonial).
  const dark = darkSectionIds.includes(active);
  const compact = appearance === 'compact';

  return (
    <nav
      className={`fixed top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end lg:flex ${compact ? 'right-5 gap-3' : 'right-4 gap-1.5'}`}
      aria-label={ariaLabel}
    >
      {sections.map((s) => {
        const isActive = active === s.id;

        if (compact) {
          return (
            <button
              key={s.id}
              type="button"
              aria-label={s.label}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => goToSection(s.id)}
              className={`group relative flex items-center justify-end rounded-full transition-all duration-300 ease-out hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame ${
                isActive
                  ? `h-2.5 w-7 ${dark ? 'bg-cream' : 'bg-ink'}`
                  : `h-2.5 w-2.5 hover:w-7 ${dark ? 'bg-cream/40 hover:bg-cream/80' : 'bg-ink/30 hover:bg-ink/70'}`
              }`}
            >
              <span
                className={`pointer-events-none absolute right-8 translate-x-2 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 ${
                  dark ? 'text-cream' : 'text-ink'
                }`}
              >
                {s.label}
              </span>
            </button>
          );
        }

        return (
          <button
            key={s.id}
            type="button"
            aria-label={s.label}
            aria-current={isActive ? 'page' : undefined}
            onClick={() => goToSection(s.id)}
            className="group relative flex h-8 w-8 items-center justify-end rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
          >
            <span
              aria-hidden="true"
              className={`block h-2.5 w-7 origin-right rounded-full transition-[transform,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isActive
                  ? `scale-x-100 ${dark ? 'bg-cream' : 'bg-ink'}`
                  : `scale-x-[0.36] group-hover:scale-x-[0.58] group-focus-visible:scale-x-[0.58] ${dark ? 'bg-cream/60 group-hover:bg-cream' : 'bg-ink/40 group-hover:bg-ink'}`
              }`}
            />
            <span
              className={`pointer-events-none absolute right-10 translate-x-2 whitespace-nowrap rounded-sm px-2.5 py-1.5 text-xs font-bold uppercase tracking-widest opacity-0 shadow-card transition-[opacity,transform] duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 ${
                dark ? 'bg-cream text-ink' : 'bg-ink text-cream'
              }`}
            >
              {s.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

export function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const progress = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (ref.current) {
        ref.current.style.transform = `scaleX(${progress || 0})`;
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div ref={ref} className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-flame" style={{ transform: 'scaleX(0)' }} />;
}

export const Grain = () => (
  <div
    aria-hidden
    className="pointer-events-none fixed inset-0 z-[70] opacity-[0.05] mix-blend-multiply"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    }}
  />
);

/* Desktop magnet-snap: settles on the nearest section after the wheel stops.
   Uses real document offsets, so sticky pinning can't confuse it. */
export function useStackSnap() {
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer = 0;
    let cooling = false;

    const settle = () => {
      if (!mq.matches || reduced.matches || cooling || programmaticNav) return;
      const y = window.scrollY;
      const vh = window.innerHeight;

      // Same flow-offset walk as goToSection: immune to sticky pinning, so
      // snapping works in both directions.
      const pts = [];
      const main = document.querySelector('main');
      if (main) {
        let acc = main.getBoundingClientRect().top + y;
        for (const child of main.children) {
          if (child.classList.contains('section-stack') && child.id !== 'top') pts.push(acc);
          acc += child.offsetHeight;
        }
      }
      pts.push(document.documentElement.scrollHeight - vh);

      let best = pts[0];
      let bestD = Infinity;
      for (const p of pts) {
        const d = Math.abs(p - y);
        if (d < bestD) { bestD = d; best = p; }
      }

      if (bestD > 4 && bestD < vh * 0.6) {
        cooling = true;
        window.scrollTo({ top: best, behavior: 'smooth' });
        setTimeout(() => (cooling = false), 700);
      }
    };

    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(settle, 140);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, []);
}

export function BigMarquee({ text }) {
  return (
    <div className="relative z-10 bg-flame">
      <div className="-rotate-2 border-y-2 border-ink bg-ink py-3 text-cream">
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
            {Array(12).fill(text).map((t, i) => (
              <span key={i} className="flex items-center gap-12 whitespace-nowrap font-display text-3xl uppercase md:text-5xl">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
