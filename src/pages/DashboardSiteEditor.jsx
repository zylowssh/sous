import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Field, inputCls } from '../components/dashboard-ui';
import { ArrowLeftIcon } from '../components/doodles';
import { UndoIcon, RedoIcon, MonitorIcon, TabletIcon, SmartphoneIcon, GripIcon, MoreHIcon } from '../components/dashicons';
import { IMG } from '../data';
import usePersistentState from '../hooks/usePersistentState';

const SECTIONS = ['En-tête', 'Hero', 'À propos', 'Menu à la une', 'Réservations', 'Témoignages', 'Galerie', 'Pied de page'];

export default function DashboardSiteEditor() {
  const [tab, setTab] = useState('Contenu');
  const [selected, setSelected] = useState('Hero');
  const [device, setDevice] = useState('desktop');
  const [title, setTitle] = usePersistentState('site-editor-title', 'CUISINE ITALIENNE.\nCHALEUREUSE.\nSANS PRÉTENTION.');
  const [subtitle, setSubtitle] = usePersistentState('site-editor-subtitle', 'Des produits frais, une cuisine maison et une ambiance conviviale.');

  return (
    <div className="flex h-screen flex-col bg-cream">
      <div className="flex items-center justify-between border-b border-ink/10 bg-paper px-5 py-3">
        <div className="flex items-center gap-4">
          <Link to="/dashboard/site" className="flex items-center gap-1.5 text-sm font-semibold text-ink/60 hover:text-ink">
            <ArrowLeftIcon className="h-4 w-4" /> Éditeur de site
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="text-ink/40 hover:text-ink"><UndoIcon className="h-4 w-4" /></button>
          <button type="button" className="text-ink/40 hover:text-ink"><RedoIcon className="h-4 w-4" /></button>
          <div className="mx-2 flex gap-1 rounded-sm border border-ink/15 p-1">
            {[['desktop', MonitorIcon], ['tablet', TabletIcon], ['mobile', SmartphoneIcon]].map(([d, Icon]) => (
              <button type="button" key={d} onClick={() => setDevice(d)} className={`rounded-sm p-1.5 ${device === d ? 'bg-ink text-cream' : 'text-ink/40'}`}>
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>
          <Button variant="outline" className="text-xs">Prévisualiser</Button>
          <Button className="text-xs">Publier les changements</Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left panel */}
        <div className="flex w-80 shrink-0 flex-col border-r border-ink/10 bg-paper">
          <div className="flex gap-5 border-b border-ink/10 px-4 pt-3">
            {['Contenu', 'Design', 'Paramètres'].map((t) => (
              <button type="button" key={t} onClick={() => setTab(t)} className={`relative pb-2.5 text-sm font-semibold ${tab === t ? 'text-flame' : 'text-ink/50'}`}>
                {t}
                {tab === t && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-flame" />}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {tab === 'Contenu' && (
              <>
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-ink/50">Sections</p>
                  <button type="button" className="text-xs font-bold text-flame">+ Ajouter</button>
                </div>
                <div className="space-y-1">
                  {SECTIONS.map((s) => (
                    <button type="button"
                      key={s}
                      onClick={() => setSelected(s)}
                      className={`flex w-full items-center gap-2 rounded-sm border-l-2 px-2.5 py-2 text-left text-sm ${
                        selected === s ? 'border-flame bg-flame/5 font-bold text-ink' : 'border-transparent text-ink/70 hover:bg-cream'
                      }`}
                    >
                      <GripIcon className="h-3.5 w-3.5 text-ink/25" />
                      <span className="flex-1">{s}</span>
                      <MoreHIcon className="h-3.5 w-3.5 text-ink/25" />
                    </button>
                  ))}
                </div>

                <div className="mt-6 border-t border-ink/10 pt-4">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-ink/50">Section sélectionnée</p>
                  <p className="mt-1 text-sm font-bold text-ink">{selected}</p>
                </div>

                {selected === 'Hero' && (
                  <div className="mt-4 space-y-4">
                    <Field label="Titre" hint={`${title.length}/80`}>
                      <textarea value={title} onChange={(e) => setTitle(e.target.value)} rows={3} className={inputCls} />
                    </Field>
                    <Field label="Sous-titre" hint={`${subtitle.length}/120`}>
                      <textarea value={subtitle} onChange={(e) => setSubtitle(e.target.value)} rows={2} className={inputCls} />
                    </Field>
                    <Field label="Image d'arrière-plan">
                      <div className="flex items-center gap-2">
                        <img src={IMG.interior} alt="" className="h-12 w-16 rounded-sm object-cover"  decoding="async" loading="lazy" />
                        <Button variant="outline" className="text-xs">Remplacer</Button>
                      </div>
                    </Field>
                    <Field label="Bouton principal">
                      <input defaultValue="Réserver une table" className={inputCls} />
                    </Field>
                    <Field label="Bouton secondaire">
                      <input defaultValue="Voir le menu" className={inputCls} />
                    </Field>
                  </div>
                )}
              </>
            )}

            {tab === 'Design' && (
              <div className="space-y-4">
                <Field label="Couleurs">
                  <div className="flex gap-1.5">
                    {['#171310', '#8A5A3B', '#0E0C0A', '#CFCAAD', '#E4572E'].map((c) => (
                      <span key={c} className="h-6 w-6 rounded-full border border-ink/10" style={{ background: c }} />
                    ))}
                  </div>
                </Field>
                <Field label="Police , Titres"><input defaultValue="Anton" className={inputCls} /></Field>
                <Field label="Police , Texte"><input defaultValue="Inter" className={inputCls} /></Field>
              </div>
            )}

            {tab === 'Paramètres' && (
              <div className="space-y-4">
                <Field label="Titre SEO de la page"><input defaultValue="Mamma Rosa , Accueil" className={inputCls} /></Field>
                <Field label="Slug"><input defaultValue="/" className={inputCls} /></Field>
              </div>
            )}
          </div>
        </div>

        {/* Preview */}
        <div className="flex-1 overflow-y-auto bg-cream p-6">
          <div className={`mx-auto rounded-lg border border-ink/10 bg-paper shadow-card transition-all ${device === 'mobile' ? 'max-w-sm' : device === 'tablet' ? 'max-w-2xl' : 'max-w-5xl'}`}>
            <div className="flex items-center justify-between bg-flame/10 px-6 py-2 text-xs font-semibold text-ink/70">
              <span className="mx-auto italic">Réservez votre table pour le brunch du dimanche →</span>
            </div>
            <div className="flex items-center justify-between border-b border-ink/10 px-6 py-4">
              <p className="font-serif text-xl italic text-ink">Mamma Rosa</p>
              <div className="hidden gap-5 text-xs font-semibold text-ink/60 sm:flex">
                <span className="text-flame">Accueil</span><span>Menu</span><span>Réservations</span><span>À propos</span><span>Contact</span>
              </div>
              <span className="rounded-sm bg-flame px-3 py-1.5 text-xs font-bold text-cream">Réserver</span>
            </div>

            <div className="relative">
              <img src={IMG.interior} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover brightness-[0.45]"  decoding="async" />
              <div className="absolute inset-0 flex flex-col justify-center p-8">
                <p className="font-hand text-lg italic text-flame">Benvenuti !</p>
                <h2 className="mt-1 whitespace-pre-line font-display text-4xl font-bold uppercase leading-[0.95] text-cream sm:text-5xl">{title}</h2>
                <p className="mt-3 max-w-md text-sm text-cream/80">{subtitle}</p>
                <div className="mt-4 flex gap-3">
                  <span className="rounded-sm bg-flame px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-cream">Réserver une table</span>
                  <span className="rounded-sm border border-cream/50 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-cream">Voir le menu</span>
                </div>
              </div>
            </div>

            <div className="grid gap-6 p-8 sm:grid-cols-2 sm:items-center">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest text-flame">À propos de nous</p>
                <h3 className="mt-1 font-display text-2xl font-bold text-ink">Une histoire de famille, de cuisine et de partage.</h3>
                <p className="mt-3 text-sm text-ink/60">Mamma Rosa, c'est l'histoire d'une famille italienne passionnée de cuisine et de bons moments. Depuis 2015, nous accueillons nos clients comme à la maison.</p>
                <p className="mt-3 font-hand text-base text-ink/50">, La famiglia</p>
              </div>
              <img src={IMG.chef} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover"  decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
