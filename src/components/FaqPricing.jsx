import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import Section from './Section';
import { ArrowRightIcon, CheckIcon, AsteriskIcon } from './doodles';

const faqs = [
  {
    q: 'Comment fonctionne la mise à jour du site ?',
    a: 'Vous envoyez un message texte ou vocal à Sous via WhatsApp. Sous prépare un brouillon à partir de vos données. Vous le vérifiez, le modifiez si nécessaire, puis vous validez sa publication.',
  },
  {
    q: 'Le site est-il synchronisé avec ma caisse ?',
    a: 'Oui. Une fois la connexion configurée, votre carte en caisse reste la source de vérité. Les changements destinés au site et au QR menu passent toujours par votre validation.',
  },
  {
    q: 'Comment Sous aide-t-il pour la conformité ?',
    a: 'Sous structure le menu pour afficher les 14 allergènes majeurs, l’origine des viandes et les prix TTC. Les informations sensibles restent visibles dans le brouillon avant toute publication.',
  },
  {
    q: 'Puis-je utiliser mon propre nom de domaine ?',
    a: 'Oui. Vous pouvez connecter un domaine existant ou en choisir un nouveau. Sous prend en charge la configuration technique.',
  },
  {
    q: 'Que se passe-t-il si je fais une erreur dans un message ?',
    a: 'Rien n’est publié sans votre accord. Vous pouvez corriger le brouillon, demander une autre proposition ou ne pas le publier.',
  },
];

const plans = [
  {
    name: 'ESSENTIEL',
    price: '49€',
    period: '/ mois',
    blurb: 'Pour les restaurants indépendants qui veulent un site toujours à jour.',
    cta: 'Commencer',
    href: '/signup?plan=essentiel',
    features: ['Site web personnalisé', 'Connexion au menu de caisse', 'Mises à jour via WhatsApp', 'QR menu dynamique', 'Affichage des allergènes'],
  },
  {
    name: 'PRO',
    price: '89€',
    period: '/ mois',
    blurb: 'Pour les établissements qui veulent piloter toute leur présence en ligne.',
    cta: 'Créer mon site',
    href: '/signup?plan=pro',
    popular: true,
    features: ['Tout le plan Essentiel', 'Assistant IA avancé', 'Gestion des promotions', 'Intégration réservation', 'Statistiques de visites', 'Support prioritaire'],
  },
  {
    name: 'GROUPE',
    price: 'Sur mesure',
    period: null,
    blurb: 'Pour les chaînes et multi-établissements.',
    cta: 'Nous contacter',
    href: 'mailto:contact@sous-app.fr?subject=Offre%20Groupe%20Sous',
    features: ['Gestion multi-sites', 'Charte graphique centralisée', 'API dédiée', 'Intégrations sur mesure', 'Account manager dédié'],
  },
];

function PlanCta({ plan }) {
  const className = `group mt-6 inline-flex min-h-11 items-center justify-center gap-2 px-4 py-3 text-sm font-bold uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame ${plan.popular ? 'bg-ink text-cream hover:bg-flame hover:text-ink' : 'border-2 border-ink hover:bg-ink hover:text-cream'}`;
  const content = <>{plan.cta} <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>;

  return plan.href.startsWith('/') ? (
    <Link to={plan.href} className={className}>{content}</Link>
  ) : (
    <a href={plan.href} className={className}>{content}</a>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  const uid = useId();
  const questionId = `${uid}-question`;
  const answerId = `${uid}-answer`;

  return (
    <div className="border-b border-ink/20">
      <h3>
        <button
          id={questionId}
          type="button"
          className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={answerId}
        >
          {q}
          <span aria-hidden="true" className={`text-ink/70 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>⌄</span>
        </button>
      </h3>
      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'}`}
      >
        <p className="overflow-hidden text-sm leading-relaxed text-ink/75">{a}</p>
      </div>
    </div>
  );
}

export default function FaqPricing() {
  return (
    <>
      <Section id="pricing" bg="bg-cream" stack={true}>
        <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 lg:py-14">
          <Reveal className="grid items-end gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-ink/70">Des offres lisibles</p>
              <h2 className="mt-2 max-w-xl font-display text-4xl leading-[1.05] md:text-5xl">Un site à jour. Un tarif clair.</h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-ink/75 lg:justify-self-end">
              Votre caisse alimente le menu. Sous prépare les changements. Vous gardez le dernier mot, quel que soit le plan.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <div className={`relative flex h-full flex-col rounded-lg bg-paper p-6 transition-transform duration-300 hover:-translate-y-1 ${p.popular ? 'border-2 border-ink shadow-card' : 'border border-ink/20'}`}>
                  {p.popular && <span className="absolute -top-3 left-6 bg-butter px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-ink">Recommandé</span>}
                  <p className="text-xs font-extrabold uppercase tracking-widest text-ink/70">{p.name}</p>
                  <p className="mt-3 font-display text-4xl">
                    {p.price}
                    {p.period && <span className="ml-1 font-sans text-sm font-medium text-ink/70">{p.period}</span>}
                  </p>
                  <p className="mt-2 text-sm text-ink/75">{p.blurb}</p>
                  <ul className="mt-6 flex-1 space-y-3 text-sm">
                    {p.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-ink/80">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-flame" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <PlanCta plan={p} />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={250} className="mt-10 flex justify-end">
            <div className="text-right">
              <p className="w-48 -rotate-2 font-hand text-xl font-bold leading-tight text-ink/80">Moins cher qu’une erreur sur votre carte.</p>
              <AsteriskIcon className="ml-auto mt-3 h-6 w-6 text-ink/70" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="faq" bg="bg-paper" stack={true}>
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 md:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:py-14">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-widest text-ink/70">Avant de se lancer</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Questions fréquentes</h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/75">
              La réponse courte reste la même : Sous prépare, vous décidez.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="border-t border-ink/20">
              {faqs.map((faq) => <FaqItem key={faq.q} {...faq} />)}
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
