import { INK, ORANGE } from '../productAssets';
import { AIcon, QR, Star, Underline } from '../components/productPrimitives';

const CARTE = [
  {
    t: "ENTRÉES",
    items: [
      { n: "Burrata crémeuse", d: "Tomates anciennes, basilic, huile d'olive vierge", p: "14,00 €", a: ["milk", "gluten", "nut", "egg"] },
      { n: "Velouté de petit pois", d: "Menthe fraîche, croûtons", p: "9,00 €", a: ["gluten", "milk", "nut"] },
    ],
  },
  {
    t: "PLATS",
    items: [
      { n: "Poulpe grillé", d: "Citron, fenouil, piment d'Espelette", p: "26,00 €", a: ["fish", "milk", "gluten", "nut"] },
      { n: "Suprême de volaille fermière", d: "Écrasé de pommes de terre, jus au thym", p: "24,00 €", a: ["soy", "egg", "milk", "gluten", "nut"] },
      { n: "Dos de cabillaud rôti", d: "Légumes de saison, beurre blanc", p: "25,00 €", a: ["fish", "milk", "gluten", "egg", "nut"] },
      { n: "Tagliatelle al Ragù", d: "Bœuf mijoté 6h, parmesan", p: "19,00 €", a: ["gluten", "egg", "milk", "nut"], new: true },
    ],
  },
  {
    t: "DESSERTS",
    items: [
      { n: "Tarte fine aux pommes", d: "Caramel beurre salé, glace vanille", p: "8,00 €", a: ["gluten", "milk", "egg"] },
      { n: "Mousse au chocolat noir", d: "Fève de cacao, éclats de noisettes", p: "8,00 €", a: ["egg", "nut"] },
      { n: "Assiette de fromages affinés", d: "Sélection du moment", p: "10,00 €", a: ["milk", "nut"] },
    ],
  },
];

const AnnoCircle = ({ x, y, children }) => (
  <span className="absolute rounded-full flex items-center justify-center" style={{ left: x, top: y, width: 44, height: 44, border: `1.5px solid ${ORANGE}` }}>
    <svg viewBox="0 0 20 20" className="w-[19px] h-[19px]" fill="none" stroke={INK} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  </span>
);

