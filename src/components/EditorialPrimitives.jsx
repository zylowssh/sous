import { useMemo } from 'react';
import { SousMark } from './doodles';

const DEFAULT_ORANGE = '#E4501E';
const DEFAULT_INK = '#161310';

export const SousLogoMark = ({ className = 'w-[15px] h-[19px]' }) => (
  <SousMark className={`${className} shrink-0 text-[#E4501E]`} />
);

export const Flame = ({ className = 'w-[15px] h-[19px]', color = DEFAULT_ORANGE }) => (
  <svg viewBox="0 0 14 18" className={className} fill="none">
    <path d="M4.7 1.2c1.2 2.8-2.6 5-2.6 8.7a5 5 0 0 0 10 0c0-2.4-1.3-4.3-2.5-6-.3 1-.7 1.8-1.6 2.6C7.6 4.5 6.8 2.6 4.7 1.2Z" fill={color} />
  </svg>
);

export const Arr = ({ className = 'w-[18px] h-[12px]', color = 'currentColor' }) => (
  <svg viewBox="0 0 20 12" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round">
    <path d="M1 6h16M12 1.5 17.5 6 12 10.5" />
  </svg>
);

export const Star = ({ className = 'w-[22px] h-[22px]', color = DEFAULT_ORANGE }) => (
  <svg viewBox="0 0 24 24" className={className} stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round">
    <path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" />
  </svg>
);

export const Underline = ({ className = 'w-[150px] h-[10px]', color = DEFAULT_ORANGE }) => (
  <svg viewBox="0 0 150 10" className={className} fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round">
    <path d="M4 7C40 2.5 78 3 146 4.5" />
  </svg>
);

export const Sawtooth = ({ color = '#F2EDE4', teeth = 60, top = false }) => {
  let path = 'M0 0';
  for (let index = 0; index < teeth; index += 1) {
    path += ` L${index * 10 + 5} 9 L${index * 10 + 10} 0`;
  }

  return (
    <svg
      className="absolute left-0 w-full"
      style={top ? { top: -9, height: 9, transform: 'rotate(180deg)' } : { bottom: -9, height: 9 }}
      viewBox={`0 0 ${teeth * 10} 9`}
      preserveAspectRatio="none"
    >
      <path d={`${path} Z`} fill={color} />
    </svg>
  );
};

export const Check = ({ s = 14, color = DEFAULT_ORANGE }) => (
  <svg viewBox="0 0 14 14" style={{ width: s, height: s }} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <path d="M2 7.5l3.2 3.2L12 3.5" />
  </svg>
);

export const Circle = ({ s = 13 }) => (
  <svg viewBox="0 0 14 14" style={{ width: s, height: s }} fill="none" stroke={DEFAULT_INK} strokeWidth="1.5">
    <circle cx="7" cy="7" r="5.4" />
  </svg>
);

export const Pin = ({ x, y, s = 16 }) => (
  <span
    className="absolute rounded-full"
    style={{
      left: x,
      top: y,
      width: s,
      height: s,
      background: 'radial-gradient(circle at 35% 30%, #f7dc8f, #c9971f 55%, #7d560e)',
      boxShadow: '0 3px 5px rgba(0,0,0,.35)',
    }}
  />
);

export function QR({
  seed = 5,
  size = 100,
  dark = '#181510',
  bg = '#FFFFFF',
  logo = false,
  className = '',
}) {
  const gridSize = 25;
  const cells = useMemo(() => {
    let state = (seed * 7919 + 13) >>> 0;
    const random = () => {
      state ^= state << 13;
      state >>>= 0;
      state ^= state >> 17;
      state ^= state << 5;
      state >>>= 0;
      return state / 4294967296;
    };

    return Array.from({ length: gridSize }, () => (
      Array.from({ length: gridSize }, () => random() > 0.5)
    ));
  }, [seed]);

  const isFinderCell = (x, y) => (
    (x < 8 && y < 8)
    || (x > gridSize - 9 && y < 8)
    || (x < 8 && y > gridSize - 9)
  );
  const isLogoCell = (x, y) => logo
    && x > 8
    && x < gridSize - 9
    && y > 8
    && y < gridSize - 9;

  const dataCells = [];
  for (let y = 0; y < gridSize; y += 1) {
    for (let x = 0; x < gridSize; x += 1) {
      if (!isFinderCell(x, y) && !isLogoCell(x, y) && cells[y][x]) {
        dataCells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />);
      }
    }
  }

  const finderPattern = (x, y, key) => (
    <g key={key}>
      <path d={`M${x} ${y}h7v7h-7z M${x + 1} ${y + 1}h5v5h-5z`} fillRule="evenodd" />
      <rect x={x + 2} y={y + 2} width="3" height="3" />
    </g>
  );

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size, background: bg, padding: size * 0.06 }}>
      <svg viewBox={`0 0 ${gridSize} ${gridSize}`} className="w-full h-full" fill={dark} shapeRendering="crispEdges">
        {dataCells}
        {finderPattern(0, 0, 'top-left')}
        {finderPattern(gridSize - 7, 0, 'top-right')}
        {finderPattern(0, gridSize - 7, 'bottom-left')}
      </svg>
      {logo && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span style={{ background: bg, padding: 3, borderRadius: 3, display: 'flex' }}>
            <SousLogoMark className="w-[14px] h-[17px]" />
          </span>
        </span>
      )}
    </div>
  );
}
