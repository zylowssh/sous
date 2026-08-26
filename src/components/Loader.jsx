import { useEffect, useState } from 'react';
import { setReady } from './ready';
import { AsteriskIcon, CheckIcon } from './doodles';

const WORDS = ['votre menu.', 'vos horaires.', 'votre conformité.'];

export default function Loader() {
  const [phase, setPhase] = useState('in');
  const [word, setWord] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem('sous-intro') === '1'; } catch (e) { /* private mode */ }

    // Reduced motion, or the intro already played this session: skip straight
    // to the content (also prevents the replay when coming back from a legal
    // page, which remounts this component).
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || seen) {
      setReady();
      setPhase('gone');
      return;
    }

    document.body.style.overflow = 'hidden';

    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / 1600);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const wi = setInterval(() => setWord((w) => (w + 1) % WORDS.length), 550);
    const exit = setTimeout(() => {
      try { sessionStorage.setItem('sous-intro', '1'); } catch (e) { /* private mode */ }
      setReady();
      setPhase('out');
      document.body.style.overflow = '';
    }, 1900);
    const gone = setTimeout(() => setPhase('gone'), 2800);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(wi);
      clearTimeout(exit);
      clearTimeout(gone);
      document.body.style.overflow = '';
    };
  }, []);

  if (phase === 'gone') return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream transition-transform duration-[850ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase === 'out' ? '-translate-y-full rounded-b-[3rem]' : ''
      }`}
    >
      <AsteriskIcon className="absolute left-8 top-8 h-6 w-6 rotate-12 text-flame/60" />
      <AsteriskIcon className="absolute bottom-24 right-10 h-5 w-5 text-ink/30" />

      <p className="font-hand text-lg font-bold uppercase tracking-wide text-flame">on prépare le service</p>

      <div className="in-view flex items-center justify-center">
        <img
          src="/brand/sous-loader.svg"
          alt="Sous"
          draggable={false}
          className="h-28 w-auto select-none md:h-36"
        />
      </div>

      <div className="mt-8 flex h-9 items-center gap-3 font-hand text-2xl text-ink/70">
        <CheckIcon className="h-7 w-7 animate-floaty text-flame" />
        <span key={word} className="loader-word">{WORDS[word]}</span>
      </div>

      <div className="absolute bottom-10 flex flex-col items-center gap-3">
        <span className="font-display text-sm">{count}%</span>
        <div className="h-1 w-44 overflow-hidden rounded-full bg-ink/10">
          <div className="h-full rounded-full bg-flame transition-[width] duration-100" style={{ width: `${count}%` }} />
        </div>
        <p className="-rotate-2 font-hand text-base text-ink/60">prêt à servir.</p>
      </div>
    </div>
  );
}
