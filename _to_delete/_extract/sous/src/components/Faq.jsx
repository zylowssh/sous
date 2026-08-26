import { useState } from 'react';
import Reveal from './Reveal';
import Section, { SectionHead } from './Section';
import { FAQ } from '../data';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHead
          label="Questions"
          title="Ce qu’on nous demande en premier."
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <Reveal delay={100}>
          <ul className="border-t border-ink/12">
            {FAQ.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-ink/12">
                  <h3>
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left"
                    >
                      <span className="font-display text-[17px] font-medium leading-snug md:text-lg">{f.q}</span>
                      <span
                        className={`mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-ink/20 transition-transform duration-300 ${
                          isOpen ? 'rotate-45 border-sauge text-sauge' : 'text-ink/50'
                        }`}
                      >
                        <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
                          <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl pb-6 pr-10 text-[15px] leading-relaxed text-ink/70">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
