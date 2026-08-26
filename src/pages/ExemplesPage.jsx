import { ArrowRightIcon, ArrowLeftIcon, SousMark, AsteriskIcon } from '../components/doodles';
import { Grain } from '../components/fx';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { IMG } from '../data';

const BrowserDots = ({ light = false }) => (
  <div className="flex gap-1.5">
    {[0, 1, 2].map((i) => (
      <span key={i} className={`h-2 w-2 rounded-full border ${light ? 'border-cream/40' : 'border-ink/40'}`} />
    ))}
  </div>
);

const examples = [
  {
    name: 'Mamma Rosa',
    type: 'Italien • Chaleureux • Traditionnel',
    image: IMG.italiana,
    style: 'bg-[#FAF5EC] border-ink/20',
    textColor: 'text-ink',
    desc: 'On cuisine comme Nonna nous l\'a appris — lentement, avec passion et beaucoup trop de beurre.',
    rotation: '-rotate-1',
  },
  {
    name: 'Knock Knock',
    type: 'Burgers • Audacieux • Vivant',
    image: IMG.burger,
    style: 'bg-coal border-2 border-ink',
    textColor: 'text-cream',
    desc: 'Les meilleurs burgers de la ville, servis avec le sourire.',
    rotation: 'rotate-1',
    dark: true,
  },
  {
    name: 'Sora',
    type: 'Japonais • Minimal • Raffiné',
    image: IMG.ramen,
    style: 'bg-paper border-ink/20',
    textColor: 'text-ink',
    desc: 'Cuisine japonaise, préparée avec intention et précision.',
    rotation: '-rotate-1',
  },
  {
    name: 'Le Petit Bistrot',
    type: 'Français • Classique • Bistrot',
    image: IMG.pasta,
    style: 'bg-cream border-ink/20',
    textColor: 'text-ink',
    desc: 'La cuisine de grand-mère, dans un cadre élégant et décontracté.',
    rotation: 'rotate-1',
  },
  {
    name: 'Ocean View',
    type: 'Poisson • Frais • Marin',
    image: IMG.fish,
    style: 'bg-[#F0F4F8] border-ink/20',
    textColor: 'text-ink',
    desc: 'Les fruits de mer les plus frais, directement de la criée.',
    rotation: '-rotate-1',
  },
  {
    name: 'The Grill House',
    type: 'Viande • Fumé • Gourmand',
    image: IMG.chef,
    style: 'bg-[#2C1810] border-2 border-ink',
    textColor: 'text-cream',
    desc: 'Viandes grillées au feu de bois, fumées avec patience.',
    rotation: 'rotate-1',
    dark: true,
  },
];

export default function ExemplesPage({ onNavigate }) {
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
              Nos <span className="font-hand text-flame">exemples</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-ink/70">
              Sous s'adapte à votre identité. Découvrez comment nos restaurants ont transformé leur présence en ligne.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {examples.map((ex, i) => (
              <Reveal key={ex.name} delay={i * 100}>
                <div className={`group flex h-full flex-col rounded-md border ${ex.style} p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-photo ${ex.rotation} hover:rotate-0`}>
                  <BrowserDots light={ex.dark} />
                  <p className={`mt-4 font-display text-xl font-bold ${ex.dark ? 'text-cream' : 'text-ink'}`}>{ex.name}</p>
                  <p className={`mt-1 text-[10px] font-bold uppercase tracking-widest ${ex.dark ? 'text-cream/60' : 'text-ink/60'}`}>{ex.type}</p>
                  <p className={`mt-3 text-sm leading-relaxed ${ex.dark ? 'text-cream/70' : 'text-ink/70'}`}>{ex.desc}</p>
                  <div className="mt-4 overflow-hidden rounded-full">
                    <img src={ex.image} alt={ex.name} loading="lazy" className="kenburns aspect-square w-full object-cover" />
                  </div>
                  <span className={`mt-4 inline-flex items-center gap-1 self-start border px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest ${ex.dark ? 'border-cream/60 text-cream' : 'border-ink text-ink'} transition-colors ${ex.dark ? 'hover:bg-cream hover:text-coal' : 'hover:bg-ink hover:text-cream'}`}>
                    Voir le site <ArrowRightIcon className="h-3 w-3" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <p className="font-hand text-2xl text-ink/70">
              <AsteriskIcon className="inline h-5 w-5 text-flame" /> Même moteur. Ambiances complètement différentes.
            </p>
            <button
              onClick={() => onNavigate('')}
              className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-flame px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:bg-ink"
            >
              Créer mon site
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
