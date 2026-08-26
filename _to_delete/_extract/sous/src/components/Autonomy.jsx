import Reveal from './Reveal';
import Section, { SectionHead } from './Section';
import { AUTONOMY } from '../data';
import { Check, Lock, Scale } from './marks';

const badge = {
  auto: { text: 'Automatique', cls: 'bg-sauge/12 text-sauge' },
  earned: { text: 'Autonomie à mériter', cls: 'bg-ficelle/50 text-ink/70' },
  always: { text: 'Toujours validé par vous', cls: 'bg-amber/12 text-amber' },
};

export default function Autonomy() {
  return (
    <Section id="autonomie" bg="bg-paper">
      <SectionHead
        label="L’échelle d’autonomie"
        title="La confiance se gagne ligne par ligne, pas d’un bloc."
        lead="Sous commence en demandant la permission pour tout. Chaque type de modification ne passe en automatique qu’après avoir fait ses preuves — et certains n’y passent jamais."
      />

      <Reveal delay={120}>
        <div className="mt-12 overflow-hidden rounded-xl border border-ink/12 bg-paper shadow-soft">
          <div className="hidden grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)_minmax(0,1.1fr)] gap-4 border-b border-ink/10 bg-chalk/40 px-6 py-3 md:grid">
            <p className="label">Ce qui change</p>
            <p className="label">D’où ça vient</p>
            <p className="label">Qui décide</p>
          </div>

          <ul className="divide-y divide-ink/8">
            {AUTONOMY.map((row) => (
              <li key={row.what} className="grid gap-2 px-6 py-5 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)_minmax(0,1.1fr)] md:items-center md:gap-4">
                <p className="font-display text-[17px] font-medium leading-snug">{row.what}</p>
                <p className="text-[14px] text-ink/55">{row.source}</p>
                <div>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ${badge[row.level].cls}`}>
                    {row.level === 'always' ? <Lock className="h-3 w-3" /> : <Check className="h-3 w-3" />}
                    {badge[row.level].text}
                  </span>
                  <p className="mt-1.5 text-[13px] text-ink/50">{row.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-ink/12 bg-chalk/40 p-6 sm:flex-row sm:items-center">
          <Scale className="h-6 w-6 shrink-0 text-sauge" />
          <p className="text-[15px] leading-relaxed text-ink/75">
            <span className="font-medium text-ink">C’est vous qui déplacez le curseur, jamais Sous.</span>{' '}
            Il peut le proposer quand les statistiques le justifient ; l’autorisation reste un geste
            humain, révocable à tout moment.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
