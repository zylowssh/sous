import { useEffect, useRef, useState } from 'react';
import { ThinkingOrb } from '../thinking/ThinkingOrb';
import { ArrowRightIcon, EyeIcon, MessageIcon } from './doodles';
import { IMG } from '../data';

const LOOP = 10800;
const USER = 'On ajoute un plat du jour ce midi : Linguine alle vongole';
const SOUS_1 = "C'est noté. Je mets à jour votre site.";
const SOUS_2 = 'Votre site est à jour. Le plat du jour est en ligne.';

function clamp01(v) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

export default function LiveSousDemo() {
  const rootRef = useRef(null);
  const visibleRef = useRef(true);
  const elapsedRef = useRef(0);
  const prevRef = useRef(0);
  const [t, setT] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  useEffect(() => {
    if (reduced) {
      setT(LOOP - 1);
      return undefined;
    }
    let raf;
    let io;
    const el = rootRef.current;
    if (el && typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(([entry]) => { visibleRef.current = entry.isIntersecting; }, { threshold: 0.1 });
      io.observe(el);
    }
    prevRef.current = performance.now();
    const tick = (now) => {
      raf = requestAnimationFrame(tick);
      if (visibleRef.current) {
        elapsedRef.current = (elapsedRef.current + (now - prevRef.current)) % LOOP;
        setT(elapsedRef.current);
      }
      prevRef.current = now;
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [reduced]);

  const ut = clamp01((t - 600) / 1500);
  const th1 = t >= 2300 && t < 4000;
  const s1 = clamp01((t - 4000) / 650);
  const th2 = t >= 4900 && t < 6200;
  const s2 = clamp01((t - 6300) / 1300);
  const updated = t >= 7400;

  const userText = USER.slice(0, Math.round(USER.length * ut));
  const sous1Text = SOUS_1.slice(0, Math.round(SOUS_1.length * s1));
  const sous2Text = SOUS_2.slice(0, Math.round(SOUS_2.length * s2));

  return (
    <div ref={rootRef}>
      <p className="mb-2 flex items-center justify-end gap-2 text-right font-hand text-base text-ink/40">
        Sous s'occupe de tout.
      </p>

      <div className="grid overflow-hidden rounded-lg border border-ink/10 bg-paper shadow-card sm:grid-cols-2">
        {/* Chat */}
        <div className="flex flex-col border-b border-ink/10 p-4 sm:border-b-0 sm:border-r">
          <p className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-ink/50">
            <MessageIcon className="h-3.5 w-3.5" /> Sous Assistant
          </p>

          <div className="mt-3 flex min-h-[150px] flex-1 flex-col justify-end space-y-2.5">
            {t >= 600 && (
              <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-ink px-3 py-2 text-xs text-cream">
                <p className="text-[9px] uppercase tracking-wide text-cream/40">Vous (via WhatsApp)</p>
                {userText}
                <p className={`mt-1 text-right text-[9px] text-cream/40 transition-opacity duration-300 ${ut >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                  12:07
                </p>
              </div>
            )}

            {th1 && (
              <div className="flex w-fit items-center gap-2 rounded-lg rounded-tl-sm bg-flame/10 px-3 py-2">
                <ThinkingOrb size={36} />
                <span className="text-[9px] font-bold uppercase tracking-widest text-flame">Sous réfléchit</span>
              </div>
            )}

            {t >= 4000 && (
              <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-flame/10 px-3 py-2 text-xs text-ink">
                <p className="text-[9px] font-bold uppercase tracking-wide text-flame">Sous</p>
                {sous1Text}
                <p className={`mt-1 text-[9px] text-ink/40 transition-opacity duration-300 ${s1 >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                  12:07
                </p>
              </div>
            )}

            {th2 && (
              <div className="flex w-fit items-center gap-2 rounded-lg rounded-tl-sm bg-flame/10 px-3 py-2">
                <ThinkingOrb size={36} />
                <span className="text-[9px] font-bold uppercase tracking-widest text-flame">Sous réfléchit</span>
              </div>
            )}

            {t >= 6300 && (
              <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-flame/10 px-3 py-2 text-xs text-ink">
                <p className="text-[9px] font-bold uppercase tracking-wide text-flame">Sous</p>
                {sous2Text}
                <p className={`mt-1 text-[9px] text-ink/40 transition-opacity duration-300 ${s2 >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                  12:08
                </p>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-sm border border-ink/15 bg-cream px-3 py-2">
            <span className="flex-1 text-xs text-ink/35">Écrire un message…</span>
            <span aria-hidden className="h-3 w-px animate-[blink_1s_steps(1)_infinite] bg-flame" />
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-flame text-cream">
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        {/* Live preview */}
        <div className="flex flex-col p-4">
          <p className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-ink/50">
            <EyeIcon className="h-3.5 w-3.5" /> Aperçu en direct
          </p>

          <div className="mt-3 overflow-hidden rounded-md border border-ink/10">
            <div className="flex items-center justify-between bg-ink px-3 py-2 text-cream">
              <span className="font-serif text-sm italic">Mamma Rosa</span>
              <span className="relative rounded-sm bg-flame px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest">
                Réserver
                {updated && (
                  <span className="absolute -right-1.5 -top-1.5 animate-[pop_0.55s_cubic-bezier(0.34,1.56,0.64,1)] rounded-full bg-butter px-1 py-0.5 text-[6px] font-extrabold uppercase tracking-widest text-ink">
                    MAJ
                  </span>
                )}
              </span>
            </div>
            <div className="relative p-3">
              <p className="text-[9px] font-bold uppercase tracking-widest text-flame">Plat du jour</p>
              {updated ? (
                <p key="updated" className="mt-1 animate-[word-in_0.6s_cubic-bezier(0.22,1,0.36,1)] font-display text-lg uppercase leading-tight text-ink">
                  Linguine<br />alle vongole
                </p>
              ) : (
                <p key="base" className="mt-1 font-display text-lg uppercase leading-tight text-ink">
                  Ravioles de<br />Saint-Jacques
                </p>
              )}
              <div className="mt-2 flex items-center gap-3">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <img
                    src={IMG.fish}
                    alt=""
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${updated ? 'opacity-0' : 'opacity-100'}`}
                   decoding="async" />
                  <img
                    src={IMG.pasta}
                    alt=""
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${updated ? 'opacity-100' : 'opacity-0'}`}
                   decoding="async" />
                </div>
                <p className={`font-display text-2xl transition-colors duration-500 ${updated ? 'text-flame' : 'text-ink'}`}>
                  {updated ? '24 €' : '22 €'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-[10px] text-ink/45">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-ink/30" />
              Mis à jour automatiquement
            </span>
            <span className="flex items-center gap-1">
              <span className={`h-1.5 w-1.5 rounded-full bg-green-600 ${updated ? 'animate-pulse' : ''}`} />
              En ligne
            </span>
          </div>
        </div>
      </div>

      <p className={`mt-3 text-right font-hand text-sm text-flame transition-opacity duration-500 ${updated ? 'opacity-100' : 'opacity-0'}`}>
        Sous a mis à jour le menu.
      </p>
    </div>
  );
}