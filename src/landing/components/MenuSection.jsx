import Reveal from './Reveal';
import Section from './Section';
import { MaskWords } from './fx';
import { IMG, srcSetFor } from '../data';
import { HandArrowRight } from './doodles';

const menu = [
  { cat: 'ENTRÉES', items: [
    { name: 'Burrata', desc: 'Tomate • basilic • huile d’olive', price: '12 €', oldPrice: '14 €', change: 'price' },
    { name: 'Poulpe grillé', desc: 'Citron • fenouil • piment', price: '16 €' },
  ]},
  { cat: 'PÂTES', items: [
    { name: 'Tagliatelle al Ragù', desc: 'Bœuf mijoté 6h • parmesan', price: '19 €', change: 'new' },
    { name: 'Ravioli di Burro', desc: 'Sauge • beurre noisette maison • parmesan', price: '17 €', change: 'recipe' },
  ]},
];

const MarkChip = ({ tone = 'outline', children }) => (
  <span className={`shrink-0 rounded-full border px-2 py-1 text-xs font-extrabold uppercase tracking-wider ${tone === 'new' ? 'border-flame bg-flame text-ink' : 'border-ink/40 bg-cream text-ink'}`}>
    {children}
  </span>
);

const PhotoDishCard = ({ img, alt, tag, title, desc, foot, cta, oldFoot }) => (
  <div className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-3xl border border-ink/10 shadow-card">
    <img
      src={img}
      srcSet={srcSetFor(img)}
      sizes="(min-width: 1024px) 32vw, (min-width: 768px) 50vw, calc(100vw - 4rem)"
      alt={alt}
      loading="lazy"
      decoding="async"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/45" />
    <div className="relative z-10 p-5 sm:p-6">
      <p className="text-xs font-extrabold uppercase tracking-widest text-cream/90">{tag}</p>
      <p className="mt-2 font-display text-xl uppercase leading-none text-cream sm:text-2xl">{title}</p>
      <p className="mt-1.5 text-xs leading-relaxed text-cream/90">{desc}</p>
    </div>
    <div className="relative z-10 mt-auto flex items-end justify-between gap-3 p-5 sm:p-6">
      <div className="min-w-0">
        {oldFoot ? (
          <p className="flex items-baseline gap-2">
            <span className="text-xs font-semibold text-cream/75 line-through">{oldFoot}</span>
            <span className="rounded-sm bg-butter px-2 py-1 text-sm font-bold text-ink">{foot}</span>
            <span className="rounded-full bg-flame px-2 py-1 text-xs font-extrabold uppercase tracking-wider text-ink">Prix à jour</span>
          </p>
        ) : (
          <div className="text-sm text-cream">{foot}</div>
        )}
      </div>
      <span className="inline-flex shrink-0 items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-cream/90">
        <span className="h-1.5 w-1.5 rounded-full bg-butter" /> {cta}
      </span>
    </div>
  </div>
);

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
            Après votre validation, Sous aligne votre site et votre QR menu.
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
            <Reveal delay={80} className="md:col-span-2">
              <div className="rounded-md border border-ink/20 bg-paper p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-ink/75">Aperçu du menu</p>
                </div>
                {menu.map((g) => (
                  <div key={g.cat} className="mt-6">
                    <p className="border-b border-ink/20 pb-1 text-xs font-extrabold uppercase tracking-widest text-ink">{g.cat}</p>
                    {g.items.map((it) => (
                      <div key={it.name} className="mt-4">
                        <div className="flex items-baseline gap-2 text-sm font-bold">
                          {it.change === 'new' && <MarkChip tone="new">Nouveau</MarkChip>}
                          <span>{it.name}</span>
                          <span className="flex-1 border-b border-dotted border-ink/40" />
                          <span className="whitespace-nowrap">
                            {it.oldPrice && <span className="mr-1.5 text-xs font-medium text-ink/65 line-through">{it.oldPrice}</span>}
                            <span className={it.change === 'price' ? 'text-flame' : ''}>{it.price}</span>
                          </span>
                        </div>
                        <div className="mt-0.5 flex items-center justify-between gap-3">
                          <p className="text-xs text-ink/75">{it.desc}</p>
                          {it.change === 'recipe' && <MarkChip>Recette ajustée</MarkChip>}
                          {it.change === 'price' && <MarkChip>Prix à jour</MarkChip>}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <PhotoDishCard
                img={IMG.fish}
                alt="Daurade grillée"
                tag="Le plat du jour"
                title="Daurade grillée"
                desc="Fenouil • citron • huile d'olive"
                oldFoot="22 €"
                foot="24 €"
                cta="Sur le site"
              />
            </Reveal>

            <Reveal delay={240}>
              <PhotoDishCard
                img={IMG.pasta}
                alt="Ravioli di Burro"
                tag="Recette mise à jour"
                title="Ravioli di Burro"
                desc={<>Sauge • <span className="border-b-2 border-flame/80 font-semibold">beurre noisette maison</span> • parmesan</>}
                foot={
                  <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                    <span className="text-cream/75 line-through">beurre noisette</span>
                    <span className="text-butter font-bold">→</span>
                    <span className="font-semibold">beurre noisette maison</span>
                  </span>
                }
                cta="Synchronisé"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
