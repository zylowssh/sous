import { ORANGE } from '../productAssets';
import { Arr, Sawtooth, Screw } from '../components/productPrimitives';

export default function ProductCtaSection() {
  return (
    <>
      {/* metal rail */}
      <div className="absolute" style={{ left: -60, right: -60, top: 58, height: 150, transform: "rotate(-1.6deg)" }}>
        <div className="metal absolute left-0 right-0 rounded-[6px]" style={{ top: 0, height: 34 }} />
        <div className="metal absolute left-0 right-0 rounded-[6px]" style={{ top: 48, height: 34 }} />
        <Screw x={140} y={57} />
        <Screw x={1290} y={8} />
      </div>

      {/* receipt */}
      <div className="absolute soft-shadow z-10" style={{ left: 523, top: 170, width: 404, height: 262, background: "var(--color-editorial-paper-alt)", padding: "26px 28px" }}>
        <div className="flex justify-between fm text-[10px] tracking-[0.14em]">
          <span>LE BON RESTAURANT</span>
          <span>TABLE 12</span>
        </div>
        <div className="h-px mt-[10px]" style={{ background: "rgba(22,19,16,.5)" }} />
        <div className="grid grid-cols-3 gap-[12px] mt-[14px] text-center fm font-bold text-[8px] leading-[1.35] tracking-[0.04em]">
          <span>Sans carte bancaire</span>
          <span>Mise en ligne accompagnée</span>
          <span>Support humain</span>
        </div>
        <div className="flex justify-center mt-[18px]">
          <div className="border-[3px] rounded-[4px] p-[4px]" style={{ borderColor: ORANGE, transform: "rotate(-4deg)" }}>
            <div className="fd text-[38px] tracking-[0.05em] px-[18px] py-[5px]" style={{ color: ORANGE, opacity: 0.92 }}>
              PRÊT À SERVIR
            </div>
          </div>
        </div>
        <div className="absolute left-[28px] right-[28px] bottom-[34px] flex justify-end fm text-[9px] tracking-[0.12em]">
          <span>SOUS.</span>
        </div>
        <div className="absolute left-0 right-0 bottom-[22px] border-t border-dashed" style={{ borderColor: "rgba(22,19,16,.35)" }} />
        <Sawtooth color="var(--color-editorial-paper-alt)" />
      </div>

      {/* clip */}
      <div className="absolute z-20" style={{ left: 698, top: 78, width: 46, height: 128 }}>
        <div className="metal absolute inset-x-0 top-0 rounded-[6px]" style={{ height: 108 }} />
        <div className="absolute left-1/2 -translate-x-1/2 rounded-[3px]" style={{ top: 96, width: 38, height: 18, background: "#B33A10", boxShadow: "0 2px 4px rgba(0,0,0,.4)" }} />
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 40, width: 30, height: 8, background: "rgba(20,16,11,.55)", borderRadius: 4 }} />
      </div>

      <h1 className="absolute fd text-center w-full" style={{ top: 480, fontSize: 60, lineHeight: 1.05, color: "#181410", letterSpacing: "0.005em" }}>
        VOUS CUISINEZ. SOUS TIENT LA CARTE.
      </h1>
      <p className="absolute text-center w-full text-[16px]" style={{ top: 582, color: "#FBEDE3" }}>
        Un menu juste. Un site vivant. Votre feu vert, toujours.
      </p>
      <div className="absolute w-full flex justify-center gap-[16px]" style={{ top: 628 }}>
        <button type="button" data-route="/signup" className="flex items-center gap-[10px] fm font-bold text-[12px] tracking-[0.14em] rounded-[4px] px-[34px] h-[48px]" style={{ background: "#191512", color: "var(--color-editorial-paper)" }}>
          COMMENCER <Arr className="w-[16px] h-[11px]" color="var(--color-editorial-paper)" />
        </button>
        <button type="button" data-route="/tarifs" className="fm font-bold text-[12px] tracking-[0.14em] rounded-[4px] px-[34px] h-[48px] border-[1.5px]" style={{ borderColor: "var(--color-editorial-paper)", color: "var(--color-editorial-paper)" }}>
          VOIR LES TARIFS
        </button>
      </div>

    </>
  );
}
