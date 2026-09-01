import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { Grain } from '../components/fx';
import { AsteriskIcon, ArrowRightIcon, CheckIcon, EditIcon, MessageIcon, QrIcon, ReceiptIcon, ShieldIcon } from '../components/doodles';
import { BrowserFrame, ButtonLink, Eyebrow, PhoneFrame, Receipt, Stamp, TrustStrip } from '../components/MarketingPrimitives';
import { IMG } from '../data';

const dishes = [
  ['Burrata', 'Tomate, basilic, huile d’olive', '12 €'],
  ['Daurade grillée', 'Fenouil, citron, huile d’olive', '24 €'],
  ['Ravioli di burro', 'Sauge, parmesan', '17 €'],
];

function MenuRows({ compact = false }) {
  return (
    <div className={compact ? 'space-y-2' : 'space-y-3'}>
      {dishes.map(([name, desc, price], index) => (
        <div key={name} className="border-b border-dotted border-ink/25 pb-2">
          <div className="flex items-baseline justify-between gap-4">
            <p className={`${compact ? 'text-[10px]' : 'text-xs'} font-black`}>{name}</p>
            <p className={`${compact ? 'text-[10px]' : 'text-xs'} font-black ${index === 1 ? 'text-flame' : ''}`}>{price}</p>
          </div>
          {!compact && <p className="mt-0.5 text-[9px] text-ink/45">{desc}</p>}
        </div>
      ))}
    </div>
  );
}

function SourceFlow() {
  const cards = [
    { no: '01', title: 'La caisse', body: 'Burrata · 12 €\nDaurade · 24 €', icon: ReceiptIcon },
    { no: '02', title: 'Sous prépare', body: 'Noms, prix et détails\nsont normalisés.', icon: EditIcon },
    { no: '03', title: 'Vous validez', body: 'Un brouillon lisible,\njamais une surprise.', icon: CheckIcon },
    { no: '04', title: 'Tout suit', body: 'Site, menu et QR\npartagent la version.', icon: QrIcon },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => (
        <div key={card.title} className="relative border-t-2 border-ink pt-5">
          <span className="absolute right-0 top-2 font-display text-6xl text-ink/[0.08]">{card.no}</span>
          <card.icon className="h-7 w-7 text-ink" />
          <p className="mt-8 text-[10px] font-black uppercase tracking-[0.18em] text-flame">Étape {card.no}</p>
          <h3 className="mt-2 text-base font-black uppercase">{card.title}</h3>
          <p className="mt-3 whitespace-pre-line text-xs leading-relaxed text-ink/60">{card.body}</p>
          {index < cards.length - 1 && <ArrowRightIcon className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 bg-olive xl:block" />}
        </div>
      ))}
    </div>
  );
}

