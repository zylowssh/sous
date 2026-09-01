import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon, ArrowLeftIcon, SousMark, CheckIcon, RefreshIcon,
  ChevronDownIcon, PinIcon, GlobeIcon, InstagramIcon, MailIcon, LockIcon,
  PhoneIcon, UploadIcon, ImageIcon, ClockIcon, GlobeIcon as SiteIcon,
  ChartIcon, CalendarIcon, AsteriskIcon, EyeIcon, EyeOffIcon,
} from '../components/doodles';
import { Grain } from '../components/fx';
import Reveal from '../components/Reveal';
import { IMG } from '../data';

const STEPS = [
  { label: 'Votre restaurant' },
  { label: 'Vous' },
  { label: 'Menu & POS' },
  { label: 'Site & contenu' },
  { label: 'Terminer' },
];

const COPY = [
  { eyebrow: 'Onboarding · Étape 1/5', title: 'Commençons.', subtitle: 'Parlez-nous de votre restaurant.' },
  { eyebrow: 'Onboarding · Étape 2/5', title: 'À votre tour.', subtitle: 'Créez vos identifiants Sous.' },
  { eyebrow: 'Onboarding · Étape 3/5', title: 'Connectez ce que vous avez déjà.', subtitle: 'Sous importe votre menu, vos horaires et vos photos.' },
  { eyebrow: 'Onboarding · Étape 4/5', title: 'Quelle direction vous ressemble ?', subtitle: "Choisissez l'ambiance qui correspond le mieux à votre restaurant." },
  { eyebrow: 'Onboarding · Étape 5/5', title: 'Terminer.', subtitle: 'On vérifie tout, puis Sous se met au travail.' },
];

const inputCls = 'w-full rounded-sm border border-ink/20 bg-paper py-3 pl-4 pr-4 text-sm text-ink placeholder:text-ink/35 focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame';
const inputIconCls = 'w-full rounded-sm border border-ink/20 bg-paper py-3 pl-10 pr-4 text-sm text-ink placeholder:text-ink/35 focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame';

function Field({ label, hint, children }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="block text-sm font-bold text-ink">{label}</label>
        {hint && <span className="text-xs text-ink/40">{hint}</span>}
      </div>
      {children}
    </div>
  );
}

const CUISINES = ['Italienne', 'Française', 'Japonaise', 'Burgers', 'Brasserie', 'Végétarienne', 'Autre'];

const STYLES = [
  { name: 'Chaleureux', desc: 'Convivial, authentique, comme à la maison.', image: IMG.interior },
  { name: 'Moderne', desc: 'Épuré, contemporain, avec une touche design.', image: IMG.ramen },
  { name: 'Minimal', desc: "Simple, élégant, focus sur l'essentiel.", image: IMG.fish },
  { name: 'Audacieux', desc: "Créatif, coloré, pleine d'énergie.", image: IMG.neon },
  { name: 'Classique', desc: 'Intemporel, raffiné, valeurs traditionnelles.', image: IMG.chef },
];

