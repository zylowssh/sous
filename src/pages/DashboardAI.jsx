import { useState } from 'react';
import { DashboardTopbar } from '../components/DashboardLayout';
import { Button } from '../components/dashboard-ui';
import { SparkleIcon, ArrowRightIcon, CheckIcon } from '../components/doodles';
import { RedoIcon, ExternalLinkIcon } from '../components/dashicons';
import { IMG } from '../data';
import usePersistentState from '../hooks/usePersistentState';

const initialMessages = [
  { from: 'user', text: 'Ajoute le brunch tous les dimanches de 11h à 15h sur une section dédiée.', time: '10:41' },
  { from: 'ai', text: 'Parfait, voici ma proposition. Je crée une nouvelle page Brunch et j\u2019ajoute l\u2019information à votre site.', time: '10:42', preview: true },
  { from: 'user', text: 'Super ! Mets aussi une photo plus claire et ajoute un bouton "Réserver".', time: '10:47' },
  { from: 'ai', text: 'C\u2019est fait \u2705 Voici la nouvelle version avec la photo mise à jour et le bouton de réservation.', time: '10:48', preview: true, updated: true },
];

const TABS = ['Aperçu du site', 'Page', 'Section', 'Design'];

function PreviewCard({ updated }) {
  return (
    <div className="mt-3 overflow-hidden rounded-md border border-ink/10">
      <div className="relative">
        <span className="absolute left-2 top-2 rounded-sm bg-ink/70 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-widest text-cream">Aperçu</span>
        <img src={IMG.brunch} alt="Brunch" loading="lazy" className="aspect-video w-full object-cover"  decoding="async" />
      </div>
      <div className="bg-paper p-3">
        <p className="text-[9px] font-extrabold uppercase tracking-widest text-flame">Nouveau</p>
        <p className="mt-1 font-display text-sm uppercase leading-tight text-ink">Le brunch<br />tous les dimanches<br />de 11h à 15h</p>
        {updated && (
          <button type="button" className="mt-2 rounded-sm bg-flame px-3 py-1.5 text-[10px] font-bold text-cream">Réserver une table</button>
        )}
      </div>
      <button type="button" className="flex w-full items-center justify-center gap-1 border-t border-ink/10 py-2 text-xs font-bold text-flame">
        Voir l'aperçu complet <ArrowRightIcon className="h-3 w-3" />
      </button>
    </div>
  );
}

