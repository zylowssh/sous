import { useState } from 'react';
import Reveal from './Reveal';
import { Check, Clock, Lock, Pencil, SousWordmark } from './marks';

const changes = [
  { label: 'Menu « Brunch du dimanche » créé', detail: '6 plats repris de votre carte', flag: null },
  { label: 'Horaires du dimanche : 11 h – 15 h', detail: 'Ajouté au site et à la fiche Google', flag: 'valid' },
  { label: 'Mise en avant sur la page d’accueil', detail: 'Visible jusqu’au 2 mars', flag: null },
  {
    label: 'Allergènes des 6 plats',
    detail: 'Repris de la carte — à relire avant publication',
    flag: 'lock',
  },
];

const Bubble = ({ side = 'left', time, children, name }) => (
  <div className={`flex flex-col ${side === 'right' ? 'items-end' : 'items-start'}`}>
    <p className="mb-1.5 px-1 text-[10px] font-semibold uppercase tracking-label text-cream/40">{name}</p>
    <div
      className={`max-w-[92%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed ${
        side === 'right' ? 'rounded-br-sm bg-cream/12 text-cream' : 'rounded-bl-sm bg-cream/[0.06] text-cream/90'
      }`}
    >
      {children}
    </div>
    <p className="mt-1.5 px-1 text-[11px] text-cream/35">{time}</p>
  </div>
);

export default function ConfirmLoop() {
  const [state, setState] = useState('draft'); // draft | editing | published

  return (
    <section id="boucle" className="scroll-mt-20 bg-coal text-cream">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <p className="label !text-cream/45">Le mécanisme</p>
            <h2 className="mt-4 text-[2rem] font-semibold leading-[1.12] text-cream md:text-[2.9rem]">
              Vous dictez. Sous prépare. Vous publiez.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream/65 md:text-lg">
              Un message entre deux services suffit — écrit ou vocal. Sous n’envoie jamais une
              modification en ligne de sa propre initiative : il vous renvoie un brouillon, vous
              tranchez.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8">
          {/* Colonne 1 — la conversation */}
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-cream/12 bg-cream/[0.03] p-5 md:p-7">
              <div className="flex items-center justify-between border-b border-cream/10 pb-4">
                <p className="label !text-cream/45">WhatsApp · Le Comptoir Rive</p>
                <span className="text-[11px] text-cream/35">SMS et e-mail possibles</span>
              </div>

              <div className="mt-6 space-y-6">
                <Bubble side="right" name="Vous" time="10 h 41">
                  On lance le brunch dimanche prochain. Faites-en quelque chose de propre.
                  <span className="mt-2 flex items-center gap-2 text-[12px] text-cream/45">
                    <span className="h-1 w-16 rounded-full bg-cream/25" /> message vocal · 9 s
                  </span>
                </Bubble>

                <Bubble name="Sous" time="10 h 42">
                  J’ai préparé un brouillon : menu brunch, horaires du dimanche et une mise en avant
                  sur l’accueil.
                  <strong className="mt-2 block font-semibold text-cream">Rien n’est en ligne.</strong>
                  Vous validez à droite.
                </Bubble>

                {state === 'editing' && (
                  <>
                    <Bubble side="right" name="Vous" time="10 h 43">
                      Enlève la mise en avant, garde le menu et les horaires.
                    </Bubble>
                    <Bubble name="Sous" time="10 h 43">
                      C’est retiré du brouillon. Toujours rien en ligne — je réattends votre feu vert.
                    </Bubble>
                  </>
                )}

                {state === 'published' && (
                  <Bubble name="Sous" time="10 h 43">
                    Publié. Le site et le menu QR sont à jour.
                    <span className="mt-2 block text-[13px] text-cream/60">
                      Les mises en avant, ça fait 7 brouillons sur 10 que vous validez sans rien
                      changer. À 10, je peux les publier seul — si vous me le permettez.
                    </span>
                  </Bubble>
                )}
              </div>
            </div>
          </Reveal>

          {/* Colonne 2 — le brouillon, et les deux seuls boutons qui comptent */}
          <Reveal delay={200}>
            <div className="flex h-full flex-col rounded-2xl border border-cream/12 bg-cream/[0.03] p-5 md:p-7">
              <div className="flex items-center justify-between border-b border-cream/10 pb-4">
                <p className="label !text-cream/45">
                  {state === 'published' ? 'Publié' : 'Brouillon — non publié'}
                </p>
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold ${
                    state === 'published' ? 'bg-sauge/25 text-cream' : 'bg-amber/20 text-amber'
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {state === 'published' ? 'En ligne à 10 h 43' : 'En attente de vous'}
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-4">
                {changes
                  .filter((c) => !(state === 'editing' && c.label.startsWith('Mise en avant')))
                  .map((c) => (
                    <li key={c.label} className="flex gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          state === 'published' ? 'bg-sauge/30 text-cream' : 'bg-cream/10 text-cream/50'
                        }`}
                      >
                        {c.flag === 'lock' ? <Lock className="h-3 w-3" /> : <Check className="h-3 w-3" />}
                      </span>
                      <span>
                        <span className="block text-[15px] leading-snug text-cream/90">{c.label}</span>
                        <span className={`mt-0.5 block text-[13px] ${c.flag === 'lock' ? 'text-amber' : 'text-cream/45'}`}>
                          {c.detail}
                        </span>
                      </span>
                    </li>
                  ))}
              </ul>

              <div className="mt-7 border-t border-cream/10 pt-6">
                {state === 'published' ? (
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="inline-flex items-center gap-2 text-[14px] text-cream/70">
                      <Clock className="h-4 w-4 text-sauge" />
                      Site public et menu QR mis à jour ensemble.
                    </p>
                    <button
                      onClick={() => setState('draft')}
                      className="text-[13px] font-semibold text-cream/50 underline underline-offset-4 hover:text-cream"
                    >
                      Rejouer
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => setState('published')}
                        className="inline-flex items-center gap-2 rounded-lg bg-sauge px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-sauged"
                      >
                        <Check className="h-4 w-4" />
                        Publier
                      </button>
                      <button
                        onClick={() => setState('editing')}
                        className="inline-flex items-center gap-2 rounded-lg border border-cream/25 px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
                      >
                        <Pencil className="h-4 w-4" />
                        Modifier
                      </button>
                    </div>
                    <p className="mt-4 text-[13px] leading-relaxed text-cream/45">
                      Tant que vous n’avez pas tranché, vos clients voient l’ancienne version. C’est
                      voulu : une page fausse coûte plus cher qu’une page en retard.
                    </p>
                  </>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
