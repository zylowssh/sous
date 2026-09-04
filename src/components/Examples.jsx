import Reveal from './Reveal';
import Section from './Section';
import CardSwap, { Card } from './CardSwap';
import { ArrowRightIcon, AsteriskIcon } from './doodles';
import { MaskWords, goToSection } from './fx';

const SafariDots = () => (
  <div className="flex items-center gap-1.5">
    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
    <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
    <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
  </div>
);

const EmptyBrowser = ({ dark = false }) => (
  <div className={`flex h-full w-full flex-col ${dark ? 'bg-[#171310]' : 'bg-paper'}`}>
    <div className={`flex items-center justify-between border-b px-4 py-3 ${dark ? 'border-cream/10 bg-[#241E18]' : 'border-ink/10 bg-paper'}`}>
      <SafariDots />
      <span className={`rounded-full px-3 py-1 text-xs font-medium tracking-wide ${dark ? 'bg-cream/10 text-cream/75' : 'bg-ink/5 text-ink/70'}`}>example.com</span>
    </div>
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
            Sous adapte la présentation à votre ambiance. Votre caisse alimente le menu, puis vous validez chaque changement avant sa mise en ligne.
          </p>
          <a href="#pricing" onClick={(e) => { e.preventDefault(); goToSection('pricing'); }} className="group mt-7 inline-flex items-center gap-2 rounded-sm border-2 border-ink px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-ink hover:text-cream">
            Voir les tarifs <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={120} className="h-full">
          <div className="mb-3 flex items-center justify-center gap-3 text-center font-hand text-lg text-ink/70">
            <AsteriskIcon className="h-5 w-5 text-ink/70" />
            <span className="underline decoration-2 underline-offset-4">Même moteur. Ambiances complètement différentes.</span>
          </div>
          <div className="relative h-[260px] w-full sm:h-[320px] md:h-[420px]">
            <CardSwap
              width={640}
              height={360}
              cardDistance={60}
              verticalDistance={64}
              delay={6000}
              pauseOnHover
              easing="smooth"
              skewAmount={5}
            >
              <Card>
                <EmptyBrowser />
              </Card>
              <Card>
                <EmptyBrowser dark />
              </Card>
              <Card>
                <EmptyBrowser />
              </Card>
              <Card>
                <EmptyBrowser />
              </Card>
            </CardSwap>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