export default function Signup() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    restaurantName: '', cuisine: '', address: '', website: '', instagram: '',
    firstName: '', email: '', password: '', phone: '',
    menuImported: false, photosAdded: false, hoursAdded: false,
    style: 'Chaleureux',
  });

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const next = () => (step < 5 ? setStep(step + 1) : setDone(true));
  const back = () => step > 1 && setStep(step - 1);

  const previewName = form.restaurantName || 'Mamma Rosa';
  const previewCuisine = form.cuisine || 'Italienne';

  if (done) {
    return (
      <div className="relative flex min-h-screen items-center justify-center bg-cream px-4">
        <Grain />
        <Reveal className="relative z-10 max-w-lg text-center">
          <SousMark className="mx-auto h-14 w-auto text-flame" />
          <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink md:text-5xl">
            C'est parti !
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            Sous se met au travail sur le site de {previewName}. Vous recevrez un message dès qu'il sera prêt à valider.
          </p>
          <Link
            to="/"
            className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-flame px-6 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-ink"
          >
            Retour à l'accueil
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-cream">
      <Grain />
      <div className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left — wizard */}
        <div className="px-6 py-8 sm:px-12 lg:px-16 lg:py-12">
          <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-ink">
            <SousMark className="h-6 w-auto text-flame" />
            sous.
          </Link>

          <Reveal key={step} className="mt-12 max-w-xl lg:mt-16">
            <p className="font-hand text-lg italic text-flame">{COPY[step - 1].eyebrow}</p>
            <h1 className="mt-1 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl">
              {COPY[step - 1].title}
            </h1>
            <p className="mt-2 text-sm text-ink/60">{COPY[step - 1].subtitle}</p>
          </Reveal>

          <div className="mt-10 flex gap-8 lg:mt-12 lg:gap-14">
            {/* Step sidebar */}
            <div className="hidden shrink-0 sm:block">
              {STEPS.map((s, i) => {
                const num = i + 1;
                const state = num < step ? 'done' : num === step ? 'active' : 'upcoming';
                return (
                  <div key={s.label} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          state === 'done' ? 'bg-flame text-cream' :
                          state === 'active' ? 'bg-ink text-cream' : 'border border-ink/20 text-ink/40'
                        }`}
                      >
                        {state === 'done' ? <CheckIcon className="h-3.5 w-3.5" /> : num}
                      </div>
                      {num < STEPS.length && (
                        <div className={`my-1 h-8 w-px border-l border-dashed ${num < step ? 'border-flame' : 'border-ink/20'}`} />
                      )}
                    </div>
                    <p className={`pt-0.5 text-sm font-semibold ${state === 'upcoming' ? 'text-ink/35' : 'text-ink'}`}>
                      {s.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Form */}
            <div className="flex-1">
              {step === 1 && (
                <div className="space-y-5">
                  <Field label="Nom de votre restaurant" hint="Visible par vos clients">
                    <input value={form.restaurantName} onChange={(e) => update('restaurantName', e.target.value)} placeholder="Ex. : Mamma Rosa" className={inputCls} />
                  </Field>
                  <Field label="Type de cuisine">
                    <div className="relative">
                      <select value={form.cuisine} onChange={(e) => update('cuisine', e.target.value)} className={`${inputCls} appearance-none pr-10`}>
                        <option value="">Sélectionnez votre cuisine</option>
                        {CUISINES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <ChevronDownIcon className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
                    </div>
                  </Field>
                  <Field label="Adresse de votre restaurant">
                    <div className="relative">
                      <input value={form.address} onChange={(e) => update('address', e.target.value)} placeholder="23 Rue de la Paix, 75002 Paris" className={inputIconCls + ' pl-4 pr-10'} />
                      <PinIcon className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
                    </div>
                  </Field>
                  <Field label="Site web actuel (si vous en avez un)">
                    <div className="relative">
                      <GlobeIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
                      <input value={form.website} onChange={(e) => update('website', e.target.value)} placeholder="https://votrerestaurant.fr" className={inputIconCls} />
                    </div>
                  </Field>
                  <Field label="Instagram (optionnel)">
                    <div className="relative">
                      <InstagramIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
                      <input value={form.instagram} onChange={(e) => update('instagram', e.target.value)} placeholder="votrecompte" className={inputIconCls} />
                    </div>
                  </Field>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <Field label="Prénom et nom">
                    <input value={form.firstName} onChange={(e) => update('firstName', e.target.value)} placeholder="Nona Rosa" className={inputCls} />
                  </Field>
                  <Field label="Email professionnel">
                    <div className="relative">
                      <MailIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
                      <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="contact@mammarosa.fr" className={inputIconCls} />
                    </div>
                  </Field>
                  <Field label="Téléphone">
                    <div className="relative">
                      <PhoneIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
                      <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="06 12 34 56 78" className={inputIconCls} />
                    </div>
                  </Field>
                  <Field label="Mot de passe">
                    <div className="relative">
                      <LockIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
                      <input type={showPassword ? 'text' : 'password'} value={form.password} onChange={(e) => update('password', e.target.value)} placeholder="••••••••" className={`${inputIconCls} pr-10`} />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40 hover:text-ink/70 transition-colors" aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}>
                        {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                      </button>
                    </div>
                  </Field>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-3">
                  {[
                    { key: 'menuImported', icon: UploadIcon, title: 'Menu actuel', desc: 'Importez depuis votre POS, un fichier ou Google Sheets.', cta: 'Importer' },
                    { key: 'photosAdded', icon: ImageIcon, title: 'Photos', desc: "Ajoutez vos photos de plats, de salle ou de l'équipe.", cta: 'Ajouter des photos' },
                    { key: 'hoursAdded', icon: ClockIcon, title: 'Horaires & infos', desc: "Vos horaires, jours d'ouverture et informations pratiques.", cta: 'Compléter' },
                  ].map((row) => (
                    <div key={row.key} className="flex items-center justify-between gap-4 rounded-sm border border-ink/15 bg-paper p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-flame/10">
                          <row.icon className="h-4 w-4 text-flame" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-ink">{row.title}</p>
                          <p className="text-xs text-ink/55">{row.desc}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => update(row.key, !form[row.key])}
                        className={`shrink-0 rounded-sm border px-3 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                          form[row.key] ? 'border-flame bg-flame text-cream' : 'border-ink/20 text-ink hover:border-ink'
                        }`}
                      >
                        {form[row.key] ? 'Fait ✓' : row.cta}
                      </button>
                    </div>
                  ))}
                  <p className="pt-2 text-xs text-ink/45">Pas d'outil ? Pas de problème, vous pourrez tout ajouter plus tard.</p>
                  <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-ink/50">
                    <span className="font-bold uppercase tracking-widest">Compatible avec :</span>
                    {["L'Addition", 'Zelty', 'Lightspeed', 'Toast', 'Square'].map((p) => (
                      <span key={p} className="rounded-sm border border-ink/15 px-2 py-1">{p}</span>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {STYLES.map((s) => (
                    <button
                      key={s.name}
                      type="button"
                      onClick={() => update('style', s.name)}
                      className={`group relative overflow-hidden rounded-md border-2 text-left transition-all ${
                        form.style === s.name ? 'border-flame' : 'border-transparent hover:border-ink/20'
                      }`}
                    >
                      <img src={s.image} alt={s.name} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                      {form.style === s.name && (
                        <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-flame text-cream">
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                      )}
                      <div className="bg-paper p-2.5">
                        <p className="text-xs font-bold text-ink">{s.name}</p>
                        <p className="mt-0.5 text-[10px] leading-snug text-ink/50">{s.desc}</p>
                      </div>
                    </button>
                  ))}
                  <p className="col-span-2 pt-1 text-xs text-ink/45 sm:col-span-3">Vous pourrez tout modifier après.</p>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-3 rounded-sm border border-ink/15 bg-paper p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-ink/50">Récapitulatif</p>
                  {[
                    ['Restaurant', previewName],
                    ['Cuisine', previewCuisine],
                    ['Adresse', form.address || '—'],
                    ['Direction artistique', form.style],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between border-b border-ink/10 pb-2 text-sm last:border-0 last:pb-0">
                      <span className="text-ink/50">{label}</span>
                      <span className="font-semibold text-ink">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8 flex items-center gap-3">
                {step > 1 && (
                  <button
                    onClick={back}
                    className="flex items-center justify-center gap-2 rounded-sm border border-ink/20 px-4 py-3 text-sm font-semibold text-ink/70 transition-colors hover:border-ink hover:text-ink"
                  >
                    <ArrowLeftIcon className="h-4 w-4" />
                  </button>
                )}
                <button
                  onClick={next}
                  className="group flex flex-1 items-center justify-center gap-2 rounded-sm bg-flame px-6 py-3.5 text-sm font-bold text-cream transition-colors hover:bg-ink sm:flex-none sm:px-10"
                >
                  {step < 5 ? 'Continuer' : 'Créer mon site'}
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <p className="mt-5 flex items-center gap-2 text-xs text-ink/45">
                <RefreshIcon className="h-3.5 w-3.5" />
                Cela ne prendra que 2 minutes chrono. Zéro carte bancaire.
              </p>
            </div>
          </div>
        </div>

        {/* Right — live preview */}
        <div className="hidden flex-col border-l border-ink/10 bg-paper/60 px-10 py-12 lg:flex xl:px-14">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-lg border border-ink/10 shadow-photo">
              <img src={IMG.interior} alt="Aperçu du restaurant" loading="lazy" className="aspect-video w-full object-cover" />
              <div className="flex items-center justify-between bg-ink px-4 py-3 text-cream">
                <span className="font-serif text-base italic">{previewName}</span>
                <span className="text-lg leading-none">≡</span>
              </div>
              <div className="bg-paper p-4">
                <h2 className="font-display text-xl uppercase leading-tight text-ink">
                  Cuisine {previewCuisine.toLowerCase()}.<br />Chaleureuse.<br />Sans prétention.
                </h2>
                <button className="mt-3 inline-flex items-center gap-2 rounded-sm bg-flame px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-cream">
                  Réserver une table
                </button>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-4 w-32 overflow-hidden rounded-md border-4 border-paper shadow-photo sm:w-40">
              <img src={IMG.pasta} alt="Plat" loading="lazy" className="aspect-square w-full object-cover" />
            </div>
          </Reveal>

          <div className="mt-16">
            <p className="font-display text-lg font-bold uppercase tracking-tight text-ink">Sous crée tout pour vous</p>
            <div className="mt-5 space-y-4">
              {[
                { icon: SiteIcon, title: 'Un site moderne et rapide', desc: 'Déjà prêt, adapté à votre identité.' },
                { icon: ChartIcon, title: 'Votre menu, toujours à jour', desc: 'Synchronisé avec votre POS.' },
                { icon: CalendarIcon, title: 'Réservations en ligne', desc: 'Moins de no-shows, plus de clients heureux.' },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <f.icon className="mt-0.5 h-4 w-4 shrink-0 text-ink/70" />
                  <div>
                    <p className="text-sm font-bold text-ink">{f.title}</p>
                    <p className="text-xs text-ink/55">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-center gap-3 rounded-md bg-cream p-4">
            <AsteriskIcon className="h-5 w-5 shrink-0 text-flame" />
            <p className="text-sm text-ink/70">
              <span className="font-bold text-ink">Plus de 2 500 restaurants</span> nous font déjà confiance. Rejoignez-les.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
