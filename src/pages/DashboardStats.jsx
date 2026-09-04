import { useState } from 'react';
import { DashboardTopbar } from '../components/DashboardLayout';
import { Card, LineChart, BarChart, DonutChart, Sparkline, Button } from '../components/dashboard-ui';
import { GlobeIcon, CalendarIcon, ChartIcon, SparkleIcon, ArrowRightIcon } from '../components/doodles';
import { DownloadIcon } from '../components/dashicons';
import { IMG } from '../data';

const TABS = ['Aperçu', 'Visites', 'Réservations', 'Menu', 'Conversion', 'Sources', 'QR Codes'];

const kpis = [
  { icon: GlobeIcon, label: 'Visites du site', value: '2 847', delta: '+18%', values: [8, 12, 10, 16, 14, 20, 24] },
  { icon: CalendarIcon, label: 'Réservations', value: '36', delta: '+25%', values: [4, 6, 5, 8, 7, 9, 12] },
  { icon: ChartIcon, label: 'Taux de conversion', value: '3,2 %', delta: '+0,9 pt', values: [2, 2.4, 2.1, 2.8, 2.6, 3, 3.2] },
  { icon: SparkleIcon, label: 'Ventes estimées', value: '4 250 €', delta: '+22%', values: [500, 650, 600, 800, 750, 900, 1000] },
  { icon: GlobeIcon, label: 'Pages vues', value: '7 186', delta: '+15%', values: [900, 1000, 950, 1100, 1050, 1150, 1200] },
];

const sources = [
  { label: 'Recherche Google', value: 42, color: '#E4572E' },
  { label: 'Direct', value: 28, color: '#F2C879' },
  { label: 'Instagram', value: 15, color: '#D6336C' },
  { label: 'Réseaux sociaux', value: 8, color: '#6B5CA5' },
  { label: 'Autres', value: 7, color: '#CFCAAD' },
];

const devices = [
  { label: 'Mobile', value: 63, color: '#E4572E' },
  { label: 'Desktop', value: 31, color: '#171310' },
  { label: 'Tablette', value: 6, color: '#CFCAAD' },
];

const topDishes = [
  ['Tagliatelle al Ragù', '487 vues', IMG.pasta],
  ['Burrata & tomates', '356 vues', IMG.italiana],
  ['Pizza Diavola', '312 vues', IMG.italiana],
  ['Tiramisu maison', '298 vues', IMG.pasta],
  ['Gnocchi al pesto', '276 vues', IMG.pasta],
];

