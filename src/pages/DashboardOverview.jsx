import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DashboardTopbar } from '../components/DashboardLayout';
import { Card, Button, Sparkline } from '../components/dashboard-ui';
import { GlobeIcon, CalendarIcon, ChartIcon, SparkleIcon, ArrowRightIcon } from '../components/doodles';
import { UtensilsIcon } from '../components/dashicons';
import { IMG } from '../data';

const activities = [
  { icon: UtensilsIcon, iconBg: 'bg-flame/10', iconColor: 'text-flame', title: 'Nouveau plat ajouté', desc: 'Tagliatelle au Ragù', time: '10:31' },
  { icon: CalendarIcon, iconBg: 'bg-blue-500/10', iconColor: 'text-blue-600', title: 'Réservation reçue', desc: 'Vendredi 3 mai, 20:00 pour 4 pers.', time: '10:21' },
  { icon: SparkleIcon, iconBg: 'bg-flame/10', iconColor: 'text-flame', title: 'Menu synchronisé', desc: 'Depuis Lightspeed POS', time: 'Hier, 16:42' },
  { icon: GlobeIcon, iconBg: 'bg-flame/10', iconColor: 'text-flame', title: 'Site mis à jour', desc: 'Section À propos', time: '2 mai, 18:31' },
];

const agenda = [
  { time: '11:30', desc: '2 pers. — Déjeuner', status: 'Confirmée' },
  { time: '13:00', desc: '4 pers. — Déjeuner', status: 'Confirmée' },
  { time: '20:00', desc: '4 pers. — Dîner', status: 'En attente' },
];

const integrations = [
  { name: 'Lightspeed POS', status: 'Connecté', tone: 'green' },
  { name: 'Google Business', status: 'Connecté', tone: 'green' },
  { name: 'Instagram', status: 'Reconnexion requise', tone: 'yellow' },
  { name: 'WhatsApp', status: 'Connecté', tone: 'green' },
];

const perfMetrics = [
  { label: 'Visites du site', value: '2 847', delta: '+18%', values: [12, 18, 14, 22, 19, 26, 28] },
  { label: 'Réservations', value: '36', delta: '+25%', values: [4, 6, 5, 8, 7, 9, 12] },
  { label: 'Taux de conversion', value: '3,2 %', delta: '+0,9%', values: [2, 2.4, 2.1, 2.8, 2.6, 3, 3.2] },
  { label: 'Ventes estimées', value: '4 250 €', delta: '+22%', values: [500, 650, 600, 800, 750, 900, 1000] },
];

