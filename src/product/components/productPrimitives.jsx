import {
  Pin as SharedPin,
  Sawtooth as SharedSawtooth,
} from '../../components/EditorialPrimitives';
import { INK } from '../productAssets';

export { Arr, QR, SousLogoMark, Star, Underline } from '../../components/EditorialPrimitives';

export const HandArrow = ({ x, y, w = 46, h = 14, color = INK, rotate = 0 }) => (
  <svg
    viewBox="0 0 46 14"
    className="absolute"
    style={{ left: x, top: y, width: w, height: h, transform: `rotate(${rotate}deg)` }}
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M2 7h36M31 2l9 5-9 5" />
  </svg>
);

export const Pin = (props) => <SharedPin {...props} />;

export const Sawtooth = ({ color = 'var(--color-editorial-paper-alt)' }) => (
  <SharedSawtooth color={color} teeth={44} />
);

export const Screw = ({ x, y }) => (
  <span
    className="absolute rounded-full flex items-center justify-center"
    style={{
      left: x,
      top: y,
      width: 18,
      height: 18,
      background: "radial-gradient(circle at 35% 30%, #fbfaf8, #b9b5ad 55%, #7d7972)",
      boxShadow: "0 1px 3px rgba(0,0,0,.5), inset 0 0 2px rgba(0,0,0,.4)",
    }}
  >
    <svg viewBox="0 0 10 10" className="w-[9px] h-[9px]" stroke="#55504a" strokeWidth="1.4">
      <path d="M5 1v8M1 5h8" />
    </svg>
  </span>
);

/* ============================= ALLERGEN ICONS ============================= */
const AGLYPHS = {
  gluten: (
    <>
      <path d="M8 14V5.5" />
      <path d="M8 6C6.8 6 5.6 4.9 5.6 3.4 7 3.4 8 4.5 8 6Z" />
      <path d="M8 6c1.2 0 2.4-1.1 2.4-2.6C9 3.4 8 4.5 8 6Z" />
      <path d="M8 9.5C6.8 9.5 5.6 8.4 5.6 6.9c1.4 0 2.4 1.1 2.4 2.6Z" />
      <path d="M8 9.5c1.2 0 2.4-1.1 2.4-2.6-1.4 0-2.4 1.1-2.4 2.6Z" />
    </>
  ),
  fish: (
    <>
      <path d="M2.5 8c1.9-2.5 4.7-3.7 7.6-2.5L13.5 3v10l-3.4-2.5C7.2 11.7 4.4 10.5 2.5 8Z" />
      <circle cx="5.1" cy="7.3" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  milk: <path d="M6.4 2.5h3.2v2.2L10.9 7v6.5H5.1V7l1.3-2.3V2.5Z" />,
  egg: <path d="M8 3.2c2.2 0 3.8 2.7 3.8 5.4S10.2 13 8 13 4.2 11.3 4.2 8.6 5.8 3.2 8 3.2Z" />,
  nut: (
    <>
      <path d="M5 6.3c0-2 1.3-3.5 3-3.5s3 1.5 3 3.5" />
      <path d="M4.8 6.3h6.4" />
      <path d="M5.2 6.3c0 3 1.2 5.6 2.8 6.7 1.6-1.1 2.8-3.7 2.8-6.7" />
    </>
  ),
  soy: (
    <>
      <path d="M8 13.5V8" />
      <path d="M8 8c0-2.5 2-4.5 4.5-4.5C12.5 6 10.5 8 8 8Z" />
      <path d="M8 10.2c0-1.8-1.4-3.2-3.2-3.2 0 1.8 1.4 3.2 3.2 3.2Z" />
    </>
  ),
};
export const AIcon = ({ k, s = 18 }) => (
  <span
    className="inline-flex items-center justify-center rounded-full border"
    style={{ width: s, height: s, borderColor: "#9a9284", color: "#6d675a" }}
  >
    <svg viewBox="0 0 16 16" style={{ width: s * 0.62, height: s * 0.62 }} fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
      {AGLYPHS[k]}
    </svg>
  </span>
);
