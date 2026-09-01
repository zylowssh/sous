import type { CSSProperties, CanvasHTMLAttributes } from 'react';
import type { ModeOpts } from './engine/profiles';

/**
 * The nine shipped states — each a hand-tuned animation:
 * - `working`    — particles on tilted orbits
 * - `searching`  — a scan meridian sweeps a dotted globe
 * - `solving`    — bands scramble in quarter turns, then click back
 * - `listening`  — a waveform rolls through latitude rings
 * - `connecting` — a constellation wires itself, packets running the edges
 * - `weaving`    — three strands plait around the sphere
 * - `composing`  — an undulating multi-band sash
 * - `breathing`  — a face-on ring slowly morphing
 * - `shaping`    — a dotted outline morphs circle → triangle → square
 * - `simmer`     — a boiling sphere; bubbles rise, swell and pop
 * - `swirl`      — spiral arms turn around a ghost sphere
 * - `steam`      — dotted wisps coil upward over a dim sphere
 */
export type OrbState =
  | 'working'
  | 'searching'
  | 'solving'
  | 'listening'
  | 'connecting'
  | 'weaving'
  | 'composing'
  | 'breathing'
  | 'shaping'
  | 'simmer'
  | 'swirl'
  | 'steam';

/**
 * Rendered size in CSS pixels. The shipped tunings are 64 (chat-avatar
 * scale) and 20 (inline-text scale); any other positive size is resolved
 * by interpolating between the two (see `resolvePreset`), so the orb is
 * editable at every scale, not just the two shipped designs.
 */
export type OrbSize = number;

/**
 * Theme mode.
 *
 * - `auto` (default) resolves in three layers, live-updating on change:
 *   1. a `data-theme="dark|light"` attribute or `dark`/`light` class on
 *      any ancestor (the Tailwind / shadcn convention), watched via
 *      `MutationObserver`;
 *   2. otherwise `matchMedia('(prefers-color-scheme: dark)')`,
 *      subscribed for live OS/browser theme switches;
 *   3. during SSR (no DOM) the first client render resolves the theme
 *      before anything is painted — the canvas is client-only.
 * - `dark` / `light` pin the palette regardless of context.
 *
 * Dark renders light ink on the transparent canvas (for dark
 * backgrounds); light renders dark ink (for light backgrounds).
 */
export type OrbTheme = 'auto' | 'dark' | 'light';

/** Props for the ThinkingOrb React component. */
export interface ThinkingOrbProps extends Omit<CanvasHTMLAttributes<HTMLCanvasElement>, 'style'> {
  /** Which animation to show. @default 'working' */
  state?: OrbState;

  /** Tuned size preset — 64 or 20 CSS px. @default 64 */
  size?: OrbSize;

  /** Theme mode; `auto` detects from the host project. @default 'auto' */
  theme?: OrbTheme;

  /**
   * Animation speed multiplier on top of the preset's baked speed.
   * @default 1
   */
  speed?: number;

  /**
   * Brand colour as `#rrggbb`. Replaces the hue only — depth still reads
   * through the ink ramp. Omit for the default monochrome.
   */
  tint?: string;

  /** Per-state mode tuning, merged over the resolved preset. */
  tune?: ModeOpts;

  /** Freeze the animation on the current frame. @default false */
  paused?: boolean;

  style?: CSSProperties;
}
