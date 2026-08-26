import Reveal from './Reveal';
import Section, { SectionHead } from './Section';
import { PLANS } from '../data';
import { ArrowRight, Check } from './marks';
import { goToSection } from './fx';

export default function Pricing() {
  return (
    <Section id="tarifs" bg="bg-paper">
      <SectionHead
        align="center"
        label="Tarifs"
        title="Le prix d’un couvert par mois."
        lead="Sans engagement. Le premier mois est accompagné : on branche la caisse et on relit la carte avec vous."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {PLANS.map((p, i) => (
          <Reveal key={p.name} delay={i * 110}>
            <div
              className={`flex h-full flex-col rounded-xl border p-7 ${
                p.featured ? 'border-ink/25 bg-cream shadow-lift' : 'border-ink/12 bg-cream/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                {p.featured && (
                  <span className="rounded-full bg-sauge/12 px-3 py-1 text-[11px] font-semibold text-sauge">
                    Le plus choisi
                  </span>
                )}
              </div>

              <p className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-[2.4rem] font-semibold leading-none">{p.price}</span>
                {p.unit && <span className="text-[13px] text-ink/55">{p.unit}</span>}
              </p>
              <p className="mt-3 text-[15px] text-ink/65">{p.for}</p>

              <ul className="mt-6 flex-1 space-y-3 border-t border-ink/10 pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[15px] leading-snug text-ink/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-sauge" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => goToSection('acces')}
                className={`mt-7 w-full justify-center ${p.featured ? 'btn-primary' : 'btn-ghost'}`}
              >
                {p.cta}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={300}>
        <p className="mt-8 text-center text-[13px] text-ink/50">
          Prix TTC. Nom de domaine et hébergement en France compris. Résiliable en un message —
          le même que celui qui sert à modifier votre carte.
        </p>
      </Reveal>
    </Section>
  );
}
