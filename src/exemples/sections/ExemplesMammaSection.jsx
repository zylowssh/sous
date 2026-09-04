import { IMG, INK, ORANGE } from '../exemplesAssets';
import { Arr, QR, Underline } from '../components/exemplesPrimitives';

const FeatureRow = ({ top, icon, text }) => (
  <div className="absolute flex items-center gap-[14px]" style={{ left: 56, top, width: 340, height: 46, borderBottom: "1px solid rgba(22,19,16,.25)" }}>
    <span className="w-[26px] h-[26px] rounded-full flex items-center justify-center shrink-0" style={{ background: ORANGE }}>
      <svg viewBox="0 0 16 16" className="w-[13px] h-[13px]" fill="none" stroke="var(--color-editorial-paper)" strokeWidth="1.2" strokeLinecap="round">
        {icon}
      </svg>
    </span>
    <span className="fs text-[14px]">{text}</span>
  </div>
);

export default function ExemplesMammaSection() {
  return (
    <>
      <div className="absolute inset-y-0 left-0" style={{ width: 540, background: "#D8D5C2" }} />
      <div className="absolute fm font-bold text-[13px] tracking-[0.1em]" style={{ left: 56, top: 150 }}>
        <span className="fd text-[17px]" style={{ color: ORANGE }}>01</span>
        <span className="mx-[8px]" style={{ color: "var(--color-editorial-muted)" }}>/</span>MAMMA ROSA
        <span className="mx-[8px]" style={{ color: "var(--color-editorial-muted)" }}>/</span>ITALIEN
      </div>
      <h1 className="absolute fd" style={{ left: 54, top: 188, fontSize: 62, lineHeight: 1.0 }}>
        UNE TRATTORIA
        <br />
        QUI SENT LE
        <br />
        DIMANCHE.
      </h1>
      <div className="absolute h-px" style={{ left: 56, top: 455, width: 340, background: "rgba(22,19,16,.4)" }} />
      <p className="absolute fs text-[14px]" style={{ left: 56, top: 480 }}>Chaleureux, familial, sans folklore.</p>

      <FeatureRow top={520} text="Menu et QR synchronisés" icon={<><rect x="2" y="2" width="5" height="5" rx="1" /><rect x="9" y="2" width="5" height="5" rx="1" /><rect x="2" y="9" width="5" height="5" rx="1" /><path d="M9 9h2v2H9zM12 12h2v2h-2z" /></>} />
      <FeatureRow top={566} text="Réservations visibles" icon={<><rect x="2" y="3" width="12" height="11" rx="2" /><path d="M2 6.5h12M5.5 2v3M10.5 2v3" /><path d="M6 9.5l1.5 1.5 3-3" /></>} />
      <FeatureRow top={612} text="Mises à jour via WhatsApp" icon={<path d="M8 2a6 6 0 0 0-5.2 9L2 14l3.1-.8A6 6 0 1 0 8 2Zm-2 4.5h4M6 8.7h4" />} />

      <button type="button" data-route="/signup?style=mamma-rosa" className="absolute flex items-center justify-center gap-[10px] fm font-bold text-[11px] tracking-[0.12em]" style={{ left: 56, top: 662, width: 192, height: 46, background: ORANGE, color: "var(--color-editorial-paper)" }}>
        CHOISIR CE STYLE <Arr className="w-[15px] h-[10px]" color="var(--color-editorial-paper)" />
      </button>
      <button type="button" data-route="/produit" className="absolute fm font-bold text-[11px] tracking-[0.12em] border" style={{ left: 262, top: 662, width: 134, height: 46, borderColor: INK }}>
        VOIR LE MENU
      </button>

      {/* browser mockup */}
      <div className="absolute card-shadow overflow-hidden rounded-[8px]" style={{ left: 495, top: 97, width: 795, height: 520, background: "var(--color-editorial-paper-soft)" }}>
        <div className="flex items-center gap-[6px] px-[14px] h-[26px]" style={{ background: "var(--color-editorial-near-black)" }}>
          <span className="w-[9px] h-[9px] rounded-full" style={{ background: "var(--color-flame-legacy)" }} />
          <span className="w-[9px] h-[9px] rounded-full" style={{ background: "var(--color-editorial-gold)" }} />
          <span className="w-[9px] h-[9px] rounded-full" style={{ background: "#7FB069" }} />
          <span className="flex-1 flex items-center justify-center">
            <span className="fm text-[8px] rounded-[4px] px-[140px] py-[3px]" style={{ background: "#2a2620", color: "#CFC9C0" }}>🔒 mammarosa.fr</span>
          </span>
          <span className="text-[9px]" style={{ color: "var(--color-editorial-muted)" }}>⟳</span>
        </div>
        <div className="flex items-center justify-between px-[26px] pt-[16px]">
          <div>
            <div className="fs" style={{ color: "var(--color-editorial-red)", fontSize: 22, lineHeight: 1.0 }}>MAMMA<br />ROSA</div>
            <div className="fm text-[6px] tracking-[0.24em] mt-[4px]" style={{ color: "var(--color-editorial-muted)" }}>TRATTORIA DI FAMIGLIA</div>
          </div>
          <div className="flex gap-[22px] fm text-[8px] tracking-[0.12em]" style={{ color: "var(--color-editorial-copy)" }}>
            <span>À PROPOS</span><span>LA CARTE</span><span>RÉSERVER</span><span>CONTACT</span>
          </div>
        </div>
        <div className="relative mt-[14px]">
          <img src={IMG.trattoria} alt="" className="absolute left-0 top-0 w-[285px] h-[250px] object-cover"  decoding="async" loading="lazy" />
          <div className="absolute left-[315px] top-[40px] w-[270px]">
            <div className="fs" style={{ color: "var(--color-editorial-red)", fontSize: 24, lineHeight: 1.15 }}>CUISINE ITALIENNE,<br />FAITE MAISON.</div>
            <div className="fs text-[11px] leading-[1.7] mt-[14px]" style={{ color: "var(--color-editorial-rule)" }}>
              Des produits simples, bien traités.
              <br />
              Des recettes de famille.
            </div>
            <button type="button" className="fm text-[8px] tracking-[0.12em] border px-[14px] py-[8px] mt-[18px]" style={{ borderColor: "var(--color-editorial-copy)" }}>DÉCOUVRIR LA CARTE</button>
          </div>
          <img src={IMG.pastaclose} alt="" className="absolute right-0 top-0 w-[205px] h-[250px] object-cover"  decoding="async" loading="lazy" />
        </div>
        <div className="px-[60px] mt-[20px]">
          <div className="fs text-[13px]" style={{ color: "var(--color-editorial-red)" }}>LA CARTE</div>
          <div className="flex gap-[18px] mt-[10px]">
            {[
              { im: IMG.antipasti, n: "Antipasti misti", p: "14 €" },
              { im: IMG.pastaclose, n: "Tagliatelle al Ragù", p: "19 €" },
              { im: IMG.saltimbocca, n: "Saltimbocca alla Romana", p: "21 €" },
              { im: IMG.saltimbocca, n: "", p: "" },
            ].map((d, i) => (
              <div key={i} className="w-[158px] shrink-0">
                <img src={d.im} alt="" className="w-full h-[80px] object-cover"  decoding="async" loading="lazy" />
                {d.n && (
                  <>
                    <div className="fs text-[10px] mt-[6px]">{d.n}</div>
                    <div className="fs text-[9px] mt-[2px]" style={{ color: "var(--color-editorial-rule)" }}>{d.p}</div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* phone */}
      <div className="absolute card-shadow z-20 rounded-[26px]" style={{ left: 1195, top: 310, width: 190, height: 380, border: "6px solid var(--color-editorial-near-black)", background: "var(--color-editorial-paper-soft)", padding: 14 }}>
        <span className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[64px] h-[12px] rounded-full" style={{ background: "var(--color-editorial-near-black)" }} />
        <div className="flex justify-between items-center mt-[12px]">
          <span className="fs" style={{ color: "var(--color-editorial-red)", fontSize: 12, lineHeight: 1 }}>MAMMA<br />ROSA</span>
          <span className="text-[12px]">≡</span>
        </div>
        <div className="fs mt-[14px]" style={{ color: "var(--color-editorial-red)", fontSize: 14, lineHeight: 1.2 }}>CUISINE ITALIENNE,<br />FAITE MAISON.</div>
        <button type="button" className="fm text-[7px] tracking-[0.1em] border px-[10px] py-[6px] mt-[10px]" style={{ borderColor: "var(--color-editorial-copy)" }}>DÉCOUVRIR LA CARTE</button>
        <img src={IMG.trattoria} alt="" className="w-full h-[120px] object-cover mt-[12px]"  decoding="async" loading="lazy" />
        <button type="button" className="w-full fm font-bold text-[8px] tracking-[0.1em] py-[8px] mt-[10px]" style={{ background: ORANGE, color: "var(--color-editorial-paper)" }}>RÉSERVER UNE TABLE</button>
      </div>

      {/* torn paper */}
      <div className="absolute paper-shadow z-10" style={{ left: 530, top: 618, width: 355, height: 178, background: "var(--color-editorial-surface)", transform: "rotate(-1deg)", padding: "20px 26px" }}>
        <div className="fs text-[12px]" style={{ color: "var(--color-editorial-red)" }}>PRIMI</div>
        <div className="flex justify-between items-baseline mt-[6px]">
          <div>
            <div className="fs text-[17px]">Tagliatelle al Ragù</div>
            <div className="fs text-[10px] mt-[3px]" style={{ color: "var(--color-editorial-rule)" }}>Ragù de bœuf, parmesan</div>
          </div>
          <div className="fs text-[15px]">19 €</div>
        </div>
        <div className="border-t border-dashed mt-[12px]" style={{ borderColor: "rgba(22,19,16,.4)" }} />
        <div className="flex justify-between items-end mt-[10px]">
          <div className="fs text-[9px] leading-[1.6]" style={{ color: "var(--color-editorial-rule)" }}>
            Scannez pour voir la carte complète
            <br />
            et réserver votre table.
          </div>
          <QR seed={31} size={58} bg="var(--color-editorial-surface)" />
        </div>
      </div>

      <div className="absolute" style={{ left: 940, top: 728, transform: "rotate(-1deg)" }}>
        <div className="fh text-[26px]" style={{ color: "var(--color-editorial-deep)" }}>“Enfin un site qui nous ressemble.”</div>
        <Underline className="w-[150px] h-[9px] ml-[90px]" />
      </div>
    </>
  );
}

/* ============================= STAGE D : CASE KNOCK KNOCK ============================= */
