import { HandArrowRight, AsteriskIcon } from './doodles';

const logos = [
  { name: 'example1', cls: 'font-serif tracking-[0.35em]' },
  { name: 'example2', cls: 'font-display tracking-[0.2em]' },
  { name: 'example3', cls: 'font-extrabold tracking-[0.25em]' },
  { name: 'example4', cls: 'font-serif italic tracking-wider' },
  { name: 'example5', cls: 'font-serif tracking-[0.25em]' },
  { name: 'example6', cls: 'font-display tracking-[0.3em]' },
];

export default function LogoMarquee() {
  return (
    <section className="border-y border-ink/15 py-5">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 md:px-8">
        <p className="hidden w-44 shrink-0 text-xs font-bold uppercase leading-snug tracking-widest text-ink/75 md:flex md:items-center md:gap-3">
          Déjà au service de restaurants exigeants
          <HandArrowRight className="h-5 w-9 shrink-0" />
        </p>
        <div
          className="relative flex-1 overflow-hidden"
          style={{ maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}
        >
          <div className="flex w-max items-center gap-16 pr-16 animate-marquee hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className={`flex items-center gap-16 whitespace-nowrap text-sm text-ink/80 ${l.cls}`}>
                {l.name}
                {i % 6 === 5 && <AsteriskIcon className="h-5 w-5 text-ink/70" />}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
