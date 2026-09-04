import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DashboardTopbar } from '../components/DashboardLayout';
import { Card, Tabs, Field, inputCls, Toggle, Button } from '../components/dashboard-ui';
import { ArrowRightIcon, GlobeIcon, EditIcon } from '../components/doodles';
import { ShieldIcon, ClockIcon, UploadIcon } from '../components/doodles';
import { DownloadIcon, TrashIcon } from '../components/dashicons';
import { IMG } from '../data';
import usePersistentState from '../hooks/usePersistentState';

const TABS = ['Général', 'Pages', 'Domaine', 'SEO', 'Personnalisation', 'Code & suivi', 'Sauvegardes'];

export default function DashboardSite() {
  const [tab, setTab] = useState('Général');
  const [maintenance, setMaintenance] = usePersistentState('site-maintenance', false);
  const [name, setName] = usePersistentState('site-name', 'Mamma Rosa');
  const [desc, setDesc] = usePersistentState('site-description', 'Cuisine italienne authentique faite maison avec des ingrédients frais et de saison.');

  return (
    <div className="pb-16">
      <DashboardTopbar title="Site" subtitle="Gérez les paramètres et le contenu de votre site." />

      <div className="px-6 sm:px-10">
        <Tabs tabs={TABS} active={tab} onChange={setTab} />

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">
          {tab === 'Général' && (
            <div className="space-y-5">
              <Card title="Informations générales">
                <div className="space-y-4">
                  <Field label="Nom du site">
                    <input value={name} onChange={(e) => setName(e.target.value)} className={inputCls} />
                  </Field>
                  <Field label="Description du site">
                    <textarea value={desc} onChange={(e) => setDesc(e.target.value)} rows={3} className={inputCls} />
                  </Field>
                  <Field label="Fuseau horaire">
                    <select className={inputCls}><option>(GMT+01:00) Paris</option></select>
                  </Field>
                  <Button>Enregistrer les modifications</Button>
                </div>
              </Card>

              <Card title="Favicon">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink">
                    <span className="text-flame">🔥</span>
                  </div>
                  <p className="flex-1 text-xs text-ink/50">Format recommandé : PNG ou ICO. 512x512px max.</p>
                  <Button variant="outline">Changer le favicon</Button>
                </div>
              </Card>

              <Card title="Mode maintenance">
                <Toggle checked={maintenance} onChange={setMaintenance} label="Activer le mode maintenance" desc="Affiche une page temporaire aux visiteurs pendant vos modifications." icon={ClockIcon} />
              </Card>
            </div>
          )}

          {tab === 'Pages' && (
            <Card title="Pages du site">
              <div className="divide-y divide-ink/10">
                {['Accueil', 'Menu', 'Réservations', 'À propos', 'Contact', 'Brunch'].map((p) => (
                  <div key={p} className="flex items-center justify-between py-3">
                    <div>
                      <p className="text-sm font-bold text-ink">{p}</p>
                      <p className="text-xs text-ink/45">/{p.toLowerCase().replace('à propos', 'a-propos')}</p>
                    </div>
                    <Link to="/dashboard/site/editeur" className="flex items-center gap-1.5 rounded-sm border border-ink/15 px-3 py-2 text-xs font-bold text-ink hover:border-ink">
                      <EditIcon className="h-3.5 w-3.5" /> Modifier
                    </Link>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4 w-full justify-center">+ Ajouter une page</Button>
            </Card>
          )}

          {tab === 'Domaine' && (
            <Card title="Nom de domaine">
              <div className="flex items-center justify-between rounded-md border border-ink/10 p-4">
                <div className="flex items-center gap-3">
                  <GlobeIcon className="h-5 w-5 text-ink/50" />
                  <div>
                    <p className="text-sm font-bold text-ink">mammarosa.fr</p>
                    <p className="text-xs text-green-600">Connecté et sécurisé (SSL)</p>
                  </div>
                </div>
                <Button variant="outline">Gérer</Button>
              </div>
              <Button variant="outline" className="mt-4 w-full justify-center">+ Connecter un autre domaine</Button>
            </Card>
          )}

          {tab === 'SEO' && (
            <Card title="Référencement (SEO)">
              <div className="space-y-4">
                <Field label="Titre de la page" hint="55/60">
                  <input defaultValue="Mamma Rosa , Cuisine italienne à Paris" className={inputCls} />
                </Field>
                <Field label="Meta description" hint="118/160">
                  <textarea rows={3} defaultValue="Découvrez Mamma Rosa, trattoria italienne chaleureuse à Paris. Réservez votre table en ligne." className={inputCls} />
                </Field>
                <Button>Enregistrer</Button>
              </div>
            </Card>
          )}

          {tab === 'Personnalisation' && (
            <Card title="Personnalisation">
              <p className="text-sm text-ink/60">Modifiez le contenu, le design et la mise en page de votre site dans l'éditeur visuel.</p>
              <Link to="/dashboard/site/editeur" className="mt-4 inline-flex items-center gap-2 rounded-sm bg-flame px-5 py-3 text-sm font-bold text-cream hover:bg-ink">
                Ouvrir l'éditeur de site <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Card>
          )}

          {tab === 'Code & suivi' && (
            <Card title="Code & suivi">
              <div className="space-y-4">
                <Field label="Google Analytics ID"><input placeholder="G-XXXXXXXXXX" className={inputCls} /></Field>
                <Field label="Google Tag Manager ID"><input placeholder="GTM-XXXXXXX" className={inputCls} /></Field>
                <Field label="Code personnalisé (avant </head>)"><textarea rows={4} className={`${inputCls} font-mono text-xs`} /></Field>
                <Button>Enregistrer</Button>
              </div>
            </Card>
          )}

          {tab === 'Sauvegardes' && (
            <Card title="Sauvegardes">
              <div className="divide-y divide-ink/10">
                {[['Aujourd\u2019hui, 02:30', 'Automatique'], ['Hier, 02:30', 'Automatique'], ['30 avr., 14:12', 'Manuelle']].map(([d, t]) => (
                  <div key={d} className="flex items-center justify-between py-3">
                    <div>
                      <p className="text-sm font-bold text-ink">{d}</p>
                      <p className="text-xs text-ink/45">{t}</p>
                    </div>
                    <Button variant="outline" className="text-xs">Restaurer</Button>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4 w-full justify-center"><UploadIcon className="h-4 w-4" /> Sauvegarder maintenant</Button>
            </Card>
          )}

          {/* Right column */}
          <div className="space-y-5">
            <Card title="Aperçu du site" action={<Link to="/" className="text-xs font-bold text-flame">Voir le site →</Link>}>
              <div className="overflow-hidden rounded-md border border-ink/10">
                <div className="flex items-center justify-between bg-ink px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-cream">
                  <span>Mamma Rosa</span>
                  <div className="flex gap-1"><EditIcon className="h-3 w-3" /></div>
                </div>
                <div className="relative">
                  <img src={IMG.interior} alt="" loading="lazy" className="aspect-video w-full object-cover"  decoding="async" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3 text-cream">
                    <p className="font-display text-sm uppercase leading-tight">La dolce vita,<br />dans votre assiette.</p>
                    <button type="button" className="mt-1.5 rounded-sm bg-cream px-2.5 py-1 text-[9px] font-bold text-ink">Réserver une table</button>
                  </div>
                </div>
              </div>
            </Card>

            <Card title="Statut du site">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500" /> <span className="font-semibold text-ink">Site en ligne</span></div>
                <p className="pl-4 text-xs text-ink/50">Votre site est public et accessible.</p>
                <div className="flex items-center gap-2"><ShieldIcon className="h-4 w-4 text-ink/50" /> <span className="font-semibold text-ink">SSL activé</span></div>
                <p className="pl-6 text-xs text-ink/50">Connexion sécurisée (HTTPS)</p>
                <div className="flex items-center gap-2"><ClockIcon className="h-4 w-4 text-ink/50" /> <span className="font-semibold text-ink">Dernière sauvegarde</span></div>
                <p className="pl-6 text-xs text-ink/50">Aujourd'hui à 02:30</p>
              </div>
            </Card>

            <Card title="Actions rapides">
              <div className="divide-y divide-ink/10">
                {[
                  [UploadIcon, 'Sauvegarder maintenant', 'Créez une sauvegarde manuelle de votre site.'],
                  [DownloadIcon, 'Exporter le site', 'Téléchargez une copie de votre site.'],
                ].map(([Icon, t, d]) => (
                  <button type="button" key={t} className="flex w-full items-center gap-3 py-3 text-left">
                    <Icon className="h-4 w-4 text-ink/50" />
                    <div className="flex-1"><p className="text-sm font-semibold text-ink">{t}</p><p className="text-xs text-ink/45">{d}</p></div>
                    <ArrowRightIcon className="h-4 w-4 text-ink/30" />
                  </button>
                ))}
                <button type="button" className="flex w-full items-center gap-3 py-3 text-left text-red-600">
                  <TrashIcon className="h-4 w-4" />
                  <div className="flex-1"><p className="text-sm font-semibold">Réinitialiser le site</p><p className="text-xs text-red-400">Supprimez tout le contenu et recommencez.</p></div>
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
