import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from './doodles';

export function Eyebrow({ children, light = false, className = '' }) {
  return (
    <p className={`text-[10px] font-black uppercase tracking-[0.22em] ${light ? 'text-cream/65' : 'text-flame'} ${className}`}>
      {children}
    </p>
  );
}

export function ButtonLink({ to, children, tone = 'dark', className = '' }) {
  const tones = {
    dark: 'border-ink bg-ink text-cream hover:bg-flame hover:border-flame',
    light: 'border-cream bg-cream text-ink hover:bg-butter hover:border-butter',
    outline: 'border-ink bg-transparent text-ink hover:bg-ink hover:text-cream',
    outlineLight: 'border-cream/55 bg-transparent text-cream hover:bg-cream hover:text-ink',
    flame: 'border-flame bg-flame text-cream hover:bg-ink hover:border-ink',
  };

  return (
    <Link
      to={to}
      className={`group inline-flex min-h-11 items-center justify-center gap-3 border px-5 py-3 text-[11px] font-black uppercase tracking-[0.11em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${tones[tone]} ${className}`}
    >
      {children}
      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function BrowserFrame({ children, dark = false, label = 'sous.app', className = '' }) {
  return (
    <div className={`overflow-hidden border shadow-photo ${dark ? 'border-cream/15 bg-coal text-cream' : 'border-ink/20 bg-paper text-ink'} ${className}`}>
      <div className={`flex h-9 items-center justify-between border-b px-3 ${dark ? 'border-cream/10' : 'border-ink/10'}`}>
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-flame" />
          <span className="h-2 w-2 rounded-full bg-butter" />
          <span className="h-2 w-2 rounded-full bg-[#43aa58]" />
        </div>
        <span className={`text-[8px] font-bold tracking-wide ${dark ? 'text-cream/40' : 'text-ink/35'}`}>{label}</span>
      </div>
      {children}
    </div>
  );
}

export function PhoneFrame({ children, dark = true, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-[1.65rem] border-[5px] shadow-photo ${dark ? 'border-ink bg-coal text-cream' : 'border-paper bg-paper text-ink'} ${className}`}>
      <div className={`mx-auto mt-2 h-1.5 w-12 rounded-full ${dark ? 'bg-cream/25' : 'bg-ink/20'}`} />
      {children}
    </div>
  );
}

export function Receipt({ children, className = '', dark = false }) {
  return (
    <div className={`relative border px-5 py-5 shadow-card ${dark ? 'border-cream/15 bg-[#1b1815] text-cream' : 'border-ink/20 bg-paper text-ink'} ${className}`}>
      <div className="absolute inset-x-0 -bottom-1 h-2" aria-hidden="true" style={{
        background: dark
          ? 'linear-gradient(135deg, transparent 5px, #1b1815 0) 0 0/10px 10px repeat-x'
          : 'linear-gradient(135deg, transparent 5px, #FDFAF3 0) 0 0/10px 10px repeat-x',
      }} />
      {children}
    </div>
  );
}

export function Stamp({ children, light = false, className = '' }) {
  return (
    <span className={`inline-flex -rotate-2 items-center border-2 px-3 py-1 text-[9px] font-black uppercase tracking-[0.16em] ${light ? 'border-cream/60 text-cream' : 'border-flame text-flame'} ${className}`}>
      {children}
    </span>
  );
}

export function FeatureList({ items, light = false, className = '' }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-2 text-sm leading-snug ${light ? 'text-cream/75' : 'text-ink/70'}`}>
          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function TrustStrip({ light = false, items = ['Sans carte bancaire', 'Sans engagement', 'Support humain', 'Vos données restent les vôtres'] }) {
  return (
    <div className={`border-t ${light ? 'border-cream/20' : 'border-ink/15'}`}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y sm:grid-cols-4 sm:divide-y-0">
        {items.map((item) => (
          <div key={item} className={`px-4 py-4 text-center text-[9px] font-black uppercase tracking-[0.16em] ${light ? 'text-cream/65' : 'text-ink/55'}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SectionNumber({ children, light = false }) {
  return <span className={`font-display text-6xl leading-none ${light ? 'text-cream/10' : 'text-ink/10'}`}>{children}</span>;
}
