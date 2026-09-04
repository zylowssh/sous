import { ORANGE } from '../tarifsAssets';
import { Arr, Check, Circle, Sawtooth, Star } from '../components/tarifsPrimitives';

const ROWS = [
  ['Site web personnalisé', 1, 1, 1],
  ['Synchronisation menu (POS)', 1, 1, 1],
  ['Mises à jour via WhatsApp', 1, 1, 1],
  ['QR menu dynamique', 1, 1, 1],
  ['Conformité allergènes', 1, 1, 1],
  ['Réservations en ligne', 0, 1, 1],
  ['Statistiques de visites', 0, 1, 1],
  ['Support prioritaire', 0, 1, 1],
  ['Gestion multi-sites', 0, 0, 1],
  ['Intégrations sur mesure', 0, 0, 1],
  ['Account manager dédié', 0, 0, 1],
];

export default function TarifsTableSection() {
  const top0 = 345;
  const rh = 40;
  return (
    <>
      <div className="absolute fm font-bold text-[10px] tracking-[0.16em]" style={{ left: 235, top: 118, color: "var(--color-editorial-rule)" }}>
        COMPARER LES OFFRES
      </div>
      <h2 className="absolute fd" style={{ left: 233, top: 143, fontSize: 42, lineHeight: 1.05 }}>
        CE QUI EST COMPRIS.
        <br />
        NOIR SUR BLANC.
      </h2>

      <div className="absolute" style={{ left: 715, top: 268, width: 230, height: 532, background: "#F0E7D0", border: "1px solid rgba(22,19,16,.2)" }} />
      <span className="absolute fm font-bold text-[10px] tracking-[0.1em] px-[16px] py-[6px]" style={{ left: 770, top: 258, background: "var(--color-editorial-near-black)", color: "var(--color-editorial-paper)" }}>
        LE PLUS CHOISI
      </span>

      {[
        { x: 597, n: "ESSENTIEL", p: "49 €" },
        { x: 830, n: "PRO", p: "89 €" },
      ].map((c) => (
        <div key={c.n} className="absolute text-center" style={{ left: c.x - 115, top: 288, width: 230 }}>
          <div className="fm font-bold text-[9px] tracking-[0.16em]">{c.n}</div>
          <div className="flex items-baseline justify-center gap-[6px] mt-[6px]">
            <span className="fd text-[24px]">{c.p}</span>
            <span className="fm text-[9px]" style={{ color: "var(--color-editorial-rule)" }}>/ mois</span>
          </div>
        </div>
      ))}
      <div className="absolute text-center" style={{ left: 951, top: 288, width: 230 }}>
        <div className="fm font-bold text-[9px] tracking-[0.16em]">GROUPE</div>
        <div className="fd text-[22px] mt-[6px]">sur mesure</div>
      </div>

      <div className="absolute w-px" style={{ left: 489, top: 268, height: 532, background: "rgba(22,19,16,.25)" }} />

      {ROWS.map((r, i) => (
        <div key={r[0]}>
          <div className="absolute h-px" style={{ left: 235, top: top0 + i * rh, width: 935, background: "rgba(22,19,16,.18)" }} />
          <div className="absolute text-[12px]" style={{ left: 247, top: top0 + i * rh + 13 }}>{r[0]}</div>
          {[597, 830, 1066].map((x, j) => (
            <div key={x} className="absolute flex items-center justify-center" style={{ left: x - 115, top: top0 + i * rh, width: 230, height: rh }}>
              {r[j + 1] ? <Check s={15} /> : <Circle />}
            </div>
          ))}
        </div>
      ))}
      <div className="absolute h-px" style={{ left: 235, top: top0 + 11 * rh, width: 935, background: "rgba(22,19,16,.18)" }} />

      <button type="button" data-route="/signup?plan=pro" className="absolute flex items-center justify-center gap-[10px] fm font-bold text-[11px] tracking-[0.12em]" style={{ left: 715, top: 815, width: 230, height: 40, background: "var(--color-editorial-near-black)", color: "var(--color-editorial-paper)" }}>
        CHOISIR PRO <Arr className="w-[15px] h-[10px]" color="var(--color-editorial-paper)" />
      </button>

      <div className="absolute paper-shadow" style={{ left: 1090, top: 770, width: 232, height: 145, background: "var(--color-editorial-paper-soft)", transform: "rotate(-3deg)", padding: "26px 24px" }}>
        <Sawtooth color="var(--color-editorial-paper-soft)" />
        <div className="flex items-start gap-[10px]">
          <Star className="w-[15px] h-[15px] mt-[3px]" />
          <div className="fm font-bold text-[11px] leading-[2.2] tracking-[0.02em]">
            <span className="underline decoration-[2px]" style={{ textDecorationColor: ORANGE, textUnderlineOffset: 5 }}>AUCUN FRAIS DE MISE EN PLACE</span>
            <br />
            <span className="underline decoration-[2px]" style={{ textDecorationColor: ORANGE, textUnderlineOffset: 5 }}>ANNULATION À TOUT MOMENT</span>
          </div>
        </div>
      </div>
    </>
  );
}
