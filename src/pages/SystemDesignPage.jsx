import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import ThinkingLab, { ThinkingStateGrids } from '../components/ThinkingLab';
import { ThinkingOrb } from '../thinking/ThinkingOrb';
import * as D from '../components/doodles';
import * as DI from '../components/dashicons';
import { Grain } from '../components/fx';
import { IMG } from '../data';

const COLORS = [
  { name: 'cream', hex: '#F4EFE5', use: 'Fond des pages et des sections claires.' },
  { name: 'paper', hex: '#FDFAF3', use: 'Cartes, formulaires, surfaces posées.' },
  { name: 'ink', hex: '#171310', use: 'Texte principal, boutons sombres.' },
  { name: 'coal', hex: '#0E0C0A', use: 'Sections pleine hauteur, fort contraste.' },
  { name: 'flame', hex: '#E4572E', use: 'Accent, CTA, logo , la couleur de Sous.' },
  { name: 'olive', hex: '#CFCAAD', use: 'Accents discrets et neutres.' },
  { name: 'butter', hex: '#EEC461', use: 'Badges, alertes, instant d’attention.' },
];

const TYPO = [
  { name: 'Anton', role: 'display', sample: 'Sous', tagline: 'Titres et mots marquants, toujours en majuscules.', cls: 'font-display text-4xl uppercase tracking-tight' },
  { name: 'Caveat', role: 'hand', sample: 'à la main', tagline: 'Annotations, notes, voix dessinée. Italiques.', cls: 'font-hand text-3xl italic' },
  { name: 'Inter', role: 'sans', sample: 'Une cuisine simple et honnête.', tagline: 'Corps de texte et interfaces. 400 → 800.', cls: 'font-sans text-lg' },
  { name: 'Georgia', role: 'serif', sample: 'Mamma Rosa', tagline: 'Accents éditoriaux, noms de restaurants.', cls: 'font-serif text-3xl italic' },
];

const BUTTONS = [
  { name: 'Primaire', cls: 'rounded-sm bg-flame px-6 py-3.5 text-sm font-bold text-cream hover:bg-ink', sample: 'Commencer' },
  { name: 'Sombre', cls: 'rounded-sm bg-ink px-6 py-3.5 text-sm font-bold text-cream hover:bg-flame', sample: 'Réserver' },
  { name: 'Contour', cls: 'rounded-sm border border-ink/20 px-6 py-3.5 text-sm font-bold text-ink hover:border-ink', sample: 'Voir les exemples' },
  { name: 'Fantôme', cls: 'rounded-sm bg-coal/5 px-6 py-3.5 text-sm font-bold text-ink hover:bg-coal/10', sample: 'En savoir plus' },
  { name: 'Lien', cls: 'text-sm font-bold text-ink underline decoration-1 underline-offset-4 hover:text-flame', sample: 'Toutes les fonctionnalités' },
];

const SHADOWS = [
  { name: 'shadow-card', cls: 'shadow-card', desc: 'Cartes flottantes, mockups.' },
  { name: 'shadow-cardsm', cls: 'shadow-cardsm', desc: 'Petites surfaces, hover.' },
  { name: 'shadow-photo', cls: 'shadow-photo', desc: 'Photos hero, grands visuels.' },
];

const RADII = [
  { name: 'rounded-none', cls: 'rounded-none' },
  { name: 'rounded-sm', cls: 'rounded-sm' },
  { name: 'rounded-md', cls: 'rounded-md' },
  { name: 'rounded-lg', cls: 'rounded-lg' },
  { name: 'rounded-full', cls: 'rounded-full' },
];

const MOTIONS = [
  { name: 'word-in · entrée de mot', class: 'animate-[word-in_0.6s_cubic-bezier(0.22,1,0.36,1)_both]', children: <p className="font-display text-2xl uppercase text-flame">Bonjour.</p> },
  { name: 'pop · apparition', class: 'animate-[pop_0.55s_cubic-bezier(0.34,1.56,0.64,1)_both]', children: <span className="block h-7 w-7 rounded-full bg-flame" /> },
  { name: 'kenburns · photo lente', class: '', children: <img src={IMG.fish} alt="" className="kenburns h-full w-full object-cover"  decoding="async" loading="lazy" /> },
  { name: 'floaty · flotte', class: 'animate-floaty [--rot:6deg]', children: <D.AsteriskIcon className="h-9 w-9 text-flame" /> },
];

