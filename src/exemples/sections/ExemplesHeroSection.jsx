import { IMG, INK, ORANGE } from '../exemplesAssets';
import { Dots, Star, Underline } from '../components/exemplesPrimitives';

export default function ExemplesHeroSection() {
  return (
    <>
      <h1 className="absolute fd" style={{ left: 64, top: 100, fontSize: 66, lineHeight: 1.02 }}>
        DES SITES QUI ONT DU GOÛT.
        <br />
        PAS L'AIR D'UN CATALOGUE.
      </h1>
      <p className="absolute text-[16px]" style={{ left: 64, top: 288, color: "var(--color-editorial-taupe)" }}>
        Même moteur. Chaque restaurant garde sa voix.
      </p>
      <button type="button" data-scroll="exemples-grid" className="absolute fm font-bold text-[11px] tracking-[0.12em] border px-[20px] h-[44px]" style={{ left: 64, top: 336, borderColor: INK }}>
        PARCOURIR LES MAISONS ↓
      </button>
      <div className="absolute" style={{ left: 1195, top: 212, transform: "rotate(-2deg)" }}>
        <div className="flex items-start gap-[8px]">
          <Star className="w-[16px] h-[16px] mt-[4px]" />
          <div className="fh text-[19px] leading-[1.3]" style={{ color: "var(--color-editorial-deep)" }}>
            Pas un template.
            <br />
            Une interprétation.
          </div>
        </div>
        <Underline className="w-[130px] h-[8px] ml-[24px]" />
      </div>

      {/* ---- Mamma Rosa card ---- */}
      <div className="absolute card-shadow overflow-hidden" style={{ left: -30, top: 468, width: 470, height: 520, transform: "rotate(-8deg)", background: "var(--color-ink)", borderRadius: 6 }}>
        <div style={{ background: "var(--color-editorial-paper-alt)" }}><Dots /></div>
        <div className="relative h-full">
          <img src={IMG.pasta} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(.55)" }}  decoding="async" />
          <div className="absolute inset-x-0 top-0 flex justify-between px-[18px] pt-[12px] fm text-[7px] tracking-[0.18em]" style={{ color: "#D9B98C" }}>
            <span className="flex gap-[14px]"><span>LA TRATTORIA</span><span>MENU</span><span>CANTINA</span></span>
            <span>RÉSERVER</span>
          </div>
          <div className="absolute left-[26px] top-[70px]">
            <div className="fs" style={{ color: "#E7C088", fontSize: 34, letterSpacing: 2 }}>Mamma Rosa</div>
            <div className="fm text-[8px] tracking-[0.22em] mt-[6px]" style={{ color: "#D9B98C" }}>CUCINA ITALIANA, CUORE CALDO.</div>
            <button type="button" className="fm text-[8px] tracking-[0.14em] px-[14px] py-[7px] mt-[16px]" style={{ background: ORANGE, color: "var(--color-editorial-paper)" }}>VOIR LE MENU</button>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-between items-center px-[18px] py-[14px]" style={{ background: "#EFE7D8" }}>
            <div className="fm text-[8px] leading-[1.7]" style={{ color: "var(--color-editorial-copy)" }}>
              PRODUITS DE SAISON, RECETTES DE FAMILLE.
              <br />À DEUX PAS DE LA PLACE.
            </div>
            <span className="w-[30px] h-[30px] rounded-full border flex items-center justify-center" style={{ borderColor: "var(--color-editorial-muted)" }}>
              <svg viewBox="0 0 16 16" className="w-[14px] h-[14px]" fill="none" stroke="var(--color-editorial-rule)" strokeWidth="1.1">
                <path d="M8 13V8M8 8c0-2.5 2-4.5 4.5-4.5C12.5 6 10.5 8 8 8ZM8 10c0-1.8-1.4-3.2-3.2-3.2 0 1.8 1.4 3.2 3.2 3.2Z" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* ---- Knock Knock card ---- */}
      <div className="absolute card-shadow overflow-hidden z-10" style={{ left: 440, top: 340, width: 470, height: 560, transform: "rotate(-3deg)", background: "#0d0c0b", borderRadius: 6 }}>
        <div style={{ background: "var(--color-editorial-paper-alt)" }}><Dots /></div>
        <div className="relative h-full">
          <div className="flex justify-between items-center px-[18px] pt-[14px] fm text-[7px] tracking-[0.18em] text-[var(--color-editorial-cream-alt)]">
            <span className="flex gap-[16px]"><span>MENU</span><span>À PROPOS</span><span>PRIVATISATION</span></span>
            <span className="border px-[10px] py-[5px]">COMMANDER</span>
          </div>
          <div className="absolute left-[24px] top-[52px] flex items-start gap-[10px]">
            <div className="fd text-[#F5F1E8]" style={{ fontSize: 58, lineHeight: 0.95 }}>KNOCK<br />KNOCK</div>
            <div className="fh font-semibold text-[20px] mt-[14px]" style={{ color: ORANGE, transform: "rotate(-4deg)" }}>
              BURGER<br />CLUB
            </div>
          </div>
          <div className="absolute left-[26px] top-[248px] fm text-[9px] leading-[2] text-[var(--color-editorial-cream-alt)]">
            SMASHÉS.<br />SAISIS.<br />SANS COMPROMIS.
          </div>
          <button type="button" className="absolute left-[26px] top-[330px] fm text-[8px] tracking-[0.14em] border px-[14px] py-[7px] text-[var(--color-editorial-cream-alt)]" style={{ borderColor: "var(--color-editorial-cream-alt)" }}>
            VOIR LE MENU
          </button>
          <div className="absolute left-[26px] top-[378px] fm text-[7px] leading-[1.7]" style={{ color: "var(--color-editorial-muted)" }}>
            SUR PLACE, À EMPORTER
            <br />OU EN LIVRAISON.
          </div>
          <img src={IMG.burger} alt="" className="absolute right-0 bottom-0 w-[62%] h-[62%] object-cover"  decoding="async" />
        </div>
      </div>

      {/* ---- Sora card ---- */}
      <div className="absolute card-shadow overflow-hidden" style={{ left: 950, top: 335, width: 470, height: 520, transform: "rotate(-5deg)", background: "#F4F2EE", borderRadius: 6 }}>
        <div style={{ background: "var(--color-editorial-paper-alt)" }}><Dots /></div>
        <div className="relative h-full">
          <div className="flex justify-end items-center gap-[16px] px-[18px] pt-[14px] fm text-[7px] tracking-[0.18em]" style={{ color: "var(--color-editorial-copy)" }}>
            <span>À PROPOS</span><span>MENU</span><span>RÉSERVER</span>
            <span className="flex gap-[6px]" style={{ color: "var(--color-editorial-muted)" }}><span>FR</span><span>EN</span></span>
          </div>
          <div className="absolute left-[28px] top-[70px]">
            <div className="fs text-[38px]" style={{ color: "var(--color-editorial-deep)", letterSpacing: 3 }}>SORA</div>
            <div className="text-[16px] mt-[4px]" style={{ color: "var(--color-editorial-deep)" }}>空</div>
            <div className="fm text-[8px] tracking-[0.18em] mt-[12px] leading-[1.9]" style={{ color: "var(--color-editorial-taupe)" }}>
              CUISINE JAPONAISE
              <br />DE SAISON
            </div>
          </div>
          <svg viewBox="0 0 200 120" className="absolute right-0 top-[30px] w-[240px]" fill="none" stroke="#b7ab97" strokeWidth="1.4">
            <path d="M200 10C150 30 110 50 60 90" />
            {[0, 1, 2, 3, 4].map((i) => (
              <g key={i} transform={`translate(${150 - i * 26} ${22 + i * 15})`}>
                {[0, 72, 144, 216, 288].map((r) => (
                  <ellipse key={r} cx="0" cy="-6" rx="4" ry="7" fill="#fff" stroke="#c9c2b4" strokeWidth="0.8" transform={`rotate(${r})`} />
                ))}
                <circle r="2.4" fill="#d9a53a" stroke="none" />
              </g>
            ))}
          </svg>
          <img src={IMG.sashimi} alt="" className="absolute right-[16px] top-[150px] w-[55%] h-[240px] object-cover rounded-full"  decoding="async" />
          <div className="absolute left-[28px] bottom-[16px] fm text-[8px] leading-[1.8]" style={{ color: "var(--color-editorial-copy)" }}>
            <span className="font-bold tracking-[0.14em]">NOTRE PHILOSOPHIE</span>
            <br />
            Respect du produit.
            <br />
            Épure, précision, harmonie.
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================= STAGE B : GRID ============================= */
