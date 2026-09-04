import { useState } from 'react';
import { DashboardTopbar } from '../components/DashboardLayout';
import { Card, Field, inputCls, Toggle, Button } from '../components/dashboard-ui';
import { WrenchIcon, UserCircleIcon } from '../components/dashicons';
import usePersistentState from '../hooks/usePersistentState';
import { ChartIcon, MailIcon } from '../components/doodles';

const TABS = ['Général', 'Établissement', 'Réservations', 'Notifications', 'Utilisateurs', 'Facturation', 'Sécurité'];

export default function DashboardSettings() {
  const [tab, setTab] = useState('Général');
  const [prefs, setPrefs] = usePersistentState('settings-preferences', { maintenance: false, avis: true, marketing: true, analytics: false });

  const setPref = (k) => (v) => setPrefs((p) => ({ ...p, [k]: v }));

  return (
    <div className="pb-16">
      <DashboardTopbar title="Paramètres" subtitle="Gérez les paramètres de votre compte et de votre établissement." />

      <div className="px-6 sm:px-10">
        <div className="flex flex-wrap gap-6 border-b border-ink/10">
          {TABS.map((t) => (
            <button type="button" key={t} onClick={() => setTab(t)} className={`relative pb-3 text-sm font-semibold ${tab === t ? 'text-flame' : 'text-ink/55'}`}>
              {t}
              {tab === t && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-flame" />}
            </button>
          ))}
        </div>

        {tab === 'Général' && (
          <div className="mt-6 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
            <Card title="Informations générales">
              <div className="space-y-4">
                <Field label="Nom de l'établissement"><input defaultValue="Mamma Rosa" className={inputCls} /></Field>
                <Field label="Type de cuisine"><select className={inputCls}><option>Italienne</option></select></Field>
                <Field label="Fuseau horaire"><select className={inputCls}><option>(UTC+01:00) Paris</option></select></Field>
                <Field label="Langue"><select className={inputCls}><option>Français</option></select></Field>
                <Field label="Devise"><select className={inputCls}><option>Euro (€)</option></select></Field>
                <Button>Enregistrer</Button>
              </div>
            </Card>

            <div className="space-y-5">
              <Card title="Préférences">
                <div className="divide-y divide-ink/10">
                  <Toggle icon={WrenchIcon} iconBg="bg-orange-100" iconColor="text-orange-500" checked={prefs.maintenance} onChange={setPref('maintenance')} label="Mode maintenance" desc="Activer le mode maintenance de votre site." />
                  <Toggle icon={UserCircleIcon} iconBg="bg-blue-100" iconColor="text-blue-500" checked={prefs.avis} onChange={setPref('avis')} label="Avis clients" desc="Autoriser les clients à laisser un avis." />
                  <Toggle icon={MailIcon} iconBg="bg-pink-100" iconColor="text-pink-500" checked={prefs.marketing} onChange={setPref('marketing')} label="Marketing par email" desc="Recevoir des conseils et nouveautés." />
                  <Toggle icon={ChartIcon} iconBg="bg-purple-100" iconColor="text-purple-500" checked={prefs.analytics} onChange={setPref('analytics')} label="Analytics anonymes" desc="Aidez-nous à améliorer Sous." />
                </div>
              </Card>

              <Card title="Supprimer le compte">
                <p className="text-sm text-ink/55">Cette action est irréversible.</p>
                <Button variant="danger" className="mt-4 w-full justify-center">Supprimer mon compte</Button>
              </Card>
            </div>
          </div>
        )}

        {tab === 'Établissement' && (
          <Card title="Établissement" className="mt-6 max-w-2xl">
            <div className="space-y-4">
              <Field label="Adresse"><input defaultValue="23 Rue de la Paix, 75002 Paris" className={inputCls} /></Field>
              <Field label="Téléphone"><input defaultValue="01 84 80 04 10" className={inputCls} /></Field>
              <Field label="Email de contact"><input defaultValue="contact@mammarosa.fr" className={inputCls} /></Field>
              <Field label="Horaires d'ouverture"><textarea rows={3} defaultValue={'Mar – Dim : 12h – 22h\nLun : Fermé'} className={inputCls} /></Field>
              <Button>Enregistrer</Button>
            </div>
          </Card>
        )}

        {tab === 'Réservations' && (
          <Card title="Réservations" className="mt-6 max-w-2xl">
            <div className="divide-y divide-ink/10">
              <Toggle checked={true} onChange={() => {}} label="Réservations en ligne" desc="Autoriser les clients à réserver depuis votre site." />
              <Toggle checked={true} onChange={() => {}} label="Confirmation automatique" desc="Confirmer les réservations sans validation manuelle." />
              <Toggle checked={false} onChange={() => {}} label="Liste d'attente" desc="Proposer une liste d'attente aux heures de forte affluence." />
            </div>
          </Card>
        )}

        {tab === 'Notifications' && (
          <Card title="Notifications" className="mt-6 max-w-2xl">
            <div className="divide-y divide-ink/10">
              <Toggle checked={true} onChange={() => {}} label="Nouvelle réservation" desc="Recevoir une notification pour chaque réservation." />
              <Toggle checked={true} onChange={() => {}} label="Menu synchronisé" desc="Être notifié quand le menu est mis à jour depuis le POS." />
              <Toggle checked={false} onChange={() => {}} label="Résumé hebdomadaire" desc="Recevoir un résumé de vos performances chaque semaine." />
            </div>
          </Card>
        )}

        {tab === 'Utilisateurs' && (
          <Card title="Utilisateurs" className="mt-6 max-w-2xl">
            <div className="divide-y divide-ink/10">
              {[['Marco Rossi', 'marco@mammarosa.fr', 'Propriétaire'], ['Nona Rosa', 'nona@mammarosa.fr', 'Manager']].map(([n, e, r]) => (
                <div key={n} className="flex items-center justify-between py-3">
                  <div><p className="text-sm font-bold text-ink">{n}</p><p className="text-xs text-ink/45">{e}</p></div>
                  <span className="rounded-full bg-ink/8 px-3 py-1 text-xs font-bold text-ink/60">{r}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-4 w-full justify-center">+ Inviter un membre</Button>
          </Card>
        )}

        {tab === 'Facturation' && (
          <Card title="Facturation" className="mt-6 max-w-2xl">
            <div className="flex items-center justify-between rounded-md border border-ink/10 p-4">
              <div><p className="text-sm font-bold text-ink">Plan Pro</p><p className="text-xs text-ink/50">89€ / mois , prochain paiement le 1 juin 2024</p></div>
              <Button variant="outline">Changer d'offre</Button>
            </div>
          </Card>
        )}

        {tab === 'Sécurité' && (
          <Card title="Sécurité" className="mt-6 max-w-2xl">
            <div className="space-y-4">
              <Field label="Mot de passe actuel"><input type="password" className={inputCls} /></Field>
              <Field label="Nouveau mot de passe"><input type="password" className={inputCls} /></Field>
              <Button>Mettre à jour le mot de passe</Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
