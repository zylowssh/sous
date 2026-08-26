export const ArrowRightIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 12h15" /><path d="M13 6l6 6-6 6" />
  </svg>
);

export const ArrowLeftIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 12H5" /><path d="M11 6l-6 6 6 6" />
  </svg>
);

export const HandArrowRight = ({ className = '' }) => (
  <svg viewBox="0 0 64 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 13c18 2 34 2 50-1" /><path d="M44 4l12 8-12 8" />
  </svg>
);

export const HandArrowDown = ({ className = '' }) => (
  <svg viewBox="0 0 32 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 4c-2 12-2 24 0 36" /><path d="M8 32l8 12 8-12" />
  </svg>
);

export const HandArrowSwoop = ({ className = '' }) => (
  <svg viewBox="0 0 96 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 40C28 36 58 26 88 10" /><path d="M74 8l14 2-4 14" />
  </svg>
);

export const ScribbleCircle = ({ className = '' }) => (
  <svg viewBox="0 0 200 90" preserveAspectRatio="none" fill="none"
    className={`pointer-events-none absolute overflow-visible ${className}`} stroke="currentColor" strokeWidth="4" strokeLinecap="round">
    <path pathLength="1" className="draw"
      d="M100 8C40 6 8 22 10 45c2 25 45 39 95 37 55-2 89-18 87-40C190 18 150 6 92 10" />
  </svg>
);

export const CheckIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const MessageIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const EditIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

export const AsteriskIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
  </svg>
);

// The two-stroke "steam" mark from public/brand/sous-icon.svg, recolorable
// via currentColor so it can sit on light or dark section backgrounds.
export const SousMark = ({ className = '' }) => (
  <svg viewBox="0 0 120 180" fill="currentColor" className={className} aria-hidden="true">
    <path d="M48 16C64 37 66 57 54 76C43 93 31 106 37 130C19 109 22 86 34 67C47 48 56 33 48 16Z" />
    <path d="M82 47C97 68 99 88 87 107C76 124 64 137 70 161C52 140 55 117 67 98C80 79 90 64 82 47Z" />
  </svg>
);
