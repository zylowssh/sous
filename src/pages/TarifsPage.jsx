import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { Grain } from '../components/fx';
import { CalendarIcon, CheckIcon, ChevronDownIcon, EditIcon, MessageIcon, QrIcon, ReceiptIcon, ShieldIcon, UsersIcon } from '../components/doodles';
import { BrowserFrame, ButtonLink, Eyebrow, Receipt, Stamp, TrustStrip } from '../components/MarketingPrimitives';
import { IMG } from '../data';

const plans = [
  {
    name: 'Essentiel', price: '49 €', unit: '/ mois', description: 'Pour un restaurant indépendant qui veut un site toujours juste.', cta: 'Choisir Essentiel',
    features: ['Site web personnalisé', 'Synchronisation menu (POS)', 'Mises à jour WhatsApp', 'QR menu dynamique', 'Conformité allergènes'],
  },
  {
    name: 'Pro', price: '89 €', unit: '/ mois', description: 'Pour piloter aussi les réservations, promotions et performances.', cta: 'Choisir Pro', popular: true,
    features: ['Tout Essentiel', 'Assistant IA avancé', 'Gestion des promotions', 'Réservations en ligne', 'Statistiques des visites', 'Support prioritaire'],
  },
  {
    name: 'Groupe', price: 'Sur mesure', unit: '', description: 'Pour les groupes et réseaux qui veulent garder une charte commune.', cta: 'Parler à l’équipe',
    features: ['Gestion multi-sites', 'Charte centralisée', 'API dédiée', 'Intégrations sur mesure', 'Account manager dédié'],
  },
];

const comparison = [
  ['Site web personnalisé', true, true, true],
  ['Synchronisation menu (POS)', true, true, true],
  ['Mises à jour WhatsApp', true, true, true],
  ['QR menu et conformité', true, true, true],
  ['Assistant IA avancé', false, true, true],
  ['Promotions et réservations', false, true, true],
  ['Statistiques et support prioritaire', false, true, true],
  ['Gestion multi-sites', false, false, true],
  ['API et intégrations sur mesure', false, false, true],
  ['Account manager dédié', false, false, true],
];

const faqs = [
  ['Est-ce que je m’engage sur une durée ?', 'Non. Les offres Essentiel et Pro sont sans engagement. Vous pouvez changer ou arrêter depuis votre espace.'],
  ['Y a-t-il des frais de mise en place ?', 'Non pour les offres Essentiel et Pro. La configuration initiale et l’accompagnement au lancement sont inclus.'],
  ['Comment fonctionne la synchronisation caisse ?', 'Sous se connecte à votre solution de caisse compatible et utilise le menu comme source de vérité. Notre équipe vérifie la connexion avec vous.'],
  ['Puis-je garder mon nom de domaine ?', 'Oui. Nous connectons votre domaine existant ou vous aidons à en choisir un nouveau.'],
  ['Que se passe-t-il si je fais une erreur ?', 'Rien ne part directement en ligne. Sous prépare un brouillon et attend toujours votre validation explicite.'],
  ['Le plan Groupe commence à combien de restaurants ?', 'Il est conçu à partir de trois établissements, mais nous adaptons la proposition à votre organisation et à vos intégrations.'],
];