export default function DashboardOverview() {
  const [range, setRange] = useState('7');
  const [request, setRequest] = useState('');

  return (
    <div className="pb-16">
      <DashboardTopbar
        title="Bonjour Marco \u{1F44B}"
        subtitle="Voici ce qui se passe aujourd\u2019hui chez Mamma Rosa."
        actions={<a href="#" className="hidden items-center gap-2 rounded-sm border border-ink/15 bg-paper px-4 py-2.5 text-sm font-semibold text-ink sm:inline-flex">Voir le site <ArrowRightIcon className="h-4 w-4" /></a>}
      />

      <div className="grid grid-cols-1 gap-5 px-6 sm:px-10 lg:grid-cols-4">
        <Card>
          <p className="flex items-center gap-2 text-sm font-bold text-ink"><GlobeIcon className="h-4 w-4 text-green-600" /> Site en ligne</p>
          <p className="mt-0.5 text-xs text-green-600">Tout est à jour</p>
          <img src={IMG.interior} alt="" className="mt-3 aspect-video w-full rounded-md object-cover" />
          <Link to="/dashboard/site" className="mt-3 flex items-center justify-center gap-2 rounded-sm border border-ink/15 py-2.5 text-xs font-bold text-ink hover:border-ink">Voir le site <ArrowRightIcon className="h-3.5 w-3.5" /></Link>
        </Card>
        <Card>
          <p className="flex items-center gap-2 text-sm font-bold text-ink"><CalendarIcon className="h-4 w-4 text-flame" /> Réservations aujourd'hui</p>
          <p className="mt-3 font-display text-3xl text-ink">12</p>
          <p className="text-xs text-green-600">+20% vs hier</p>
          <Link to="/dashboard/reservations" className="mt-8 flex items-center justify-center gap-2 rounded-sm border border-ink/15 py-2.5 text-xs font-bold text-ink hover:border-ink">Voir les réservations <ArrowRightIcon className="h-3.5 w-3.5" /></Link>
        </Card>
        <Card>
          <p className="flex items-center gap-2 text-sm font-bold text-ink"><UtensilsIcon className="h-4 w-4 text-flame" /> Menu synchronisé</p>
          <p className="mt-3 font-display text-2xl text-ink">À jour</p>
          <p className="text-xs text-ink/45">Dernière sync : 10:42</p>
          <Link to="/dashboard/menu" className="mt-8 flex items-center justify-center gap-2 rounded-sm border border-ink/15 py-2.5 text-xs font-bold text-ink hover:border-ink">Voir le menu <ArrowRightIcon className="h-3.5 w-3.5" /></Link>
        </Card>
        <Card>
          <p className="flex items-center gap-2 text-sm font-bold text-ink"><ChartIcon className="h-4 w-4 text-flame" /> Visites aujourd'hui</p>
          <div className="mt-2 flex items-end justify-between">
            <div>
              <p className="font-display text-3xl text-ink">2 847</p>
              <p className="text-xs text-green-600">+18%</p>
            </div>
            <div className="w-16"><Sparkline values={[8, 12, 10, 16, 14, 20, 24]} /></div>
          </div>
          <Link to="/dashboard/statistiques" className="mt-5 flex items-center justify-center gap-2 rounded-sm border border-ink/15 py-2.5 text-xs font-bold text-ink hover:border-ink">Voir les stats <ArrowRightIcon className="h-3.5 w-3.5" /></Link>
        </Card>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 px-6 sm:px-10 lg:grid-cols-3">
        <Card title="Dernières activités" action={<Link to="/dashboard/statistiques" className="flex items-center gap-1 text-xs font-bold text-ink/60 hover:text-flame">Voir tout <ArrowRightIcon className="h-3 w-3" /></Link>}>
          <div className="space-y-1">
            {activities.map((a) => (
              <div key={a.title} className="flex items-center gap-3 py-2">
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${a.iconBg}`}>
                  <a.icon className={`h-4 w-4 ${a.iconColor}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">{a.title}</p>
                  <p className="truncate text-xs text-ink/50">{a.desc}</p>
                </div>
                <span className="shrink-0 text-xs text-ink/35">{a.time}</span>
              </div>
            ))}
          </div>
        </Card>

        <div className="rounded-lg border border-ink/10 bg-flame/5 p-6">
          <p className="flex items-center gap-1.5 text-sm font-extrabold text-ink"><SparkleIcon className="h-4 w-4 text-flame" /> Demandez à Sous</p>
          <div className="mt-4 min-h-[88px] rounded-md border border-dashed border-ink/15 bg-paper/60 p-3 text-sm text-ink/40">
            Décrivez ce que vous souhaitez (ajouter un plat, modifier un prix, publier le menu du brunch...)
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {['Ajouter un plat au menu', 'Publier le menu du brunch', 'Modifier les horaires', 'Mettre à jour le site'].map((s) => (
              <button key={s} onClick={() => setRequest(s)} className="rounded-full border border-ink/15 bg-paper px-3 py-1.5 text-xs font-semibold text-ink hover:border-flame hover:text-flame">{s}</button>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-sm border border-ink/15 bg-paper px-3 py-2.5">
            <input value={request} onChange={(e) => setRequest(e.target.value)} placeholder="Écrivez votre demande..." className="flex-1 bg-transparent text-sm text-ink placeholder:text-ink/35 focus:outline-none" />
            <Link to="/dashboard/ai" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-flame text-cream"><ArrowRightIcon className="h-4 w-4" /></Link>
          </div>
        </div>

        <div className="space-y-5">
          <Card title="Agenda du jour">
            <div className="space-y-3">
              {agenda.map((a) => (
                <div key={a.time} className="flex items-center justify-between text-sm">
                  <span className="w-12 font-bold text-ink">{a.time}</span>
                  <span className="flex-1 text-ink/60">{a.desc}</span>
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${a.status === 'Confirmée' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{a.status}</span>
                </div>
              ))}
            </div>
            <Link to="/dashboard/reservations" className="mt-4 flex items-center gap-1 text-xs font-bold text-flame">Voir toutes les réservations <ArrowRightIcon className="h-3 w-3" /></Link>
          </Card>

          <Card title="État des intégrations" action={<Link to="/dashboard/integrations" className="flex items-center gap-1 text-xs font-bold text-ink/60 hover:text-flame">Voir tout <ArrowRightIcon className="h-3 w-3" /></Link>}>
            <div className="space-y-3">
              {integrations.map((i) => (
                <div key={i.name} className="flex items-center justify-between text-sm">
                  <span className="text-ink/70">{i.name}</span>
                  <span className={`flex items-center gap-1 text-xs font-bold ${i.tone === 'green' ? 'text-green-600' : 'text-amber-600'}`}>
                    {i.tone === 'green' ? '✓' : '⚠'} {i.status}
                  </span>
                </div>
              ))}
            </div>
            <Link to="/dashboard/integrations" className="mt-4 flex items-center gap-1 text-xs font-bold text-flame">Gérer les intégrations <ArrowRightIcon className="h-3 w-3" /></Link>
          </Card>
        </div>
      </div>

      <div className="mt-5 px-6 sm:px-10">
        <Card
          title="Aperçu des performances"
          action={
            <div className="flex gap-1 rounded-sm border border-ink/15 p-1">
              {[['7', '7 jours'], ['30', '30 jours'], ['90', '90 jours']].map(([v, l]) => (
                <button key={v} onClick={() => setRange(v)} className={`rounded-sm px-3 py-1.5 text-xs font-bold ${range === v ? 'bg-flame text-cream' : 'text-ink/50'}`}>{l}</button>
              ))}
            </div>
          }
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perfMetrics.map((m) => (
              <div key={m.label}>
                <p className="text-xs font-semibold text-ink/50">{m.label}</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <p className="font-display text-2xl text-ink">{m.value}</p>
                  <span className="text-xs font-bold text-green-600">{m.delta}</span>
                </div>
                <div className="mt-2 h-12"><Sparkline values={m.values} height={48} /></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