function Anim({ name, className, children }) {
  const [n, setN] = useState(0);
  return (
    <div className="flex flex-col gap-3 rounded-md border border-ink/15 bg-paper p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">{name}</p>
        <button
          type="button"
          onClick={() => setN((v) => v + 1)}
          className="rounded-sm border border-ink/15 px-2 py-1 text-[9px] font-extrabold uppercase tracking-widest text-ink/60 transition-colors hover:border-flame hover:text-flame"
        >
          Rejouer
        </button>
      </div>
      <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-sm border border-ink/10">
        <div key={n} className={className}>{children}</div>
      </div>
    </div>
  );
}

function RevealDemo() {
  const [n, setN] = useState(0);
  const on = n % 2 === 0;
  return (
    <div className="flex flex-col gap-3 rounded-md border border-ink/15 bg-paper p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">reveal · au scroll</p>
        <button
          type="button"
          onClick={() => setN((v) => v + 1)}
          className="rounded-sm border border-ink/15 px-2 py-1 text-[9px] font-extrabold uppercase tracking-widest text-ink/60 transition-colors hover:border-flame hover:text-flame"
        >
          Rejouer
        </button>
      </div>
      <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-sm border border-ink/10">
        <p className={`font-display text-xl uppercase text-ink ${on ? 'reveal in-view' : 'reveal'}`}>En vue → visible</p>
      </div>
    </div>
  );
}

function MaskDemo() {
  const [n, setN] = useState(0);
  const on = n % 2 === 0;
  return (
    <div className="flex flex-col gap-3 rounded-md border border-ink/15 bg-paper p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">mask-line · démasquage</p>
        <button
          type="button"
          onClick={() => setN((v) => v + 1)}
          className="rounded-sm border border-ink/15 px-2 py-1 text-[9px] font-extrabold uppercase tracking-widest text-ink/60 transition-colors hover:border-flame hover:text-flame"
        >
          Rejouer
        </button>
      </div>
      <div className={`relative flex h-28 items-center justify-center overflow-hidden rounded-sm border border-ink/10 ${on ? 'in-view' : ''}`}>
        <span className="mask-line font-display text-xl uppercase text-ink">
          <span style={{ '--wd': '80ms' }}>Masqué, puis révélé.</span>
        </span>
      </div>
    </div>
  );
}

const BRAND_ICONS = [
  'ArrowRightIcon', 'ArrowLeftIcon', 'CheckIcon', 'MessageIcon', 'EditIcon', 'AsteriskIcon',
  'PackageIcon', 'ChartIcon', 'RocketIcon', 'LockIcon', 'MailIcon', 'EyeIcon', 'EyeOffIcon',
  'GlobeIcon', 'PinIcon', 'ClockIcon', 'ShieldIcon', 'ImageIcon', 'InstagramIcon', 'UploadIcon',
  'QrIcon', 'ZapIcon', 'PlugIcon', 'UsersIcon', 'CalendarIcon', 'ReceiptIcon', 'SparkleIcon',
  'ChevronDownIcon', 'LinkIcon', 'RefreshIcon', 'PhoneIcon',
];

const UI_ICONS = [
  'HomeIcon', 'MonitorIcon', 'UtensilsIcon', 'PuzzleIcon', 'GearIcon', 'HelpCircleIcon',
  'BellIcon', 'SearchIcon', 'PlusIcon', 'XIcon', 'MoreIcon', 'MoreHIcon', 'TrashIcon',
  'ExternalLinkIcon', 'FilterIcon', 'GridIcon', 'ListIcon', 'FolderIcon', 'DownloadIcon',
  'UndoIcon', 'RedoIcon', 'TabletIcon', 'SmartphoneIcon', 'CameraIcon', 'GripIcon', 'BookIcon',
  'PlayCircleIcon', 'LightbulbIcon', 'FileTextIcon', 'CreditCardIcon', 'UserCircleIcon',
  'WrenchIcon', 'StarIcon', 'SendIcon', 'AlertTriangleIcon', 'CheckCircleIcon', 'XCircleIcon',
];

