import Reveal from './Reveal';
import Section from './Section';
import { IMG } from '../data';
import { AsteriskIcon } from './doodles';

export default function BeforeAfter() {
  return (
    <Section id="testimonial" bg="bg-flame">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <blockquote className="font-serif text-2xl leading-snug text-cream md:text-3xl xl:text-4xl">
              « Nous avons donné notre menu et quelques photos à Sous. Le site nous ressemblait immédiatement, et il se met à jour tout seul. »
            </blockquote>
            <p className="mt-6 text-base font-semibold text-cream/80">— Marco, RUMOR</p>
            <div className="mt-8 flex items-center gap-3 font-hand text-2xl text-cream/90">
              <AsteriskIcon className="h-5 w-5 rotate-12" />
              Validé par l'équipe.
            </div>
          </Reveal>

          <Reveal delay={150} className="flex justify-center lg:justify-end">
            <div className="overflow-hidden rounded-lg shadow-photo">
              <img src={IMG.chef} alt="Chef" loading="lazy" className="kenburns h-72 w-56 object-cover md:h-80 md:w-64" />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
