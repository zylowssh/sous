import { useState } from 'react';
import { DashboardTopbar } from '../components/DashboardLayout';
import { Card, Button } from '../components/dashboard-ui';
import { ImageIcon } from '../components/doodles';
import { SearchIcon, PlusIcon, FolderIcon, GridIcon, ListIcon, FilterIcon, FileTextIcon, MoreHIcon } from '../components/dashicons';
import { IMG } from '../data';

const folders = [
  ['Brunch', 24], ['Plats', 38], ['Intérieur', 19], ['Équipe', 12], ['Logos', 6], ['Documents', 8], ['Bannières', 7], ['Clients', 15],
];

const media = [
  { name: 'brunch_avocado.jpg', date: '2 mai 2024', img: IMG.brunch },
  { name: 'pancakes_fruits.jpg', date: '2 mai 2024', img: IMG.brunch },
  { name: 'interieur_salle.jpg', date: '1 mai 2024', img: IMG.interior },
  { name: 'terrasse.jpg', date: '30 avr. 2024', img: IMG.interior },
  { name: 'equipe_cuisine.jpg', date: '28 avr. 2024', img: IMG.chef },
  { name: 'pizza_diavola.jpg', date: '28 avr. 2024', img: IMG.italiana },
  { name: 'pasta_ragu.jpg', date: '27 avr. 2024', img: IMG.pasta },
  { name: 'cafe_latte.jpg', date: '27 avr. 2024', img: IMG.cafe },
  { name: 'mamma_rosa_logo.png', date: '26 avr. 2024', badge: true },
  { name: 'menu_printemps.pdf', date: '25 avr. 2024', file: true },
  { name: 'tiramisu.jpg', date: '24 avr. 2024', img: IMG.pasta },
  { name: 'vin_rouge.jpg', date: '23 avr. 2024', img: IMG.greens },
  { name: 'enseigne_exterieur.jpg', date: '22 avr. 2024', badge: true },
  { name: 'carte_boissons.pdf', date: '21 avr. 2024', file: true },
  { name: 'clients_soiree.jpg', date: '20 avr. 2024', img: IMG.chef },
];

