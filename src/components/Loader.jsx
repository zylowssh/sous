import { useEffect, useState } from 'react';
import { AsteriskIcon, CheckIcon } from './doodles';
import { setReady } from './ready';

const WORDS = ['votre menu.', 'vos horaires.', 'votre conformité.'];

export default function Loader({ active }) {
  const [word, setWord] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      document.body.style.overflow = '';
      setReady();
      return undefined;
    }

    document.body.style.overflow = 'hidden';
    setCount(0);
    setWord(0);

    let frame = 0;
    const startedAt = performance.now();
    const tick = (time) => {
      const progress = Math.min(1, (time - startedAt) / 700);
      setCount(Math.round(progress * 100));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    const wordTimer = window.setInterval(() => setWord((current) => (current + 1) % WORDS.length), 280);

    return () => {
      cancelAnimationFrame(frame);
      window.clearInterval(wordTimer);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <div
      role={active ? 'status' : undefined}
      aria-live={active ? 'polite' : undefined}
      aria-hidden={!active}
      inert={active ? undefined : ''}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        active ? 'translate-y-0' : 'pointer-events-none -translate-y-full'
      }`}
    >
      <AsteriskIcon className="absolute left-8 top-8 h-6 w-6 rotate-12 text-flame/60" />
      <AsteriskIcon className="absolute bottom-24 right-10 h-5 w-5 text-ink/30" />

      <p className="font-hand text-lg font-bold uppercase tracking-wide text-flame">on prépare le service</p>
      <img
        src="/brand/sous-loader.svg"
        alt="Sous"
        width="360"
        height="144"
        draggable={false}
        className="mt-2 h-28 w-auto select-none md:h-36"
      />

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
