import { useState } from 'react';
import Reveal from './Reveal';
import Section from './Section';
import { ArrowRightIcon, CheckIcon, MessageIcon, AsteriskIcon } from './doodles';
import { goToSection } from './fx';

const faqs = [
  { 
    q: 'Comment fonctionne la mise à jour du site ?', 
    a: 'Vous envoyez simplement un message (texte ou vocal) à Sous via WhatsApp. Nous générons une proposition de mise à jour que vous validez en un clic avant publication.' 
  },
  { 
    q: 'Le site est-il synchronisé avec ma caisse ?', 
    a: 'Oui. Sous se connecte à votre logiciel de caisse (L\'Addition, Zelty, Lightspeed) pour utiliser votre menu comme source de vérité. Plus de décalage entre votre salle et votre site.' 
  },
  { 
    q: 'Est-ce conforme aux réglementations françaises ?', 
    a: 'Absolument. Sous garantit l\'affichage obligatoire des 14 allergènes majeurs, l\'origine des viandes et les prix TTC, avec une validation humaine pour chaque modification sensible.' 
  },
  { 
    q: 'Puis-je utiliser mon propre nom de domaine ?', 
    a: 'Oui, vous pouvez connecter un domaine existant ou en choisir un nouveau. Nous gérons toute la configuration technique.' 
  },
  { 
    q: 'Que se passe-t-il si je fais une erreur dans un message ?', 
    a: 'Rien n\'est jamais publié automatiquement sans votre accord. Sous vous présente toujours un brouillon à valider, éliminant tout risque d\'erreur sur votre site public.' 
  },
];

const plans = [
  { 
    name: 'ESSENTIEL', 
    price: '49€', 
    blurb: 'Pour les restaurants indépendants qui veulent un site toujours à jour.', 
    cta: 'Commencer',
    features: ['Site web personnalisé', 'Synchronisation menu (POS)', 'Mises à jour via WhatsApp', 'QR Code table dynamique', 'Conformité allergènes'] 
  },
  { 
    name: 'PRO', 
    price: '89€', 
    blurb: 'Pour les établissements qui veulent automatiser leur présence en ligne.', 
    cta: 'Créer mon site', 
    popular: true,
    features: ['Tout le plan Essentiel', 'Assistant IA avancé', 'Gestion des promotions', 'Intégration réservation', 'Statistiques de visites', 'Support prioritaire'] 
  },
  { 
    name: 'GROUPE', 
    price: 'Sur mesure', 
    blurb: 'Pour les chaînes et multi-établissements.', 
    cta: 'Nous contacter',
    features: ['Gestion multi-sites', 'Charte graphique centralisée', 'API dédiée', 'Intégrations sur mesure', 'Account manager dédié'] 
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink/20">
      <button className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold" onClick={() => setOpen(!open)} aria-expanded={open}>
        {q}
        <span className={`text-ink/50 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>⌄</span>
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'}`}>
        <p className="overflow-hidden text-sm leading-relaxed text-ink/70">{a}</p>
      </div>
    </div>
  );
}

export default function FaqPricing() {
  return (
    <Section id="pricing" bg="bg-cream" stack={true}>
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-4 py-16 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-12">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl">Questions fréquentes</h2>
          <div className="mt-6 border-t border-ink/20">
            {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
          </div>
          <div className="mt-6 flex items-end justify-between">
            <a href="#top" onClick={(e) => { e.preventDefault(); goToSection('top'); }} className="group inline-flex items-center gap-2 text-sm font-semibold underline decoration-2 underline-offset-4">
              Contacter l'équipe <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <MessageIcon className="h-10 w-10 text-ink/40" />
          </div>
        </Reveal>

        <div>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <div className={`relative flex h-full flex-col rounded-lg bg-paper p-6 transition-transform duration-300 hover:-translate-y-1 ${p.popular ? 'border-2 border-ink shadow-card' : 'border border-ink/20'}`}>
                  {p.popular && <span className="absolute -top-3 left-6 bg-butter px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest">Recommandé</span>}
                  <p className="text-xs font-extrabold uppercase tracking-widest text-ink/60">{p.name}</p>
                  <p className="mt-3 font-display text-4xl">{p.price}<span className="font-sans text-sm font-medium text-ink/50"> / mois</span></p>
                  <p className="mt-2 text-sm text-ink/70">{p.blurb}</p>
                  <ul className="mt-6 flex-1 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-ink/80">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-flame" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#top" onClick={(e) => { e.preventDefault(); goToSection('top'); }} className={`group mt-6 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${p.popular ? 'bg-ink text-cream hover:bg-flame' : 'border-2 border-ink hover:bg-ink hover:text-cream'}`}>
                    {p.cta} <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={250} className="mt-10 flex justify-end">
            <div className="text-right">
              <p className="w-48 -rotate-2 font-hand text-xl font-bold leading-tight text-ink/80">Moins cher qu'une erreur sur votre carte.</p>
              <AsteriskIcon className="ml-auto mt-3 h-6 w-6 text-ink/40" />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
