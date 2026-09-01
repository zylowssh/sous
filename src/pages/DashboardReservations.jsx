import { useState } from 'react';
import { DashboardTopbar } from '../components/DashboardLayout';
import { Button, Badge } from '../components/dashboard-ui';
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, ChevronDownIcon, CheckIcon } from '../components/doodles';
import { PhoneIcon, MailIcon } from '../components/doodles';
import { PlusIcon, XIcon, MoreHIcon, GearIcon } from '../components/dashicons';
import { MessageIcon } from '../components/doodles';

const DAY_START = 11 * 60;
const DAY_END = 22 * 60;
const toMin = (t) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
const pct = (min) => `${((min - DAY_START) / (DAY_END - DAY_START)) * 100}%`;

const tables = [
  { zone: 'Salle principale', name: 'Table 1', cap: 2, res: [{ start: '12:00', end: '14:00', size: 2, status: 'confirmed' }, { start: '19:00', end: '21:00', size: 2, status: 'pending' }] },
  { zone: 'Salle principale', name: 'Table 2', cap: 2, res: [{ start: '13:00', end: '14:30', size: 2, status: 'confirmed' }, { start: '20:30', end: '22:00', size: 2, status: 'confirmed' }] },
  { zone: 'Salle principale', name: 'Table 3', cap: 4, res: [{ start: '12:30', end: '14:30', size: 4, status: 'confirmed' }, { start: '19:30', end: '21:30', size: 4, status: 'selected', name: 'Claire Martin' }] },
  { zone: 'Salle principale', name: 'Table 4', cap: 4, res: [{ start: '13:00', end: '15:00', size: 4, status: 'confirmed' }, { start: '20:00', end: '22:00', size: 4, status: 'confirmed' }] },
  { zone: 'Salle principale', name: 'Table 5', cap: 4, res: [{ start: '12:00', end: '14:00', size: 4, status: 'plain' }] },
  { zone: 'Salle principale', name: 'Table 6', cap: 6, res: [{ start: '19:00', end: '21:30', size: 6, status: 'plain' }] },
  { zone: 'Salle principale', name: 'Table 7', cap: 6, res: [{ start: '18:30', end: '21:00', size: 6, status: 'confirmed' }] },
  { zone: 'Salle principale', name: 'Table 8', cap: 8, res: [{ start: '19:30', end: '22:30', size: 8, status: 'plain' }] },
  { zone: 'Terrasse', name: 'Table 9', cap: 2, res: [{ start: '11:30', end: '13:30', size: 2, status: 'confirmed' }, { start: '17:00', end: '19:00', size: 2, status: 'confirmed' }] },
  { zone: 'Terrasse', name: 'Table 10', cap: 4, res: [{ start: '13:00', end: '15:00', size: 4, status: 'plain' }, { start: '20:00', end: '22:00', size: 4, status: 'plain' }] },
];

const dayList = [
  { time: '19:30', name: 'Claire Martin', phone: '06 12 34 56 78', size: 4, tag: 'Anniversaire', status: 'Confirmée' },
  { time: '20:00', name: 'Thomas Durand', phone: '06 98 76 54 32', size: 2, tag: null, status: 'Confirmée' },
  { time: '20:30', name: 'Sophie Leroy', phone: '06 45 67 89 01', size: 2, tag: 'Terrasse', status: 'Confirmée' },
];

const hours = Array.from({ length: 12 }, (_, i) => 11 + i);

function ResBlock({ r, onClick }) {
  const tone = r.status === 'selected' ? 'border-flame bg-flame/10' : r.status === 'confirmed' ? 'border-green-300 bg-green-50' : r.status === 'pending' ? 'border-red-300 bg-red-50' : 'border-ink/15 bg-cream';
  return (
    <button
      onClick={onClick}
      style={{ left: pct(toMin(r.start)), width: `calc(${pct(toMin(r.end))} - ${pct(toMin(r.start))})` }}
      className={`absolute top-1 bottom-1 rounded-sm border px-2 py-1 text-left text-[11px] ${tone}`}
    >
      <p className="font-bold text-ink">{r.start} – {r.end} {r.status === 'confirmed' && <CheckIcon className="ml-0.5 inline h-3 w-3 text-green-600" />}</p>
      <p className="text-ink/50">{r.size} pers.</p>
    </button>
  );
}

