import { IMG, INK, ORANGE } from '../productAssets';
import { Arr } from '../components/productPrimitives';

const BrowserDots = () => (
  <div className="flex gap-[5px] px-[12px] h-[26px] items-center border-b" style={{ borderColor: "rgba(22,19,16,.15)" }}>
    <span className="w-[8px] h-[8px] rounded-full" style={{ background: "var(--color-flame-legacy)" }} />
    <span className="w-[8px] h-[8px] rounded-full" style={{ background: "var(--color-editorial-gold)" }} />
    <span className="w-[8px] h-[8px] rounded-full" style={{ background: "#7FB069" }} />
  </div>
);

export default function ProductExamplesSection() {
  return (
    <>
      <div className="absolute fd select-none whitespace-nowrap" style={{ left: 455, top: 8, fontSize: 195, lineHeight: 1, color: "#EAE3D6", letterSpacing: "0.02em" }}>
        MÊME MOTEUR
      </div>
      <h1 className="absolute fd" style={{ left: 104, top: 84, fontSize: 60, lineHeight: 1.05 }}>
        TROIS SALLES.
        <br />
        TROIS TEMPÉRAMENTS.
      </h1>
      <p className="absolute text-[16px]" style={{ left: 104, top: 228, color: "var(--color-editorial-taupe)" }}>
        Sous garde la vérité. L'identité reste la vôtre.
      </p>

      {/* MAMMA ROSA */}
      <div className="absolute card-shadow" style={{ left: 90, top: 318, width: 448, height: 312, transform: "rotate(-2.5deg)", background: "#F3ECDF", borderRadius: 6, overflow: "hidden" }}>
        <BrowserDots />
        <div className="flex justify-end gap-[14px] px-[16px] pt-[10px] fm text-[7px] tracking-[0.14em]" style={{ color: "#7a5c4d" }}>
          <span>ACCUEIL</span><span>MENU</span><span>À PROPOS</span><span>RÉSERVER</span>
        </div>
        <div className="absolute left-[26px] top-[64px] w-[45%]">
          <div className="fs font-semibold" style={{ color: "#A33B2E", fontSize: 33, lineHeight: 1.05 }}>MAMMA<br />ROSA</div>
          <div className="fm text-[8px] tracking-[0.3em] mt-[8px]" style={{ color: "#A33B2E" }}>CUCINA ITALIANA</div>
          <div className="fs text-[10px] mt-[16px] leading-[1.7]" style={{ color: "#A33B2E" }}>
            Pâtes fraîches.<br />Vins nature.<br />Soirées longues.
          </div>
          <button type="button" className="fm text-[8px] tracking-[0.14em] mt-[14px] border px-[12px] py-[6px]" style={{ borderColor: "#A33B2E", color: "#A33B2E" }}>
            VOIR LE MENU
          </button>
          <svg viewBox="0 0 60 40" className="w-[64px] mt-[10px]" fill="none" stroke="#b7ab97" strokeWidth="1.2">
            <path d="M8 36C20 26 34 16 54 6M20 27c-4-1-7-4-8-8 4 0 8 2 9 6M30 20c-4-1-7-4-8-8 4 0 8 2 9 6M40 13c-4-1-7-4-8-8 4 0 8 2 9 6" />
          </svg>
        </div>
        <img src={IMG.pasta} alt="pasta" className="absolute right-0 top-[36px] w-[55%] h-[276px] object-cover"  decoding="async" loading="lazy" />
      </div>
      <div className="absolute fh text-[17px]" style={{ left: 293, top: 644, color: "#4d473e", transform: "rotate(-2deg)" }}>chaleureux</div>

      {/* KNOCK KNOCK */}
      <div className="absolute card-shadow z-20" style={{ left: 516, top: 281, width: 434, height: 312, transform: "rotate(-1deg)", background: "#14100C", borderRadius: 6, overflow: "hidden" }}>
        <div className="flex gap-[5px] px-[12px] h-[26px] items-center border-b" style={{ borderColor: "rgba(255,255,255,.12)" }}>
          <span className="w-[8px] h-[8px] rounded-full" style={{ background: "var(--color-flame-legacy)" }} />
          <span className="w-[8px] h-[8px] rounded-full" style={{ background: "var(--color-editorial-gold)" }} />
          <span className="w-[8px] h-[8px] rounded-full" style={{ background: "#7FB069" }} />
        </div>
        <div className="flex justify-end gap-[16px] px-[16px] pt-[10px] fm text-[7px] tracking-[0.14em] text-[var(--color-editorial-cream-alt)]">
          <span>ACCUEIL</span><span>MENU</span><span>À PROPOS</span>
          <span className="border px-[8px] py-[3px]" style={{ borderColor: ORANGE, color: ORANGE }}>RÉSERVER</span>
        </div>
        <div className="absolute left-[26px] top-[62px]">
          <div className="fd text-[#F5F1E8]" style={{ fontSize: 44, lineHeight: 0.98 }}>KNOCK<br />KNOCK</div>
          <div className="fm font-bold text-[8px] tracking-[0.2em] mt-[14px]" style={{ color: ORANGE }}>
            SMASH BURGERS<br />COCKTAILS &amp; BEATS
          </div>
          <button type="button" className="fm text-[8px] tracking-[0.14em] mt-[16px] border px-[12px] py-[6px]" style={{ borderColor: ORANGE, color: ORANGE }}>
            VOIR LE MENU
          </button>
        </div>
        <img src={IMG.burger} alt="burger" className="absolute right-0 top-[26px] w-[62%] h-[286px] object-cover"  decoding="async" loading="lazy" />
      </div>
      <div className="absolute fh text-[17px]" style={{ left: 697, top: 611, color: "#4d473e" }}>audacieux</div>

      {/* SORA */}
      <div className="absolute card-shadow" style={{ left: 888, top: 352, width: 452, height: 330, transform: "rotate(2.5deg)", background: "#F5F2EC", borderRadius: 6, overflow: "hidden" }}>
        <BrowserDots />
        <div className="flex justify-end gap-[16px] px-[16px] pt-[10px] fm text-[7px] tracking-[0.14em] text-[var(--color-editorial-copy)]">
          <span>ACCUEIL</span><span>MENU</span><span>À PROPOS</span>
          <span className="border px-[8px] py-[3px]" style={{ borderColor: "var(--color-editorial-copy)" }}>RÉSERVER</span>
        </div>
        <div className="absolute left-[30px] top-[96px]">
          <div className="text-[26px] font-light tracking-[0.4em]" style={{ color: "var(--color-editorial-deep)" }}>SORA</div>
          <div className="fm text-[8px] tracking-[0.22em] mt-[18px] leading-[2]" style={{ color: "var(--color-editorial-taupe)" }}>
            CUISINE JAPONAISE<br />SAISON &amp; PRÉCISION
          </div>
          <button type="button" className="fm text-[8px] tracking-[0.14em] mt-[18px] border px-[12px] py-[6px]" style={{ borderColor: "var(--color-editorial-copy)", color: "var(--color-editorial-copy)" }}>
            VOIR LE MENU
          </button>
        </div>
        <img src={IMG.sashimi} alt="sashimi" className="absolute right-0 top-[46px] w-[55%] h-[284px] object-cover"  decoding="async" loading="lazy" />
      </div>
      <div className="absolute fh text-[17px]" style={{ left: 1078, top: 688, color: "#4d473e", transform: "rotate(-2deg)" }}>précis</div>

      <button type="button" data-route="/exemples" className="absolute flex items-center gap-[10px] fm font-bold text-[11px] tracking-[0.14em] border-b-2 pb-[8px]" style={{ left: 104, top: 722, borderColor: INK }}>
        VOIR LES EXEMPLES <Arr className="w-[16px] h-[11px]" />
      </button>
    </>
  );
}
