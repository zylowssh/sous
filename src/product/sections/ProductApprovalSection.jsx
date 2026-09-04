import { IMG, ORANGE } from '../productAssets';
import { HandArrow, Pin, SousLogoMark, Star, Underline } from '../components/productPrimitives';

export default function ProductApprovalSection() {
  return (
    <>
      <div className="absolute soft-shadow" style={{ left: 150, top: 185, width: 178, transform: "rotate(-3deg)", background: "#E9E1D2", padding: "26px 20px 18px" }}>
        <Pin x={81} y={-8} />
        <div className="fh text-[20px] leading-[1.4]" style={{ color: "var(--color-editorial-deep)" }}>
          Le dernier
          <br />
          mot reste
          <br />
          au chef.
        </div>
        <Underline className="w-[110px] h-[8px] mt-[4px]" />
      </div>

      <h1 className="absolute fd text-[var(--color-editorial-paper)]" style={{ left: 36, top: 552, fontSize: 60, lineHeight: 1.05 }}>
        JAMAIS EN LIGNE
        <br />
        SANS VOTRE <span style={{ color: ORANGE }}>FEU VERT.</span>
      </h1>
      <p className="absolute text-[16px]" style={{ left: 36, top: 712, color: "var(--color-editorial-gray)" }}>
        Sous propose. Vous corrigez ou vous publiez.
      </p>
      <div className="absolute" style={{ left: 40, top: 748 }}>
        <Star className="w-[20px] h-[20px]" color="var(--color-editorial-muted)" />
      </div>

      {/* chat panel */}
      <div
        className="absolute rounded-[14px] overflow-hidden"
        style={{
          left: 540,
          top: 88,
          width: 393,
          height: 692,
          background: '#151310',
          border: '1px solid var(--color-editorial-charcoal)',
          transform: 'scale(.86)',
          transformOrigin: 'top left',
        }}
      >
        <div className="flex items-center gap-[10px] px-[14px] pt-[14px] pb-[10px]" style={{ borderBottom: "1px solid var(--color-editorial-charcoal)" }}>
          <span className="text-[var(--color-editorial-muted)] text-[14px]">‹</span>
          <span className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-[12px] font-bold" style={{ background: "var(--color-editorial-copy-dark)", color: "var(--color-editorial-cream-alt)" }}>R</span>
          <span className="flex-1">
            <span className="block text-[12px] font-semibold text-[var(--color-editorial-cream-alt)]">Romain · Le Réfectoire</span>
            <span className="block text-[10px]" style={{ color: "var(--color-editorial-muted)" }}>en ligne</span>
          </span>
          <svg viewBox="0 0 20 14" className="w-[16px]" fill="none" stroke="var(--color-editorial-muted)" strokeWidth="1.4"><rect x="1" y="2" width="12" height="10" rx="2" /><path d="M13 6l6-3v8l-6-3" /></svg>
          <svg viewBox="0 0 16 16" className="w-[14px]" fill="none" stroke="var(--color-editorial-muted)" strokeWidth="1.4"><path d="M3 2h3l1.5 3.5L5.5 7a9 9 0 0 0 4 4l1.5-2L14.5 10.5V13a1.5 1.5 0 0 1-1.6 1.5A12.5 12.5 0 0 1 1.5 3.6 1.5 1.5 0 0 1 3 2Z" /></svg>
          <span className="text-[var(--color-editorial-muted)]">⋮</span>
        </div>
        <div className="p-[14px] space-y-[12px]">
          <div className="flex justify-center">
            <span className="text-[9px] px-[10px] py-[3px] rounded-full border" style={{ borderColor: "var(--color-editorial-copy-dark)", color: "var(--color-editorial-muted)" }}>Aujourd'hui</span>
          </div>
          <div className="relative rounded-[8px] p-[12px] text-[11px] leading-[1.55] pr-[46px]" style={{ background: "#201D18", color: "#E8E2D8" }}>
            On lance la promo brunch ce dimanche à 11h. Peux-tu préparer la page et le menu QR ?
            <span className="absolute right-[10px] bottom-[8px] text-[9px]" style={{ color: "var(--color-editorial-muted)" }}>10:42</span>
          </div>
          <div className="rounded-[8px] p-[12px]" style={{ background: "#1B1814" }}>
            <div className="flex items-center gap-[6px] fm font-bold text-[10px] tracking-[0.08em] text-[var(--color-editorial-cream-alt)]">
              <SousLogoMark className="w-[9px] h-[12px]" /> SOUS
            </div>
            <div className="relative rounded-[6px] p-[10px] text-[11px] leading-[1.5] pr-[46px] mt-[8px]" style={{ background: "#242019", color: "#E8E2D8" }}>
              Voici une première proposition pour votre page d'accueil et votre menu QR.
              <span className="absolute right-[10px] bottom-[8px] text-[9px]" style={{ color: "var(--color-editorial-muted)" }}>10:45</span>
            </div>
            <div className="rounded-[6px] overflow-hidden mt-[8px]" style={{ background: "#242019" }}>
              <div className="relative h-[150px]">
                <img src={IMG.pancakes} alt="brunch" className="w-full h-full object-cover" style={{ filter: "brightness(.85)" }}  decoding="async" loading="lazy" />
                <div className="absolute left-[10px] top-[10px]">
                  <div className="fd text-[16px] text-[var(--color-editorial-paper)]">LE BRUNCH ARRIVE.</div>
                  <div className="fm text-[8px] tracking-[0.1em] text-[#D8D2C6] mt-[2px]">DIMANCHES DÈS 11H</div>
                </div>
                <span className="absolute right-[10px] top-[10px] fm font-bold text-[8px] px-[8px] py-[3px] rounded-full" style={{ background: "var(--color-editorial-gold)", color: "#3d3013" }}>BROUILLON</span>
              </div>
              <div className="relative p-[10px] text-[10px] text-[#E8E2D8] pr-[46px]">
                Page d'accueil · Brouillon
                <span className="block text-[9px]" style={{ color: "var(--color-editorial-muted)" }}>Visible uniquement pour vous</span>
                <span className="absolute right-[10px] bottom-[8px] text-[9px]" style={{ color: "var(--color-editorial-muted)" }}>10:45</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="relative rounded-[8px] p-[10px] text-[11px] pr-[64px]" style={{ background: "#2E4437", color: "#E8E2D8" }}>
              Ajoute un plat salé en avant-plan stp.
              <span className="absolute right-[8px] bottom-[8px] text-[9px]" style={{ color: "#9fb8a8" }}>10:47 ✓✓</span>
            </div>
          </div>
          <div className="rounded-[8px] p-[10px]" style={{ background: "#1B1814" }}>
            <div className="flex items-center gap-[6px] fm font-bold text-[10px] tracking-[0.08em] text-[var(--color-editorial-cream-alt)] mb-[6px]">
              <SousLogoMark className="w-[9px] h-[12px]" /> SOUS
            </div>
            <div className="relative inline-block rounded-[6px] p-[10px] text-[11px] pr-[64px]" style={{ background: "#242019", color: "#E8E2D8" }}>
              C'est mis à jour.
              <span className="absolute right-[8px] bottom-[8px] text-[9px]" style={{ color: "var(--color-editorial-muted)" }}>10:49 ✓✓</span>
            </div>
          </div>
          <div className="flex gap-[10px] pt-[4px]">
            <button type="button" className="flex-1 fm font-bold text-[11px] tracking-[0.08em] py-[13px] rounded-[6px]" style={{ background: ORANGE, color: "var(--color-editorial-brown-black)" }}>
              VALIDER ET PUBLIER
            </button>
            <button type="button" className="flex-1 fm font-bold text-[11px] tracking-[0.08em] py-[13px] rounded-[6px] border text-[var(--color-editorial-cream-alt)]" style={{ borderColor: "var(--color-editorial-copy-dark)" }}>
              MODIFIER
            </button>
          </div>
        </div>
      </div>

      <HandArrow x={893} y={410} w={46} h={16} color={ORANGE} />

      {/* locked site mock */}
      <div
        className="absolute rounded-[10px] overflow-hidden"
        style={{
          left: 950,
          top: 135,
          width: 458,
          height: 580,
          background: 'var(--color-ink)',
          border: '1px solid var(--color-editorial-charcoal)',
          transform: 'scale(.86)',
          transformOrigin: 'top left',
        }}
      >
        <div className="relative h-[360px]">
          <img src={IMG.pancakes} alt="brunch" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(.42)" }}  decoding="async" loading="lazy" />
          <div className="absolute inset-x-0 top-0 flex justify-between items-center px-[22px] pt-[18px]">
            <span className="fd text-[14px] tracking-[0.06em]" style={{ color: "#D9D2C6" }}>LE RÉFECTOIRE</span>
            <div className="flex gap-[16px] text-[10px]" style={{ color: "var(--color-editorial-gray)" }}>
              <span>Le brunch</span><span>Le menu</span><span>Infos</span>
            </div>
          </div>
          <div className="absolute left-[22px] top-[88px]">
            <div className="fd text-[30px] leading-[1.05]" style={{ color: "#E8E2D8" }}>BRUNCH<br />DU DIMANCHE</div>
            <div className="fm text-[10px] tracking-[0.12em] mt-[6px]" style={{ color: "var(--color-editorial-gray)" }}>DÈS 11H</div>
            <button type="button" className="fm text-[9px] tracking-[0.1em] px-[14px] py-[8px] rounded-[3px] mt-[16px]" style={{ background: ORANGE, color: "var(--color-editorial-brown-black)" }}>
              RÉSERVER UNE TABLE
            </button>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{ background: "rgba(8,7,5,.78)" }}>
            <svg viewBox="0 0 20 22" className="w-[26px] h-[28px]" fill="none" stroke="var(--color-editorial-cream-alt)" strokeWidth="1.5">
              <rect x="3" y="9" width="14" height="11" rx="2" />
              <path d="M6.5 9V6.5a3.5 3.5 0 0 1 7 0V9" />
            </svg>
            <div className="fd text-[22px] leading-[1.1] mt-[8px]" style={{ color: "var(--color-editorial-paper)" }}>
              EN ATTENTE
              <br />
              DE VOTRE FEU VERT
            </div>
            <div className="text-[11px] leading-[1.5] mt-[8px]" style={{ color: "var(--color-editorial-gray)" }}>
              Aucune mise en ligne
              <br />
              tant que vous n'avez pas validé.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[14px] p-[18px]" style={{ background: "#14100C" }}>
          {[
            { t: "ENTRÉES", n: "Burrata", d: "Tomate • basilic • huile d'olive", a: "Gluten", p: "18 €" },
            { t: "PLATS", n: "Poulpe grillé", d: "Citron • fenouil • piment", a: "", p: "22 €" },
            { t: "DESSERTS", n: "Pavlova", d: "Fruits rouges • chantilly", a: "", p: "9 €" },
          ].map((c) => (
            <div key={c.t} className="fm text-[8px] leading-[1.7]" style={{ color: "var(--color-editorial-taupe)" }}>
              <div className="font-bold tracking-[0.14em] mb-[6px]" style={{ color: "var(--color-editorial-muted)" }}>{c.t}</div>
              <div className="text-[9px] font-bold" style={{ color: "var(--color-editorial-gray)" }}>{c.n}</div>
              <div>{c.d}</div>
              {c.a && <div>{c.a}</div>}
              <div className="text-right mt-[4px]">{c.p}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
