import Reveal from './Reveal';
import { MaskWords, Parallax, goToSection } from './fx';
import { ArrowRight, Check, HandArrow, QrGlyph, Sync } from './marks';
import { IMG } from '../data';

const Dish = ({ name, detail, price, sold }) => (
  <li className={`flex items-baseline gap-3 py-2.5 ${sold ? 'text-ink/35' : ''}`}>
    <span className="font-display text-[15px] font-medium">
      {name}
      {sold && <span className="ml-2 align-middle text-[10px] font-semibold uppercase tracking-label text-amber">Épuisé</span>}
    </span>
    <span className="h-px flex-1 translate-y-[-3px] border-b border-dotted border-ink/25" />
    <span className="text-sm tabular-nums">{price}</span>
    <span className="sr-only">{detail}</span>
  </li>
);

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <Parallax speed={0.05} className="pointer-events-none absolute -right-24 top-24 select-none opacity-[0.5]">
        <div className="h-[26rem] w-[26rem] rounded-full bg-ficelle/40 blur-3xl" />
      </Parallax>

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12">
        <Reveal className="relative">
          <p className="label">Site web et menu QR pour restaurants</p>

          <h1 className="mt-5 text-[2.4rem] font-semibold leading-[1.06] md:text-[3.6rem] xl:text-[4rem]">
            <MaskWords text="Votre carte a changé jeudi." />
            <br />
            <span className="text-ink/45">
              <MaskWords text="Votre site l’ignore encore." start={340} />
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-[17px] leading-relaxed text-ink/75">
            Sous branche votre site et votre menu QR sur votre caisse. Les prix, les plats et les
            ruptures suivent tout seuls. Le reste, vous le dictez en un message — et
            <span className="font-medium text-ink"> rien n’est publié sans votre accord.</span>
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button onClick={() => goToSection('acces')} className="btn-primary">
              Demander un accès
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => goToSection('boucle')} className="btn-ghost">
              Voir la boucle de validation
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-ink/55">
            <span className="inline-flex items-center gap-2">
              <Sync className="h-4 w-4 text-sauge" />
              L’Addition · Zelty · Lightspeed
            </span>
            <span className="hidden h-3 w-px bg-ink/15 sm:block" />
            <span>Données hébergées en France</span>
          </div>
        </Reveal>

        <Reveal delay={180} className="relative">
          {/* Aperçu produit : la même carte, au même instant, sur le site et sur le QR. */}
          <div className="card overflow-hidden">
            <div className="flex items-center justify-between border-b border-ink/10 bg-chalk/50 px-5 py-3">
              <span className="font-display text-lg font-semibold tracking-tight">Le Comptoir Rive</span>
              <span className="hidden gap-4 text-[10px] font-semibold uppercase tracking-label text-ink/45 sm:flex">
                <span>Carte</span>
                <span>La maison</span>
                <span>Réserver</span>
              </span>
            </div>

            <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <div className="px-5 py-5">
                <p className="label">Ce soir</p>
                <ul className="mt-2 divide-y divide-ink/8">
                  <Dish name="Burrata" detail="tomate, basilic" price="12 €" />
                  <Dish name="Poulpe grillé" detail="citron, fenouil" price="16 €" sold />
                  <Dish name="Tagliatelle al ragù" detail="bœuf mijoté" price="19 €" />
                  <Dish name="Daurade entière" detail="fenouil, citron" price="24 €" />
                </ul>
              </div>

              <div className="relative border-l border-ink/10">
                <div className="photo-slot aspect-[3/4] h-full w-full overflow-hidden">
                  <img
                    src={IMG.poulpe}
                    alt="Assiette dressée au comptoir"
                    width="900"
                    height="1200"
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 border-t border-ink/10 bg-sauge/[0.06] px-5 py-3">
              <span className="mt-px h-2 w-2 shrink-0 animate-pulseDot rounded-full bg-sauge" />
              <p className="text-[13px] leading-snug text-ink/70">
                <span className="font-medium text-ink">Poulpe passé en rupture à 20 h 12</span> dans votre caisse.
                Retiré du site et du menu QR à 20 h 12.
              </p>
            </div>
          </div>

          {/* Le QR de table lit exactement la même source. */}
          <div className="mt-4 flex items-center justify-between gap-4 rounded-xl border border-ink/12 bg-paper/70 px-4 py-3">
            <span className="flex items-center gap-3 text-[13px] text-ink/70">
              <QrGlyph className="h-8 w-8 text-ink/70" />
              Le QR posé sur la table affiche la même carte, à la seconde près.
            </span>
            <Check className="h-5 w-5 shrink-0 text-sauge" />
          </div>

          <p className="mt-4 flex items-center justify-end gap-2 pr-2 font-hand text-lg text-ink/45">
            aucune intervention de votre part
            <HandArrow className="h-5 w-12 -scale-y-100" />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
