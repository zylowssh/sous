import { useState } from 'react';
import { IMG, INK, ORANGE } from '../tarifsAssets';
import { Arr, Pin, Underline } from '../components/tarifsPrimitives';

const FAQ = [
  ['Est-ce sans engagement ?', 'Oui. Vous pouvez annuler à tout moment.'],
  ['Y a-t-il des frais de mise en place ?', 'Non. Aucun frais de mise en place, sur toutes les offres.'],
  ["Puis-je changer d'offre ?", 'Oui, à tout moment, au prorata.'],
  ['Comment se connecte la caisse ?', 'Via votre caisse existante (Lightspeed, Zettle, Tiller…).'],
  ['Puis-je garder mon domaine ?', 'Oui, votre domaine reste le vôtre.'],
  ['Mes données sont-elles protégées ?', 'Oui, hébergement sécurisé en Europe.'],
];

export default function TarifsFaqSection() {
  const [open, setOpen] = useState(0);
  const heights = FAQ.map((_, i) => (open === i ? 125 : 60));
  return (
    <>
      <div className="absolute fm font-bold text-[14px]" style={{ left: 68, top: 133, color: ORANGE }}>5/6</div>
      <h2 className="absolute fd" style={{ left: 72, top: 158, fontSize: 56, lineHeight: 1.02 }}>
        LES QUESTIONS
        <br />
        AVANT DE DIRE OUI<span style={{ color: ORANGE }}>.</span>
      </h2>

      <div className="absolute" style={{ left: 67, top: 310, width: 740, height: heights.reduce((a, b) => a + b, 0), border: "1px solid rgba(22,19,16,.35)" }}>
        {FAQ.map((f, i) => {
          const top = heights.slice(0, i).reduce((a, b) => a + b, 0);
          return (
            <div key={f[0]} className="absolute left-0 w-full" style={{ top, height: heights[i], borderBottom: i < FAQ.length - 1 ? "1px solid rgba(22,19,16,.25)" : "none" }}>
              <button
                type="button"
                className="w-full flex items-center justify-between px-[22px] h-[60px]"
                aria-expanded={open === i}
                aria-controls={`tarifs-faq-answer-${i}`}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span className="text-[14px] font-bold text-left">{f[0]}</span>
                <svg viewBox="0 0 16 10" className="w-[16px] h-[10px]" fill="none" stroke={open === i ? ORANGE : INK} strokeWidth="2" strokeLinecap="round">
                  {open === i ? <path d="M2 8l6-6 6 6" /> : <path d="M2 2l6 6 6-6" />}
                </svg>
              </button>
              <p
                id={`tarifs-faq-answer-${i}`}
                className="text-[14px] px-[22px] pb-[20px]"
                style={{ color: "var(--color-editorial-copy)" }}
                hidden={open !== i}
              >
                {f[1]}
              </p>
            </div>
          );
        })}
      </div>

      <div className="absolute paper-shadow" style={{ left: 895, top: 235, width: 510, height: 375, background: "var(--color-editorial-paper-soft)", transform: "rotate(1.5deg)", padding: 24 }}>
        <Pin x={247} y={-14} s={26} />
        <div className="flex h-full">
          <div className="flex-1 pr-[20px]">
            <div className="fd text-[25px] leading-[1.15] mt-[30px]">
              UNE QUESTION
              <br />
              QUI N'EST PAS ICI <span style={{ color: ORANGE }}>?</span>
            </div>
            <div className="h-px mt-[18px]" style={{ background: "rgba(22,19,16,.3)" }} />
            <div className="text-[13px] mt-[18px]">Écrivez-nous à</div>
            <div className="text-[15px] font-bold mt-[4px]" style={{ color: ORANGE }}>contact@sous-app.fr</div>
            <div className="h-px mt-[18px]" style={{ background: "rgba(22,19,16,.3)" }} />
            <button type="button" data-route="/signup" className="flex items-center gap-[10px] fm font-bold text-[11px] tracking-[0.1em] px-[22px] h-[42px] mt-[22px] rounded-[3px]" style={{ background: ORANGE, color: "var(--color-editorial-paper)" }}>
              PARLER À L'ÉQUIPE <Arr className="w-[15px] h-[10px]" color="var(--color-editorial-paper)" />
            </button>
          </div>
          <img src={IMG.chef} alt="chef" className="w-[195px] h-[300px] object-cover mt-[10px]"  decoding="async" loading="lazy" />
        </div>
      </div>

      <div className="absolute" style={{ left: 990, top: 690, transform: "rotate(-1deg)" }}>
        <div className="fh text-[19px]" style={{ color: "var(--color-editorial-deep)" }}>On répond en humain.</div>
        <Underline className="w-[130px] h-[8px]" color="var(--color-editorial-deep)" />
      </div>
      <svg viewBox="0 0 40 50" className="absolute" style={{ left: 1160, top: 660, width: 40 }} fill="none" stroke="var(--color-editorial-deep)" strokeWidth="1.6" strokeLinecap="round">
        <path d="M6 46C20 40 30 26 32 6M26 12l6-7 6 7" />
      </svg>
    </>
  );
}
