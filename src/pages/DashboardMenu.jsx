import { useState } from 'react';
import { DashboardTopbar } from '../components/DashboardLayout';
import { Card, Button, Badge, Field, inputCls, Toggle } from '../components/dashboard-ui';
import { ChevronDownIcon } from '../components/doodles';
import { SearchIcon, UploadIcon, PlusIcon, MoreHIcon, GripIcon, CameraIcon } from '../components/dashicons';
import { IMG } from '../data';

const categories = [
  { name: 'Antipasti', count: 8 },
  { name: 'Pâtes', count: 12 },
  { name: 'Pizzas', count: 11 },
  { name: 'Plats', count: 9 },
  { name: 'Desserts', count: 6 },
  { name: 'Boissons', count: 10 },
  { name: 'Vins', count: 14 },
];

const dishes = [
  { name: 'Spaghetti alle vongole', desc: 'Palourdes, ail, persil, vin blanc', price: 18, status: 'Disponible', img: IMG.pasta },
  { name: 'Tagliatelle al Ragù', desc: 'Ragù de bœuf mijoté 6h', price: 17, status: 'Disponible', img: IMG.pasta, selected: true },
  { name: "Penne all'arrabbiata", desc: 'Sauce tomate épicée, ail, piment', price: 14, status: 'Disponible', img: IMG.pasta },
  { name: 'Risotto ai funghi', desc: 'Champignons de saison, parmesan', price: 16, status: 'Disponible', img: IMG.italiana },
  { name: 'Lasagne alla bolognese', desc: 'Bœuf, béchamel, parmesan', price: 17, status: 'Épuisé', img: IMG.italiana },
  { name: 'Gnocchi al pesto', desc: 'Pesto basilic, pignons de pin', price: 15, status: 'Disponible', img: IMG.pasta },
  { name: 'Linguine al limone', desc: 'Citron, beurre, parmesan', price: 15, status: 'Disponible', img: IMG.pasta },
];

