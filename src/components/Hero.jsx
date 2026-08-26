import Reveal from './Reveal';
import Section from './Section';
import LogoMarquee from './LogoMarquee';
import { IMG } from '../data';
import { ArrowRightIcon, HandArrowDown, HandArrowSwoop, AsteriskIcon } from './doodles';
import { Magnetic, MaskWords, Parallax, Tilt, goToSection } from './fx';

const Note = ({ className = '', children }) => (
  <span className={`border border-ink/10 px-3 py-2 text-center font-hand text-base font-bold uppercase tracking-wide shadow-cardsm ${className}`}>
    {children}
  </span>
);

export default function Hero() {
  return (
    <Section id="top" stack={false} className="lg:rounded-t-none lg:shadow-none">
      <Parallax speed={0.1} className="pointer-events-none absolute inset-x-0 -top-4 select-none">
        <p className="font-display text-[24vw] leading-none text-ink/5">sous.</p>
      </Parallax>

      {/* Mobile hero layout — matches the reference design */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-4 pb-8 pt-24 md:px-8 lg:hidden">
        <Reveal className="w-full text-center">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-flame sm:text-xs">
            Le site web pensé pour les restaurateurs
          </p>

          <h1 className="mt-6 font-serif leading-[1.1] text-4xl sm:text-5xl">
            Votre restaurant mérite un site qui a{' '}
            <span className="font-hand text-5xl font-bold text-flame sm:text-6xl">du goût.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-ink/75">
            Votre cuisine a une identité. Votre salle, une atmosphère. Votre équipe, une histoire. Votre site devrait le montrer.
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:gap-6">
          <a href="#pricing" onClick={(e) => { e.preventDefault(); goToSection('pricing'); }} className="group inline-flex items-center gap-2 rounded-sm bg-flame px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink">
            Découvrir Sous
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#how" onClick={(e) => { e.preventDefault(); goToSection('how'); }} className="group inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-sm font-semibold">
            Voir comment ça marche
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </a>
        </Reveal>

        <Reveal delay={300} className="mt-8">
          <p className="text-center text-xs font-medium text-ink/50">
            Faites glisser pour découvrir ↓
          </p>
        </Reveal>
      </div>

      {/* Desktop hero layout */}
      <div className="relative mx-auto hidden w-full max-w-7xl gap-12 px-4 pb-20 pt-10 md:px-8 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-16 lg:pt-6">
        <Reveal className="relative">
          <p className="font-hand text-lg font-bold uppercase leading-tight text-flame md:text-xl">
            Le site web pensé pour les restaurateurs.
          </p>

          <h1 className="mt-2 font-display leading-[1.05] text-5xl xl:text-[4.5rem]">
            <MaskWords text="Votre site web," />
            <br />
            <MaskWords text="enfin à votre image." start={220} />
            
            <span className="mt-1 block font-hand text-lg font-bold uppercase tracking-wide text-flame xl:text-xl">
              <MaskWords text="Zéro template. Zéro stress." start={520} step={60} />
            </span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/75 md:text-base">
            Sous crée et maintient votre site web automatiquement, pour que vous puissiez vous concentrer sur ce qui compte vraiment : vos clients et vos plats.
          </p>
          <p className="mt-4 max-w-md text-sm font-medium leading-relaxed text-ink/75">
            Synchronisé avec votre caisse. Validé par vous. En ligne en un clin d'œil.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Magnetic>
              <a href="#pricing" onClick={(e) => { e.preventDefault(); goToSection('pricing'); }} className="group inline-flex items-center gap-2 rounded-sm bg-flame px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink">
                Découvrir Sous
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic strength={0.15}>
              <a href="#how" onClick={(e) => { e.preventDefault(); goToSection('how'); }} className="group inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-sm font-semibold">
                Voir comment ça marche
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="flex items-start gap-8">
            <div className="flex-1">
              <Tilt>
                <div className="relative -rotate-1 rounded-lg border border-ink/10 bg-paper p-6 shadow-card md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl italic">Rumor</span>
                    <div className="hidden gap-4 text-[10px] font-bold uppercase tracking-widest text-ink/60 sm:flex">
                      <span>Menu</span><span>À propos</span><span>Réserver</span>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-[1fr_auto] items-center gap-6">
                    <div>
                      <h2 className="font-display text-5xl uppercase leading-[0.95] md:text-6xl">
                        Le brunch<br />est<br />servi.
                      </h2>
                      <a href="#examples" className="mt-8 inline-flex items-center gap-2 border border-ink/20 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-colors hover:bg-ink hover:text-cream">
                        Voir le menu <ArrowRightIcon className="h-4 w-4" />
                      </a>
                    </div>
                    <div className="w-44 rotate-2 overflow-hidden rounded-md shadow-photo md:w-64">
                      <img src={IMG.brunch} alt="Brunch" loading="eager" fetchpriority="high" draggable={false} className="kenburns aspect-[4/5] w-full object-cover" />
                    </div>
                  </div>
                </div>
              </Tilt>
              <div className="mt-6 flex items-center justify-center gap-2 font-hand text-xl text-ink/70">
                <HandArrowSwoop className="h-7 w-12 -scale-x-100" /> validé par le chef.
              </div>
            </div>

            <Parallax speed={0.14} className="hidden xl:block">
              <div className="flex flex-col items-center gap-1 pt-2">
                <AsteriskIcon className="mb-2 h-5 w-5 rotate-12 text-ink/40" />
                <Note className="-rotate-2 bg-flame text-cream">Synchronisé à la caisse</Note>
                <HandArrowDown className="h-9 w-5 text-ink/40" />
                <Note className="rotate-1 bg-butter">Conforme INCO</Note>
                <HandArrowDown className="h-9 w-5 text-ink/40" />
                <Note className="-rotate-1 bg-olive">En ligne en 1 min</Note>
              </div>
            </Parallax>
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 hidden lg:block">
        <LogoMarquee />
      </div>
    </Section>
  );
}