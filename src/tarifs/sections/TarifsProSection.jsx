import { Fragment } from 'react';
import { IMG, ORANGE } from '../tarifsAssets';
import { Arr, Check, SousLogoMark, Star, Underline } from '../components/tarifsPrimitives';

export default function TarifsProSection() {
  return (
    <>
      <h1 className="absolute fd" style={{ left: 58, top: 168, fontSize: 68, lineHeight: 1.0, color: "var(--color-editorial-paper)" }}>
        PRO, QUAND
        <br />
        VOTRE SITE
        <br />
        DEVIENT
        <br />
        UN <span style={{ color: ORANGE }}>LEVIER.</span>
      </h1>
      <p className="absolute text-[13px] leading-[1.7]" style={{ left: 58, top: 515, color: "var(--color-editorial-gray)" }}>
        Le menu reste juste. Les réservations,
        <br />
        promotions et visites deviennent pilotables.
      </p>
      <div className="absolute" style={{ left: 58, top: 585 }}>
        <div className="flex items-start gap-[10px]">
          <Star className="w-[18px] h-[18px] mt-[4px]" color="#C9B28A" />
          <div className="fh text-[17px] leading-[1.4]" style={{ color: "#C9B28A", transform: "rotate(-2deg)" }}>
            Pour ceux qui veulent faire venir,
            <br />
            pas seulement informer.
          </div>
        </div>
        <Underline className="w-[150px] h-[8px] ml-[26px]" color="#8a7a5c" />
      </div>

      {/* whatsapp */}
      <div className="absolute rounded-[8px]" style={{ left: 380, top: 285, width: 178, height: 205, background: "var(--color-ink)", border: "1px solid var(--color-editorial-charcoal)", padding: 14 }}>
        <div className="flex items-center gap-[8px]">
          <svg viewBox="0 0 16 16" className="w-[13px] h-[13px]" fill="none" stroke="var(--color-editorial-muted)" strokeWidth="1.3">
            <path d="M8 2a6 6 0 0 0-5.2 9L2 14l3.1-.8A6 6 0 1 0 8 2Z" />
          </svg>
          <span className="fm text-[7px] tracking-[0.14em]" style={{ color: "var(--color-editorial-muted)" }}>VOUS (VIA WHATSAPP)</span>
        </div>
        <div className="relative rounded-[6px] p-[10px] text-[10px] leading-[1.5] mt-[12px] pr-[44px]" style={{ background: "var(--color-editorial-paper-alt)", color: "var(--color-editorial-deep)" }}>
          Ce soir, formule avant-spectacle
          <span className="absolute right-[8px] bottom-[6px] text-[8px]" style={{ color: "#7c9a6d" }}>16:47 ✓✓</span>
        </div>
      </div>

      <svg viewBox="0 0 30 20" className="absolute" style={{ left: 565, top: 362, width: 30 }} fill="none" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round">
        <path d="M2 4c8 8 16 12 24 12M20 12l7 4-5 5" />
      </svg>

      {/* draft card */}
      <div className="absolute card-shadow rounded-[6px]" style={{ left: 595, top: 222, width: 275, height: 345, background: "var(--color-editorial-paper-soft)", padding: 14 }}>
        <SousLogoMark className="h-[38px] w-auto" />
        <div className="text-[10px] mt-[8px]">Proposition de mise à jour</div>
        <div className="fm font-bold text-[8px] tracking-[0.12em]">PROMOTION</div>
        <span className="absolute right-[14px] top-[40px] fm font-bold text-[11px] tracking-[0.08em] border-2 rounded-[3px] px-[10px] py-[3px]" style={{ color: ORANGE, borderColor: ORANGE, transform: "rotate(8deg)", background: "rgba(242,237,228,.9)" }}>
          BROUILLON
        </span>
        <div className="relative mt-[10px] overflow-hidden rounded-[4px]" style={{ background: "var(--color-editorial-near-black)", height: 178 }}>
          <div className="absolute left-[12px] top-[12px] w-[55%]">
            <div className="fm font-bold text-[7px] tracking-[0.14em]" style={{ color: ORANGE }}>CE SOIR</div>
            <div className="fd text-[15px] leading-[1.15] mt-[4px]" style={{ color: "var(--color-editorial-paper)" }}>FORMULE<br />AVANT-SPECTACLE</div>
            <div className="fm text-[8px] leading-[1.6] mt-[8px]" style={{ color: "var(--color-editorial-gray)" }}>Entrée + Plat<br />ou Plat + Dessert</div>
            <div className="fd text-[17px] mt-[8px]" style={{ color: ORANGE }}>28 €</div>
          </div>
          <img src={IMG.promo} alt="" className="absolute right-0 top-0 w-[45%] h-full object-cover"  decoding="async" loading="lazy" />
        </div>
        <div className="flex gap-[8px] mt-[12px]">
          <button type="button" className="flex-1 flex items-center justify-center gap-[6px] fm font-bold text-[8px] tracking-[0.08em] py-[10px] rounded-[3px]" style={{ background: ORANGE, color: "var(--color-editorial-brown-black)" }}>
            <Check s={10} color="var(--color-editorial-brown-black)" /> VALIDER ET PUBLIER
          </button>
          <button type="button" className="fm font-bold text-[8px] tracking-[0.08em] px-[14px] rounded-[3px] border" style={{ borderColor: "var(--color-editorial-copy)" }}>MODIFIER</button>
        </div>
      </div>

      <svg viewBox="0 0 26 12" className="absolute" style={{ left: 880, top: 366, width: 26 }} fill="none" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round">
        <path d="M1 6h20M16 1.5 22 6l-6 4.5" />
      </svg>

      {/* browser */}
      <div className="absolute card-shadow rounded-[8px] overflow-hidden" style={{ left: 905, top: 205, width: 262, height: 330, background: "var(--color-editorial-paper-soft)" }}>
        <div className="flex items-center gap-[5px] px-[10px] h-[20px]" style={{ background: "var(--color-editorial-paper-alt)", borderBottom: "1px solid rgba(22,19,16,.15)" }}>
          <span className="w-[7px] h-[7px] rounded-full" style={{ background: "var(--color-flame-legacy)" }} />
          <span className="w-[7px] h-[7px] rounded-full" style={{ background: "var(--color-editorial-gold)" }} />
          <span className="w-[7px] h-[7px] rounded-full" style={{ background: "#7FB069" }} />
          <span className="fm text-[7px] ml-auto" style={{ color: "var(--color-editorial-muted)" }}>sous-restaurant.fr</span>
        </div>
        <div className="px-[12px] pt-[6px]">
          <SousLogoMark className="h-[34px] w-auto" />
        </div>
        <div className="relative mt-[8px]" style={{ height: 195 }}>
          <img src={IMG.trattoria} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(.5)" }}  decoding="async" loading="lazy" />
          <div className="absolute left-[12px] top-[24px]">
            <div className="fd text-[21px] leading-[1.1]" style={{ color: "var(--color-editorial-paper)" }}>SOIRÉE<br />THÉÂTRE ?</div>
            <div className="text-[9px] mt-[4px]" style={{ color: "#D8D2C6" }}>On a votre table.</div>
            <button type="button" className="fm font-bold text-[7px] tracking-[0.1em] px-[10px] py-[7px] rounded-[2px] mt-[10px]" style={{ background: ORANGE, color: "var(--color-editorial-paper)" }}>
              RÉSERVER MAINTENANT
            </button>
          </div>
        </div>
        <div className="mx-[10px] my-[10px] px-[10px] py-[8px] rounded-[3px]" style={{ background: "var(--color-editorial-near-black)" }}>
          <div className="fm font-bold text-[6px] tracking-[0.14em]" style={{ color: ORANGE }}>CE SOIR</div>
          <div className="flex justify-between items-baseline mt-[2px]">
            <span className="fm font-bold text-[9px]" style={{ color: "var(--color-editorial-paper)" }}>FORMULE AVANT-SPECTACLE</span>
            <span className="fd text-[12px]" style={{ color: ORANGE }}>28 €</span>
          </div>
          <div className="fm text-[7px] mt-[2px]" style={{ color: "var(--color-editorial-muted)" }}>Entrée + Plat ou Plat + Dessert</div>
        </div>
      </div>

      {/* reservation card */}
      <div className="absolute card-shadow rounded-[4px] z-10" style={{ left: 1015, top: 515, width: 160, height: 140, background: "var(--color-editorial-paper-soft)", padding: 14 }}>
        <div className="fm font-bold text-[7px] tracking-[0.12em] pb-[6px]" style={{ borderBottom: "1px solid rgba(22,19,16,.3)" }}>RÉSERVATION CONFIRMÉE</div>
        <div className="text-[9.5px] leading-[1.75] mt-[8px]">
          Marie Dupont<br />Sam. 11 mai • 19:30<br />2 personnes<br />Table n°12
        </div>
        <SousLogoMark className="mt-[2px] h-[28px] w-auto" />
      </div>

      {/* price ticket */}
      <div className="absolute card-shadow" style={{ left: 1207, top: 435, width: 178, height: 220, background: "var(--color-editorial-paper-alt)", padding: "26px 16px 16px" }}>
        <span className="absolute w-[22px] h-[22px] rounded-full" style={{ left: "50%", marginLeft: -11, top: -11, background: "#0B0A08" }} />
        <span className="absolute w-[22px] h-[22px] rounded-full" style={{ left: "50%", marginLeft: -11, bottom: -11, background: "#0B0A08" }} />
        <div className="fd text-[46px] text-center" style={{ color: ORANGE }}>89 €</div>
        <div className="fm font-bold text-[12px] tracking-[0.18em] text-center mt-[2px]" style={{ color: ORANGE }}>/ MOIS</div>
        <div className="border-t border-dashed mt-[14px] mb-[14px]" style={{ borderColor: "var(--color-editorial-muted)" }} />
        <button type="button" data-route="/signup?plan=pro" className="w-full flex items-center justify-center gap-[8px] fm font-bold text-[10px] tracking-[0.1em] py-[11px] rounded-[3px]" style={{ background: ORANGE, color: "var(--color-editorial-paper)" }}>
          CHOISIR PRO <Arr className="w-[14px] h-[10px]" color="var(--color-editorial-paper)" />
        </button>
      </div>

      {/* bottom bar */}
      <div className="absolute flex items-center rounded-[6px]" style={{ left: 262, top: 710, width: 920, height: 50, border: "1px solid var(--color-editorial-copy-dark)" }}>
        {["Tout Essentiel", "Promotions", "Réservations", "Statistiques", "Support prioritaire"].map((t, i) => (
          <Fragment key={t}>
            {i > 0 && <span className="w-px h-[26px]" style={{ background: "var(--color-editorial-copy-dark)" }} />}
            <span className="flex-1 flex items-center justify-center gap-[10px] text-[12px]" style={{ color: "var(--color-editorial-cream-alt)" }}>
              <span className="text-[14px]" style={{ color: ORANGE }}>+</span> {t}
            </span>
          </Fragment>
        ))}
      </div>
    </>
  );
}