export default function ProductComplianceSection() {
  return (
    <>
      <h1 className="absolute fd" style={{ left: 55, top: 58, fontSize: 60, lineHeight: 1.05 }}>
        VOTRE CARTE,
        <br />
        CLAIRE ET CONFORME<span style={{ color: ORANGE }}>.</span>
      </h1>
      <div className="absolute fm text-[10px] tracking-[0.12em] border px-[12px] py-[8px]" style={{ left: 55, top: 204, borderColor: "var(--color-editorial-muted)", color: "#4d473e", background: "#EFE8DA" }}>
        LA CONFORMITÉ, INTÉGRÉE
      </div>

      <div className="absolute inset-0" style={{ transform: 'translateX(60px)' }}>
      <AnnoCircle x={222} y={303}>
        <path d="M8.5 3h3v2.2L13 7.5V17H7V7.5L8.5 5.2V3Z" />
      </AnnoCircle>
      <div className="absolute" style={{ left: 278, top: 306, width: 150 }}>
        <div className="text-[13px] font-bold">14 allergènes</div>
        <div className="text-[11px] leading-[1.45]" style={{ color: "var(--color-editorial-taupe)" }}>Affichés clairement pour chaque plat.</div>
      </div>
      <AnnoCircle x={162} y={527}>
        <path d="M4 11c0-3.5 2.7-6 6-6s6 2.5 6 6c0 2-1.5 3.5-3.5 3.5h-5C5.5 14.5 4 13 4 11Z" />
        <path d="M13 6.5c1.5-1 3-1 3.5 0 .6 1.2-.7 2.5-2 2.5" />
      </AnnoCircle>
      <div className="absolute" style={{ left: 218, top: 531, width: 170 }}>
        <div className="text-[13px] font-bold">origine des viandes</div>
        <div className="text-[11px] leading-[1.45]" style={{ color: "var(--color-editorial-taupe)" }}>Traçabilité et transparence pour vos convives.</div>
      </div>

      <AnnoCircle x={1088} y={226}>
        <path d="M10 4v12M13.5 7.5c0-1.4-1.6-2.3-3.5-2.3S6.5 6.1 6.5 7.5 8 9.8 10 10.2s3.5 1 3.5 2.4-1.6 2.3-3.5 2.3-3.5-.9-3.5-2.3" />
      </AnnoCircle>
      <div className="absolute" style={{ left: 1096, top: 283, width: 140 }}>
        <div className="text-[13px] font-bold">prix TTC</div>
        <div className="text-[11px] leading-[1.45]" style={{ color: "var(--color-editorial-taupe)" }}>Prix toutes taxes comprises affichés.</div>
      </div>
      <AnnoCircle x={1068} y={430}>
        <path d="M6 3h6l3 3v11H6V3Z" />
        <path d="M12 3v3h3M8 9h5M8 12h5" />
      </AnnoCircle>
      <div className="absolute" style={{ left: 1116, top: 444, width: 150 }}>
        <div className="text-[13px] font-bold">décret 2024-171</div>
        <div className="text-[11px] leading-[1.45]" style={{ color: "var(--color-editorial-taupe)" }}>Informations conformes au décret en vigueur.</div>
      </div>

      <svg className="absolute inset-0 pointer-events-none" viewBox="0 0 1440 810" fill="none" stroke={ORANGE} strokeWidth="1.6">
        <path d="M397 325H508" />
        <path d="M387 549c43 7 61 91 121 113" />
        <path d="M968 203h95l25 37" />
        <path d="M978 688h74V452h14" />
      </svg>

      {/* menu document */}
      <div className="absolute paper-shadow" style={{ left: 487, top: -35, width: 520, background: "var(--color-editorial-surface)" }}>
        <div style={{ padding: "36px 40px 28px" }}>
          <div className="flex justify-between items-start">
            <div className="fs text-[20px]">Le Bon Restaurant</div>
            <div className="text-right fm text-[8px] leading-[1.7]" style={{ color: "var(--color-editorial-taupe)" }}>
              <span className="font-bold" style={{ color: INK }}>CARTE DU 24 MAI 2026</span>
              <br />
              Prix TTC · Service compris
            </div>
          </div>
          <div className="h-px mt-[16px]" style={{ background: INK }} />
          {CARTE.map((sec) => (
            <div key={sec.t}>
              <div className="fm font-bold text-[10px] tracking-[0.16em] mt-[20px] mb-[12px]">{sec.t}</div>
              <div className="space-y-[13px]">
                {sec.items.map((it) => (
                  <div key={it.n} className="flex justify-between items-center">
                    <div>
                      <div className="text-[12px] font-bold flex items-center gap-[8px]">
                        {it.new && (
                          <span className="fm font-bold text-[8px] px-[6px] py-[2px]" style={{ background: "var(--color-editorial-gold)", color: "#3d3013" }}>
                            NOUVEAU
                          </span>
                        )}
                        {it.n}
                      </div>
                      <div className="text-[10px] mt-[2px]" style={{ color: "var(--color-editorial-taupe)" }}>{it.d}</div>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <span className="flex gap-[4px]">
                        {it.a.map((k, i) => (
                          <AIcon key={i} k={k} s={16} />
                        ))}
                      </span>
                      <span className="fm font-bold text-[11px] w-[52px] text-right">{it.p}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-px mt-[16px]" style={{ background: "rgba(22,19,16,.25)" }} />
            </div>
          ))}
        </div>
        <div className="relative flex gap-[44px]" style={{ background: "#E6DECB", padding: "18px 40px 22px" }}>
          <div className="fm text-[9px] leading-[1.9]">
            <div className="font-bold tracking-[0.12em]">ORIGINE DES VIANDES</div>
            <div style={{ color: "var(--color-editorial-rule)" }}>Bœuf : France<br />Volaille : France<br />Porc : France</div>
          </div>
          <div className="fm text-[9px] leading-[1.9]">
            <div className="font-bold tracking-[0.12em]">ORIGINE DES PRODUITS</div>
            <div style={{ color: "var(--color-editorial-rule)" }}>Légumes : France &amp; UE<br />Poissons : Atlantique Nord-Est<br />Œufs : Plein air - France</div>
          </div>
          <div className="absolute right-[26px] top-[-26px] text-center border-[3px] rounded-[6px] px-[18px] py-[8px]" style={{ borderColor: ORANGE, color: ORANGE, transform: "rotate(-4deg)", background: "rgba(245,240,230,.85)" }}>
            <div className="fd text-[22px] tracking-[0.06em]">VÉRIFIÉ</div>
            <div className="fm font-bold text-[9px] tracking-[0.14em]">AVANT PUBLICATION</div>
          </div>
        </div>
      </div>

      <div className="absolute" style={{ left: 85, top: 686, transform: "rotate(-1.5deg)" }}>
        <div className="flex items-start gap-[8px]">
          <Star className="w-[16px] h-[16px] mt-[6px]" />
          <div className="fh text-[22px] leading-[1.3]" style={{ color: "var(--color-editorial-deep)" }}>
            Sérieux sur les données.
            <br />
            Simple pour l'équipe.
          </div>
        </div>
        <Underline className="w-[170px] h-[9px] ml-[24px]" />
      </div>
      </div>

      {/* phone */}
      <div className="absolute card-shadow" style={{ left: 1193, top: 525, width: 232, height: 470, transform: "rotate(8deg)", borderRadius: 30, border: "6px solid var(--color-editorial-near-black)", background: "var(--color-editorial-paper)", padding: 22 }}>
        <span className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[70px] h-[14px] rounded-full" style={{ background: "var(--color-editorial-near-black)" }} />
        <div className="fs text-[13px] text-center mt-[16px]">Le Bon Restaurant</div>
        <div className="h-px mt-[10px]" style={{ background: "rgba(22,19,16,.3)" }} />
        <div className="fd text-[20px] tracking-[0.06em] text-center mt-[14px]">NOTRE CARTE</div>
        <div className="text-[10px] text-center leading-[1.5] mt-[6px]" style={{ color: "var(--color-editorial-taupe)" }}>
          Scannez pour consulter
          <br />
          la carte et les allergènes.
        </div>
        <div className="flex justify-center mt-[16px]">
          <QR seed={23} size={150} bg="#FFFFFF" />
        </div>
      </div>
    </>
  );
}
