import Reveal from './Reveal';
import Section, { SectionHead } from './Section';
import { POS } from '../data';
import { ArrowRight, Check, Sync } from './marks';

export default function PosSync() {
  return (
    <Section id="caisse">
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
        <Reveal>
          <SectionHead
            label="La source de vérité"
            title="Votre caisse connaît déjà la bonne carte."
            lead="Sous s’y branche et la lit. Les plats, les prix, les catégories et les ruptures viennent de là — pas d’un logiciel de plus à tenir à jour après le service."
          />

          <div className="mt-8 rounded-xl border border-ink/12 bg-chalk/40 p-6">
            <p className="font-display text-lg font-medium">Ce que ça change concrètement</p>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink/75">
              {[
                'Vous ne saisissez jamais un prix deux fois.',
                'Une rupture en salle disparaît du menu en ligne dans la minute.',
                'Le site public et le QR de table ne peuvent pas se contredire : c’est la même source.',
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sauge" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="overflow-hidden rounded-xl border border-ink/12 bg-paper shadow-soft">
            <div className="flex items-center gap-3 border-b border-ink/10 px-6 py-4">
              <Sync className="h-4 w-4 text-sauge" />
              <p className="label !text-ink/60">Caisses prises en charge</p>
            </div>

            <ul className="divide-y divide-ink/8">
              {POS.map((p) => (
                <li
                  key={p.name}
                  className="flex flex-col items-start gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <div>
                    <p className="font-display text-[17px] font-medium">{p.name}</p>
                    <p className="mt-1 text-[13px] text-ink/55">{p.note}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold ${
                      p.status.startsWith('Synchronisation')
                        ? 'bg-sauge/10 text-sauge'
                        : 'bg-amber/12 text-amber'
                    }`}
                  >
                    {p.status}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-ink/10 bg-chalk/30 px-6 py-5">
              <p className="text-[14px] leading-relaxed text-ink/70">
                Pas de caisse compatible ? Sous lit aussi une carte en PDF, une photo ou un document
                Word. Vous validez l’extraction une fois — allergènes compris — et la suite passe par
                message.
              </p>
              <p className="mt-3 inline-flex items-center gap-2 text-[13px] font-semibold text-sauge">
                Nous dire quelle caisse vous utilisez
                <ArrowRight className="h-4 w-4" />
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