export default function DashboardMenu() {
  const [tab, setTab] = useState('Plats');
  const [activeCat, setActiveCat] = useState('Pâtes');
  const [selected, setSelected] = useState(dishes[1]);
  const [available, setAvailable] = useState(true);
  const [onSite, setOnSite] = useState(true);

  return (
    <div className="pb-16">
      <DashboardTopbar
        title="Menu"
        subtitle="Gérez vos plats, prix et disponibilités."
        actions={
          <>
            <button className="hidden items-center gap-2 rounded-sm border border-ink/15 bg-paper px-4 py-2.5 text-sm font-semibold text-ink sm:inline-flex">
              <UploadIcon className="h-4 w-4" /> Importer depuis le POS
            </button>
            <Button><PlusIcon className="h-4 w-4" /> Ajouter un plat</Button>
          </>
        }
      />

      <div className="px-6 sm:px-10">
        <div className="flex gap-6 border-b border-ink/10">
          {['Plats', 'Catégories', 'Extras', 'Menus spéciaux'].map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`relative pb-3 text-sm font-semibold ${tab === t ? 'text-flame' : 'text-ink/55'}`}>
              {t}
              {tab === t && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-flame" />}
            </button>
          ))}
        </div>

        {tab === 'Plats' && (
          <>
            <div className="mt-5 flex flex-wrap gap-3">
              <div className="relative flex-1 min-w-[200px]">
                <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35" />
                <input placeholder="Rechercher un plat..." className={`${inputCls} pl-9`} />
              </div>
              <select className={`${inputCls} w-auto`}><option>Toutes catégories</option></select>
              <select className={`${inputCls} w-auto`}><option>Tous statuts</option></select>
              <button className="flex items-center gap-2 rounded-sm border border-ink/15 px-4 py-2.5 text-sm font-semibold text-ink">Trier</button>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[220px_1fr_320px]">
              <Card title="Catégories" action={<button className="text-flame"><PlusIcon className="h-4 w-4" /></button>}>
                <div className="space-y-0.5">
                  {categories.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setActiveCat(c.name)}
                      className={`flex w-full items-center justify-between rounded-sm px-2.5 py-2 text-sm ${activeCat === c.name ? 'bg-flame/10 font-bold text-flame' : 'text-ink/70 hover:bg-cream'}`}
                    >
                      {c.name} <span className="text-xs text-ink/40">{c.count}</span>
                    </button>
                  ))}
                </div>
                <button className="mt-3 flex items-center gap-2 text-xs font-semibold text-ink/50"><GripIcon className="h-3.5 w-3.5" /> Réorganiser les catégories</button>
              </Card>

              <Card title={`${dishes.length} plats`}>
                <div className="divide-y divide-ink/10">
                  {dishes.map((d) => (
                    <button
                      key={d.name}
                      onClick={() => setSelected(d)}
                      className={`flex w-full items-center gap-3 border-l-2 py-3 pl-2 text-left ${selected?.name === d.name ? 'border-flame bg-flame/5' : 'border-transparent'}`}
                    >
                      <img src={d.img} alt="" className="h-12 w-12 shrink-0 rounded-md object-cover" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-ink">{d.name}</p>
                        <p className="truncate text-xs text-ink/45">{d.desc}</p>
                      </div>
                      <span className="shrink-0 text-sm font-bold text-ink">{d.price} €</span>
                      <span className="shrink-0"><Badge tone={d.status === 'Disponible' ? 'green' : 'red'}>{d.status}</Badge></span>
                      <MoreHIcon className="h-4 w-4 shrink-0 text-ink/30" />
                    </button>
                  ))}
                </div>
                <button className="mt-3 flex w-full items-center justify-center gap-1 py-2 text-sm font-semibold text-ink/60">
                  Voir plus de plats <ChevronDownIcon className="h-4 w-4" />
                </button>
              </Card>

              {selected && (
                <Card>
                  <div className="relative">
                    <img src={selected.img} alt="" className="aspect-square w-full rounded-md object-cover" />
                    <button className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-paper shadow"><CameraIcon className="h-4 w-4 text-ink" /></button>
                  </div>
                  <p className="mt-3 font-display text-lg text-ink">{selected.name}</p>
                  <p className="text-xs text-ink/50">{selected.desc}</p>

                  <div className="mt-4 space-y-4">
                    <Field label="Statut">
                      <select value={available ? 'Disponible' : 'Épuisé'} onChange={(e) => setAvailable(e.target.value === 'Disponible')} className={inputCls}>
                        <option>Disponible</option><option>Épuisé</option>
                      </select>
                    </Field>
                    <Field label="Catégorie"><select className={inputCls} defaultValue={activeCat}><option>{activeCat}</option></select></Field>
                    <Field label="Prix"><input defaultValue={selected.price} className={inputCls} /></Field>
                    <Field label="Description" hint="98/300"><textarea defaultValue={selected.desc} rows={3} className={inputCls} /></Field>

                    <div>
                      <p className="mb-1 text-sm font-semibold text-ink">Options</p>
                      <Toggle checked={onSite} onChange={setOnSite} label="Disponible à la livraison" />
                      <Toggle checked={true} onChange={() => {}} label="Afficher sur le site" />
                    </div>

                    <div>
                      <p className="mb-2 text-sm font-semibold text-ink">Allergènes</p>
                      <div className="flex flex-wrap gap-2">
                        {['🌾', '🥛', '🚫'].map((a) => (
                          <span key={a} className="flex h-9 w-9 items-center justify-center rounded-sm border border-ink/15 text-sm">{a}</span>
                        ))}
                        <button className="flex h-9 w-9 items-center justify-center rounded-sm border border-dashed border-ink/25 text-ink/40"><PlusIcon className="h-4 w-4" /></button>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 justify-center">Supprimer</Button>
                      <Button className="flex-1 justify-center">Enregistrer</Button>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </>
        )}

        {tab !== 'Plats' && (
          <div className="mt-10 rounded-lg border border-dashed border-ink/15 p-10 text-center text-sm text-ink/45">
            La gestion des {tab.toLowerCase()} apparaîtra ici.
          </div>
        )}
      </div>
    </div>
  );
}