export default function DashboardReservations() {
  const [view, setView] = useState('Jour');
  const [selected, setSelected] = useState({ name: 'Claire Martin', phone: '06 12 34 56 78', size: 4, start: '19:30', end: '21:30', table: 'Table 3 — Salle principale', tag: 'Anniversaire', notes: 'Sans gluten. Préfère une table au calme si possible.' });

  return (
    <div className="pb-16">
      <DashboardTopbar title="Réservations" subtitle="Gérez vos réservations et votre salle." />

      <div className="px-6 sm:px-10">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" className="text-xs">Aujourd'hui</Button>
          <div className="flex items-center gap-1">
            <button className="rounded-sm border border-ink/15 p-2 text-ink/50 hover:border-ink"><ArrowLeftIcon className="h-4 w-4" /></button>
            <button className="rounded-sm border border-ink/15 p-2 text-ink/50 hover:border-ink"><ArrowRightIcon className="h-4 w-4" /></button>
          </div>
          <button className="flex items-center gap-2 rounded-sm border border-ink/15 px-3 py-2 text-sm font-semibold text-ink"><CalendarIcon className="h-4 w-4" /> 3 mai 2024 <ChevronDownIcon className="h-4 w-4" /></button>
          <div className="flex gap-1 rounded-sm border border-ink/15 p-1">
            {['Jour', 'Semaine', 'Mois'].map((v) => (
              <button key={v} onClick={() => setView(v)} className={`rounded-sm px-3 py-1.5 text-xs font-bold ${view === v ? 'bg-flame/10 text-flame' : 'text-ink/50'}`}>{v}</button>
            ))}
          </div>
          <button className="flex items-center gap-2 rounded-sm border border-ink/15 px-3 py-2 text-sm font-semibold text-ink"><GearIcon className="h-4 w-4" /> Paramètres</button>
          <Button className="ml-auto text-sm"><PlusIcon className="h-4 w-4" /> Nouvelle réservation</Button>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_320px]">
          <div className="overflow-x-auto rounded-lg border border-ink/10 bg-paper">
            <div className="min-w-[900px]">
              <div className="grid grid-cols-[120px_1fr] border-b border-ink/10">
                <div className="px-3 py-2 text-xs font-bold text-ink/50">ven. 3 mai</div>
                <div className="relative grid grid-cols-12">
                  {hours.map((h) => <div key={h} className="border-l border-ink/5 py-2 text-center text-xs text-ink/40">{h}:00</div>)}
                </div>
              </div>

              {['Salle principale', 'Terrasse'].map((zone) => (
                <div key={zone}>
                  <div className="bg-cream/60 px-3 py-1.5 text-xs font-bold text-ink/50">{zone}</div>
                  {tables.filter((t) => t.zone === zone).map((t) => (
                    <div key={t.name} className="grid grid-cols-[120px_1fr] border-b border-ink/5">
                      <div className="px-3 py-3">
                        <p className="text-sm font-bold text-ink">{t.name}</p>
                        <p className="text-xs text-ink/40">{t.cap} pers.</p>
                      </div>
                      <div className="relative h-14 border-l border-ink/5">
                        {t.res.map((r, i) => (
                          <ResBlock key={i} r={r} onClick={() => r.name && setSelected({ ...r, name: r.name, table: `${t.name} — ${t.zone}`, phone: '06 12 34 56 78', tag: 'Anniversaire', notes: 'Sans gluten. Préfère une table au calme si possible.' })} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-ink/10 bg-paper p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-extrabold text-ink">Réservation</p>
              <button className="text-ink/40"><XIcon className="h-4 w-4" /></button>
            </div>
            <span className="mt-2 inline-block"><Badge tone="green">Confirmée</Badge></span>
            <p className="mt-3 font-display text-2xl text-ink">{selected.name}</p>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {[[PhoneIcon, 'Appeler'], [MessageIcon, 'Message'], [MailIcon, 'Email']].map(([Icon, label]) => (
                <button key={label} className="flex flex-col items-center gap-1.5 rounded-md border border-ink/10 py-3 text-xs font-semibold text-ink/70 hover:border-ink">
                  <Icon className="h-4 w-4" /> {label}
                </button>
              ))}
            </div>

            <div className="mt-5 space-y-3 text-sm">
              <p className="flex items-center gap-2 text-ink/70"><CalendarIcon className="h-4 w-4 text-ink/40" /> Vendredi 3 mai 2024</p>
              <p className="flex items-center gap-2 text-ink/70">🕐 {selected.start} – {selected.end}</p>
              <p className="flex items-center gap-2 text-ink/70">👥 {selected.size} personnes</p>
              <p className="flex items-center gap-2 text-ink/70">📍 {selected.table}</p>
              {selected.tag && <p className="flex items-center gap-2 text-ink/70">🎉 Occasion — <Badge tone="orange">{selected.tag}</Badge></p>}
              {selected.notes && <p className="flex items-start gap-2 text-ink/70">📝 {selected.notes}</p>}
            </div>

            <div className="mt-5 flex gap-2">
              <Button variant="outline" className="flex-1 justify-center text-xs">Modifier</Button>
              <Button variant="danger" className="flex-1 justify-center text-xs">Annuler</Button>
            </div>

            <div className="mt-5 border-t border-ink/10 pt-4 text-xs text-ink/45">
              <p>Réservation créée</p>
              <p className="text-ink/60">Aujourd'hui à 10:15</p>
              <p className="mt-2">Depuis le site</p>
              <button className="mt-3 flex w-full items-center justify-center gap-1 rounded-sm border border-ink/15 py-2 text-xs font-bold text-ink">Voir sur le site <ArrowRightIcon className="h-3.5 w-3.5" /></button>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-lg border border-ink/10 bg-paper p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-extrabold text-ink">Réservations du vendredi 3 mai</p>
            <button className="flex items-center gap-1 text-xs font-bold text-flame">Voir toutes <ArrowRightIcon className="h-3 w-3" /></button>
          </div>
          <div className="mt-3 divide-y divide-ink/10">
            {dayList.map((r) => (
              <div key={r.name} className="flex flex-wrap items-center gap-4 py-3 text-sm">
                <span className="flex w-16 items-center gap-1.5 font-bold text-ink"><CalendarIcon className="h-3.5 w-3.5 text-ink/30" /> {r.time}</span>
                <span className="w-32 font-semibold text-ink">{r.name}</span>
                <span className="text-ink/50">{r.phone}</span>
                <span className="text-ink/50">{r.size} pers.</span>
                {r.tag && <Badge tone="orange">{r.tag}</Badge>}
                <Badge tone="green">{r.status}</Badge>
                <MoreHIcon className="ml-auto h-4 w-4 text-ink/30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
