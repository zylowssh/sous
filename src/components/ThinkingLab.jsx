import { useEffect, useMemo, useState } from 'react';
import { ThinkingOrb } from '../thinking/ThinkingOrb';
import { ThinkingLogo } from '../thinking/ThinkingLogo';

const ORB_STATES = [
  ['working', 'Travail'],
  ['searching', 'Recherche'],
  ['solving', 'Résolution'],
  ['listening', 'Écoute'],
  ['connecting', 'Connexion'],
  ['weaving', 'Tissage'],
  ['composing', 'Composition'],
  ['breathing', 'Respiration'],
  ['shaping', 'Formation'],
  ['simmer', 'Frisson'],
  ['swirl', 'Tourbillon'],
  ['steam', 'Vapeur'],
];

const LOGO_STATES = [
  ['thinking', 'Réflexion'],
  ['searching', 'Recherche'],
  ['working', 'Travail'],
  ['solving', 'Résolution'],
  ['listening', 'Écoute'],
  ['waiting', 'Attente'],
  ['generating', 'Génération'],
  ['floating', 'Flottement'],
  ['pulsing', 'Palpitation'],
];

const PALETTE = ['#E4572E', '#EEC461', '#CFCAAD', '#FDFAF3', '#8BC0C4', '#A67C52'];

const ICON_PATH = '/brand/sous-icon.svg';
const LOGO_PATH = '/brand/sous-icon.svg';

const svgCache = {};
async function getSvg(path) {
  if (!svgCache[path]) svgCache[path] = fetch(path).then((r) => r.text());
  return svgCache[path];
}

const fmtTint = (tint) => tint ?? null;

function Slider({ label, value, onChange, min, max, step = 1, format = (v) => v }) {
  return (
    <label className="block">
      <span className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-widest text-ink/50">
        {label}
        <span className="font-semibold normal-case tracking-normal text-flame">{format(value)}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full accent-flame"
      />
    </label>
  );
}

function Toggle({ label, checked, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`flex items-center gap-2 text-xs font-bold ${checked ? 'text-ink' : 'text-ink/40'} transition-colors`}
    >
      <span className={`relative h-4 w-7 rounded-full transition-colors ${checked ? 'bg-flame' : 'bg-ink/20'}`}>
        <span className={`absolute top-0.5 h-3 w-3 rounded-full bg-cream transition-transform ${checked ? 'translate-x-3.5' : 'translate-x-0.5'}`} />
      </span>
      {label}
    </button>
  );
}

