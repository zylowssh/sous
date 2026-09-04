export { Arr, Check, Flame, QR, SousLogoMark, Star, Underline } from '../../components/EditorialPrimitives';

export const Dots = ({ dark = false }) => (
  <div className="flex gap-[5px] px-[12px] h-[26px] items-center border-b" style={{ borderColor: dark ? "rgba(255,255,255,.12)" : "rgba(22,19,16,.15)" }}>
    <span className="w-[8px] h-[8px] rounded-full" style={{ background: "var(--color-flame-legacy)" }} />
    <span className="w-[8px] h-[8px] rounded-full" style={{ background: "var(--color-editorial-gold)" }} />
    <span className="w-[8px] h-[8px] rounded-full" style={{ background: "#7FB069" }} />
  </div>
);
