import { useState } from 'react';
import { ArrowRightIcon, ArrowLeftIcon, SousMark, CheckIcon, MessageIcon, AsteriskIcon } from '../components/doodles';
import { Grain } from '../components/fx';
import Reveal from '../components/Reveal';

const steps = [
  { num: 1, title: 'Informations', desc: 'Dites-nous tout sur votre restaurant.' },
  { num: 2, title: 'Menu', desc: 'Connectez votre logiciel de caisse.' },
  { num: 3, title: 'Style', desc: 'Choisissez l\'ambiance de votre site.' },
];

export default function Commencer({ onNavigate }) {
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState(false);

  if (completed) {
    return (
      <div className="relative min-h-screen bg-cream flex items-center justify-center px-4">
        <Grain />
        <Reveal className="relative z-10 text-center">
          <SousMark className="mx-auto h-16 w-auto text-flame" />
          <h1 className="mt-6 font-display text-4xl font-bold uppercase tracking-tight text-ink md:text-6xl">
            C'est parti !
          </h1>
          <p className="mt-4 text-lg text-ink/70">
            Votre site est en cours de création. Vous recevrez un message sur WhatsApp dès qu'il sera prêt.
          </p>
          <button
            onClick={() => onNavigate('')}
            className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-flame px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:bg-ink"
          >
            Retour à l'accueil
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-cream flex items-center justify-center px-4">
      <Grain />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <p className="absolute -left-20 top-1/4 font-display text-[15vw] leading-none text-ink/[0.03]">sous.</p>
      </div>

      <Reveal className="relative z-10 w-full max-w-lg">
        <div className="mb-8 flex items-center justify-center gap-3">
          <SousMark className="h-8 w-auto text-flame" />
          <span className="font-display text-3xl font-bold tracking-tight text-ink">sous.</span>
        </div>

        <div className="mb-8 flex items-center gap-3">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center gap-3">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                step > s.num ? 'bg-flame text-cream' :
                step === s.num ? 'bg-ink text-cream' : 'bg-ink/10 text-ink/40'
              }`}>
                {step > s.num ? <CheckIcon className="h-4 w-4" /> : s.num}
              </div>
              {i < steps.length - 1 && <div className={`h-px w-12 ${step > s.num ? 'bg-flame' : 'bg-ink/15'}`} />}
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-ink/15 bg-paper p-8 shadow-card">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">
            {steps[step - 1].title}
          </h2>
          <p className="mt-1 text-sm text-ink/60">{steps[step - 1].desc}</p>

          {step === 1 && (
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-ink/50 mb-2">Nom du restaurant</label>
                <input type="text" placeholder="Mamma Rosa" className="w-full rounded-sm border border-ink/20 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-ink/50 mb-2">Adresse</label>
                <input type="text" placeholder="12 rue de la Paix, Paris" className="w-full rounded-sm border border-ink/20 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-ink/50 mb-2">Téléphone</label>
                <input type="tel" placeholder="06 12 34 56 78" className="w-full rounded-sm border border-ink/20 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="mt-6 space-y-4">
              <p className="text-sm text-ink/70">
                Sous se connecte directement à votre logiciel de caisse pour synchroniser votre menu automatiquement.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["L'Addition", 'Zelty', 'Lightspeed', 'Autre'].map((pos) => (
                  <button key={pos} className="flex items-center justify-center gap-2 rounded-sm border border-ink/20 bg-cream px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-flame hover:text-flame">
                    {pos}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="mt-6 space-y-4">
              <p className="text-sm text-ink/70">
                Choisissez l'ambiance qui correspond le mieux à votre restaurant.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Chaleureux', color: 'bg-[#FAF5EC]' },
                  { name: 'Moderne', color: 'bg-coal text-cream' },
                  { name: 'Minimal', color: 'bg-paper' },
                  { name: 'Audacieux', color: 'bg-flame text-cream' },
                ].map((style) => (
                  <button key={style.name} className={`flex items-center justify-center rounded-sm border border-ink/20 px-4 py-6 text-sm font-semibold transition-all hover:-translate-y-1 hover:shadow-card ${style.color}`}>
                    {style.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center gap-3">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center justify-center gap-2 rounded-sm border-2 border-ink/20 px-4 py-3 text-sm font-semibold text-ink/70 transition-colors hover:border-ink hover:text-ink"
              >
                <ArrowLeftIcon className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={() => step < 3 ? setStep(step + 1) : setCompleted(true)}
              className="group flex flex-1 items-center justify-center gap-2 rounded-sm bg-flame px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:bg-ink"
            >
              {step < 3 ? 'Continuer' : 'Lancer mon site'}
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-ink/50">
          Étape {step} sur {steps.length} — ça ne prend que 2 minutes.
        </p>
      </Reveal>
    </div>
  );
}