const MARKS = ['HandArrowRight', 'HandArrowDown', 'HandArrowSwoop', 'ScribbleCircle'];

export default function SystemDesignPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-cream">
      <Grain />
      <Navbar />

      {/* Hero */}
      <div className="relative flex min-h-[70vh] items-center px-4 pt-28 md:px-8 lg:px-16">
        <p aria-hidden className="pointer-events-none absolute -top-4 left-0 select-none font-display text-[18vw] leading-none text-ink/[0.04]">
          système
        </p>
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <p className="font-hand text-lg italic text-flame">Règles du jeu.</p>
            <h1 className="mt-1 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl">
              Design<br />system.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/60">
              Les couleurs, lettres, boutons, ombres et mouvements qui font la maison Sous. Un seul endroit pour tout voir, tout comprendre , et fabriquer ses propres animations.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#couleurs" className="inline-flex items-center gap-2 rounded-sm bg-flame px-6 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-ink">
                Parcourir <D.ArrowRightIcon className="h-4 w-4" />
              </a>
              <a href="#orb" className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:border-ink">
                L’atelier orb
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex items-center justify-center rounded-md border border-ink/15 bg-coal p-8">
              <ThinkingOrb size={180} tint="#E4572E" state="searching" speed={1.4} />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Couleurs */}
      <section id="couleurs" className="px-4 py-14 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-flame">01 · Couleurs</p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-4xl">
              Une palette chaude et franche.
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COLORS.map((c, i) => (
              <Reveal key={c.name} delay={i * 40}>
                <div className="overflow-hidden rounded-md border border-ink/15 bg-paper shadow-cardsm">
                  <div className="flex h-24 items-end p-3" style={{ backgroundColor: c.hex }}>
                    <span className={`rounded-sm bg-cream/80 px-2 py-0.5 font-mono text-[9px] text-ink ${c.name === 'cream' ? 'border border-ink/20' : ''}`}> {c.hex} </span>
                  </div>
                  <div className="p-3">
                    <p className="font-display text-lg uppercase tracking-tight text-ink">{c.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">{c.use}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={280} className="flex flex-col justify-center rounded-md border border-ink/15 bg-coal p-4 text-cream">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-flame">Clé d’usage</p>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                Le <span className="font-bold text-flame">flame</span> agit comme épice : un seul accent à la fois. Le reste vit en crème, papier et encre , le charbon pour les moments de contraste.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Typographie */}
      <section className="border-t border-ink/10 px-4 py-14 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-flame">02 · Typographie</p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-4xl">
              Quatre voix, une cuisine.
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {TYPO.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <div className="flex h-full flex-col justify-between rounded-md border border-ink/15 bg-paper p-5 shadow-cardsm">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <p className={`${t.cls} text-ink`}>{t.sample}</p>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-flame">{t.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 border-t border-ink/10 pt-3">
                    <p className="text-sm font-bold text-ink">{t.name}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink/55">{t.tagline}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Boutons */}
      <section className="border-t border-ink/10 px-4 py-14 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-flame">03 · Boutons</p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-4xl">
              Cinq façons d’agir.
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BUTTONS.map((b, i) => (
              <Reveal key={b.name} delay={i * 40}>
                <div className="flex h-full flex-col rounded-md border border-ink/15 bg-paper p-5 shadow-cardsm">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">{b.name}</p>
                  <button type="button" className={`mt-4 w-fit ${b.cls}`}>{b.sample}</button>
                  <p className="mt-auto pt-4 font-mono text-[9px] text-ink/40">{b.cls}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <div className="flex h-full flex-col rounded-md border border-ink/15 bg-paper p-5 shadow-cardsm">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">Avec flèche</p>
                <Link to="/signup" className="group mt-4 inline-flex w-fit items-center gap-2 rounded-sm bg-flame px-6 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-ink">
                  Voir Sous en action <D.ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <p className="mt-auto pt-4 text-xs text-ink/55">La flèche glisse de 4px au survol.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Champs */}
      <section className="border-t border-ink/10 px-4 py-14 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-flame">04 · Champs</p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-4xl">
              Des formulaires qui respirent.
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Reveal>
              <div className="rounded-md border border-ink/15 bg-paper p-5 shadow-cardsm">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">Texte</p>
                <input
                  type="text"
                  placeholder="Nom du restaurant"
                  className="mt-3 w-full rounded-sm border border-ink/20 bg-cream px-3 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
                <p className="mt-2 font-mono text-[9px] text-ink/40">px-3 py-2.5 · rounded-sm · focus:ring-flame</p>
              </div>
            </Reveal>
            <Reveal delay={40}>
              <div className="rounded-md border border-ink/15 bg-paper p-5 shadow-cardsm">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">Sélecteur</p>
                <select className="mt-3 w-full rounded-sm border border-ink/20 bg-cream px-3 py-2.5 text-sm text-ink focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame">
                  <option>Chaleureux</option>
                  <option>Moderne</option>
                  <option>Minimal</option>
                  <option>Audacieux</option>
                </select>
                <textarea placeholder="Une note pour Sous…" className="mt-3 w-full rounded-sm border border-ink/20 bg-cream px-3 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame" rows={2} />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-md border border-ink/15 bg-paper p-5 shadow-cardsm">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">Bascule</p>
                <div className="mt-3 space-y-3">
                  {[
                    ['WhatsApp', true],
                    ['Emails de synthèse', true],
                    ['Rapports hebdo', false],
                  ].map(([label, on]) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="text-sm font-bold text-ink">{label}</span>
                      <span className={`relative h-4 w-7 rounded-full transition-colors ${on ? 'bg-flame' : 'bg-ink/20'}`}>
                        <span className={`absolute top-0.5 h-3 w-3 rounded-full bg-cream transition-transform ${on ? 'translate-x-3.5' : 'translate-x-0.5'}`} />
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 font-mono text-[9px] text-ink/40">h-4 w-7 · pastille h-3 w-3 · bg-flame</p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-md border border-ink/15 bg-paper p-5 shadow-cardsm">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">Badges & étiquettes</p>
                <div className="mt-3 flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full bg-butter px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-ink">MAJ</span>
                  <span className="rounded-sm bg-flame px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-cream">Réserver</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-ink/70">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-600" /> En ligne
                  </span>
                  <span className="font-display text-2xl text-flame">24 €</span>
                  <span className="rounded-full bg-ink px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-cream">5</span>
                </div>
                <p className="mt-4 text-[10px] font-extrabold uppercase tracking-widest text-flame">Overline</p>
                <p className="mt-1 font-hand text-lg italic text-ink/70">Votre site, toujours à jour.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cartes & ombres */}
      <section className="border-t border-ink/10 px-4 py-14 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-flame">05 · Cartes & ombres</p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-4xl">
              Des surfaces douces, jamais criardes.
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {SHADOWS.map((s, i) => (
              <Reveal key={s.name} delay={i * 50}>
                <div className={`rounded-md border border-ink/10 bg-paper ${s.cls}`}>
                  <div className="p-5">
                    <p className="text-sm font-bold text-ink">{s.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">{s.desc}</p>
                  </div>
                  <div className="h-16 border-t border-ink/10 bg-cream/60 p-3 font-mono text-[9px] text-ink/40">{s.cls}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6">
            <div className="rounded-md border border-ink/15 bg-paper p-5">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">Rayons de bordure</p>
              <div className="mt-3 flex flex-wrap items-end gap-4">
                {RADII.map((r) => (
                  <div key={r.name} className="flex items-end gap-3">
                    <span className={`h-12 w-12 border-2 border-flame bg-flame/10 ${r.cls}`} />
                    <span className="pb-3 font-mono text-[9px] text-ink/45">{r.name}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-ink/55">Le langage de Sous : <span className="font-bold text-ink">rounded-sm</span> pour l’action, <span className="font-bold text-ink">rounded-md</span> pour les surfaces, <span className="font-bold text-ink">rounded-full</span> pour les pastilles.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Icônes */}
      <section className="border-t border-ink/10 px-4 py-14 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-flame">06 · Icônes</p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-4xl">
              Un alphabet tracé à la main.
            </h2>
            <p className="mt-2 max-w-lg text-sm text-ink/60">Trait 2px, coins arrondis, jamais remplis , sauf le <span className="font-bold text-ink">SousMark</span>. Recollorez via <span className="font-mono text-xs">currentColor</span>.</p>
          </Reveal>

          <Reveal className="mt-6">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">doodles · la marque</p>
            <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
              {BRAND_ICONS.map((name) => {
                const I = D[name];
                return (
                  <div key={name} className="flex flex-col items-center gap-2 rounded-md border border-ink/10 bg-paper p-3">
                    <I className="h-5 w-5 text-ink" />
                    <span className="text-center text-[8px] leading-tight text-ink/45">{name.replace('Icon', '')}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="mt-6">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">dashicons · l’interface</p>
            <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
              {UI_ICONS.map((name) => {
                const I = DI[name];
                return (
                  <div key={name} className="flex flex-col items-center gap-2 rounded-md border border-ink/10 bg-paper p-3">
                    <I className="h-5 w-5 text-ink" />
                    <span className="text-center text-[8px] leading-tight text-ink/45">{name.replace('Icon', '')}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="mt-6">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">marques spéciales</p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {MARKS.map((name) => {
                const I = D[name];
                return (
                  <div key={name} className="relative flex h-16 items-center justify-center overflow-hidden rounded-md border border-ink/10 bg-paper">
                    {name === 'ScribbleCircle'
                      ? <I className="absolute left-1/2 top-1/2 w-40 -translate-x-1/2 -translate-y-1/2 text-flame" />
                      : <I className="h-12 w-auto text-flame" />}
                  </div>
                );
              })}
              <div className="flex h-16 items-center justify-center rounded-md border border-ink/10 bg-coal">
                <D.SousMark className="h-12 w-auto text-flame" />
              </div>
              <div className="flex h-16 items-center justify-center rounded-md border border-ink/10 bg-cream">
                <D.SousMark className="h-12 w-auto text-ink/80" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mouvement */}
      <section className="border-t border-ink/10 px-4 py-14 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-flame">07 · Mouvement</p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-4xl">
              Des gestes courts, qui racontent.
            </h2>
            <p className="mt-2 max-w-lg text-sm text-ink/60">Une courbe maison, <span className="font-mono text-xs">cubic-bezier(0.22, 1, 0.36, 1)</span> , un départ rapide, un atterrissage doux. Tout le site ralentit si l’utilisateur préfère le repos.</p>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MOTIONS.map((m) => <Anim key={m.name} name={m.name} className={m.class}>{m.children}</Anim>)}
            <RevealDemo />
            <MaskDemo />
            <div className="flex flex-col gap-3 rounded-md border border-ink/15 bg-paper p-4 sm:col-span-2 lg:col-span-2">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">marquee · défilement</p>
                <span className="translate-y-1 text-[9px] font-extrabold uppercase tracking-widest text-ink/35">continu</span>
              </div>
              <div className="flex overflow-hidden border border-ink/10">
                <div className="flex shrink-0 animate-marquee items-center gap-6 whitespace-nowrap py-3 pr-6 font-display text-lg uppercase text-ink">
                  <span>Votre site, toujours à jour</span><span className="text-flame">✦</span>
                  <span>Votre site, toujours à jour</span><span className="text-flame">✦</span>
                  <span>Votre site, toujours à jour</span><span className="text-flame">✦</span>
                  <span>Votre site, toujours à jour</span><span className="text-flame">✦</span>
                  <span>Votre site, toujours à jour</span><span className="text-flame">✦</span>
                  <span>Votre site, toujours à jour</span><span className="text-flame">✦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le moteur thinking */}
      <section id="orb" className="border-t border-ink/10 px-4 py-14 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-flame">08 · Le moteur thinking</p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-4xl">
              Le logo sous toutes ses pensées.
            </h2>
            <p className="mt-2 max-w-lg text-sm text-ink/60">
              La machine <span className="font-semibold text-ink">thinking-orbs</span> , douze états d’orb, du « travail » aux orbites, à la « vapeur » qui fait monter des volutes sur une sphère éteinte , et <span className="font-semibold text-ink">thinking-logos</span>, la même machine qui cuit n’importe quel SVG en nuage de points, votre marque animée en neuf états. Tout est réglable : état, taille, vitesse, teinte, thème , et la cuisson : style, enveloppe 3D, densité, épaisseur.
            </p>
          </Reveal>

          <div className="mt-8">
            <ThinkingStateGrids />
          </div>

          <div className="mt-8 rounded-md border border-ink/15 bg-cream p-6">
            <ThinkingLab />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}