function PlanCard({ plan, index }) {
  return (
    <div className={`relative flex h-full flex-col border p-5 sm:p-6 ${plan.popular ? 'border-2 border-ink bg-paper shadow-photo' : 'border-ink/20 bg-paper'}`}>
      {plan.popular && <span className="absolute -top-3 left-5 bg-butter px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-ink">Recommandé</span>}
      <div className="flex items-start justify-between gap-4">
        <div><p className="text-[10px] font-black uppercase tracking-[0.2em] text-ink/45">0{index + 1} / {plan.name}</p><p className="mt-5 font-display text-4xl uppercase leading-none sm:text-5xl">{plan.price}</p><span className="text-xs font-semibold text-ink/40">{plan.unit}</span></div>
        <ReceiptIcon className="h-6 w-6 text-flame" />
      </div>
      <p className="mt-5 min-h-14 text-xs leading-relaxed text-ink/60">{plan.description}</p>
      <div className="my-5 border-t border-dashed border-ink/25" />
      <ul className="flex-1 space-y-2.5">
        {plan.features.map(feature => <li key={feature} className="flex items-start gap-2 text-xs text-ink/70"><CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-flame" />{feature}</li>)}
      </ul>
      <div className="mt-7"><ButtonLink to={plan.name === 'Groupe' ? '/commencer' : '/signup'} tone={plan.popular ? 'dark' : 'outline'} className="w-full">{plan.cta}</ButtonLink></div>
    </div>
  );
}

function Availability({ value }) {
  return value ? <CheckIcon className="mx-auto h-4 w-4 text-flame" aria-label="Inclus" /> : <span className="text-ink/20" aria-label="Non inclus">×</span>;
}

function FaqItem({ question, answer, initialOpen = false }) {
  const [open, setOpen] = useState(initialOpen);
  return (
    <div className="border-b border-ink/20">
      <button type="button" onClick={() => setOpen(value => !value)} className="flex w-full items-center justify-between gap-6 py-5 text-left text-sm font-black text-ink" aria-expanded={open}>
        <span>{question}</span><ChevronDownIcon className={`h-4 w-4 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}><p className="max-w-2xl overflow-hidden text-sm leading-relaxed text-ink/60">{answer}</p></div>
    </div>
  );
}

export default function TarifsPage() {
  useEffect(() => {
    document.title = 'Tarifs | Sous';
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-cream">
      <Grain />
      <Navbar />

      <main>
        <section className="relative overflow-hidden px-4 pb-24 pt-28 md:px-8 lg:px-16 lg:pb-32 lg:pt-36">
          <p aria-hidden className="absolute -left-6 top-14 font-display text-[27vw] uppercase leading-none text-ink/[0.035]">Tarifs</p>
          <div className="relative mx-auto max-w-7xl">
            <Reveal className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
              <div>
                <Eyebrow>Des offres lisibles</Eyebrow>
                <h1 className="mt-4 max-w-[10ch] font-display text-5xl uppercase leading-[0.9] sm:text-7xl xl:text-[6.2rem]">Un site à jour. <span className="text-flame">Un tarif clair.</span></h1>
              </div>
              <div className="pb-2 lg:justify-self-end"><p className="max-w-xl text-sm leading-relaxed text-ink/60">Votre caisse alimente le menu. Sous prépare les changements. Vous gardez le dernier mot, quel que soit le plan.</p><p className="mt-5 font-hand text-xl text-ink/50">Moins cher qu’une erreur sur votre carte.</p></div>
            </Reveal>

            <div className="relative mt-16">
              <div className="absolute -top-8 left-0 right-0 hidden h-8 border-t-2 border-ink lg:block"><span className="absolute left-[16.5%] -top-1 h-2 w-2 rounded-full bg-flame" /><span className="absolute left-1/2 -top-1 h-2 w-2 rounded-full bg-flame" /><span className="absolute right-[16.5%] -top-1 h-2 w-2 rounded-full bg-flame" /></div>
              <div className="grid gap-6 lg:grid-cols-3">
                {plans.map((plan, index) => <Reveal key={plan.name} delay={index * 90}><PlanCard plan={plan} index={index} /></Reveal>)}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-ink/15 bg-paper px-4 py-24 md:px-8 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
              <div><Eyebrow>Comparer sans déchiffrer</Eyebrow><h2 className="mt-4 max-w-[11ch] font-display text-5xl uppercase leading-[0.92] sm:text-7xl">Tout sur la table.</h2></div>
              <p className="max-w-lg text-sm leading-relaxed text-ink/60 lg:justify-self-end">Les fondations sont incluses partout. Pro ajoute les leviers commerciaux. Groupe ajoute le pilotage du réseau.</p>
            </Reveal>
            <Reveal delay={100} className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse text-xs">
                <thead><tr className="border-y-2 border-ink text-left"><th className="w-[46%] py-4 text-[10px] font-black uppercase tracking-[0.18em]">Fonction</th>{plans.map(plan => <th key={plan.name} className={`px-5 py-4 text-center text-[10px] font-black uppercase tracking-[0.18em] ${plan.popular ? 'bg-butter/35' : ''}`}>{plan.name}</th>)}</tr></thead>
                <tbody>{comparison.map(([label, essential, pro, group]) => <tr key={label} className="border-b border-ink/15"><td className="py-4 font-semibold text-ink/70">{label}</td><td className="px-5 py-4 text-center"><Availability value={essential} /></td><td className="bg-butter/20 px-5 py-4 text-center"><Availability value={pro} /></td><td className="px-5 py-4 text-center"><Availability value={group} /></td></tr>)}</tbody>
              </table>
              <p className="mt-5 text-right font-hand text-lg text-ink/45">Pro reste le meilleur équilibre pour une salle active.</p>
            </Reveal>
          </div>
        </section>

        <section className="bg-olive px-4 py-24 md:px-8 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
              <div><Eyebrow>Accompagnement inclus</Eyebrow><h2 className="mt-4 max-w-[11ch] font-display text-5xl uppercase leading-[0.92] sm:text-7xl">Dès le premier service, vous n’êtes pas seul.</h2></div>
              <Stamp className="justify-self-start lg:justify-self-end">On répond en humain</Stamp>
            </Reveal>
            <Reveal delay={100} className="mt-14 grid gap-px overflow-hidden border border-ink/20 bg-ink/20 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ['01', 'Votre menu', 'On reprend vos plats, prix, options et allergènes.', ReceiptIcon],
                ['02', 'Votre caisse', 'On vérifie la connexion et la source des données.', QrIcon],
                ['03', 'Le brouillon', 'Vous testez le site et chaque action de validation.', EditIcon],
                ['04', 'Le feu vert', 'Votre domaine, votre QR et votre site passent en ligne.', CheckIcon],
                ['05', 'Le support', 'Une personne vous répond après le lancement.', UsersIcon],
              ].map(([no, title, body, Icon]) => <div key={no} className="bg-olive p-5"><span className="font-display text-5xl text-ink/10">{no}</span><Icon className="mt-7 h-6 w-6" /><h3 className="mt-5 text-sm font-black uppercase">{title}</h3><p className="mt-3 text-xs leading-relaxed text-ink/55">{body}</p></div>)}
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-coal px-4 py-24 text-cream md:px-8 lg:px-16 lg:py-32">
          <p aria-hidden className="absolute -right-5 top-2 font-display text-[25vw] uppercase leading-none text-cream/[0.025]">Pro</p>
          <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
            <Reveal>
              <Eyebrow light>Le plan qui travaille aussi le soir</Eyebrow>
              <h2 className="mt-4 max-w-[10ch] font-display text-5xl uppercase leading-[0.92] sm:text-7xl">Pro, quand votre site devient un levier.</h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">Promotions, réservations et lecture des visites rejoignent le même circuit de brouillon et de validation.</p>
              <div className="mt-8 flex items-end gap-3"><span className="font-display text-6xl text-flame">89 €</span><span className="pb-2 text-xs text-cream/45">par mois</span></div>
              <div className="mt-6"><ButtonLink to="/signup" tone="light">Choisir Pro</ButtonLink></div>
            </Reveal>
            <Reveal delay={100} className="grid gap-4 md:grid-cols-[.8fr_1.2fr]">
              <Receipt dark>
                <p className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-cream/45"><MessageIcon className="h-4 w-4" /> Instruction</p>
                <p className="mt-4 text-xs leading-relaxed text-cream/75">Lance la formule avant-spectacle vendredi, de 18h à 20h. Ajoute un bouton de réservation.</p>
                <div className="mt-6 border-t border-cream/10 pt-5"><p className="text-[9px] font-black uppercase tracking-widest text-flame">Sous prépare</p><p className="mt-3 font-display text-3xl uppercase">Dîner avant le rideau.</p><img src={IMG.interior} alt="Ambiance du restaurant" className="mt-4 aspect-[16/8] w-full object-cover" /><div className="mt-4 flex gap-2"><Stamp light>Brouillon</Stamp><span className="bg-flame px-3 py-1 text-[8px] font-black uppercase">Valider</span></div></div>
              </Receipt>
              <BrowserFrame dark label="restaurant.fr"><div className="grid min-h-[420px] grid-rows-[1fr_auto]"><div className="relative"><img src={IMG.interior} alt="Site du restaurant avec promotion" className="absolute inset-0 h-full w-full object-cover opacity-65" /><div className="relative p-6"><span className="bg-flame px-2 py-1 text-[8px] font-black uppercase">Vendredi 18h–20h</span><h3 className="mt-20 max-w-[9ch] font-display text-5xl uppercase leading-[0.9]">Dîner avant le rideau.</h3></div></div><div className="flex items-center justify-between bg-paper p-4 text-ink"><div><p className="text-[8px] font-black uppercase tracking-widest">Réservation</p><p className="mt-1 text-xs font-semibold">2 couverts · 19h00</p></div><CalendarIcon className="h-6 w-6 text-flame" /></div></div></BrowserFrame>
            </Reveal>
          </div>
        </section>

        <section className="px-4 py-24 md:px-8 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.62fr_1.38fr]">
            <Reveal>
              <Eyebrow>Avant de se lancer</Eyebrow>
              <h2 className="mt-4 max-w-[10ch] font-display text-5xl uppercase leading-[0.92] sm:text-7xl">Les réponses, sans petite ligne.</h2>
              <Receipt className="mt-8 max-w-sm rotate-1">
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-flame">Une vraie question ?</p>
                <p className="mt-4 font-serif text-lg italic">Écrivez-nous. Une personne vous répond avec une réponse utile, pas un lien de plus.</p>
                <a href="mailto:contact@sous-app.fr" className="mt-5 inline-flex items-center gap-2 text-xs font-black underline underline-offset-4">contact@sous-app.fr</a>
              </Receipt>
            </Reveal>
            <Reveal delay={80} className="border-t-2 border-ink">
              {faqs.map(([question, answer], index) => <FaqItem key={question} question={question} answer={answer} initialOpen={index === 0} />)}
            </Reveal>
          </div>
        </section>

        <section className="bg-flame text-cream">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 md:px-8 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:px-16 lg:py-28">
            <Reveal>
              <Receipt className="mx-auto max-w-xs rotate-2 text-ink">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-flame">Bon de départ</p>
                <p className="mt-4 font-display text-5xl uppercase">49 €</p><p className="text-xs text-ink/45">par mois · sans engagement</p>
                <div className="my-5 border-y border-dashed border-ink/25 py-4 text-xs"><p>Site personnalisé <span className="float-right">Inclus</span></p><p className="mt-2">Menu connecté <span className="float-right">Inclus</span></p><p className="mt-2">Support humain <span className="float-right">Inclus</span></p></div>
                <Stamp>Tarif net</Stamp>
              </Receipt>
            </Reveal>
            <Reveal delay={100}>
              <Eyebrow light>Le bon choix reste simple</Eyebrow>
              <h2 className="mt-4 max-w-[12ch] font-display text-5xl uppercase leading-[0.9] sm:text-7xl xl:text-8xl">Le bon plan, c’est celui qui reste à jour.</h2>
              <div className="mt-8 flex flex-wrap gap-3"><ButtonLink to="/signup" tone="dark">Commencer avec Essentiel</ButtonLink><ButtonLink to="/commencer" tone="outlineLight">Parler à l’équipe</ButtonLink></div>
            </Reveal>
          </div>
          <TrustStrip light />
        </section>
      </main>

      <Footer />
    </div>
  );
}
