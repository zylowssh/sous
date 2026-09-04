import { IMG, ORANGE } from '../exemplesAssets';
import { Arr, SousLogoMark, Underline } from '../components/exemplesPrimitives';

export default function ExemplesKnockSection() {
  const neon = "#FF5A14";
  const glow = { textShadow: `0 0 5px ${neon}, 0 0 16px #ff2d00, 0 0 38px #ff2d00` };
  return (
    <>
      <div className="absolute rounded-[4px]" style={{ left: 20, top: 40, width: 190, height: 770, background: "var(--color-editorial-paper-alt)", padding: "24px 20px" }}>
        <SousLogoMark className="h-[76px] w-auto" />
        <div className="h-px mt-[16px]" style={{ background: "rgba(22,19,16,.25)" }} />
        <div className="fm font-bold text-[9px] tracking-[0.14em] mt-[16px]">ÉTUDES DE CAS</div>
        <div className="mt-[18px]">
          <span className="fd text-[15px]" style={{ color: ORANGE }}>02 /</span>
          <div className="fd text-[14px] leading-[1.3] mt-[4px]">KNOCK KNOCK /<br />BURGERS</div>
        </div>
        <div className="h-px mt-[18px]" style={{ background: "rgba(22,19,16,.25)" }} />
        <div className="fm text-[8px] leading-[1.9] mt-[16px]" style={{ color: "var(--color-editorial-muted)" }}>
          UNE CARTE COURTE.<br />
          DES PROMOS VISIBLES.<br />
          UN QR AU COMPTOIR.<br />
          <span className="mt-[10px] block" style={{ color: ORANGE }}>NANTES / OUVERT LE SOIR</span>
        </div>
        <div className="absolute left-[20px] bottom-[26px]">
          <svg viewBox="0 0 30 24" className="w-[26px] mb-[4px] ml-[16px]" fill="none" stroke="var(--color-editorial-deep)" strokeWidth="1.4" strokeLinecap="round">
            <path d="M4 20C8 12 16 8 24 6M20 3l5 3-4 4" />
          </svg>
          <div className="fh text-[15px] leading-[1.4]" style={{ color: "var(--color-editorial-deep)" }}>
            Six restaurants.
            <br />
            Six façons de briller.
          </div>
        </div>
      </div>

      <div className="absolute" style={{ left: 268, top: 40, transform: "rotate(-2deg)" }}>
        <div style={{ border: `3px solid ${neon}`, borderRadius: 10, padding: "16px 26px 12px", boxShadow: "0 0 22px rgba(255,90,20,.45), inset 0 0 14px rgba(255,90,20,.35)" }}>
          <div className="fd" style={{ color: neon, fontSize: 54, lineHeight: 1.02, ...glow }}>
            KNOCK<br />KNOCK
          </div>
          <div className="fm font-bold text-[15px] tracking-[0.2em] mt-[6px] text-center" style={{ color: neon, ...glow }}>
            BURGER CLUB
          </div>
        </div>
      </div>

      <h1 className="absolute fd" style={{ left: 570, top: 48, fontSize: 92, lineHeight: 1.0 }}>
        <span style={{ color: "var(--color-editorial-paper)" }}>UN BURGER CLUB QUI</span>
        <br />
        <span style={{ color: "#E9B33C" }}>NE CHUCHOTE PAS.</span>
      </h1>

      <img
        src={IMG.burger}
        alt=""
        className="absolute"
        style={{
          left: 165,
          top: 355,
          width: 470,
          height: 455,
          objectFit: "cover",
          maskImage: "linear-gradient(to right, #000 55%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, #000 55%, transparent)",
        }}
       decoding="async" loading="lazy" />
      <img src={IMG.kraft} alt="" className="absolute card-shadow rounded-[4px]" style={{ left: 830, top: 415, width: 220, height: 340, transform: "rotate(6deg)", objectFit: "cover" }}  decoding="async" loading="lazy" />

      <div className="absolute z-10 rounded-[26px] card-shadow" style={{ left: 620, top: 352, width: 225, height: 450, transform: "rotate(-3deg)", border: "6px solid #000", background: "#0c0b0a", padding: 14 }}>
        <div className="flex justify-between items-start">
          <div className="fd" style={{ color: "#E9B33C", fontSize: 16, lineHeight: 1 }}>KNOCK<br />KNOCK</div>
          <span className="text-[var(--color-editorial-cream-alt)] text-[13px]">≡</span>
        </div>
        <div className="flex gap-[12px] fm text-[7px] tracking-[0.1em] mt-[10px]" style={{ color: "var(--color-editorial-muted)" }}>
          <span className="relative" style={{ color: "#E9B33C" }}>SINGLES<span className="absolute left-0 -bottom-[3px] h-[1.5px] w-full" style={{ background: "#E9B33C" }} /></span>
          <span>DOUBLES</span><span>SIDES</span><span>BOISSONS</span>
        </div>
        <div className="mt-[10px] space-y-[10px]">
          {[
            { n: "SMASH CHEESE", d: "Steak smashé, cheddar, pickles, oignons, sauce KK.", p: "9,50 €" },
            { n: "BACON BOMB", d: "Steak smashé, cheddar, bacon, sauce BBQ maison.", p: "10,50 €" },
            { n: "SPICY KNOCK", d: "Steak smashé, cheddar, jalapeños, oignons frits, sauce spicy.", p: "10,50 €" },
          ].map((b) => (
            <div key={b.n} className="flex gap-[8px]" style={{ borderBottom: "1px solid var(--color-editorial-charcoal)", paddingBottom: 8 }}>
              <div className="flex-1">
                <div className="fm font-bold text-[9px] text-[var(--color-editorial-paper)]">{b.n}</div>
                <div className="fm text-[6.5px] leading-[1.5] mt-[3px]" style={{ color: "var(--color-editorial-muted)" }}>{b.d}</div>
                <div className="fm font-bold text-[9px] mt-[3px]" style={{ color: ORANGE }}>{b.p}</div>
              </div>
              <img src={IMG.burger} alt="" className="w-[44px] h-[40px] object-cover rounded-[3px]"  decoding="async" loading="lazy" />
            </div>
          ))}
        </div>
        <button type="button" className="w-full fm font-bold text-[9px] tracking-[0.14em] py-[9px] mt-[10px] rounded-[3px]" style={{ background: ORANGE, color: "var(--color-editorial-brown-black)" }}>
          COMMANDER
        </button>
      </div>

      {[
        { y: 380, t: "CARTE COURTE", d: "Trois burgers. Trois signatures. Zéro hésitation.", i: <><path d="M4 9c0-2.5 2-4.5 4-4.5s4 2 4 4.5" /><path d="M3 9h10M3 11.5h10M4 14h8" /></> },
        { y: 480, t: "PROMOS DU SOIR", d: "Chaque dimanche soir. Une offre, un horaire, c'est tout.", i: <><path d="M12.5 9.5A4.5 4.5 0 1 1 8 4a3.6 3.6 0 0 0 4.5 5.5Z" /><path d="M11 3l.5 1.5L13 5l-1.5.5L11 7l-.5-1.5L9 5l1.5-.5Z" /></> },
        { y: 580, t: "QR COMPTOIR", d: "On scanne, on commande, on déguste.", i: <><rect x="2" y="2" width="5" height="5" /><rect x="9" y="2" width="5" height="5" /><rect x="2" y="9" width="5" height="5" /><path d="M9 9h2v2H9zM12 12h2v2h-2z" /></> },
      ].map((f) => (
        <div key={f.t} className="absolute flex gap-[16px]" style={{ left: 1080, top: f.y, width: 300, paddingBottom: 20, borderBottom: "1px solid var(--color-editorial-charcoal)" }}>
          <span className="w-[52px] h-[52px] rounded-full flex items-center justify-center shrink-0" style={{ background: "#1c1a17" }}>
            <svg viewBox="0 0 16 16" className="w-[22px] h-[22px]" fill="none" stroke="#E9B33C" strokeWidth="1.1" strokeLinecap="round">{f.i}</svg>
          </span>
          <div>
            <div className="fd text-[15px] tracking-[0.04em]" style={{ color: "#E9B33C" }}>{f.t}</div>
            <div className="fm text-[9px] leading-[1.6] mt-[6px]" style={{ color: "var(--color-editorial-gray)" }}>{f.d}</div>
          </div>
        </div>
      ))}

      <div className="absolute" style={{ left: 1080, top: 660 }}>
        <div className="fh text-[19px] leading-[1.4]" style={{ color: "var(--color-editorial-paper)" }}>
          Même moteur.
          <br />
          Beaucoup plus de décibels.
        </div>
        <Underline className="w-[170px] h-[8px] ml-[90px]" color="var(--color-editorial-paper)" />
      </div>
      <button type="button" data-route="/signup?style=knock-knock" className="absolute flex items-center justify-center gap-[10px] fm font-bold text-[11px] tracking-[0.14em]" style={{ left: 1080, top: 725, width: 260, height: 40, background: ORANGE, color: "var(--color-editorial-brown-black)" }}>
        CHOISIR CET UNIVERS <Arr className="w-[15px] h-[10px]" />
      </button>
    </>
  );
}

/* ============================= STAGE E : CASE SORA ============================= */