export default function DashboardMedias() {
  const [tab, setTab] = useState('Bibliothèque');
  const [view, setView] = useState('grid');
  const [activeFolder, setActiveFolder] = useState(null);

  return (
    <div className="pb-16">
      <DashboardTopbar
        title="Médias"
        subtitle="Gérez toutes les images, logos et documents de votre site."
        actions={
          <>
            <button className="hidden items-center gap-2 rounded-sm border border-ink/15 bg-paper px-4 py-2.5 text-sm font-semibold text-ink sm:inline-flex"><FolderIcon className="h-4 w-4" /> Nouveau dossier</button>
            <Button><PlusIcon className="h-4 w-4" /> Ajouter un média</Button>
          </>
        }
      />

      <div className="px-6 sm:px-10">
        <div className="flex gap-6 border-b border-ink/10">
          {['Bibliothèque', 'Fichiers du site', 'Logos', 'Documents'].map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`relative pb-3 text-sm font-semibold ${tab === t ? 'text-flame' : 'text-ink/55'}`}>
              {t}
              {tab === t && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-flame" />}
            </button>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35" />
            <input placeholder="Rechercher un média..." className="w-full rounded-sm border border-ink/15 bg-cream py-2.5 pl-9 pr-3 text-sm placeholder:text-ink/35 focus:border-flame focus:outline-none" />
          </div>
          <select className="rounded-sm border border-ink/15 bg-cream px-3 py-2.5 text-sm"><option>Tous les types</option></select>
          <select className="rounded-sm border border-ink/15 bg-cream px-3 py-2.5 text-sm"><option>Tous les dossiers</option></select>
          <select className="rounded-sm border border-ink/15 bg-cream px-3 py-2.5 text-sm"><option>Date (récent)</option></select>
          <button className="flex items-center gap-2 rounded-sm border border-ink/15 px-3 py-2.5 text-sm font-semibold text-ink"><FilterIcon className="h-4 w-4" /> Trier</button>
          <div className="flex gap-1 rounded-sm border border-ink/15 p-1">
            <button onClick={() => setView('grid')} className={`rounded-sm p-1.5 ${view === 'grid' ? 'bg-flame text-cream' : 'text-ink/40'}`}><GridIcon className="h-4 w-4" /></button>
            <button onClick={() => setView('list')} className={`rounded-sm p-1.5 ${view === 'list' ? 'bg-flame text-cream' : 'text-ink/40'}`}><ListIcon className="h-4 w-4" /></button>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[220px_1fr]">
          <div className="space-y-5">
            <Card title="Dossiers" action={<button className="text-flame"><PlusIcon className="h-4 w-4" /></button>}>
              <div className="space-y-0.5">
                {folders.map(([name, count]) => (
                  <button
                    key={name}
                    onClick={() => setActiveFolder(activeFolder === name ? null : name)}
                    className={`flex w-full items-center justify-between rounded-sm px-2.5 py-2 text-sm ${activeFolder === name ? 'bg-flame/10 font-bold text-flame' : 'text-ink/70 hover:bg-cream'}`}
                  >
                    <span className="flex items-center gap-2"><FolderIcon className="h-4 w-4 text-ink/35" /> {name}</span>
                    <span className="text-xs text-ink/40">{count}</span>
                  </button>
                ))}
              </div>
            </Card>

            <Card title="Espace de stockage">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
                <div className="h-full w-1/4 rounded-full bg-flame" />
              </div>
              <p className="mt-2 text-xs text-ink/50">2,4 Go utilisés sur 10 Go</p>
              <Button variant="outline" className="mt-3 w-full justify-center text-xs">Gérer l'espace</Button>
            </Card>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold text-ink/50">{media.length} médias{activeFolder ? ` — ${activeFolder}` : ''}</p>
            {view === 'grid' ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {media.map((m) => (
                  <div key={m.name} className="group overflow-hidden rounded-md border border-ink/10 bg-paper">
                    <div className="relative aspect-square">
                      {m.img && <img src={m.img} alt={m.name} loading="lazy" className="h-full w-full object-cover" />}
                      {m.badge && <div className="flex h-full items-center justify-center bg-ink text-cream"><span className="font-display text-sm">MAMMA ROSA</span></div>}
                      {m.file && <div className="flex h-full items-center justify-center bg-cream"><FileTextIcon className="h-8 w-8 text-flame" /></div>}
                      <span className="absolute left-2 top-2 flex h-5 w-5 items-center justify-center rounded-sm bg-paper/90"><ImageIcon className="h-3 w-3 text-ink/50" /></span>
                    </div>
                    <div className="flex items-center justify-between p-2">
                      <div className="min-w-0">
                        <p className="truncate text-xs font-semibold text-ink">{m.name}</p>
                        <p className="text-[10px] text-ink/40">{m.date}</p>
                      </div>
                      <MoreHIcon className="h-3.5 w-3.5 shrink-0 text-ink/30" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="divide-y divide-ink/10 rounded-md border border-ink/10 bg-paper">
                {media.map((m) => (
                  <div key={m.name} className="flex items-center gap-3 px-4 py-2.5">
                    {m.img && <img src={m.img} alt="" className="h-9 w-9 rounded-sm object-cover" />}
                    {m.file && <FileTextIcon className="h-9 w-9 text-flame" />}
                    {m.badge && <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-ink"><span className="text-[7px] font-display text-cream">LOGO</span></div>}
                    <p className="flex-1 text-sm font-semibold text-ink">{m.name}</p>
                    <p className="text-xs text-ink/40">{m.date}</p>
                    <MoreHIcon className="h-4 w-4 text-ink/30" />
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-1">
                {['<', '1', '2', '3', '...', '7', '>'].map((p, i) => (
                  <button key={i} className={`flex h-8 w-8 items-center justify-center rounded-sm text-sm ${p === '1' ? 'bg-flame text-cream' : 'text-ink/50 hover:bg-cream'}`}>{p}</button>
                ))}
              </div>
              <select className="rounded-sm border border-ink/15 bg-cream px-3 py-1.5 text-xs"><option>18 par page</option></select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
