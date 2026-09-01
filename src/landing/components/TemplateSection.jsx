import { useState, useRef, useEffect, useCallback } from 'react';
import Reveal from './Reveal';
import Section from './Section';
import { MaskWords } from './fx';
import { IMG, srcSetFor } from '../data';
import { AsteriskIcon, ArrowLeftIcon, ArrowRightIcon } from './doodles';

function DragHandle({ className = '', active = false }) {
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border-2 border-cream bg-ink shadow-photo transition-transform duration-150 ease-out will-change-transform hover:scale-110 md:h-12 md:w-12 ${active ? 'scale-[1.15]' : ''} ${className}`}
    >
      <div className="flex items-center gap-0.5">
        <ArrowLeftIcon className="h-3 w-3 text-cream" />
        <ArrowRightIcon className="h-3 w-3 text-cream" />
      </div>
    </div>
  );
}

// Generic template site (left side)
function GenericSite() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-lg border border-ink/10 bg-paper p-4 sm:p-6 md:p-10">
      <div className="flex items-center justify-between">
        <span className="font-serif text-base text-ink sm:text-xl">Le Bon Restaurant</span>
        <div className="hidden gap-6 text-xs font-medium text-ink/75 sm:flex">
          <span>Accueil</span>
          <span>À propos</span>
          <span>Menu</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="mt-4 sm:mt-8">
        <p className="font-serif text-xs font-semibold uppercase tracking-wider text-ink/75 sm:text-sm">Bienvenue chez nous</p>
        <h2 className="mt-2 font-serif text-2xl text-ink sm:text-4xl md:text-5xl">Le Bon Restaurant</h2>
        <p className="mt-2 max-w-md font-serif text-sm text-ink/70 sm:mt-4 sm:text-base">
          Nous proposons de délicieux plats préparés avec les meilleurs ingrédients frais et locaux.
        </p>
        <span aria-hidden="true" className="mt-3 inline-block rounded-sm border-2 border-ink/30 px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink/80 sm:mt-6 sm:px-5 sm:py-2.5">
          Voir le menu
        </span>
      </div>
      <div className="mt-4 overflow-hidden rounded-md sm:mt-8">
        <img
          src={IMG.interior}
          srcSet={srcSetFor(IMG.interior)}
          sizes="(min-width: 1024px) 54vw, calc(100vw - 3rem)"
          alt="Salle de restaurant aux tables dressées"
          loading="lazy"
          decoding="async"
          className="aspect-[21/9] w-full object-cover grayscale opacity-80 sm:aspect-video"
        />
      </div>
      <div className="mt-4 hidden grid-cols-2 gap-4 sm:mt-6 sm:grid">
        <div>
          <p className="font-serif text-xs font-semibold text-ink/75">Horaires</p>
          <p className="mt-1 font-serif text-sm text-ink/70">Mar-Dim: 12h-22h</p>
        </div>
        <div>
          <p className="font-serif text-xs font-semibold text-ink/75">Contact</p>
          <p className="mt-1 font-serif text-sm text-ink/70">01 23 45 67 89</p>
        </div>
      </div>
    </div>
  );
}

// Branded Sous site (right side)
function SousSite() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-lg border-2 border-ink bg-coal p-4 text-cream shadow-card sm:p-6 md:p-10">
      <div className="flex items-center justify-between">
        <span className="font-display text-base italic sm:text-xl">Rumor</span>
        <div className="hidden gap-4 text-xs font-bold uppercase tracking-widest sm:flex">
          <span>Menu</span>
          <span>À propos</span>
          <span className="bg-flame px-2 py-1">Réserver</span>
        </div>
      </div>
      <div className="mt-4 sm:mt-8">
        <p className="font-hand text-sm font-bold uppercase tracking-wide text-flame sm:text-base">Le brunch est servi</p>
        <h2 className="mt-2 font-display text-2xl uppercase leading-[0.95] sm:text-5xl md:text-6xl">
          Le brunch<br />est<br />servi.
        </h2>
        <p className="mt-2 max-w-md text-xs text-cream/70 sm:mt-4 sm:text-sm">
          Une expérience culinaire unique. Plats signatures, cocktails artisanaux, ambiance chaleureuse.
        </p>
        <span aria-hidden="true" className="mt-3 inline-flex items-center gap-2 border border-cream/70 px-4 py-2 text-xs font-bold uppercase tracking-widest sm:mt-6 sm:px-5 sm:py-2.5">
          Voir la carte
          <ArrowRightIcon className="h-3 w-3" />
        </span>
      </div>
      <div className="mt-4 overflow-hidden rounded-md sm:mt-8">
        <img
          src={IMG.burger}
          srcSet={srcSetFor(IMG.burger)}
          sizes="(min-width: 1024px) 54vw, calc(100vw - 3rem)"
          alt="Burger de brunch servi avec des frites"
          loading="lazy"
          decoding="async"
          className="aspect-[21/9] w-full object-cover sm:aspect-video"
        />
      </div>
      <div className="mt-4 hidden items-center gap-3 sm:mt-6 sm:flex">
        <div className="h-2 w-2 rounded-full bg-flame"></div>
        <p className="text-xs font-bold uppercase tracking-widest text-cream/80">En ligne après validation</p>
      </div>
    </div>
  );
}

export default function TemplateSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // Target = where the pointer wants the divider. Current = what's on screen.
  // A small rAF loop eases current toward target every frame, so dragging
  // feels snappy (tracks the finger closely) without ever visually "jumping" —
  // and releasing settles smoothly into place instead of stopping dead.
  const targetRef = useRef(50);
  const currentRef = useRef(50);
  const draggingRef = useRef(false);
  const rafRef = useRef(0);

  const clampFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return targetRef.current;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    return Math.max(0, Math.min(100, (x / rect.width) * 100));
  }, []);

  const animate = useCallback(() => {
    const diff = targetRef.current - currentRef.current;
    if (Math.abs(diff) < 0.05) {
      currentRef.current = targetRef.current;
      setSliderPos(currentRef.current);
      rafRef.current = 0;
      return;
    }
    // Faster ease while actively dragging (snappy, close to 1:1), a gentler
    // ease once released so it glides to rest (smooth) instead of snapping.
    const ease = draggingRef.current ? 0.55 : 0.16;
    currentRef.current += diff * ease;
    setSliderPos(currentRef.current);
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  const kick = useCallback(() => {
    if (!rafRef.current) rafRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const setTarget = useCallback((value) => {
    targetRef.current = Math.max(0, Math.min(100, value));
    kick();
  }, [kick]);

  const setTargetFromClientX = useCallback((clientX) => {
    setTarget(clampFromClientX(clientX));
  }, [clampFromClientX, setTarget]);

  const handleKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === 'ArrowLeft') { e.preventDefault(); setTarget(targetRef.current - step); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); setTarget(targetRef.current + step); }
    else if (e.key === 'Home') { e.preventDefault(); setTarget(0); }
    else if (e.key === 'End') { e.preventDefault(); setTarget(100); }
  };

  const handlePointerDown = (e) => {
    draggingRef.current = true;
    setIsDragging(true);
    containerRef.current?.setPointerCapture?.(e.pointerId);
    setTargetFromClientX(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!draggingRef.current) return;
    setTargetFromClientX(e.clientX);
  };

  const endDrag = (e) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setIsDragging(false);
    containerRef.current?.releasePointerCapture?.(e.pointerId);
  };

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return (
    <Section id="product" bg="bg-cream" className="overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Copy section */}
          <Reveal>
            <h2 className="max-w-lg font-display uppercase leading-[1.05] text-3xl md:text-5xl xl:text-6xl">
              <MaskWords text="Votre restaurant" />
              <br />
              <MaskWords text="n'est pas un template." start={200} />
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/75">
              Vos plats ont une personnalité. Votre salle a une atmosphère unique. Votre équipe a une histoire à raconter.
            </p>
            <p className="mt-4 max-w-md text-base font-semibold text-ink">
              Pourquoi votre site web ressemblerait-il à celui de tous les autres ?
            </p>
            <div className="mt-8 flex items-center gap-3 font-hand text-2xl text-ink/80">
              <AsteriskIcon className="h-5 w-5 rotate-12 text-flame" />
              Sous change la donne.
            </div>
          </Reveal>

          {/* Interactive slider */}
          <Reveal delay={150}>
            <div className="relative">
              {/* Slider container */}
              <div
                ref={containerRef}
                role="slider"
                tabIndex={0}
                aria-label="Comparer le site générique et le site conçu par Sous"
                aria-orientation="horizontal"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(sliderPos)}
                className={`relative h-[440px] touch-none select-none overflow-hidden rounded-lg transition-shadow focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-flame sm:h-[480px] md:h-[600px] ${isDragging ? 'cursor-grabbing' : 'cursor-col-resize'}`}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onKeyDown={handleKeyDown}
              >
                {/* Left side - Generic site */}
                <div className="absolute inset-0">
                  <GenericSite />
                </div>

                {/* Right side - Sous site (clipped) */}
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath: `inset(0 0 0 ${sliderPos}%)`,
                  }}
                >
                  <SousSite />
                </div>

                {/* Drag handle and line */}
                <div
                  className="absolute inset-y-0 z-10"
                  style={{ left: `${sliderPos}%` }}
                >
                  {/* Vertical line */}
                  <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-ink shadow-photo"></div>
                  {/* Handle */}
                  <DragHandle active={isDragging} />
                </div>
              </div>

              {/* Glissez cue */}
              <div className="mt-4 text-center text-xs font-bold uppercase tracking-widest text-ink/70">
                ← Glissez →
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