export default function DashboardAI() {
  const [messages, setMessages] = usePersistentState('ai-messages', initialMessages);
  const [draft, setDraft] = useState('');
  const [tab, setTab] = useState('Aperçu du site');

  const send = () => {
    if (!draft.trim()) return;
    setMessages((m) => [...m, { from: 'user', text: draft, time: 'à l\u2019instant' }]);
    setDraft('');
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'ai', text: 'Compris, je m\u2019en occupe et je vous montre un aperçu.', time: 'à l\u2019instant', preview: true }]);
    }, 700);
  };

  return (
    <div className="flex h-screen flex-col">
      <DashboardTopbar
        title={<span className="flex items-center gap-2">Sous AI <SparkleIcon className="h-5 w-5 text-flame" /></span>}
        subtitle="Votre assistant restaurant."
        actions={<button type="button" className="hidden items-center gap-2 rounded-sm border border-ink/15 bg-paper px-4 py-2.5 text-sm font-semibold text-ink sm:inline-flex"><RedoIcon className="h-4 w-4" /> Historique</button>}
      />

      <div className="flex flex-1 gap-5 overflow-hidden px-6 pb-6 sm:px-10">
        {/* Chat */}
        <div className="flex w-full max-w-md flex-col rounded-lg border border-ink/10 bg-paper">
          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            {messages.map((m, i) => (
              <div key={i} className={m.from === 'user' ? 'ml-auto max-w-[85%]' : 'max-w-[90%]'}>
                <div className={`rounded-lg px-3.5 py-2.5 text-sm ${m.from === 'user' ? 'bg-cream text-ink' : 'bg-flame/8 text-ink'}`}>
                  {m.text}
                </div>
                <p className={`mt-1 text-[10px] text-ink/35 ${m.from === 'user' ? 'text-right' : ''}`}>{m.time}</p>
                {m.preview && <PreviewCard updated={m.updated} />}
              </div>
            ))}
          </div>
          <div className="border-t border-ink/10 p-4">
            <div className="flex gap-2">
              <Button className="flex-1 !bg-flame text-xs">Publier sur mon site ✓</Button>
              <Button variant="outline" className="flex-1 text-xs">Demander un ajustement</Button>
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-sm border border-ink/15 bg-cream px-3 py-2.5">
              <input
                aria-label="Demande à Sous"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Écrivez votre demande..."
                className="flex-1 bg-transparent text-sm text-ink placeholder:text-ink/35 focus:outline-none"
              />
              <button type="button" onClick={send} className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-flame text-cream"><ArrowRightIcon className="h-4 w-4" /></button>
            </div>
            <p className="mt-2 text-[10px] text-ink/35">Sous peut faire des erreurs. Vérifiez toujours les informations importantes.</p>
          </div>
        </div>

        {/* Live preview */}
        <div className="hidden flex-1 flex-col overflow-hidden rounded-lg border border-ink/10 bg-paper lg:flex">
          <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3">
            <div className="flex gap-5">
              {TABS.map((t) => (
                <button type="button" key={t} onClick={() => setTab(t)} className={`relative pb-1 text-sm font-semibold ${tab === t ? 'text-flame' : 'text-ink/50'}`}>
                  {t}
                  {tab === t && <span className="absolute inset-x-0 -bottom-3.5 h-0.5 bg-flame" />}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button type="button" className="flex items-center gap-1.5 rounded-sm border border-ink/15 px-3 py-2 text-xs font-bold text-ink"><ExternalLinkIcon className="h-3.5 w-3.5" /> Ouvrir le site</button>
              <Button className="text-xs">Publier les changements</Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="flex items-center justify-between border-b border-ink/10 bg-cream px-6 py-3">
              <p className="font-serif text-lg italic text-ink">Mamma Rosa</p>
              <div className="flex items-center gap-5 text-xs font-semibold text-ink/60">
                <span>Accueil</span><span>Menu</span><span>Réservations</span><span>À propos</span><span>Contact</span>
                <span className="rounded-sm bg-flame px-3 py-1.5 font-bold text-cream">Réserver</span>
              </div>
            </div>

            <div className="grid gap-6 p-6 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="font-hand text-lg italic text-flame">Nouveau</p>
                <h2 className="mt-1 font-display text-4xl font-bold uppercase leading-[0.95] text-ink">Le brunch<br />tous les dimanches<br />de 11h à 15h</h2>
                <p className="mt-3 text-sm text-ink/60">Produits frais, cuisine maison et ambiance conviviale pour bien commencer le week-end.</p>
                <button type="button" className="mt-4 inline-flex items-center gap-2 rounded-sm bg-flame px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-cream">Réserver une table <ArrowRightIcon className="h-3.5 w-3.5" /></button>
              </div>
              <img src={IMG.brunch} alt="Brunch" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover"  decoding="async" />
            </div>

            <div className="border-t border-ink/10 p-6">
              <div className="flex items-center justify-between">
                <p className="text-xs font-extrabold uppercase tracking-widest text-flame">Au menu</p>
                <span className="text-xs font-bold text-ink/50">Voir le menu complet →</span>
              </div>
              <h3 className="mt-1 font-display text-xl font-bold uppercase text-ink">Nos incontournables du brunch</h3>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  ['Avocado toast', 'Œuf poché, avocat, tomates cerises, pousses', '16 €', IMG.brunch],
                  ['Pancakes maison', "Sirop d'érable, fruits rouges, crème fraîche", '14 €', IMG.pasta],
                  ['Œufs brouillés', 'Bacon grillé, pain de campagne, roquette', '15 €', IMG.chef],
                  ['Granola bowl', 'Yaourt grec, granola maison, fruits de saison', '12 €', IMG.greens],
                ].map(([name, desc, price, img]) => (
                  <div key={name}>
                    <img src={img} alt={name} loading="lazy" className="aspect-square w-full rounded-md object-cover"  decoding="async" />
                    <p className="mt-2 text-sm font-bold text-ink">{name}</p>
                    <p className="text-xs text-ink/50">{desc}</p>
                    <p className="mt-1 text-sm font-bold text-flame">{price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-ink/10 px-6 py-3 text-xs text-ink/45">
              <span className="flex items-center gap-1.5"><CheckIcon className="h-3.5 w-3.5 text-green-600" /> Dernière sauvegarde : aujourd'hui à 10:48</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