function Segmented({ options, value, onChange }) {
  return (
    <div className="flex rounded-sm border border-ink/15 p-0.5">
      {options.map(([val, label]) => (
        <button
          key={val}
          type="button"
          onClick={() => onChange(val)}
          className={`flex-1 rounded-sm px-2 py-1.5 text-[10px] font-extrabold uppercase tracking-widest transition-colors ${
            value === val ? 'bg-ink text-cream' : 'text-ink/50 hover:text-ink'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function StateChips({ states, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {states.map(([val, label]) => (
        <button
          key={val}
          type="button"
          onClick={() => onChange(val)}
          className={`rounded-sm border px-2.5 py-1.5 text-[10px] font-extrabold uppercase tracking-widest transition-colors ${
            value === val ? 'border-flame bg-flame text-cream' : 'border-ink/15 text-ink/60 hover:border-flame hover:text-flame'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function ThinkingStateGrids() {
  const [icon, setIcon] = useState(null);
  useEffect(() => {
    let live = true;
    getSvg(ICON_PATH).then((s) => {
      if (live) setIcon(s);
    });
    return () => {
      live = false;
    };
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <div className="mb-3 flex items-baseline justify-between gap-2">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">Les 12 états d’orb</p>
          <p className="text-[10px] text-ink/40">65 px · teinte flame</p>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {ORB_STATES.map(([val, label]) => (
            <div key={val} data-theme="light" className="flex flex-col items-center gap-2 rounded-md border border-ink/15 bg-paper p-4">
              <ThinkingOrb state={val} size={65} tint="#E4572E" speed={1.3} />
              <p className="text-center text-[9px] font-extrabold uppercase leading-tight tracking-widest text-ink/50">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-3 flex items-baseline justify-between gap-2">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">Les 9 états du logo</p>
          <p className="text-[10px] text-ink/40">vapeur cuite en points · 65 px</p>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-9">
          {LOGO_STATES.map(([val, label]) => (
            <div key={val} data-theme="light" className="flex flex-col items-center gap-2 rounded-md border border-ink/15 bg-paper p-4">
              {icon ? (
                <ThinkingLogo logo={{ svg: icon }} state={val} size={65} tint="#E4572E" bake={{ style: 'fill', shell: 'dome', depth: 0.34 }} />
              ) : (
                <div className="flex h-[65px] w-[65px] items-center justify-center text-[10px] font-bold text-ink/30">Cuisson…</div>
              )}
              <p className="text-center text-[9px] font-extrabold uppercase leading-tight tracking-widest text-ink/50">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ThinkingLab() {
  const [engine, setEngine] = useState('orb');
  const [orbState, setOrbState] = useState('searching');
  const [logoState, setLogoState] = useState('thinking');
  const [size, setSize] = useState(96);
  const [speed, setSpeed] = useState(1);
  const [tint, setTint] = useState('#E4572E');
  const [theme, setTheme] = useState('auto');
  const [back, setBack] = useState('light');
  const [paused, setPaused] = useState(false);

  const [style, setStyle] = useState('fill');
  const [shell, setShell] = useState('dome');
  const [depth, setDepth] = useState(0.34);
  const [seed, setSeed] = useState(1);
  const [count, setCount] = useState('auto');
  const [source, setSource] = useState('vapeur');
  const [customSvg, setCustomSvg] = useState('');

  const [logoSource, setLogoSource] = useState(null);
  useEffect(() => {
    if (engine !== 'logo') return;
    if (source === 'custom') {
      setLogoSource(customSvg.trim() ? { svg: customSvg } : null);
      return;
    }
    let live = true;
    getSvg(source === 'logo' ? LOGO_PATH : ICON_PATH).then((s) => {
      if (live) setLogoSource({ svg: s });
    });
    return () => {
      live = false;
    };
  }, [source, engine, customSvg]);

  const bake = useMemo(
    () => ({ style, shell, depth, seed, ...(count === 'auto' ? {} : { count }) }),
    [style, shell, depth, seed, count]
  );

  const code = useMemo(() => {
    if (engine === 'orb') {
      return `import { ThinkingOrb } from '../thinking/ThinkingOrb';

export function MonOrb() {
  return (
    <ThinkingOrb
      state="${orbState}"
      size={${size}}
      speed={${speed}}
      theme="${theme}"
      ${tint ? `tint="${tint}"` : ``}
      paused={${paused}}
    />
  );
}`;
    }
    const svgText = (source === 'custom' ? customSvg.trim() : '').replace(/</g, '&lt;').replace(/\n\s*/g, ' ').slice(0, 1200);
    const svgLine =
      source === 'custom'
        ? `const [svg] = useState(\`${svgText}\`);`
        : `const [svg] = useState(() => fetch('${source === 'logo' ? LOGO_PATH : ICON_PATH}').then((r) => r.text()));`;
    return `import { useState } from 'react';
import { ThinkingLogo } from '../thinking/ThinkingLogo';

export function MonLogo() {
  ${svgLine}

  return (
    <ThinkingLogo
      logo={{ svg }}
      state="${logoState}"
      size={${size}}
      speed={${speed}}
      theme="${theme}"
      ${tint ? `tint="${tint}"` : ``}
      paused={${paused}}
      bake={{ style: '${style}', shell: '${shell}', depth: ${depth}, seed: ${seed}${
        count === 'auto' ? '' : `, count: ${count}`
      } }}
    />
  );
}`;
  }, [engine, orbState, logoState, size, speed, tint, theme, paused, style, shell, depth, seed, count, source, customSvg]);

  const previewProps = {
    size,
    speed,
    tint: fmtTint(tint),
    theme,
    paused,
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <div className="flex flex-col">
        <div data-theme={back} className={`relative flex items-center justify-center overflow-hidden rounded-md border border-ink/15 p-8 transition-colors ${back === 'dark' ? 'bg-coal' : 'bg-paper'}`}>
          {engine === 'orb' ? (
            <ThinkingOrb {...previewProps} state={orbState} />
          ) : logoSource ? (
            <ThinkingLogo {...previewProps} logo={logoSource} state={logoState} bake={bake} />
          ) : (
            <div className="flex h-24 w-24 items-center justify-center text-center text-[10px] font-extrabold uppercase tracking-widest text-ink/30">Cuisson…</div>
          )}
          <div className="absolute right-3 top-3 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPaused(!paused)}
              className={`rounded-sm px-2 py-1 text-[9px] font-extrabold uppercase tracking-widest transition-colors ${
                paused ? 'bg-butter text-ink' : 'bg-ink/10 text-ink/60'
              }`}
            >
              {paused ? 'Figé' : 'Pause'}
            </button>
            <button
              type="button"
              onClick={() => setBack(back === 'dark' ? 'light' : 'dark')}
              className={`rounded-sm px-2 py-1 text-[9px] font-extrabold uppercase tracking-widest transition-colors ${
                back === 'dark' ? 'bg-cream/10 text-cream' : 'bg-ink text-cream'
              }`}
            >
              {back === 'dark' ? 'Sombre' : 'Clair'}
            </button>
          </div>
        </div>

        <div className="mt-4 rounded-md border border-ink/15 bg-paper p-4">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">Tailles</p>
          <div className="mt-3 flex items-end justify-between gap-4">
            {[20, 36, 64, 96, 150].map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                {engine === 'orb' ? (
                  <ThinkingOrb {...previewProps} size={s} state={orbState} />
                ) : logoSource ? (
                  <ThinkingLogo {...previewProps} size={s} logo={logoSource} state={logoState} bake={bake} />
                ) : (
                  <div className="h-[20px] w-[20px]" />
                )}
                <span className="text-[9px] text-ink/40">{s}px</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-md border border-ink/15 bg-paper p-4">
          <Segmented
            options={[
              ['orb', 'L’orb (12 états)'],
              ['logo', 'Le logo (9 états)'],
            ]}
            value={engine}
            onChange={setEngine}
          />
          <div className="mt-3">
            {engine === 'orb' ? (
              <StateChips states={ORB_STATES} value={orbState} onChange={setOrbState} />
            ) : (
              <StateChips states={LOGO_STATES} value={logoState} onChange={setLogoState} />
            )}
          </div>
        </div>

        <div className="rounded-md border border-ink/15 bg-paper p-4">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">Mise au point</p>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <Slider label="Taille" value={size} onChange={setSize} min={20} max={220} step={4} format={(v) => `${v}px`} />
            <Slider label="Vitesse" value={speed} onChange={setSpeed} min={0.25} max={3} step={0.05} format={(v) => `×${v.toFixed(2)}`} />
            <div className="flex items-end justify-between gap-4 border-t border-ink/10 pb-1 pt-3">
              <Toggle label="Figé (pause)" checked={paused} onChange={setPaused} />
            </div>
            <div className="block" role="group" aria-label="Thème">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">Thème</p>
              <div className="mt-1.5">
                <Segmented
                  options={[
                    ['auto', 'Auto'],
                    ['dark', 'Nuit'],
                    ['light', 'Jour'],
                  ]}
                  value={theme}
                  onChange={setTheme}
                />
              </div>
            </div>
            <div className="block" role="group" aria-label="Teinte">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">Teinte</p>
              <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setTint(null)}
                  className={`flex h-5 items-center rounded-sm border px-1.5 text-[9px] font-extrabold uppercase tracking-wider transition-colors ${
                    tint === null ? 'border-flame bg-ink text-cream' : 'border-ink/15 text-ink/50 hover:text-ink'
                  }`}
                >
                  Mono
                </button>
                {PALETTE.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setTint(c)}
                    className={`h-5 w-5 rounded-full border transition-transform hover:scale-110 ${tint === c ? 'border-ink ring-2 ring-flame/40' : 'border-ink/20'}`}
                    style={{ backgroundColor: c }}
                    aria-label={`Teinte ${c}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {engine === 'logo' && (
          <div className="rounded-md border border-ink/15 bg-paper p-4">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">Cuisson du logo</p>
            <div className="mt-3 grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">Source</span>
                <select
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  className="mt-1 w-full rounded-sm border border-ink/20 bg-cream px-2.5 py-1.5 text-sm text-ink focus:border-flame focus:outline-none"
                >
                  <option value="vapeur">Vapeur (icône)</option>
                  <option value="logo">Logo complet</option>
                  <option value="custom">SVG collé</option>
                </select>
              </label>
              <label className="block">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">Style</span>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="mt-1 w-full rounded-sm border border-ink/20 bg-cream px-2.5 py-1.5 text-sm text-ink focus:border-flame focus:outline-none"
                >
                  <option value="fill">Plein</option>
                  <option value="outline">Contour</option>
                  <option value="both">Les deux</option>
                </select>
              </label>
              <label className="block">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">Enveloppe 3D</span>
                <select
                  value={shell}
                  onChange={(e) => setShell(e.target.value)}
                  className="mt-1 w-full rounded-sm border border-ink/20 bg-cream px-2.5 py-1.5 text-sm text-ink focus:border-flame focus:outline-none"
                >
                  <option value="dome">Dôme</option>
                  <option value="flat">Plat</option>
                  <option value="slab">Épaisseur</option>
                </select>
              </label>
              <Slider label="Points" value={count === 'auto' ? 700 : count} onChange={(v) => setCount(v === 700 ? 'auto' : v)} min={100} max={1500} step={25} format={(v) => (count === 'auto' ? 'auto' : v)} />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <Slider label="Épaisseur" value={depth} onChange={setDepth} min={0.05} max={1} step={0.01} format={(v) => v.toFixed(2)} />
              <Slider label="Graine" value={seed} onChange={setSeed} min={0} max={40} step={1} />
            </div>
            {source === 'custom' && (
              <textarea
                value={customSvg}
                onChange={(e) => setCustomSvg(e.target.value)}
                placeholder="Collez ici le markup SVG de votre marque…"
                rows={4}
                className="mt-3 w-full rounded-sm border border-ink/20 bg-cream px-2.5 py-1.5 font-mono text-[11px] text-ink focus:border-flame focus:outline-none"
              />
            )}
          </div>
        )}

        <div className="rounded-md border border-flame/30 bg-coal p-4 text-cream">
          <p className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-flame">Copier le composant</p>
          <pre className="mt-3 max-h-64 overflow-auto rounded-sm bg-ink/40 p-3 text-[11px] leading-relaxed text-cream/80">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
