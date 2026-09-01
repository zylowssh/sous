import Reveal from './Reveal';
import Section from './Section';
import LogoMarquee from './LogoMarquee';
import { ArrowRightIcon } from './doodles';
import { Magnetic, MaskWords, Parallax, goToSection } from './fx';

export default function Hero() {
  return (
    <Section id="top" stack={false} className="lg:rounded-t-none lg:shadow-none">
      {/* Desktop watermark */}
      <Parallax speed={0.1} className="pointer-events-none absolute inset-x-0 -top-4 hidden select-none lg:block">
        <p className="font-display text-[24vw] leading-none text-ink/5">sous.</p>
      </Parallax>

      {/* Mobile watermark: the letters scroll to the left, like the logo marquee */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 select-none overflow-hidden lg:hidden"
        style={{ maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}
      >
        <div className="flex w-max items-center gap-16 pr-16" style={{ animation: 'sous-marquee 8s linear infinite' }}>
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center whitespace-nowrap font-display text-[185vw] leading-none text-ink/5">
              sous.
            </span>
          ))}
        </div>
      </div>

      {/* Mobile hero layout — matches the reference design */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-4 pb-8 pt-24 md:px-8 lg:hidden">
        <Reveal className="w-full text-center">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-ink/75">
            La caisse à jour. Le site et le QR aussi.
          </p>

          <h1 className="mt-6 font-serif leading-[1.1] text-4xl sm:text-5xl">
            Votre menu change.<br />
            <span className="font-hand text-5xl font-bold text-flame sm:text-6xl">Votre site suit.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-ink/75">
            Votre caisse reste la source de vérité. Sous prépare chaque changement pour votre site et votre QR menu. Vous validez avant publication.
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:gap-6">
          <a href="#how" onClick={(e) => { e.preventDefault(); goToSection('how'); }} className="group inline-flex min-h-11 items-center gap-2 rounded-sm bg-flame px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-ink hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
            Voir Sous en action
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#pricing" onClick={(e) => { e.preventDefault(); goToSection('pricing'); }} className="group inline-flex min-h-11 items-center gap-2 border-b-2 border-ink text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame">
            Découvrir les offres
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </a>
        </Reveal>

        <Reveal delay={250} className="mt-8 w-full max-w-sm">
          <img
            src="/hero-img.webp"
            srcSet="/hero-img-768.webp 768w, /hero-img.webp 1142w"
            sizes="calc(100vw - 2rem)"
            width="1142"
            height="1008"
            alt="Menu de restaurant présenté dans un élégant porte-menu Sous"
            className="h-auto w-full"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            draggable={false}
          />
        </Reveal>

        <Reveal delay={400} className="mt-8">
          <p className="text-center text-xs font-medium text-ink/70">
            Faites glisser pour découvrir ↓
          </p>
        </Reveal>
      </div>

      {/* Desktop hero layout */}
      <div className="relative mx-auto hidden w-full max-w-7xl gap-12 px-4 pb-20 pt-10 md:px-8 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-16 lg:pt-6">
        <Reveal className="relative">
          <p className="font-hand text-lg font-bold uppercase leading-tight text-flame md:text-xl">
            Votre caisse reste la source de vérité.
          </p>

          <h1 className="mt-2 font-display leading-[1.05] text-5xl xl:text-[4.5rem]">
            <MaskWords text="Votre menu change." />
            <br />
            <MaskWords text="Votre site suit." start={220} />
            
            <span className="mt-1 block font-hand text-lg font-bold uppercase tracking-wide text-flame xl:text-xl">
              <MaskWords text="Sous prépare. Vous validez." start={520} step={60} />
            </span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/75 md:text-base">
            Sous transforme chaque changement de caisse en brouillon pour votre site et votre QR menu. Rien ne part sans votre feu vert.
          </p>
          <p className="mt-4 max-w-md text-sm font-medium leading-relaxed text-ink/75">
            WhatsApp, site, QR en salle. Une seule version, validée par vous.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Magnetic>
              <a href="#how" onClick={(e) => { e.preventDefault(); goToSection('how'); }} className="group inline-flex min-h-11 items-center gap-2 rounded-sm bg-flame px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-ink hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
                Voir Sous en action
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic strength={0.15}>
              <a href="#pricing" onClick={(e) => { e.preventDefault(); goToSection('pricing'); }} className="group inline-flex min-h-11 items-center gap-2 border-b-2 border-ink text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame">
                Découvrir les offres
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <img
            src="/hero-img.webp"
            srcSet="/hero-img-768.webp 768w, /hero-img.webp 1142w"
            sizes="48vw"
            width="1142"
            height="1008"
            alt="Menu de restaurant présenté dans un élégant porte-menu Sous"
            className="h-auto w-full"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            draggable={false}
          />
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 hidden lg:block">
        <LogoMarquee />
      </div>
    </Section>
  );
}
