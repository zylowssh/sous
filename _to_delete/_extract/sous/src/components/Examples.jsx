import Reveal from './Reveal';
import Section, { SectionHead } from './Section';
import { IMG, STYLES } from '../data';

/* Chaque thème est une sortie possible de la même plateforme.
   Le but de cette grille : prouver la diversité, pas imposer un look. */
const themes = {
  warm: {
    frame: 'bg-[#F6EFE2] text-[#2A1F14]',
    title: 'font-display text-[1.6rem] font-semibold leading-[1.05]',
    cta: 'bg-[#A6462B] text-[#F6EFE2]',
    kicker: 'text-[#A6462B]',
  },
  minimal: {
    frame: 'bg-[#FAFAF8] text-[#1B1B1A]',
    title: 'font-sans text-[1.05rem] font-normal uppercase leading-[1.5] tracking-[0.22em]',
    cta: 'border border-[#1B1B1A] text-[#1B1B1A]',
    kicker: 'text-[#8A8A85]',
  },
  bold: {
    frame: 'bg-[#141414] text-[#F7F3EC]',
    title: 'font-sans text-[1.75rem] font-extrabold uppercase leading-[0.95] tracking-tight',
    cta: 'bg-[#E4572E] text-white',
    kicker: 'text-[#E4572E]',
  },
  bistro: {
    frame: 'bg-[#F2EFE6] text-[#1E241D]',
    title: 'font-display text-[1.5rem] font-medium italic leading-[1.15]',
    cta: 'bg-[#2E4B3C] text-[#F2EFE6]',
    kicker: 'text-[#2E4B3C]',
  },
  cinematic: {
    frame: 'bg-[#0E0D0B] text-[#EDE6D8]',
    title: 'font-display text-[1.7rem] font-semibold leading-[1.05] tracking-tight',
    cta: 'border border-[#C9A227] text-[#C9A227]',
    kicker: 'text-[#C9A227]',
  },
  editorial: {
    frame: 'bg-[#FBF8F2] text-[#232019]',
    title: 'font-display text-[1.55rem] font-normal lowercase leading-[1.1]',
    cta: 'bg-[#232019] text-[#FBF8F2]',
    kicker: 'text-[#7A7365]',
  },
};

const Slider = ({ left, right, value, dark }) => (
  <div>
    <div className={`flex justify-between text-[10px] uppercase tracking-label ${dark ? 'text-cream/40' : 'text-ink/40'}`}>
      <span>{left}</span>
      <span>{right}</span>
    </div>
    <div className={`relative mt-1.5 h-px w-full ${dark ? 'bg-cream/20' : 'bg-ink/15'}`}>
      <span
        className={`absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full ${dark ? 'bg-cream' : 'bg-ink'}`}
        style={{ left: `calc(${value}% - 4px)` }}
      />
    </div>
  </div>
);

export default function Examples() {
  return (
    <Section id="exemples">
      <SectionHead
        label="Les sorties possibles"
        title="Une seule plateforme. Six restaurants qui n’ont rien à voir."
        lead="Vous placez deux curseurs à l’inscription — chaleureux ou minimaliste, décontracté ou premium — et Sous compose à partir de là. Aucun de ces sites n’est un thème choisi dans une liste."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {STYLES.map((s, i) => {
          const t = themes[s.theme];
          const dark = s.theme === 'bold' || s.theme === 'cinematic';
          return (
            <Reveal key={s.name} delay={(i % 3) * 100}>
              <figure className="group overflow-hidden rounded-xl border border-ink/12 bg-paper shadow-soft transition-shadow duration-300 hover:shadow-lift">
                <div className={`flex aspect-[4/5] flex-col ${t.frame}`}>
                  <div className="flex items-center justify-between px-5 pt-5">
                    <span className={`text-[11px] font-semibold uppercase tracking-label ${t.kicker}`}>
                      {s.name}
                    </span>
                    <span className="text-[9px] uppercase tracking-label opacity-40">Carte · Réserver</span>
                  </div>

                  <div className="px-5 pt-4">
                    <h3 className={t.title}>
                      {s.headline.split('\n').map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </h3>
                    <span className={`mt-4 inline-block rounded px-3 py-1.5 text-[10px] font-semibold uppercase tracking-label ${t.cta}`}>
                      {s.cta}
                    </span>
                  </div>

                  <div className="photo-slot mt-auto aspect-[16/9] w-full overflow-hidden">
                    <img
                      src={IMG[s.img]}
                      alt={`Site généré pour ${s.name}`}
                      width="900"
                      height="506"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                </div>

                <figcaption className="space-y-3 border-t border-ink/10 px-5 py-4">
                  <p className="label !tracking-[0.12em]">{s.kind}</p>
                  <Slider left="Chaleureux" right="Minimaliste" value={100 - s.sliders.chaleur} />
                  <Slider left="Décontracté" right="Premium" value={s.sliders.premium} />
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={220}>
        <p className="mt-10 text-center text-[15px] text-ink/55">
          Même produit, même caisse, même boucle de validation. Seule la mise en forme change.
        </p>
      </Reveal>
    </Section>
  );
}
