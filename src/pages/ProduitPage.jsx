import { ArrowRightIcon, ArrowLeftIcon, SousMark, CheckIcon, MessageIcon, EditIcon, AsteriskIcon } from '../components/doodles';
import { Grain } from '../components/fx';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { IMG } from '../data';

const features = [
  {
    icon: MessageIcon,
    title: 'Mise à jour par WhatsApp',
    desc: 'Envoyez un message (texte ou vocal) et Sous prépare une proposition de mise à jour. Vous validez en un clic.',
  },
  {
    icon: EditIcon,
    title: 'Synchronisation POS',
    desc: 'Votre menu est automatiquement synchronisé avec votre logiciel de caisse. Plus de décalage entre salle et site.',
  },
  {
    icon: CheckIcon,
    title: 'Conformité INCO',
    desc: 'Affichage obligatoire des 14 allergènes, origine des viandes et prix TTC. Validation humaine pour chaque modification.',
  },
];

const integrations = [
  "L'Addition",
  'Zelty',
  'Lightspeed',
  'Toast',
  'Square',
  'SumUp',
];

export default function ProduitPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-cream">
      <Grain />
      <Navbar />
      
      <div className="px-4 pb-20 pt-24 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <button 
              onClick={() => onNavigate('')}
              className="group mb-10 inline-flex items-center gap-2 rounded-sm border-2 border-ink/20 px-4 py-2.5 text-sm font-semibold text-ink/70 transition-all hover:border-ink hover:bg-ink hover:text-cream"
            >
              <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Retour à l'accueil
            </button>

            <h1 className="font-display text-4xl font-bold uppercase tracking-tight text-ink md:text-6xl">
              Le <span className="font-hand text-flame">produit</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-ink/70">
              Sous gère votre site web de A à Z, pour que vous puissiez vous concentrer sur vos clients.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative rounded-lg border border-ink/10 bg-paper p-8 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl italic">Rumor</span>
                  <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-ink/60">
                    <span>Menu</span><span>À propos</span><span>Réserver</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-[1fr_auto] items-center gap-6">
                  <div>
                    <h2 className="font-display text-5xl uppercase leading-[0.95] md:text-6xl">
                      Le brunch<br />est<br />servi.
                    </h2>
                    <button className="mt-8 inline-flex items-center gap-2 border border-ink/20 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-colors hover:bg-ink hover:text-cream">
                      Voir le menu <ArrowRightIcon className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="w-44 rotate-2 overflow-hidden rounded-md shadow-photo md:w-64">
                    <img src={IMG.brunch} alt="Brunch" loading="lazy" draggable={false} className="kenburns aspect-[4/5] w-full object-cover" />
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="space-y-8">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 120}>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-flame/10">
                      <f.icon className="h-6 w-6 text-flame" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold uppercase tracking-wide text-ink">{f.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-16">
            <div className="rounded-lg border border-ink/10 bg-paper p-8 shadow-card">
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">
                Compatible avec votre caisse
              </h2>
              <p className="mt-2 text-sm text-ink/70">
                Sous se connecte directement à votre logiciel de caisse existant.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {integrations.map((name) => (
                  <span key={name} className="rounded-sm border border-ink/20 bg-cream px-4 py-2 text-sm font-semibold text-ink">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-12 text-center">
            <p className="font-hand text-2xl text-ink/70">
              <AsteriskIcon className="inline h-5 w-5 text-flame" /> Simple, fiable, et sous votre contrôle.
            </p>
            <button
              onClick={() => onNavigate('')}
              className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-flame px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:bg-ink"
            >
              Essayer Sous
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