export default function DashboardStats() {
  const [tab, setTab] = useState('Aperçu');

  return (
    <div className="pb-16">
      <DashboardTopbar
        title="Statistiques"
        subtitle="Suivez les performances de votre restaurant en ligne."
        actions={
          <>
            <select aria-label="Période analysée" className="hidden rounded-sm border border-ink/15 bg-paper px-3 py-2.5 text-sm font-semibold sm:block"><option>1 – 7 mai 2024</option></select>
            <select aria-label="Période de comparaison" className="hidden rounded-sm border border-ink/15 bg-paper px-3 py-2.5 text-sm font-semibold lg:block"><option>Comparé à 24 – 30 avr.</option></select>
            <Button variant="outline" className="text-sm"><DownloadIcon className="h-4 w-4" /> Exporter le rapport</Button>
          </>
        }
      />

      <div className="px-6 sm:px-10">
        <div className="flex flex-wrap gap-6 border-b border-ink/10">
          {TABS.map((t) => (
            <button type="button" key={t} onClick={() => setTab(t)} className={`relative pb-3 text-sm font-semibold ${tab === t ? 'text-flame' : 'text-ink/55'}`}>
              {t}
              {tab === t && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-flame" />}
            </button>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-5">
          {kpis.map((k) => (
            <Card key={k.label}>
              <p className="flex items-center gap-1.5 text-xs font-bold text-ink/50"><k.icon className="h-3.5 w-3.5 text-flame" /> {k.label}</p>
              <div className="mt-2 flex items-baseline gap-2">
                <p className="font-display text-2xl text-ink">{k.value}</p>
                <span className="text-xs font-bold text-green-600">{k.delta}</span>
              </div>
              <div className="mt-2 h-8"><Sparkline values={k.values} height={32} /></div>
            </Card>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_1fr_1fr]">
          <Card title="Visites du site" action={<span className="text-xs font-semibold text-ink/50">7 derniers jours ▾</span>}>
            <p className="mb-3 flex items-baseline gap-2"><span className="font-display text-2xl text-ink">2 847</span><span className="text-xs font-bold text-green-600">+18%</span></p>
            <LineChart values={[900, 1400, 1100, 1600, 1300, 1900, 1250]} labels={['1 mai', '2 mai', '3 mai', '4 mai', '5 mai', '6 mai', '7 mai']} />
          </Card>

          <Card title="D'où viennent vos visiteurs ?">
            <div className="flex items-center gap-5">
              <DonutChart segments={sources} size={120} thickness={16} />
              <div className="space-y-1.5 text-xs">
                {sources.map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
                    <span className="flex-1 text-ink/60">{s.label}</span>
                    <span className="font-bold text-ink">{s.value}%</span>
                  </div>
                ))}
              </div>
            </div>
            <button type="button" className="mt-3 flex items-center gap-1 text-xs font-bold text-flame">Voir le détail <ArrowRightIcon className="h-3 w-3" /></button>
          </Card>

          <Card title="Appareils">
            <div className="flex items-center gap-5">
              <DonutChart segments={devices} size={120} thickness={16} />
              <div className="space-y-1.5 text-xs">
                {devices.map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
                    <span className="flex-1 text-ink/60">{s.label}</span>
                    <span className="font-bold text-ink">{s.value}%</span>
                  </div>
                ))}
              </div>
            </div>
            <button type="button" className="mt-3 flex items-center gap-1 text-xs font-bold text-flame">Voir le détail <ArrowRightIcon className="h-3 w-3" /></button>
          </Card>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr_1fr]">
          <Card title="Plats les plus consultés">
            <div className="space-y-3">
              {topDishes.map(([name, views, img], i) => (
                <div key={name} className="flex items-center gap-3">
                  <span className="w-4 text-sm font-bold text-ink/40">{i + 1}</span>
                  <img src={img} alt="" className="h-8 w-8 rounded-sm object-cover"  decoding="async" loading="lazy" />
                  <span className="flex-1 text-sm font-semibold text-ink">{name}</span>
                  <span className="text-xs text-ink/45">{views}</span>
                </div>
              ))}
            </div>
            <button type="button" className="mt-3 flex items-center gap-1 text-xs font-bold text-flame">Voir tous les plats <ArrowRightIcon className="h-3 w-3" /></button>
          </Card>

          <Card title="Réservations par jour" action={<button type="button" className="flex items-center gap-1 text-xs font-bold text-flame">Voir le détail <ArrowRightIcon className="h-3 w-3" /></button>}>
            <BarChart values={[3, 5, 7, 4, 12, 3, 2]} labels={['1 mai', '2 mai', '3 mai', '4 mai', '5 mai', '6 mai', '7 mai']} />
          </Card>

          <Card title="Taux de conversion" action={<button type="button" className="flex items-center gap-1 text-xs font-bold text-flame">Voir le détail <ArrowRightIcon className="h-3 w-3" /></button>}>
            <p className="text-xs text-ink/50">Visites → Réservations</p>
            <p className="mt-1 flex items-baseline gap-2"><span className="font-display text-2xl text-ink">3,2 %</span><span className="text-xs font-bold text-green-600">+0,9 pt</span></p>
            <p className="text-xs text-ink/40">vs 24 – 30 avr.</p>
            <div className="mt-3"><LineChart values={[2, 2.6, 2.3, 3, 2.8, 3.4, 3.2]} labels={['1 mai', '2 mai', '3 mai', '4 mai', '5 mai', '6 mai', '7 mai']} height={140} /></div>
          </Card>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4 rounded-lg border border-ink/10 bg-flame/5 p-5">
          <SparkleIcon className="h-6 w-6 shrink-0 text-flame" />
          <div className="flex-1">
            <p className="text-sm font-extrabold text-ink">Insight de Sous</p>
            <p className="text-sm text-ink/60">Les visites depuis Instagram ont augmenté de 32% cette semaine. Publiez plus de stories avec le lien de réservation pour booster vos réservations.</p>
          </div>
          <Button className="text-sm">Demander à Sous <ArrowRightIcon className="h-4 w-4" /></Button>
        </div>
      </div>
    </div>
  );
}
