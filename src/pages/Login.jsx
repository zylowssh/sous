import { useState } from 'react';
import { ArrowRightIcon, SousMark, AsteriskIcon } from '../components/doodles';
import { Grain } from '../components/fx';
import Reveal from '../components/Reveal';

export default function Login({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate('dashboard');
  };

  return (
    <div className="relative min-h-screen bg-coal flex items-center justify-center px-4">
      <Grain />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <p className="absolute -left-20 top-1/4 font-display text-[15vw] leading-none text-cream/[0.03]">sous.</p>
        <p className="absolute -right-10 bottom-1/4 font-display text-[12vw] leading-none text-cream/[0.03] rotate-12">sous.</p>
      </div>

      <Reveal className="relative z-10 w-full max-w-md">
        <div className="mb-10 flex items-center justify-center gap-3">
          <SousMark className="h-10 w-auto text-flame" />
          <span className="font-display text-4xl font-bold tracking-tight text-cream">sous.</span>
        </div>

        <div className="rounded-lg border border-cream/10 bg-cream/[0.05] p-8 backdrop-blur-sm">
          <h1 className="font-display text-3xl font-bold uppercase tracking-tight text-cream">
            Connexion
          </h1>
          <p className="mt-2 text-sm text-cream/60">
            Accédez à votre espace Sous.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-cream/50 mb-2">
                Adresse e-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-sm border border-cream/20 bg-cream/[0.05] px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                required
              />
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-sm bg-flame px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:bg-cream hover:text-coal"
            >
              Se connecter
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-cream/15" />
            <span className="text-xs text-cream/40">ou</span>
            <div className="h-px flex-1 bg-cream/15" />
          </div>

          <p className="mt-6 text-center text-sm text-cream/60">
            Pas encore de compte ?{' '}
            <button onClick={() => onNavigate('signup')} className="font-semibold text-flame underline decoration-1 underline-offset-2 hover:text-cream">
              Créer un compte
            </button>
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <AsteriskIcon className="h-4 w-4 text-flame/40" />
          <p className="font-hand text-base text-cream/40">Des questions ? contact@sous-app.fr</p>
        </div>
      </Reveal>
    </div>
  );
}