export default function ProduitPage() {
  useEffect(() => {
    document.title = 'Produit | Sous';
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-cream">
      <Grain />
      <Navbar />

      <main>
        <section className="relative flex min-h-[760px] items-center overflow-hidden px-4 pb-20 pt-28 md:px-8 lg:min-h-screen lg:px-16 lg:pt-32">
          <p aria-hidden className="absolute -left-4 top-16 select-none font-display text-[26vw] uppercase leading-none text-ink/[0.035]">Produit</p>
          <div className="relative mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <Reveal>
              <Eyebrow>Le service qui suit le rythme</Eyebrow>
              <h1 className="mt-4 max-w-[10ch] font-display text-5xl uppercase leading-[0.9] tracking-[-0.02em] text-ink sm:text-7xl xl:text-[6.2rem]">
                Une instruction. <span className="text-flame">Trois surfaces</span> à jour.
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/65">
                Votre caisse alimente le menu. Sous prépare chaque changement. Vous validez avant que le site, le menu et le QR ne bougent.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink to="/signup" tone="flame">Voir Sous en action</ButtonLink>
                <ButtonLink to="/tarifs" tone="outline">Voir les tarifs</ButtonLink>
              </div>
              <p className="mt-7 flex items-center gap-2 font-hand text-xl text-ink/60">
                <AsteriskIcon className="h-4 w-4 text-flame" /> Rien ne sort sans votre feu vert.
              </p>
            </Reveal>

            <Reveal delay={120} className="relative min-h-[520px] lg:min-h-[580px]">
              <Receipt className="absolute left-0 top-8 z-20 w-[46%] -rotate-2 sm:w-[38%]">
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-ink/45">Vous, via WhatsApp</p>
                <p className="mt-3 text-xs leading-relaxed">On lance le brunch dimanche à 11h. Mets la daurade à 24 € et ajoute les ravioli.</p>
                <p className="mt-3 text-right text-[9px] text-ink/35">10:42</p>
              </Receipt>

              <Receipt className="absolute left-[19%] top-[26%] z-30 w-[58%] rotate-1 p-4 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[9px] font-black uppercase tracking-[0.18em]">Proposition Sous</span>
                  <Stamp>Brouillon</Stamp>
                </div>
                <h2 className="mt-4 font-display text-3xl uppercase leading-none sm:text-4xl">Le brunch arrive.</h2>
                <div className="mt-4 overflow-hidden">
                  <img src={IMG.brunch} alt="Assiette de brunch" className="aspect-[16/8] w-full object-cover" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-flame px-3 py-2 text-[9px] font-black uppercase text-cream">Valider et publier</span>
                  <span className="border border-ink px-3 py-2 text-[9px] font-black uppercase">Modifier</span>
                </div>
              </Receipt>

              <BrowserFrame className="absolute bottom-8 right-0 w-[61%] rotate-2" label="restaurant.fr">
                <div className="grid min-h-52 grid-cols-[1.05fr_.95fr]">
                  <div className="p-4">
                    <p className="font-serif text-base italic">Le Bon Restaurant</p>
                    <h3 className="mt-8 font-display text-2xl uppercase leading-none">Le brunch arrive.</h3>
                    <p className="mt-2 text-[9px] text-ink/50">Dimanche dès 11h</p>
                  </div>
                  <img src={IMG.brunch} alt="" className="h-full min-h-52 w-full object-cover" />
                </div>
              </BrowserFrame>

              <PhoneFrame className="absolute bottom-0 right-[5%] z-40 hidden w-28 sm:block">
                <div className="p-3">
                  <p className="text-[7px] font-black uppercase tracking-widest text-flame">Menu du jour</p>
                  <div className="mt-3 space-y-2 text-[7px]">
                    <p>Burrata <span className="float-right">12 €</span></p>
                    <p>Daurade <span className="float-right">24 €</span></p>
                    <p>Ravioli <span className="float-right">17 €</span></p>
                  </div>
                </div>
              </PhoneFrame>
            </Reveal>
          </div>
        </section>

        <section className="bg-olive px-4 py-24 md:px-8 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
              <div>
                <Eyebrow>Une seule source de vérité</Eyebrow>
                <h2 className="mt-4 max-w-[11ch] font-display text-5xl uppercase leading-[0.92] sm:text-7xl">La caisse entre. Rien à ressaisir.</h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-ink/65 lg:justify-self-end">
                Un prix change dans votre caisse, Sous le retrouve, prépare le nouveau texte et vous montre exactement ce qui va évoluer.
              </p>
            </Reveal>
            <Reveal delay={100} className="mt-16"><SourceFlow /></Reveal>
            <p className="mt-10 text-right font-hand text-xl text-ink/60">Un menu, pas quatre copies à surveiller.</p>
          </div>
        </section>

        <section className="relative overflow-hidden bg-coal px-4 py-24 text-cream md:px-8 lg:px-16 lg:py-32">
          <p aria-hidden className="absolute -right-8 top-0 font-display text-[22vw] uppercase leading-none text-cream/[0.025]">Valider</p>
          <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <Reveal>
              <Eyebrow light>Brouillon avant publication</Eyebrow>
              <h2 className="mt-4 max-w-[10ch] font-display text-5xl uppercase leading-[0.92] sm:text-7xl">Jamais en ligne sans votre feu vert.</h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">Sous propose. Vous relisez, corrigez si nécessaire, puis publiez en un clic.</p>
              <Stamp light className="mt-8">Sous votre contrôle</Stamp>
            </Reveal>

            <Reveal delay={120} className="grid gap-5 md:grid-cols-[1.2fr_.8fr]">
              <Receipt dark className="p-5 sm:p-7">
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.16em] text-cream/50">
                  <MessageIcon className="h-4 w-4" /> Vous, via WhatsApp
                </div>
                <div className="mt-4 bg-cream/5 p-4 text-xs text-cream/75">Passe la daurade à 24 € et remplace « beurre noisette » par « sauce maison ».</div>
                <div className="mt-6 border border-cream/10 bg-cream/[0.03] p-4">
                  <div className="flex justify-between gap-2"><span className="text-[9px] font-black uppercase tracking-widest text-flame">Sous</span><Stamp light>Brouillon</Stamp></div>
                  <p className="mt-5 font-display text-3xl uppercase">Daurade grillée</p>
                  <img src={IMG.fish} alt="Daurade grillée" className="mt-3 aspect-[16/8] w-full object-cover" />
                  <div className="mt-4 flex gap-2"><span className="bg-flame px-3 py-2 text-[9px] font-black uppercase">Valider et publier</span><span className="px-3 py-2 text-[9px] font-black uppercase underline">Modifier</span></div>
                </div>
              </Receipt>
              <div className="self-center border border-cream/10 p-5 opacity-45">
                <div className="flex items-center gap-2 border-b border-cream/10 pb-3 text-[9px] uppercase tracking-widest"><ShieldIcon className="h-4 w-4" /> Site verrouillé</div>
                <p className="mt-5 font-serif text-lg italic">Le Bon Restaurant</p>
                <p className="mt-12 font-display text-3xl uppercase leading-none">Daurade grillée</p>
                <p className="mt-3 text-xs text-cream/50">Ancienne version visible tant que vous n’avez pas validé.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-4 py-24 md:px-8 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <Eyebrow>Un moteur, des identités</Eyebrow>
                <h2 className="mt-4 max-w-[12ch] font-display text-5xl uppercase leading-[0.92] sm:text-7xl">Trois salles. Trois tempéraments.</h2>
              </div>
              <ButtonLink to="/exemples" tone="outline">Découvrir les exemples</ButtonLink>
            </Reveal>
            <div className="mt-14 grid gap-7 lg:grid-cols-3">
              {[
                { name: 'Mamma Rosa', mood: 'Chaleureux', image: IMG.pasta, bg: 'bg-[#efe1d0]', copy: 'La table du dimanche, tous les jours.' },
                { name: 'Knock Knock', mood: 'Audacieux', image: IMG.burger, bg: 'bg-coal text-cream', copy: 'Burgers francs. Nuits longues.' },
                { name: 'Sora', mood: 'Précis', image: IMG.ramen, bg: 'bg-paper', copy: 'La précision dans chaque bol.' },
              ].map((site, index) => (
                <Reveal key={site.name} delay={index * 100}>
                  <BrowserFrame dark={index === 1} label={`${site.name.toLowerCase().replace(' ', '')}.fr`} className={index === 1 ? 'lg:mt-12' : ''}>
                    <div className={`${site.bg} p-5`}>
                      <div className="flex items-center justify-between"><p className="font-serif text-lg italic">{site.name}</p><span className="text-[8px] font-black uppercase tracking-widest">Menu</span></div>
                      <h3 className="mt-10 max-w-[11ch] font-display text-3xl uppercase leading-none">{site.copy}</h3>
                      <img src={site.image} alt={`Aperçu du site ${site.name}`} className="mt-5 aspect-[4/3] w-full object-cover" />
                    </div>
                  </BrowserFrame>
                  <p className="mt-3 text-center font-hand text-xl text-ink/50">{site.mood}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-ink/15 bg-paper px-4 py-24 md:px-8 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.65fr_1.35fr] lg:items-center">
            <Reveal>
              <Eyebrow>Une carte propre, aussi sur le fond</Eyebrow>
              <h2 className="mt-4 max-w-[10ch] font-display text-5xl uppercase leading-[0.92] sm:text-7xl">Votre carte, claire et conforme.</h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/60">Allergènes, origine des viandes, prix TTC et mentions utiles restent visibles au bon endroit.</p>
              <div className="mt-7 grid grid-cols-2 gap-3 text-[10px] font-black uppercase tracking-widest text-ink/55">
                {['14 allergènes', 'Origine des viandes', 'Prix TTC', 'Menu QR lisible'].map(item => <span key={item} className="border-t border-ink/20 pt-3">{item}</span>)}
              </div>
            </Reveal>
            <Reveal delay={100} className="relative pb-12 sm:pr-28">
              <div className="border border-ink/20 bg-cream p-6 shadow-card sm:p-9">
                <div className="flex items-center justify-between"><p className="text-[10px] font-black uppercase tracking-[0.18em]">Aperçu du menu</p><Stamp>Vérifié</Stamp></div>
                <p className="mt-7 border-b border-ink pb-2 text-xs font-black uppercase tracking-widest">Entrées</p>
                <div className="mt-4"><MenuRows /></div>
                <div className="mt-7 grid grid-cols-3 gap-3 text-[8px] font-bold uppercase tracking-wider text-ink/45"><span>Prix nets TTC</span><span>Allergènes disponibles</span><span>Origines affichées</span></div>
              </div>
              <PhoneFrame dark={false} className="absolute bottom-0 right-0 hidden w-40 sm:block">
                <div className="p-4"><QrIcon className="mx-auto h-16 w-16" /><p className="mt-4 text-center text-[8px] font-black uppercase tracking-widest">Scannez le menu</p><div className="mt-4"><MenuRows compact /></div></div>
              </PhoneFrame>
            </Reveal>
          </div>
        </section>

        <section className="bg-flame text-cream">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-24 md:px-8 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:px-16 lg:py-28">
            <Reveal>
              <Receipt className="mx-auto max-w-xs rotate-2 text-ink">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-flame">Ticket de service</p>
                <p className="mt-4 font-display text-4xl uppercase">Prêt à servir</p>
                <div className="my-5 border-y border-dashed border-ink/25 py-4 text-xs"><p>Site personnalisé <span className="float-right">OK</span></p><p className="mt-2">Menu connecté <span className="float-right">OK</span></p><p className="mt-2">Votre validation <span className="float-right">Toujours</span></p></div>
                <Stamp>Bon pour accord</Stamp>
              </Receipt>
            </Reveal>
            <Reveal delay={100}>
              <Eyebrow light>À vous le service</Eyebrow>
              <h2 className="mt-4 max-w-[12ch] font-display text-5xl uppercase leading-[0.9] sm:text-7xl xl:text-8xl">Vous cuisinez. Sous tient la carte.</h2>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-cream/75">Un site qui évolue avec votre restaurant, sans ticket technique et sans double saisie.</p>
              <div className="mt-8 flex flex-wrap gap-3"><ButtonLink to="/signup" tone="dark">Créer mon site</ButtonLink><ButtonLink to="/tarifs" tone="outlineLight">Comparer les offres</ButtonLink></div>
            </Reveal>
          </div>
          <TrustStrip light />
        </section>
      </main>

      <Footer />
    </div>
  );
}
