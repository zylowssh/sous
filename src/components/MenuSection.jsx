import Reveal from './Reveal';
import Section from './Section';
import { MaskWords } from './fx';
import { IMG } from '../data';
import { ArrowRightIcon, CheckIcon, HandArrowRight } from './doodles';

const menu = [
  { cat: 'ENTRÉES', items: [
    { name: 'Burrata', desc: 'Tomate • basilic • huile d’olive', price: '12 €' },
    { name: 'Poulpe grillé', desc: 'Citron • fenouil • piment', price: '16 €' },
  ]},
  { cat: 'PÂTES', items: [
    { name: 'Tagliatelle al Ragù', desc: 'Bœuf mijoté • parmesan', price: '19 €' },
    { name: 'Ravioli di Burro', desc: 'Sauge • beurre noisette • parmesan', price: '17 €' },
  ]},
];

export default function MenuSection() {
  return (
    <Section id="menu" bg="bg-cream">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 md:px-8 lg:grid-cols-12 lg:gap-10 lg:py-10">
        <Reveal className="lg:col-span-4">
          <h2 className="font-display leading-[1.1] text-4xl md:text-5xl xl:text-6xl">
            <MaskWords text="Votre menu." />
            <br />
            <span className="text-flame"><MaskWords text="Pas" start={250} /></span>{' '}
            <MaskWords text="un PDF figé." start={400} />
          </h2>
          <p className="mt-6 max-w-xs text-base leading-relaxed text-ink/75">
            Votre carte change. Les prix évoluent. Les plats du jour apparaissent.<br /><br />
            Sous garde votre site et votre QR code parfaitement synchronisés.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <span className="rotate-[-2deg] bg-butter px-4 py-3 font-hand text-base font-bold shadow-cardsm">
              Modifiez-le une fois.<br />Il change partout.
            </span>
            <HandArrowRight className="h-6 w-10" />
          </div>
        </Reveal>

        <div className="lg:col-span-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delay={80}>
              <div className="rounded-md border border-ink/20 bg-paper p-6 transition-transform duration-300 hover:-translate-y-1">
                <p className="text-xs font-extrabold uppercase tracking-widest text-ink/60">Aperçu du menu</p>
                {menu.map((g) => (
                  <div key={g.cat} className="mt-6">
                    <p className="border-b border-ink/20 pb-1 text-[10px] font-extrabold uppercase tracking-widest text-flame">{g.cat}</p>
                    {g.items.map((it) => (
                      <div key={it.name} className="mt-4">
                        <div className="flex items-baseline gap-2 text-sm font-bold">
                          {it.name}
                          <span className="flex-1 border-b border-dotted border-ink/40" />
                          {it.price}
                        </div>
                        <p className="text-[11px] text-ink/60">{it.desc}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-md border border-ink/20 bg-paper p-6 transition-transform duration-300 hover:-translate-y-1 md:mt-8">
                <p className="text-[11px] font-bold uppercase tracking-widest text-ink/60">Le plat du jour</p>
                <div className="mt-2 flex items-baseline justify-between gap-2">
                  <p className="text-sm font-extrabold uppercase tracking-wide">Daurade grillée</p>
                  <span className="text-sm font-bold">24 €</span>
                </div>
                <p className="text-[11px] text-ink/60">Fenouil • citron • huile d’olive</p>
                <div className="mt-4 overflow-hidden rounded">
                  <img src={IMG.fish} alt="Daurade grillée" loading="lazy" className="kenburns aspect-square w-full object-cover" />
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-ink/70">
                  <CheckIcon className="h-4 w-4 text-flame" />
                  <span>Mis à jour automatiquement depuis la caisse</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
