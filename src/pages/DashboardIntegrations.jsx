import { useState } from 'react';
import { DashboardTopbar } from '../components/DashboardLayout';
import { Button } from '../components/dashboard-ui';
import { LightbulbIcon } from '../components/dashicons';
import usePersistentState from '../hooks/usePersistentState';

const CATS = ['Toutes', 'Réservations', 'Marketing', 'Communication', 'Paiement', 'Comptabilité', 'Autres'];

const integrations = [
  { name: 'Google Analytics 4', desc: 'Suivez le trafic et le comportement de vos visiteurs.', color: 'bg-orange-100 text-orange-600', letter: '📊', connected: true },
  { name: 'Google Tag Manager', desc: 'Gérez vos balises et scripts facilement.', color: 'bg-blue-100 text-blue-600', letter: '🏷️', connected: true },
  { name: 'Mailchimp', desc: 'Envoyez des campagnes email à vos clients.', color: 'bg-amber-100 text-amber-600', letter: '🐵', connected: true },
  { name: 'TheFork (Tripadvisor)', desc: 'Synchronisez vos réservations avec TheFork.', color: 'bg-green-100 text-green-600', letter: '🍴', connected: true },
  { name: 'Stripe', desc: 'Acceptez les paiements en ligne en toute sécurité.', color: 'bg-indigo-100 text-indigo-600', letter: 'S', connected: true },
  { name: 'Zapier', desc: "Automatisez vos tâches avec des milliers d'apps.", color: 'bg-orange-100 text-orange-600', letter: '⚡', connected: false },
];

export default function DashboardIntegrations() {
  const [cat, setCat] = useState('Toutes');
  const [state, setState] = usePersistentState('integrations', () => Object.fromEntries(integrations.map((i) => [i.name, i.connected])));

  return (
    <div className="pb-16">
      <DashboardTopbar title="Intégrations" subtitle="Connectez Sous avec vos outils préférés." />

      <div className="px-6 sm:px-10">
        <div className="flex flex-wrap gap-6 border-b border-ink/10">
          {CATS.map((c) => (
            <button type="button" key={c} onClick={() => setCat(c)} className={`relative pb-3 text-sm font-semibold ${cat === c ? 'text-flame' : 'text-ink/55'}`}>
              {c}
              {cat === c && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-flame" />}
            </button>
          ))}
        </div>

        <div className="mt-5 divide-y divide-ink/10 rounded-lg border border-ink/10 bg-paper">
          {integrations.map((i) => (
            <div key={i.name} className="flex flex-wrap items-center gap-4 p-5">
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-lg ${i.color}`}>{i.letter}</div>
              <div className="min-w-[180px] flex-1">
                <p className="text-sm font-bold text-ink">{i.name}</p>
                <p className="text-xs text-ink/50">{i.desc}</p>
              </div>
              <span className={`rounded-full px-3 py-1.5 text-xs font-bold ${state[i.name] ? 'bg-green-100 text-green-700' : 'bg-ink/8 text-ink/50'}`}>
                {state[i.name] ? '✓ Connecté' : 'Déconnecté'}
              </span>
              <Button
                variant={state[i.name] ? 'outline' : 'primary'}
                className="text-xs"
                onClick={() => setState((s) => ({ ...s, [i.name]: !s[i.name] }))}
              >
                {state[i.name] ? 'Configurer' : 'Connecter'}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4 rounded-lg border border-ink/10 bg-flame/5 p-5">
          <LightbulbIcon className="h-6 w-6 shrink-0 text-flame" />
          <div className="flex-1">
            <p className="text-sm font-extrabold text-ink">Vous ne trouvez pas une intégration ?</p>
            <p className="text-sm text-ink/60">Dites-nous l'outil que vous utilisez, nous pourrions peut-être l'ajouter.</p>
          </div>
          <Button variant="outline" className="text-sm">Faire une suggestion</Button>
        </div>
      </div>
    </div>
  );
}
