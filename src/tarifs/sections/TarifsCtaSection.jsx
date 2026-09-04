import { ORANGE } from '../tarifsAssets';
import { Arr, Check, Sawtooth } from '../components/tarifsPrimitives';

const BrassRing = ({ x, top = 60, h = 62 }) => (
  <span
    className="absolute rounded-full"
    style={{
      left: x,
      top,
      width: 11,
      height: h,
      border: '4px solid #8a6a2f',
      boxShadow: '0 1px 2px rgba(0,0,0,.35)',
    }}
  />
);

export default function TarifsCtaSection() {
  return (
    <>
      <h1 className="absolute fd" style={{ left: 84, top: 160, fontSize: 88, lineHeight: 1.0, color: "var(--color-editorial-paper)" }}>
        LE BON PLAN,
        <br />
        C'EST CELUI QUI
        <br />
        RESTE À JOUR.
      </h1>
      <p className="absolute text-[17px] leading-[1.55]" style={{ left: 85, top: 516, color: "#FBEDE3" }}>
        Commencez avec Essentiel.
        <br />
        Passez à Pro quand votre service grandit.
      </p>

      <ul className="absolute grid grid-cols-2 gap-x-[26px] gap-y-[10px]" style={{ left: 85, top: 586, width: 670 }} aria-label="Services inclus">
        {['Site personnalisé', 'QR menu', 'Synchronisation caisse', 'Support humain'].map((item) => (
          <li key={item} className="flex items-center gap-[9px] text-[12px] font-semibold" style={{ color: 'var(--color-editorial-paper)' }}>
            <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full" style={{ background: 'var(--color-editorial-near-black)' }}>
              <Check s={11} color="var(--color-editorial-paper)" />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <div className="absolute flex gap-[20px]" style={{ left: 85, top: 672 }}>
        <button type="button" data-route="/signup?plan=essentiel" className="flex items-center gap-[12px] font-bold text-[15px] tracking-[0.04em] rounded-[5px] px-[38px] h-[62px]" style={{ background: "var(--color-editorial-near-black)", color: "var(--color-editorial-paper)" }}>
          COMMENCER À 49 € <Arr className="w-[17px] h-[12px]" color="var(--color-editorial-paper)" />
        </button>
        <button type="button" data-route="/signup?mode=demo" className="font-bold text-[15px] tracking-[0.04em] rounded-[5px] px-[38px] h-[62px] border-[1.5px]" style={{ borderColor: "var(--color-editorial-paper)", color: "var(--color-editorial-paper)" }}>
          RÉSERVER UNE DÉMO
        </button>
      </div>

      {/* brass rail + bracket */}
      <div className="absolute" style={{ left: 893, top: 52, width: 40, height: 78 }}>
        <div className="brass absolute rounded-[4px]" style={{ left: 0, top: 8, width: 30, height: 62, boxShadow: "0 2px 5px rgba(0,0,0,.4)" }} />
        <span className="absolute rounded-full" style={{ left: 10, top: 16, width: 9, height: 9, background: "#5d451c" }} />
        <span className="absolute rounded-full" style={{ left: 10, top: 52, width: 9, height: 9, background: "#5d451c" }} />
      </div>
      <div className="brass absolute rounded-[6px]" style={{ left: 915, top: 66, width: 560, height: 15, boxShadow: "0 3px 6px rgba(0,0,0,.4)" }} />
      <BrassRing x={960} />
      <BrassRing x={1160} />

      {/* hanging price tag */}
      <div className="absolute paper-shadow" style={{ left: 900, top: 118, width: 330, height: 480, background: "var(--color-editorial-paper-alt)", transform: "rotate(2deg)", padding: "40px 30px 30px" }}>
        <Sawtooth color="var(--color-editorial-paper-alt)" />
        <span className="absolute rounded-full" style={{ left: 62, top: 10, width: 15, height: 15, background: "#B33A10", boxShadow: "inset 0 2px 3px rgba(0,0,0,.5)" }} />
        <span className="absolute rounded-full" style={{ right: 62, top: 10, width: 15, height: 15, background: "#B33A10", boxShadow: "inset 0 2px 3px rgba(0,0,0,.5)" }} />
        <div className="flex items-baseline justify-center gap-[10px]">
          <span className="fd text-[46px]">49 €</span>
          <span className="font-bold text-[20px]">/ mois</span>
        </div>
        <div className="h-px mt-[22px]" style={{ left: 30, right: 30, background: "rgba(22,19,16,.4)" }} />
        <div className="text-center font-bold text-[20px] mt-[24px]">aucun frais caché</div>
        <div className="h-px mt-[24px]" style={{ background: "rgba(22,19,16,.4)" }} />
        <div className="text-center font-bold text-[20px] mt-[24px]">sans engagement</div>
        <div className="flex justify-center mt-[34px]">
          <div className="border-[3px] rounded-[6px] px-[20px] py-[12px] text-center" style={{ borderColor: ORANGE, transform: "rotate(-3deg)" }}>
            <div className="fd text-[25px] leading-[1.2] tracking-[0.03em]" style={{ color: ORANGE }}>
              VOTRE FEU VERT
              <br />
              COMPRIS
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
