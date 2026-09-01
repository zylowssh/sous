import { Link } from 'react-router-dom';
import {
  ArrowRightIcon, CheckIcon, AsteriskIcon, RefreshIcon,
  UploadIcon, ImageIcon, InstagramIcon, ClockIcon, GlobeIcon, SparkleIcon,
} from '../components/doodles';
import { Grain } from '../components/fx';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { IMG } from '../data';

const STEPS = ['Votre resto', 'Menu & photos', 'Direction artistique', 'Sous crée votre site', 'Mise en ligne'];

const STYLES = [
  { name: 'Chaleureux', desc: 'Convivial, authentique, comme à la maison.', image: IMG.interior, active: true },
  { name: 'Moderne', desc: 'Épuré, contemporain, avec une touche design.', image: IMG.ramen },
  { name: 'Minimal', desc: "Simple, élégant, focus sur l'essentiel.", image: IMG.fish },
  { name: 'Audacieux', desc: "Créatif, coloré, pleine d'énergie.", image: IMG.neon },
  { name: 'Classique', desc: 'Intemporel, raffiné, valeurs traditionnelles.', image: IMG.chef },
];

export default function Commencer() {
  return (
    <div className="min-h-screen overflow-x-clip bg-cream">
      <Grain />
      <Navbar />

      {/* Hero */}
      <div className="relative px-4 pb-16 pt-28 md:px-8 lg:px-16 lg:pt-32">
        <p aria-hidden className="pointer-events-none absolute -top-4 left-0 select-none font-display text-[20vw] leading-none text-ink/[0.04]">
          commencer
        </p>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <Reveal>
              <p className="font-hand text-lg italic text-flame">Créons votre site en quelques étapes.</p>
              <h1 className="mt-1 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl">
                Parlez-nous<br />de votre resto.
              </h1>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-ink/60">
                Répondez à quelques questions. Sous s'occupe du reste.
              </p>
              <p className="mt-3 flex items-center gap-2 font-hand text-lg text-ink/50">
                <RefreshIcon className="h-4 w-4" /> Ça prend 2 minutes chrono.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/signup" className="group inline-flex items-center gap-2 rounded-sm bg-flame px-6 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-ink">
                  Commencer maintenant
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <button className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:border-ink">
                  Réserver une démo
                </button>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="relative mx-auto max-w-xl">
                <div className="absolute inset-x-6 -bottom-4 top-6 -z-10 rotate-2 rounded-lg bg-ink/5" />
                <div className="overflow-hidden rounded-lg border border-ink/10 shadow-photo">
                  <img src={IMG.interior} alt="Salle de restaurant" loading="lazy" className="aspect-[16/10] w-full object-cover" />
                </div>
                <div className="absolute -bottom-10 left-4 w-52 rounded-lg bg-coal p-4 text-cream shadow-photo sm:w-60">
                  <p className="font-serif text-lg italic">Mamma Rosa</p>
                  <p className="mt-0.5 text-[9px] font-bold uppercase tracking-widest text-cream/50">Italien · Chaleureux · Traditionnel</p>
                  <ul className="mt-3 space-y-1.5 text-xs text-cream/70">
                    <li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-flame" /> Site en cours de création</li>
                    <li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-flame" /> Menu synchronisé</li>
                    <li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full border border-cream/40" /> Ouverture prochaine</li>
                  </ul>
                </div>

                <div className="ml-auto mt-14 hidden max-w-[13rem] sm:block">
                  {STEPS.map((s, i) => (
                    <div key={s} className="flex items-center gap-3">
                      <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${i === 0 ? 'bg-flame text-cream' : 'border border-ink/25 text-ink/40'}`}>
                        {i + 1}
                      </div>
                      <p className={`text-sm ${i === 0 ? 'font-bold text-ink' : 'text-ink/45'}`}>{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Étape 01 */}
      <Reveal>
        <div className="border-t border-ink/10 px-4 py-14 md:px-8 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1fr_0.55fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-flame">Étape 01</p>
              <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
                Commençons par les bases.
              </h2>
              <p className="mt-2 text-sm text-ink/60">Dites-nous qui vous êtes et où vous vous situez.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Nom de votre restaurant *', 'Mamma Rosa'],
                ['Type de cuisine *', 'Italienne'],
                ['Adresse *', '23 Rue de la Paix, 75002 Paris'],
                ['Téléphone *', '06 12 34 56 78'],
                ['Email professionnel *', 'contact@mammarosa.fr'],
              ].map(([label, value]) => (
                <div key={label} className={label.startsWith('Adresse') ? 'sm:col-span-2' : ''}>
                  <label className="mb-2 block text-xs font-bold text-ink/70">{label}</label>
                  <div className="rounded-sm border border-ink/20 bg-paper px-4 py-3 text-sm text-ink/70">{value}</div>
                </div>
              ))}
            </div>
            <div className="rounded-md bg-cream/60 p-5">
              <p className="font-hand text-base italic text-ink/60">Pourquoi ces infos ?</p>
              <p className="mt-2 text-sm text-ink/60">
                Elles permettent à Sous de personnaliser votre site, votre menu et vos services locaux.
              </p>
              <AsteriskIcon className="mt-4 h-5 w-5 text-flame/60" />
            </div>
          </div>
        </div>
      </Reveal>

      {/* Étape 02 — connect */}
      <Reveal>
        <div className="border-t border-ink/10 px-4 py-14 md:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-extrabold uppercase tracking-widest text-flame">Étape 02</p>
            <h2 className="mt-2 max-w-lg font-display text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
              Connectez ce que vous avez déjà.
            </h2>
            <p className="mt-2 max-w-lg text-sm text-ink/60">Sous importe votre menu, vos horaires et vos photos.</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: UploadIcon, title: 'Menu actuel', desc: "Importez depuis votre POS, un fichier ou Google Sheets.", cta: 'Importer' },
                { icon: ImageIcon, title: 'Photos', desc: "Ajoutez vos photos de plats, de salle ou de l'équipe.", cta: 'Ajouter des photos', hint: 'JPG, PNG ou webp' },
                { icon: InstagramIcon, title: 'Instagram (optionnel)', desc: 'Récupérez vos photos et votre identité visuelle.', cta: 'Connecter Instagram' },
                { icon: ClockIcon, title: 'Horaires & infos', desc: "Vos horaires, jours d'ouverture et informations pratiques.", cta: 'Compléter' },
              ].map((c) => (
                <div key={c.title} className="flex h-full flex-col rounded-md border border-ink/15 bg-paper p-5">
                  <c.icon className="h-5 w-5 text-ink/70" />
                  <p className="mt-3 text-sm font-bold text-ink">{c.title}</p>
                  <p className="mt-1 flex-1 text-xs leading-relaxed text-ink/55">{c.desc}</p>
                  <button className="mt-4 self-start rounded-sm border border-ink/20 px-3 py-2 text-[11px] font-bold uppercase tracking-wide text-ink transition-colors hover:border-ink">
                    {c.cta}
                  </button>
                  {c.hint && <p className="mt-1.5 text-[10px] text-ink/40">{c.hint}</p>}
                </div>
              ))}
            </div>

            <p className="mt-4 font-hand text-base text-ink/45">Pas d'outil ? Pas de problème.</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/10 pt-6 text-sm text-ink/60">
              <span className="text-xs font-bold uppercase tracking-widest text-ink/40">POS compatibles :</span>
              {["L'Addition", 'Toast', 'Square', 'Clover', 'SumUp'].map((p) => <span key={p}>{p}</span>)}
              <span className="ml-auto inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-ink/50 underline decoration-1 underline-offset-4">
                Voir la liste complète <ArrowRightIcon className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Étape 03 — style */}
      <Reveal>
        <div className="border-t border-ink/10 px-4 py-14 md:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-extrabold uppercase tracking-widest text-flame">Étape 03</p>
            <h2 className="mt-2 max-w-lg font-display text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
              Quelle direction vous ressemble ?
            </h2>
            <p className="mt-2 max-w-lg text-sm text-ink/60">Choisissez l'ambiance qui correspond le mieux à votre restaurant.</p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {STYLES.map((s) => (
                <div key={s.name} className={`overflow-hidden rounded-md border-2 ${s.active ? 'border-flame' : 'border-transparent'}`}>
                  <div className="relative">
                    <img src={s.image} alt={s.name} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                    {s.active && (
                      <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-flame text-cream">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </div>
                  <div className="bg-paper p-3">
                    <p className="text-sm font-bold text-ink">{s.name}</p>
                    <p className="mt-1 text-[11px] leading-snug text-ink/50">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 font-hand text-base text-ink/45">Vous pourrez tout modifier après.</p>
          </div>
        </div>
      </Reveal>

      {/* Étape 04 — sous crée le site */}
      <Reveal>
        <div className="border-t border-ink/10 px-4 py-14 md:px-8 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1fr_0.6fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-flame">Étape 04</p>
              <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
                Sous crée votre site.
              </h2>
              <p className="mt-2 text-sm text-ink/60">On concocte vos pages, votre menu et tous vos outils. Vous suivez l'avancement en temps réel.</p>
              <p className="mt-3 flex items-center gap-2 font-hand text-base text-ink/45">
                <SparkleIcon className="h-4 w-4 text-flame" /> Prenez un café, ça chauffe.
              </p>
            </div>

            <div className="rounded-lg bg-coal p-5 text-cream shadow-card">
              <div className="flex items-center gap-2">
                <SparkleIcon className="h-4 w-4 text-flame" />
                <p className="text-sm font-bold">Sous travaille pour vous...</p>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[
                  ['Analyse de votre menu', true],
                  ['Génération des pages', true],
                  ['Design & identité visuelle', true],
                  ['Synchronisation des données', true],
                ].map(([label]) => (
                  <li key={label} className="flex items-center gap-2 text-cream/80">
                    <CheckIcon className="h-4 w-4 text-flame" /> {label}
                  </li>
                ))}
                <li>
                  <div className="flex items-center justify-between text-cream/80">
                    <span className="flex items-center gap-2"><span className="h-4 w-4 rounded-full border-2 border-flame border-t-transparent" />Finalisation</span>
                    <span className="text-xs text-cream/50">85%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-cream/10">
                    <div className="h-full w-[85%] rounded-full bg-flame" />
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative hidden sm:block">
              <div className="overflow-hidden rounded-md border border-ink/10 shadow-photo">
                <div className="flex items-center justify-between bg-paper px-3 py-2">
                  <span className="font-serif text-sm italic">Mamma Rosa</span>
                  <div className="flex gap-3 text-[9px] font-bold uppercase tracking-widest text-ink/50"><span>Menu</span><span>À propos</span><span>Réserver</span></div>
                </div>
                <img src={IMG.pasta} alt="Aperçu du site en cours" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
              <p className="mt-2 text-right font-hand text-sm text-ink/45">Aperçu en cours de génération...</p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Étape 05 — publish */}
      <Reveal>
        <div className="border-t border-ink/10 px-4 py-14 md:px-8 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-flame">Étape 05</p>
              <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
                Validez, publiez, c'est en ligne.
              </h2>
              <p className="mt-2 text-sm text-ink/60">On vérifie ensemble, vous validez, et votre site est publié.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: GlobeIcon, title: 'Votre site est en ligne', desc: 'Hébergé, rapide et sécurisé.' },
                { icon: RefreshIcon, title: 'Votre menu à jour', desc: 'Synchronisé en temps réel avec votre caisse.' },
                { icon: SparkleIcon, title: 'Outils activés', desc: 'Réservations, QR code, statistiques, tout est prêt.' },
              ].map((c) => (
                <div key={c.title} className="rounded-md border border-ink/15 bg-paper p-5">
                  <c.icon className="h-5 w-5 text-ink/70" />
                  <p className="mt-3 text-sm font-bold text-ink">{c.title}</p>
                  <p className="mt-1 text-xs text-ink/55">{c.desc}</p>
                </div>
              ))}
              <div className="rounded-md bg-flame/10 p-5 sm:col-span-3 lg:col-span-1">
                <p className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-flame">
                  <AsteriskIcon className="h-3.5 w-3.5" /> Félicitations !
                </p>
                <p className="mt-2 font-display text-lg font-bold uppercase leading-tight text-ink">Votre restaurant est en ligne.</p>
                <Link to="/signup" className="mt-4 inline-flex items-center gap-2 rounded-sm bg-flame px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-cream transition-colors hover:bg-ink">
                  Voir mon site <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* CTA band */}
      <div className="bg-coal px-4 py-14 text-cream md:px-8 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight sm:text-4xl">
              Prêt à commencer ?<br />Sous vous attend.
            </h2>
          </div>
          <p className="flex items-center gap-2 font-hand text-lg text-cream/60">
            <RefreshIcon className="h-4 w-4" /> 2 minutes chrono. Zéro carte bancaire.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/signup" className="group inline-flex items-center gap-2 rounded-sm bg-flame px-6 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-cream hover:text-ink">
              Commencer maintenant
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="inline-flex items-center gap-2 rounded-sm border border-cream/30 px-6 py-3.5 text-sm font-bold text-cream transition-colors hover:border-cream">
              Réserver une démo
            </button>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl flex-wrap gap-x-8 gap-y-3 border-t border-cream/10 pt-6 text-xs text-cream/50">
          <span>Sans carte bancaire</span>
          <span>Annulez quand vous voulez</span>
          <span>Données 100% sécurisées</span>
          <span>Support humain toujours là</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}
