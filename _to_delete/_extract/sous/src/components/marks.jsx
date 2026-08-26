/* Wordmark + pictogrammes. Tout est en SVG : rien à charger, rien qui casse. */

/* Le circonflexe au-dessus du « u » est légèrement bombé et posé sur une base plate :
   il se lit comme un accent, et comme une toque si on regarde deux secondes. */
export const SousWordmark = ({ className = '', tagline = false }) => (
  <span className={`inline-flex select-none flex-col leading-none ${className}`}>
    <span className="relative inline-block font-display text-[1em] font-semibold tracking-[-0.01em]">
      s<span className="relative">o</span>
      <span className="relative">
        u
        <svg
          viewBox="0 0 28 12"
          aria-hidden="true"
          className="absolute -top-[0.30em] left-[54%] h-[0.24em] w-[0.62em] -translate-x-1/2 overflow-visible"
        >
          <path
            d="M2 11 C 2 3.5, 8 1, 14 1 C 20 1, 26 3.5, 26 11"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      s
    </span>
    {tagline && (
      <span className="mt-1 text-[0.26em] font-semibold uppercase tracking-label text-ink/50">
        le sous-chef de votre site
      </span>
    )}
  </span>
);

export const ArrowRight = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Check = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Pencil = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M4 20h4L19 9a2.1 2.1 0 0 0-3-3L5 17v3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

export const Clock = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 7.5V12l3 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const Lock = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="4.5" y="10.5" width="15" height="9.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 10.5V8a4 4 0 1 1 8 0v2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const Sync = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M20 12a8 8 0 0 1-13.7 5.6M4 12a8 8 0 0 1 13.7-5.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M17.5 3v3.6h-3.6M6.5 21v-3.6h3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const QrGlyph = ({ className = '' }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
    {[
      [3, 3],
      [26, 3],
      [3, 26],
    ].map(([x, y]) => (
      <g key={`${x}-${y}`}>
        <rect x={x} y={y} width="11" height="11" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
        <rect x={x + 3.5} y={y + 3.5} width="4" height="4" fill="currentColor" />
      </g>
    ))}
    <path
      d="M20 20h4v4h-4zM28 20h3v3h-3zM34 24h3v3h-3zM20 28h3v3h-3zM26 30h4v4h-4zM33 33h4v4h-4zM20 36h3v1.5h-3zM36 18h1.5v3H36z"
      fill="currentColor"
    />
  </svg>
);

export const Scale = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 4v16M5 8h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M5 8 2.5 14a3 3 0 0 0 5 0L5 8ZM19 8l-2.5 6a3 3 0 0 0 5 0L19 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

/* Une seule annotation manuscrite par page, pas plus : c'est ce qui la rend crédible. */
export const HandArrow = ({ className = '' }) => (
  <svg viewBox="0 0 60 26" fill="none" className={className} aria-hidden="true">
    <path
      d="M1 20C10 6 26 1 44 8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path d="M36 4.5 45 8.4l-4.6 6.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
