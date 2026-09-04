import { INK, ORANGE } from '../productAssets';
import { AIcon, Arr, HandArrow, Pin, QR, Sawtooth, SousLogoMark, Underline } from '../components/productPrimitives';

const LineArrow = ({ flex = 1, arrow = true }) => (
  <div className="relative h-[1.5px]" style={{ background: INK, flexGrow: flex }}>
    {arrow && (
      <svg viewBox="0 0 10 10" className="absolute right-[-2px] top-[-4px] w-[9px] h-[9px]" fill="none" stroke={INK} strokeWidth="1.5">
        <path d="M1 1l8 4-8 4" />
      </svg>
    )}
  </div>
);
const Tick = () => <span className="w-[1.5px] h-[12px]" style={{ background: INK }} />;

export default function ProductPipelineSection() {
  return (
    <>
      <div className="absolute fh font-semibold text-[17px]" style={{ left: 322, top: 96, color: ORANGE }}>UNE SEULE SOURCE</div>
      <h1 className="absolute fd" style={{ left: 320, top: 122, fontSize: 60, lineHeight: 1.05 }}>
        LA CAISSE ENTRE.
        <br />
        <span style={{ color: ORANGE }}>RIEN</span> À RESSAISIR.
      </h1>

      {/* pinned note */}
      <div className="absolute soft-shadow" style={{ left: 1042, top: 160, width: 178, transform: "rotate(2deg)", background: "#F1E9D9", padding: "22px 18px 16px" }}>
        <Pin x={81} y={-8} />
        <div className="fh text-[17px] leading-[1.4]" style={{ color: "var(--color-editorial-deep)" }}>
          Le menu est
          <br />
          le point de vérité.
        </div>
        <Underline className="w-[120px] h-[8px] mt-[4px]" />
      </div>

      {/* pipeline labels */}
      <div className="absolute flex items-center gap-[12px]" style={{ left: 82, top: 372, width: 1296 }}>
        <Tick />
        <LineArrow flex={0.6} arrow={false} />
        <span className="fm font-bold text-[10px] tracking-[0.1em] whitespace-nowrap">CAISSE</span>
        <LineArrow flex={1.4} />
        <span className="fm font-bold text-[10px] tracking-[0.1em] whitespace-nowrap">SOUS. (TRADUCTION &amp; NORMALISATION)</span>
        <LineArrow flex={1.4} />
        <span className="fm font-bold text-[10px] tracking-[0.1em] whitespace-nowrap">SITE WEB &amp; QR MENU (SYNCHRONISÉS)</span>
        <LineArrow flex={0.6} arrow={false} />
        <Tick />
      </div>

      {/* rail */}
      <div className="absolute left-0 right-0" style={{ top: 440, height: 185 }}>
        <div className="absolute left-0 right-0" style={{ top: 8, height: 10, background: "linear-gradient(#7a7468,#403a32)", boxShadow: "0 2px 4px rgba(0,0,0,.35)" }} />
        <div className="absolute left-0 right-0" style={{ top: 152, height: 10, background: "linear-gradient(#7a7468,#403a32)", boxShadow: "0 2px 4px rgba(0,0,0,.35)" }} />
        {[36, 1388].map((x) => (
          <div key={x} className="absolute rounded-[4px]" style={{ left: x, top: -12, width: 16, height: 205, background: "#55504a", boxShadow: "0 3px 6px rgba(0,0,0,.4)" }}>
            <span className="absolute left-1/2 -translate-x-1/2 top-[14px] w-[7px] h-[7px] rounded-full" style={{ background: "#2e2a25" }} />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[14px] w-[7px] h-[7px] rounded-full" style={{ background: "#2e2a25" }} />
          </div>
        ))}
      </div>

      {/* ticket caisse */}
      <div className="absolute soft-shadow" style={{ left: 80, top: 402, width: 315, transform: "rotate(-1deg)", background: "var(--color-editorial-paper-alt)", padding: "20px 26px" }}>
        <div className="fm text-[11px] tracking-[0.18em]">TICKET CAISSE</div>
        <div className="border-t border-dashed mt-[10px]" style={{ borderColor: "var(--color-editorial-muted)" }} />
        <div className="mt-[12px] space-y-[14px]">
          <div className="flex justify-between fm text-[12px]">
            <div>
              <div className="font-bold">Burrata</div>
              <div className="text-[10px] flex items-center gap-[6px] mt-[3px]" style={{ color: "var(--color-editorial-rule)" }}>
                Tomate • basilic • huile d'olive <span style={{ color: ORANGE }}><AIcon k="gluten" s={14} /></span>
              </div>
            </div>
            <div className="font-bold">12 €</div>
          </div>
          <div className="flex justify-between fm text-[12px]">
            <div>
              <div className="font-bold">Daurade grillée</div>
              <div className="text-[10px] flex items-center gap-[6px] mt-[3px]" style={{ color: "var(--color-editorial-rule)" }}>
                Fenouil • citron • huile d'olive <span style={{ color: ORANGE }}><AIcon k="fish" s={14} /></span>
              </div>
            </div>
            <div className="font-bold">24 €</div>
          </div>
        </div>
        <div className="border-t border-dashed mt-[14px]" style={{ borderColor: "var(--color-editorial-muted)" }} />
        <div className="flex justify-between fm text-[11px] mt-[10px]" style={{ color: "var(--color-editorial-copy)" }}>
          <span>TABLE 12</span>
          <span>2 COUVERTS</span>
        </div>
        <Sawtooth color="var(--color-editorial-paper-alt)" />
      </div>

      <HandArrow x={418} y={518} color={INK} />

      {/* menu sous card */}
      <div className="absolute card-shadow rounded-[6px]" style={{ left: 483, top: 400, width: 305, transform: "rotate(0.4deg)", background: "#F4F0E6", padding: "18px 22px" }}>
        <div className="flex items-center gap-[8px] fm font-bold text-[11px] tracking-[0.1em]">
          <SousLogoMark className="w-[11px] h-[14px]" /> MENU SOUS.
        </div>
        <div className="border-t border-dashed mt-[10px]" style={{ borderColor: "var(--color-editorial-muted)" }} />
        <div className="mt-[12px] space-y-[14px]">
          <div>
            <div className="flex justify-between items-center">
              <span className="fd text-[15px]">BURRATA</span>
              <span className="fm font-bold text-[9px] px-[8px] py-[3px] rounded-[2px]" style={{ background: "var(--color-editorial-gold)", color: "#3d3013" }}>OK</span>
            </div>
            <div className="text-[10px] mt-[3px]" style={{ color: "var(--color-editorial-rule)" }}>tomate • basilic • huile d'olive</div>
            <div className="flex items-center gap-[8px] fm text-[9px] tracking-[0.1em] mt-[6px]">
              <span style={{ color: ORANGE }}><AIcon k="gluten" s={15} /></span> GLUTEN
            </div>
          </div>
          <div className="border-t" style={{ borderColor: "rgba(22,19,16,.25)" }} />
          <div>
            <div className="flex justify-between items-center">
              <span className="fd text-[15px]">DAURADE GRILLÉE</span>
              <span className="fm font-bold text-[9px] px-[8px] py-[3px] rounded-[2px]" style={{ background: "var(--color-editorial-gold)", color: "#3d3013" }}>OK</span>
            </div>
            <div className="text-[10px] mt-[3px]" style={{ color: "var(--color-editorial-rule)" }}>fenouil • citron • huile d'olive</div>
            <div className="flex items-center gap-[14px] fm text-[9px] tracking-[0.1em] mt-[6px]">
              <span className="flex items-center gap-[6px]"><span style={{ color: ORANGE }}><AIcon k="fish" s={15} /></span> POISSON</span>
              <span className="flex items-center gap-[6px]"><span style={{ color: ORANGE }}><AIcon k="milk" s={15} /></span> LACTOSE</span>
            </div>
          </div>
        </div>
        <div className="border-t border-dashed mt-[12px]" style={{ borderColor: "var(--color-editorial-muted)" }} />
        <div className="fm text-[9px] tracking-[0.08em] mt-[10px]" style={{ color: "var(--color-editorial-copy)" }}>
          NORMALISÉ • PRÊT POUR LE WEB &amp; QR
        </div>
      </div>

      <HandArrow x={818} y={518} color={INK} />

      {/* web card */}
      <div className="absolute card-shadow rounded-[6px]" style={{ left: 893, top: 413, width: 262, transform: "rotate(-0.6deg)", background: "#F2EEE3", padding: "18px 22px" }}>
        <div className="fm font-bold text-[9px] tracking-[0.16em]" style={{ color: ORANGE }}>LE PLAT DU JOUR</div>
        <div className="mt-[12px] space-y-[14px]">
          <div className="flex justify-between">
            <div>
              <div className="text-[13px] font-bold">Burrata</div>
              <div className="text-[10px] mt-[2px]" style={{ color: "var(--color-editorial-rule)" }}>tomate • basilic • huile d'olive</div>
              <div className="flex items-center gap-[6px] fm text-[9px] tracking-[0.1em] mt-[6px]">
                <span style={{ color: ORANGE }}><AIcon k="gluten" s={15} /></span> GLUTEN
              </div>
            </div>
            <div className="text-[13px] font-bold">12 €</div>
          </div>
          <div className="h-px" style={{ background: "rgba(22,19,16,.25)" }} />
          <div className="flex justify-between">
            <div>
              <div className="text-[13px] font-bold">Daurade grillée</div>
              <div className="text-[10px] mt-[2px]" style={{ color: "var(--color-editorial-rule)" }}>fenouil • citron • huile d'olive</div>
              <div className="flex items-center gap-[12px] fm text-[9px] tracking-[0.1em] mt-[6px]">
                <span className="flex items-center gap-[5px]"><span style={{ color: ORANGE }}><AIcon k="fish" s={15} /></span> POISSON</span>
                <span className="flex items-center gap-[5px]"><span style={{ color: ORANGE }}><AIcon k="milk" s={15} /></span> LACTOSE</span>
              </div>
            </div>
            <div className="text-[13px] font-bold">24 €</div>
          </div>
        </div>
        <div className="h-px mt-[12px]" style={{ background: "rgba(22,19,16,.25)" }} />
        <div className="fm text-[9px] tracking-[0.06em] mt-[10px]" style={{ color: "var(--color-editorial-copy)" }}>
          PRIX À JOUR · ALLERGÈNES AFFICHÉS
        </div>
      </div>

      {/* QR tag */}
      <div className="absolute card-shadow" style={{ left: 1172, top: 410, width: 180, transform: "rotate(1.2deg)", background: "#EAE4D6", padding: "24px 20px 18px" }}>
        <Pin x={82} y={-8} />
        <div className="fd text-[14px] tracking-[0.08em] text-center">NOTRE MENU</div>
        <div className="flex justify-center mt-[12px]">
          <QR seed={7} size={126} bg="#EAE4D6" logo />
        </div>
        <div className="fm text-[8px] tracking-[0.1em] text-center mt-[12px] leading-[1.7]">
          SCANEZ POUR DÉCOUVRIR
          <br />
          LE MENU À JOUR
        </div>
      </div>

      {/* legend */}
      <div className="absolute flex items-center gap-[40px] fm text-[10px]" style={{ left: 82, top: 742, color: "var(--color-editorial-copy)" }}>
        <span className="flex items-center gap-[10px]">
          <span className="fm font-bold text-[9px] px-[7px] py-[3px] rounded-[2px]" style={{ background: "var(--color-editorial-gold)", color: "#3d3013" }}>OK</span>
          Changement maîtrisé
        </span>
        <span className="flex items-center gap-[10px]">
          <span className="w-[9px] h-[9px] rounded-full" style={{ background: ORANGE }} />
          Allergènes normalisés
        </span>
        <span className="flex items-center gap-[10px]">
          <Arr className="w-[26px] h-[12px]" color={INK} />
          Diffusion synchronisée
        </span>
      </div>
    </>
  );
}
