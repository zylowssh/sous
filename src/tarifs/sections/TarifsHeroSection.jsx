import { INK, ORANGE } from '../tarifsAssets';
import { Arr, Check, Sawtooth, Star } from '../components/tarifsPrimitives';

const PLANS = [
  {
    name: "ESSENTIEL",
    price: "49 €",
    feats: ["Site web personnalisé", "Synchronisation menu (POS)", "Mises à jour via WhatsApp", "QR menu dynamique", "Conformité allergènes"],
    cta: "COMMENCER",
    route: "/signup?plan=essentiel",
    dark: false,
  },
  {
    name: "PRO",
    price: "89 €",
    feats: ["Tout le plan Essentiel", "Assistant IA avancé", "Gestion des promotions", "Réservations en ligne", "Statistiques de visites", "Support prioritaire"],
    cta: "CRÉER MON SITE",
    route: "/signup?plan=pro",
    dark: true,
    reco: true,
  },
  {
    name: "GROUPE",
    price: "SUR MESURE",
    feats: ["Gestion multi-sites", "Charte centralisée", "API dédiée", "Intégrations sur mesure", "Account manager dédié"],
    cta: "PARLER À L'ÉQUIPE",
    route: "/signup?plan=groupe",
    dark: false,
  },
];

export default function TarifsHeroSection() {
  return (
    <>
      <div className="metal absolute left-0 right-0 rounded-[6px]" style={{ top: 122, height: 14 }} />
      {[165, 1220].map((x) => (
        <div key={x} className="metal absolute rounded-b-[8px] z-10" style={{ left: x, top: 106, width: 32, height: 90 }}>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[6px] w-[16px] h-[5px] rounded" style={{ background: "#6b6761" }} />
        </div>
      ))}

      <div className="absolute paper-shadow" style={{ left: 118, top: 175, width: 1188, height: 600, background: "var(--color-editorial-paper-soft)" }}>
        <Sawtooth color="var(--color-editorial-paper-soft)" />
        <h1 className="absolute fd" style={{ left: 54, top: 115, fontSize: 52, lineHeight: 1.04 }}>
          UN SITE À JOUR.
          <br />
          UN TARIF CLAIR.
        </h1>
        <div className="absolute h-px" style={{ left: 54, top: 320, width: 295, background: "rgba(22,19,16,.5)" }} />
        <p className="absolute text-[13px] leading-[1.7]" style={{ left: 54, top: 345, color: "var(--color-editorial-copy)" }}>
          Pas d'engagement. Pas de frais cachés.
          <br />
          Votre validation reste comprise.
        </p>
        <div className="absolute h-px" style={{ left: 54, top: 410, width: 295, background: "rgba(22,19,16,.5)" }} />
        <div className="absolute fh text-[17px] leading-[1.4]" style={{ left: 60, top: 435, color: "var(--color-editorial-deep)", transform: "rotate(-2deg)" }}>
          Moins cher qu'une erreur
          <br />
          sur la carte.
        </div>
        <div className="absolute" style={{ left: 182, top: 520 }}>
          <Star className="w-[20px] h-[20px]" color="var(--color-editorial-copy)" />
        </div>

        {PLANS.map((p, i) => {
          const x = [431, 661, 889][i];
          const w = [215, 216, 230][i];
          return (
            <div
              key={p.name}
              className="absolute flex flex-col"
              style={{
                left: x,
                top: p.reco ? 106 : 108,
                width: w,
                height: p.reco ? 449 : 445,
                background: "var(--color-editorial-paper-soft)",
                border: p.reco ? "1.5px solid var(--color-editorial-ink)" : "1px solid rgba(22,19,16,.25)",
                padding: 16,
              }}
            >
              {p.reco && (
                <span className="absolute left-1/2 -translate-x-1/2 fm font-bold text-[10px] tracking-[0.08em] px-[12px] py-[5px]" style={{ top: -14, background: ORANGE, color: "var(--color-editorial-paper)" }}>
                  RECOMMANDÉ
                </span>
              )}
              <div className="fm font-bold text-[10px] tracking-[0.14em]" style={{ color: p.name === "PRO" ? "var(--color-editorial-muted)" : "var(--color-editorial-copy)" }}>{p.name}</div>
              {p.price.includes("€") ? (
                <div className="flex items-baseline gap-[6px] mt-[10px]">
                  <span className="fd text-[30px]">{p.price}</span>
                  <span className="fm text-[10px]" style={{ color: "var(--color-editorial-rule)" }}>/ mois</span>
                </div>
              ) : (
                <div className="fd text-[26px] mt-[10px]">{p.price}</div>
              )}
              <div className="h-px mt-[14px]" style={{ background: "rgba(22,19,16,.4)" }} />
              <div className="mt-[18px] space-y-[15px]">
                {p.feats.map((f) => (
                  <div key={f} className="flex items-center gap-[10px]">
                    <Check />
                    <span className="text-[11.5px]">{f}</span>
                  </div>
                ))}
              </div>
              <button type="button"
                data-route={p.route}
                className="mt-auto w-full fm font-bold text-[10px] tracking-[0.1em] py-[12px] flex items-center justify-center gap-[8px]"
                style={p.dark ? { background: "var(--color-editorial-near-black)", color: "var(--color-editorial-paper)" } : { border: "1px solid var(--color-editorial-ink)", color: INK }}
              >
                {p.cta} <Arr className="w-[14px] h-[10px]" />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
