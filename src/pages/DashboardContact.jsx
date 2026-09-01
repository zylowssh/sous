import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DashboardTopbar } from '../components/DashboardLayout';
import { Card, Field, inputCls, Button } from '../components/dashboard-ui';
import { MailIcon, PhoneIcon, MessageIcon, PinIcon, ChevronDownIcon, ArrowRightIcon } from '../components/doodles';
import { BookIcon } from '../components/dashicons';

const faqs = [
  'Comment modifier mon menu ?',
  'Comment gérer les réservations ?',
  "Comment fonctionne l'abonnement ?",
  'Comment mettre à jour mes informations ?',
  'Puis-je connecter plusieurs sites ?',
];

export default function DashboardContact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pb-16">
      <DashboardTopbar title="Contactez-nous" subtitle="Notre équipe est là pour vous aider." />

      <div className="px-6 sm:px-10">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr_0.9fr]">
          <Card title="Parlez à notre équipe">
            <div className="divide-y divide-ink/10">
              {[
                [MailIcon, 'Email', 'bonjour@sous-app.fr', 'Nous répondons sous 24h.'],
                [PhoneIcon, 'Téléphone', '01 84 80 04 10', 'Lun – Ven, 9h – 18h'],
                [MessageIcon, 'Chat en direct', 'Disponible sur notre site', 'Réponse instantanée.'],
                [PinIcon, 'Adresse', 'Sous SAS', '10 rue de Penthièvre, 75008 Paris, France'],
              ].map(([Icon, title, l1, l2]) => (
                <div key={title} className="flex items-start gap-3 py-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-flame/10"><Icon className="h-4 w-4 text-flame" /></div>
                  <div>
                    <p className="text-sm font-bold text-ink">{title}</p>
                    <p className="text-sm text-ink/70">{l1}</p>
                    <p className="text-xs text-ink/45">{l2}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Envoyez-nous un message">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <p className="font-display text-xl text-ink">Message envoyé !</p>
                <p className="mt-2 text-sm text-ink/55">Notre équipe vous répondra sous 24h.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <Field label="Sujet"><select className={inputCls}><option>Sélectionnez un sujet</option><option>Facturation</option><option>Support technique</option><option>Autre</option></select></Field>
                <Field label="Nom complet"><input placeholder="Votre nom" className={inputCls} /></Field>
                <Field label="Email"><input placeholder="votre@email.com" className={inputCls} /></Field>
                <Field label="Message"><textarea rows={4} placeholder="Décrivez votre demande..." className={inputCls} /></Field>
                <Button className="w-full justify-center" type="submit">Envoyer le message</Button>
              </form>
            )}
          </Card>

          <Card title="Questions fréquentes">
            <div className="divide-y divide-ink/10">
              {faqs.map((q) => (
                <button key={q} className="flex w-full items-center justify-between gap-2 py-3 text-left text-sm font-semibold text-ink">
                  {q} <ChevronDownIcon className="h-4 w-4 shrink-0 text-ink/40" />
                </button>
              ))}
            </div>
            <Link to="/dashboard/aide" className="mt-3 flex items-center gap-1 text-xs font-bold text-flame">Voir toutes les FAQ <ArrowRightIcon className="h-3 w-3" /></Link>
          </Card>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4 rounded-lg border border-ink/10 bg-flame/5 p-5">
          <BookIcon className="h-6 w-6 shrink-0 text-flame" />
          <div className="flex-1">
            <p className="text-sm font-extrabold text-ink">Besoin de plus d'aide ?</p>
            <p className="text-sm text-ink/60">Accédez à notre centre d'aide pour des guides détaillés, des tutoriels et des réponses à vos questions.</p>
          </div>
          <Link to="/dashboard/aide"><Button variant="outline" className="text-sm">Accéder au centre d'aide</Button></Link>
        </div>
      </div>
    </div>
  );
}
