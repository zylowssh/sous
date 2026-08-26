import Reveal from './Reveal';
import Section, { SectionHead } from './Section';
import { QrGlyph } from './marks';
import { IMG } from '../data';

export default function QrTable() {
  return (
    <Section id="qr">
      <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <Reveal>
          <SectionHead
            label="Le menu QR en salle"
            title="La table et Google lisent la même carte."
            lead="Le QR posé sur la table n’est pas un PDF déposé une fois puis oublié. C’est la même carte que votre site public, alimentée par la même caisse."
          />

          <ul className="mt-8 space-y-5">
            {[
              {
                t: 'Le client scanne, il voit ce qui est réellement servi',
                d: 'Un plat épuisé disparaît des deux côtés en même temps. Plus de commande impossible à honorer.',
              },
              {
                t: 'Vous vous en servez tous les jours',
                d: 'C’est ce qui rend l’outil vivant : la carte est tenue à jour pour la salle, et le site public en profite sans que personne y pense.',
              },
              {
                t: 'Les allergènes sont là où la loi les attend',
                d: 'Consultables plat par plat, sur le même écran que le prix.',
              },
            ].map((x, i) => (
              <li key={x.t} className="flex gap-5">
                <span className="mt-1 font-display text-lg font-semibold text-ink/25 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className="block font-display text-[17px] font-medium">{x.t}</span>
                  <span className="mt-1.5 block text-[15px] leading-relaxed text-ink/65">{x.d}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="relative mx-auto max-w-sm">
            {/* Écran de téléphone : le menu tel que le client le voit à table. */}
            <div className="overflow-hidden rounded-[2rem] border border-ink/15 bg-paper p-3 shadow-lift">
              <div className="overflow-hidden rounded-[1.5rem] border border-ink/10">
                <div className="photo-slot aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={IMG.salle}
                    alt="Salle du restaurant"
                    width="900"
                    height="562"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="px-4 py-4">
                  <p className="font-display text-lg font-semibold">Le Comptoir Rive</p>
                  <p className="label mt-1 !tracking-[0.14em]">Carte du 16 août · 20 h 12</p>

                  <ul className="mt-4 space-y-3">
                    {[
                      ['Burrata', '12 €', 'lait'],
                      ['Poulpe grillé', '16 €', 'mollusques'],
                      ['Tagliatelle al ragù', '19 €', 'gluten, œuf'],
                    ].map(([n, p, a], i) => (
                      <li key={n} className={`flex items-start justify-between gap-3 ${i === 1 ? 'opacity-40' : ''}`}>
                        <span>
                          <span className="block text-[14px] font-medium">
                            {n}
                            {i === 1 && (
                              <span className="ml-2 text-[10px] font-semibold uppercase tracking-label text-amber">
                                épuisé
                              </span>
                            )}
                          </span>
                          <span className="mt-0.5 block text-[11px] uppercase tracking-wide text-ink/45">
                            allergènes : {a}
                          </span>
                        </span>
                        <span className="text-[14px] tabular-nums">{p}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 border-t border-ink/10 pt-3 text-[11px] text-ink/45">
                    Prix nets TTC, service compris.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 -top-4 rounded-xl border border-ink/12 bg-cream px-3 py-3 shadow-soft md:-left-8">
              <QrGlyph className="h-10 w-10 text-ink" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
