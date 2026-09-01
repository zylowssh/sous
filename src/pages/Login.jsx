import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRightIcon, SousMark, MailIcon, LockIcon, EyeIcon, EyeOffIcon, LinkIcon, ShieldIcon, GlobeIcon } from '../components/doodles';
import { Grain } from '../components/fx';
import Reveal from '../components/Reveal';
import { IMG } from '../data';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/commencer');
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-cream">
      <Grain />
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left — form */}
        <div className="flex flex-col px-6 py-8 sm:px-12 lg:px-16 lg:py-12">
          <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-ink">
            <SousMark className="h-6 w-auto text-flame" />
            sous.
          </Link>

          <div className="flex flex-1 items-center py-10">
            <Reveal className="w-full max-w-sm">
              <p className="font-hand text-lg italic text-flame">Connectez-vous à votre espace</p>
              <h1 className="mt-1 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl">
                Bon retour<br />chez Sous.
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-ink/60">
                Gérez votre site, votre menu et vos réservations depuis votre tableau de bord.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold text-ink">Email</label>
                  <div className="relative">
                    <MailIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="w-full rounded-sm border border-ink/20 bg-paper py-3 pl-10 pr-4 text-sm text-ink placeholder:text-ink/35 focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-bold text-ink">Mot de passe</label>
                    <button type="button" className="text-xs text-ink/50 underline decoration-1 underline-offset-2 hover:text-flame">
                      Mot de passe oublié ?
                    </button>
                  </div>
                  <div className="relative">
                    <LockIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-sm border border-ink/20 bg-paper py-3 pl-10 pr-10 text-sm text-ink placeholder:text-ink/35 focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink/40 hover:text-ink"
                    >
                      {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-sm bg-flame px-6 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-ink"
                >
                  Se connecter
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-ink/15" />
                <span className="text-xs text-ink/40">ou</span>
                <div className="h-px flex-1 bg-ink/15" />
              </div>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm border border-ink/20 bg-paper px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink">
                <LinkIcon className="h-4 w-4" />
                Envoyer un lien magique par email
              </button>

              <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-ink/50">
                <ShieldIcon className="mt-0.5 h-4 w-4 shrink-0 text-flame/70" />
                Vos données sont 100% sécurisées.<br />Sous ne partage jamais vos informations.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Right — visual */}
        <div className="hidden flex-col justify-between border-l border-ink/10 px-10 py-10 lg:flex xl:px-16 xl:py-12">
          <div className="flex items-center justify-end gap-2 text-sm">
            <span className="text-ink/60">Pas encore de compte ?</span>
            <Link to="/signup" className="font-semibold text-flame underline decoration-1 underline-offset-4 hover:text-ink">
              Créer un compte
            </Link>
          </div>

          <Reveal delay={100} className="relative mt-8 flex-1">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-lg">
              <img src={IMG.interior} alt="Salle de restaurant" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 left-8 w-64 rounded-lg bg-paper p-5 shadow-photo">
              <div className="flex items-center gap-2">
                <SousMark className="h-5 w-auto text-flame" />
                <span className="font-serif text-xl italic text-ink">Mamma Rosa</span>
              </div>
              <div className="mt-2 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-flame" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-flame">Site en ligne</p>
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm text-ink/70">
                <GlobeIcon className="h-4 w-4 text-ink/40" />
                mammarosa.fr
              </div>
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-sm border border-ink/20 py-2.5 text-xs font-bold text-ink transition-colors hover:border-ink">
                Ouvrir le site <ArrowRightIcon className="h-3.5 w-3.5" />
              </button>
            </div>
          </Reveal>

          <Reveal delay={200} className="mt-16 max-w-md">
            <p className="font-serif text-lg italic leading-relaxed text-ink/80">
              "Depuis que Sous s'occupe de notre site,<br />on se concentre sur nos clients.<br />
              <span className="underline decoration-flame decoration-2 underline-offset-4">Tout est à jour, tout le temps.</span>"
            </p>
            <p className="mt-3 text-sm text-ink/50">— Marco, propriétaire</p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
