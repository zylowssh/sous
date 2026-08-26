import { useState } from 'react';
import { ArrowRightIcon, ArrowLeftIcon, SousMark, CheckIcon, AsteriskIcon } from '../components/doodles';
import { Grain } from '../components/fx';
import Reveal from '../components/Reveal';

export default function Signup({ onNavigate }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    restaurantName: '',
    restaurantType: '',
    address: '',
    city: '',
    phone: '',
  });

  const update = (field, value) => setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate('commencer');
  };

  return (
    <div className="relative min-h-screen bg-coal flex items-center justify-center px-4">
      <Grain />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <p className="absolute -left-20 top-1/4 font-display text-[15vw] leading-none text-cream/[0.03]">sous.</p>
      </div>

      <Reveal className="relative z-10 w-full max-w-md">
        <div className="mb-10 flex items-center justify-center gap-3">
          <SousMark className="h-10 w-auto text-flame" />
          <span className="font-display text-4xl font-bold tracking-tight text-cream">sous.</span>
        </div>

        <div className="rounded-lg border border-cream/10 bg-cream/[0.05] p-8 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <h1 className="font-display text-3xl font-bold uppercase tracking-tight text-cream">
              {step === 1 ? 'Créer un compte' : 'Votre restaurant'}
            </h1>
            <span className="text-xs font-bold uppercase tracking-widest text-cream/40">
              {step}/2
            </span>
          </div>

          {step === 1 && (
            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="mt-8 space-y-5">
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-cream/50 mb-2">
                  Adresse e-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="votre@email.com"
                  className="w-full rounded-sm border border-cream/20 bg-cream/[0.05] px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-bold uppercase tracking-widest text-cream/50 mb-2">
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => update('password', e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-sm border border-cream/20 bg-cream/[0.05] px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                  required
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-xs font-bold uppercase tracking-widest text-cream/50 mb-2">
                  Confirmer le mot de passe
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => update('confirmPassword', e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-sm border border-cream/20 bg-cream/[0.05] px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                  required
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-sm bg-flame px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:bg-cream hover:text-coal"
              >
                Continuer
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="restaurantName" className="block text-xs font-bold uppercase tracking-widest text-cream/50 mb-2">
                  Nom du restaurant
                </label>
                <input
                  id="restaurantName"
                  type="text"
                  value={formData.restaurantName}
                  onChange={(e) => update('restaurantName', e.target.value)}
                  placeholder="Mamma Rosa"
                  className="w-full rounded-sm border border-cream/20 bg-cream/[0.05] px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                  required
                />
              </div>

              <div>
                <label htmlFor="restaurantType" className="block text-xs font-bold uppercase tracking-widest text-cream/50 mb-2">
                  Type de cuisine
                </label>
                <select
                  id="restaurantType"
                  value={formData.restaurantType}
                  onChange={(e) => update('restaurantType', e.target.value)}
                  className="w-full rounded-sm border border-cream/20 bg-cream/[0.05] px-4 py-3 text-sm text-cream focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                  required
                >
                  <option value="" className="bg-coal">Sélectionner...</option>
                  <option value="italien" className="bg-coal">Italien</option>
                  <option value="francais" className="bg-coal">Français</option>
                  <option value="japonais" className="bg-coal">Japonais</option>
                  <option value="burger" className="bg-coal">Burgers</option>
                  <option value="brasserie" className="bg-coal">Brasserie</option>
                  <option value="autre" className="bg-coal">Autre</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="address" className="block text-xs font-bold uppercase tracking-widest text-cream/50 mb-2">
                    Adresse
                  </label>
                  <input
                    id="address"
                    type="text"
                    value={formData.address}
                    onChange={(e) => update('address', e.target.value)}
                    placeholder="12 rue de la Paix"
                    className="w-full rounded-sm border border-cream/20 bg-cream/[0.05] px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-xs font-bold uppercase tracking-widest text-cream/50 mb-2">
                    Ville
                  </label>
                  <input
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={(e) => update('city', e.target.value)}
                    placeholder="Paris"
                    className="w-full rounded-sm border border-cream/20 bg-cream/[0.05] px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-cream/50 mb-2">
                  Téléphone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="06 12 34 56 78"
                  className="w-full rounded-sm border border-cream/20 bg-cream/[0.05] px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                  required
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center justify-center gap-2 rounded-sm border-2 border-cream/20 px-4 py-3.5 text-sm font-semibold text-cream/70 transition-colors hover:border-cream/50 hover:text-cream"
                >
                  <ArrowLeftIcon className="h-4 w-4" />
                </button>
                <button
                  type="submit"
                  className="group flex flex-1 items-center justify-center gap-2 rounded-sm bg-flame px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:bg-cream hover:text-coal"
                >
                  Créer mon compte
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          )}

          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-cream/15" />
            <span className="text-xs text-cream/40">ou</span>
            <div className="h-px flex-1 bg-cream/15" />
          </div>

          <p className="mt-6 text-center text-sm text-cream/60">
            Déjà un compte ?{' '}
            <button onClick={() => onNavigate('login')} className="font-semibold text-flame underline decoration-1 underline-offset-2 hover:text-cream">
              Se connecter
            </button>
          </p>
        </div>
      </Reveal>
    </div>
  );
}
