import Reveal from './Reveal';
import Section from './Section';
import { IMG } from '../data';
import { ArrowRightIcon, AsteriskIcon } from './doodles';
import { MaskWords, goToSection } from './fx';

const BrowserDots = ({ light = false }) => (
  <div className="flex gap-1.5">
    {[0, 1, 2].map((i) => (
      <span key={i} className={`h-2 w-2 rounded-full border ${light ? 'border-cream/40' : 'border-ink/40'}`} />
    ))}
  </div>
);

export default function Examples() {
  return (
    <Section id="examples" bg="bg-cream">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 md:px-8 lg:grid-cols-[0.75fr_1.6fr] lg:py-8">
        <Reveal>
          <h2 className="font-display leading-[1.1] text-4xl md:text-5xl">
            <MaskWords text="Une seule plateforme." />
            <br />
            <MaskWords text="Des identités" start={200} />{' '}
            <span className="font-hand normal-case text-flame text-5xl md:text-6xl font-bold">uniques.</span>
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/75">
            Sous ne se contente pas de remplir un template. Il adapte la présentation à votre ambiance, tout en maintenant vos données à jour automatiquement.
          </p>
          <a href="#pricing" onClick={(e) => { e.preventDefault(); goToSection('pricing'); }} className="group mt-7 inline-flex items-center gap-2 rounded-sm border-2 border-ink px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-ink hover:text-cream">
            Voir les tarifs <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 md:gap-8">
            <div className="group">
              <div className="mb-2 text-center sm:mb-3">
                <p className="font-display text-sm font-bold italic underline decoration-2 underline-offset-4 sm:text-xl">Mamma Rosa</p>
                <p className="mt-1 hidden text-[10px] font-bold uppercase tracking-widest text-ink/60 sm:block">Italien • Chaleureux • Traditionnel</p>
              </div>
              <div className="flex h-full -rotate-1 flex-col rounded-md border border-ink/20 bg-[#FAF5EC] p-2.5 transition-all duration-300 group-hover:-translate-y-2 group-hover:rotate-0 sm:p-4">
                <BrowserDots />
                <p className="mt-2 font-serif text-lg italic sm:mt-3 sm:text-3xl">Mamma Rosa</p>
                <p className="mt-2 hidden text-[10px] leading-relaxed text-ink/60 sm:block">
                  On cuisine comme Nonna nous l'a appris — lentement, avec passion et beaucoup trop de beurre.
                </p>
                <div className="mt-2 overflow-hidden rounded-full sm:mt-3">
                  <img src={IMG.italiana} alt="Pasta dish" loading="lazy" className="kenburns aspect-square w-full object-cover" />
                </div>
                <span className="mt-3 hidden self-start border border-ink px-2 py-1 text-[10px] font-bold uppercase tracking-widest sm:inline-block">Découvrir le menu</span>
              </div>
            </div>

            <div className="group">
              <div className="mb-2 text-center sm:mb-3">
                <p className="font-display text-sm font-bold uppercase underline decoration-2 underline-offset-4 sm:text-xl">Knock Knock</p>
                <p className="mt-1 hidden text-[10px] font-bold uppercase tracking-widest text-ink/60 sm:block">Burgers • Audacieux • Vivant</p>
              </div>
              <div className="flex h-full rotate-1 flex-col rounded-md border-2 border-ink bg-coal p-2.5 text-cream shadow-card transition-all duration-300 group-hover:-translate-y-2 group-hover:rotate-0 sm:p-4">
                <BrowserDots light />
                <p className="mt-2 font-display text-xl uppercase leading-[0.95] sm:mt-3 sm:text-4xl">Knock<br />Knock</p>
                <div className="mt-2 hidden gap-2 sm:mt-3 sm:flex">
                  <span className="-rotate-2 bg-flame px-2 py-1 text-[10px] font-extrabold uppercase tracking-widest">Bons burgers</span>
                  <span className="rotate-2 bg-flame px-2 py-1 text-[10px] font-extrabold uppercase tracking-widest">Bonne humeur</span>
                </div>
                <div className="mt-2 overflow-hidden rounded sm:mt-3">
                  <img src={IMG.burger} alt="Smash burger" loading="lazy" className="kenburns aspect-square w-full object-cover sm:aspect-video" />
                </div>
                <span className="mt-3 hidden items-center gap-1 self-start border border-cream/60 px-2 py-1 text-[10px] font-bold uppercase tracking-widest sm:inline-flex">
                  Voir le menu <ArrowRightIcon className="h-3 w-3" />
                </span>
              </div>
            </div>

            <div className="group col-span-2 sm:col-span-1">
              <div className="mb-2 text-center sm:mb-3">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.35em] underline decoration-2 underline-offset-4 sm:text-xl">Sora</p>
                <p className="mt-1 hidden text-[10px] font-bold uppercase tracking-widest text-ink/60 sm:block">Japonais • Minimal • Raffiné</p>
              </div>
              <div className="flex h-full -rotate-1 flex-col rounded-md border border-ink/20 bg-paper p-2.5 transition-all duration-300 group-hover:-translate-y-2 group-hover:rotate-0 sm:p-4">
                <BrowserDots />
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.35em] sm:mt-3 sm:text-xl">Sora</p>
                <p className="mt-2 hidden font-serif text-sm italic leading-relaxed text-ink/70 sm:block">Cuisine japonaise, préparée avec intention et précision.</p>
                <div className="mt-2 mx-auto max-w-xs overflow-hidden rounded sm:mt-3 sm:mx-0 sm:max-w-none">
                  <img src={IMG.ramen} alt="Ramen bowl" loading="lazy" className="kenburns aspect-video w-full object-cover sm:aspect-square" />
                </div>
                <span className="mt-3 hidden items-center gap-1 self-start border border-ink px-2 py-1 text-[10px] font-bold uppercase tracking-widest sm:inline-flex">
                  Notre carte <ArrowRightIcon className="h-3 w-3" />
                </span>
              </div>
            </div>
          </div>

          <p className="mt-8 flex items-center justify-center gap-3 text-center font-hand text-lg text-ink/70">
            <AsteriskIcon className="h-5 w-5 text-ink/40" />
            <span className="underline decoration-2 underline-offset-4">Même moteur. Ambiances complètement différentes.</span>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
