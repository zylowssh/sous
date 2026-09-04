export function Toggle({ checked, onChange, label, desc, icon: Icon, iconBg = 'bg-flame/10', iconColor = 'text-flame' }) {
  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <div className="flex items-start gap-3">
        {Icon && (
          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${iconBg}`}>
            <Icon className={`h-4 w-4 ${iconColor}`} />
          </div>
        )}
        <div>
          <p className="text-sm font-bold text-ink">{label}</p>
          {desc && <p className="mt-0.5 text-xs text-ink/50">{desc}</p>}
        </div>
      </div>
      <button type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${checked ? 'bg-flame' : 'bg-ink/15'}`}
      >
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-paper shadow transition-transform ${checked ? 'translate-x-5' : 'translate-x-0.5'}`} />
      </button>
    </div>
  );
}

export function Tabs({ tabs, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-6 border-b border-ink/10" role="tablist">
      {tabs.map((t) => (
        <button type="button"
          key={t}
          onClick={() => onChange(t)}
          role="tab"
          aria-selected={active === t}
          className={`relative pb-3 text-sm font-semibold transition-colors ${active === t ? 'text-flame' : 'text-ink/55 hover:text-ink'}`}
        >
          {t}
          {active === t && <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-flame" />}
        </button>
      ))}
    </div>
  );
}

export function Card({ title, action, className = '', children }) {
  return (
    <div className={`rounded-lg border border-ink/10 bg-paper p-6 ${className}`}>
      {(title || action) && (
        <div className="mb-4 flex items-center justify-between">
          {title && <h3 className="text-sm font-extrabold text-ink">{title}</h3>}
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

export function Badge({ tone = 'neutral', children }) {
  const tones = {
    green: 'bg-green-100 text-green-700',
    orange: 'bg-flame/10 text-flame',
    red: 'bg-red-100 text-red-600',
    neutral: 'bg-ink/8 text-ink/60',
    yellow: 'bg-amber-100 text-amber-700',
  };
  return <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${tones[tone]}`}>{children}</span>;
}

export function Field({ label, hint, children }) {
  const generatedId = useId();
  const control = isValidElement(children) && typeof children.type === 'string'
    ? cloneElement(children, { id: children.props.id ?? generatedId })
    : children;
  const controlId = isValidElement(control) ? control.props.id : undefined;

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        {controlId
          ? <label htmlFor={controlId} className="block text-sm font-semibold text-ink">{label}</label>
          : <p className="block text-sm font-semibold text-ink">{label}</p>}
        {hint && <span className="text-xs text-ink/40">{hint}</span>}
      </div>
      {control}
    </div>
  );
}

export const inputCls = 'w-full rounded-sm border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame';

export function Button({ variant = 'primary', className = '', children, ...props }) {
  const variants = {
    primary: 'bg-flame text-cream hover:bg-ink',
    dark: 'bg-ink text-cream hover:bg-coal',
    outline: 'border border-ink/20 text-ink hover:border-ink bg-transparent',
    ghost: 'text-ink/70 hover:text-ink',
    danger: 'border border-red-300 text-red-600 hover:bg-red-50',
  };
  return (
    <button type="button" className={`inline-flex items-center justify-center gap-2 rounded-sm px-4 py-2.5 text-sm font-bold transition-colors ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

// --- Charts -----------------------------------------------------------

function pointsToPath(values, w, h, pad = 4) {
  const max = Math.max(...values) * 1.15 || 1;
  const min = Math.min(0, Math.min(...values));
  const range = max - min || 1;
  const stepX = (w - pad * 2) / (values.length - 1 || 1);
  return values.map((v, i) => {
    const x = pad + i * stepX;
    const y = pad + (1 - (v - min) / range) * (h - pad * 2);
    return [x, y];
  });
}

export function Sparkline({ values, color = '#E4572E', height = 40, width = 120 }) {
  const pts = pointsToPath(values, width, height);
  const d = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ');
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full" preserveAspectRatio="none">
      <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="3" fill={color} />
    </svg>
  );
}

export function LineChart({ values, labels, color = '#E4572E', height = 200 }) {
  const width = 600;
  const pad = 8;
  const pts = pointsToPath(values, width, height, pad);
  const line = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ');
  const area = `${line} L${pts[pts.length - 1][0]},${height - pad} L${pts[0][0]},${height - pad} Z`;
  const gid = `grad-${color.replace('#', '')}`;
  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.25" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill={`url(#${gid})`} stroke="none" />
        <path d={line} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="2.5" fill={color} />)}
      </svg>
      {labels && (
        <div className="mt-1 flex justify-between text-[10px] text-ink/40">
          {labels.map((l) => <span key={l}>{l}</span>)}
        </div>
      )}
    </div>
  );
}

export function BarChart({ values, labels, color = '#E4572E', height = 160 }) {
  const max = Math.max(...values) * 1.15 || 1;
  return (
    <div>
      <div className="flex items-end gap-3" style={{ height }}>
        {values.map((v, i) => (
          <div key={i} className="flex flex-1 flex-col items-center justify-end gap-1.5">
            <span className="text-xs font-bold text-ink/70">{v}</span>
            <div className="w-full rounded-t-sm" style={{ height: `${(v / max) * 100}%`, minHeight: 4, background: color }} />
          </div>
        ))}
      </div>
      {labels && (
        <div className="mt-2 flex gap-3 text-[10px] text-ink/40">
          {labels.map((l) => <span key={l} className="flex-1 text-center">{l}</span>)}
        </div>
      )}
    </div>
  );
}

export function DonutChart({ segments, size = 140, thickness = 18 }) {
  const total = segments.reduce((s, seg) => s + seg.value, 0) || 1;
  let acc = 0;
  const stops = segments.map((seg) => {
    const start = (acc / total) * 100;
    acc += seg.value;
    const end = (acc / total) * 100;
    return `${seg.color} ${start}% ${end}%`;
  });
  return (
    <div
      className="relative shrink-0 rounded-full"
      style={{ width: size, height: size, background: `conic-gradient(${stops.join(', ')})` }}
    >
      <div className="absolute rounded-full bg-paper" style={{ inset: thickness }} />
    </div>
  );
}
import { cloneElement, isValidElement, useId } from 'react';
