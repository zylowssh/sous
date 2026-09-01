import Reveal from './Reveal';
import Section from './Section';
import { AsteriskIcon, SousMark } from './doodles';

const barSeparator = <span className="h-px flex-1 bg-ink/15"></span>;

export default function BeforeAfter() {
  return (
    <Section id="testimonial" bg="bg-flame">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 lg:py-24">
        <Reveal className="text-center">
          <p className="font-hand text-lg font-bold uppercase tracking-wide text-ink/80">
            Ils ont fait le pas, ils témoignent
          </p>
          <h2 className="mx-auto mt-2 max-w-3xl font-display text-3xl uppercase leading-[1.05] text-cream md:text-5xl">
            Des équipes qui ont repris{' '}
            <span className="font-hand normal-case text-ink">le contrôle.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal delay={100} className="lg:col-span-2">
              <div className="flex h-full -rotate-1 flex-col justify-between rounded-md bg-cream p-6 text-ink shadow-card sm:p-8">
                <div className="flex items-center gap-2">
                  <span className="font-display text-base italic">RUMOR</span>
                  {barSeparator}
                  <AsteriskIcon className="h-4 w-4 shrink-0 text-flame" />
                </div>
                <p className="mt-6 font-serif text-2xl leading-snug md:text-3xl">
                  « Nous avons donné notre menu et quelques photos à Sous. Chaque changement arrive en brouillon, puis le site et le QR suivent notre validation. »
                </p>
                <p className="mt-6 text-sm font-semibold text-ink/70">Marco, RUMOR · Lyon</p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex h-full rotate-1 flex-col justify-between rounded-md bg-coal p-6 text-cream shadow-card sm:p-8">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display text-sm uppercase tracking-[0.35em]">Sora</span>
                  <SousMark className="h-4 w-auto text-flame" />
                </div>
                <p className="mt-6 font-serif text-lg leading-relaxed text-cream/90 sm:text-xl">
                  « J'ai envoyé nos photos un dimanche soir. Sous a préparé le site, nous l'avons validé le lundi, exactement comme notre salle. »
                </p>
                <p className="mt-6 text-sm font-semibold text-cream/80">Elena, SORA · Paris</p>
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-3">
              <div className="flex h-full rotate-1 flex-col justify-between rounded-md bg-butter p-6 text-ink shadow-card sm:p-8">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display text-sm tracking-[0.2em]">KNOCK KNOCK</span>
                  <SousMark className="h-4 w-auto text-ink" />
                </div>
                <p className="mt-6 font-serif text-lg leading-relaxed sm:text-xl">
                  « Notre menu change chaque semaine. Avec Sous, l'offre du jour est prête, vérifiée et publiée avant la fin du service. »
                </p>
                <p className="mt-6 text-sm font-semibold text-ink/70">Alex, KNOCK KNOCK · Nantes</p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={250} className="mt-10 flex items-center justify-center gap-3 font-hand text-2xl text-ink">
          <AsteriskIcon className="h-5 w-5 rotate-12" />
          Validé par l'équipe.
        </Reveal>
      </div>
    </Section>
  );
}
