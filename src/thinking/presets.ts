// The shipped tunings: nine states × two sizes, baked from the inkform
// mini-page tuning session. `count`/`size` are multipliers over the base
// fine profiles; `speed` multiplies the shared clock. Resolved once per
// (state, size) pair and cached , the render loop sees plain numbers.

import type { ModeOpts } from './engine/profiles';
import { BASE_PROFILES, scaleCounts, scaleRadii } from './engine/profiles';
import type { OrbSize, OrbState } from './types';

export type ModeKey =
  | 'orbits'
  | 'globe'
  | 'rubik'
  | 'wave'
  | 'web'
  | 'braid'
  | 'ribbon'
  | 'ring'
  | 'morph'
  | 'simmer'
  | 'swirl'
  | 'steam';

export const STATE_TO_MODE: Record<OrbState, ModeKey> = {
  working: 'orbits',
  searching: 'globe',
  solving: 'rubik',
  listening: 'wave',
  connecting: 'web',
  weaving: 'braid',
  composing: 'ribbon',
  breathing: 'ring',
  shaping: 'morph',
  simmer: 'simmer',
  swirl: 'swirl',
  steam: 'steam'
};

export interface Preset {
  speed: number;
  count: number;
  size: number;
  /** Extra mode opts merged verbatim after scaling. */
  extra?: ModeOpts;
}

/** Exported so `scripts/extract-spec.ts` can emit them for the native ports. */
export const PRESETS: Record<ModeKey, Record<OrbSize, Preset>> = {
  orbits: {
    64: { speed: 1.885, count: 1, size: 1 },
    20: { speed: 3.9, count: 0.238, size: 2.4 }
  },
  globe: {
    64: { speed: 2.015, count: 0.42, size: 1.15, extra: { scanMul: 4.08, dimBase: 0.45 } },
    20: { speed: 2.665, count: 0.105, size: 1.75, extra: { scanMul: 4.335, dimBase: 0.45 } }
  },
  rubik: {
    64: { speed: 1.82, count: 0.35, size: 1.05 },
    20: { speed: 1.95, count: 0.088, size: 1.9 }
  },
  wave: {
    64: { speed: 4.388, count: 0.341, size: 1 },
    20: { speed: 3.998, count: 0.105, size: 1.6 }
  },
  web: {
    64: { speed: 3.315, count: 1.35, size: 0.95 },
    20: { speed: 6.63, count: 0.25, size: 1.52 }
  },
  braid: {
    64: { speed: 1.625, count: 0.5, size: 1 },
    20: { speed: 2.75, count: 0.1125, size: 1.36 }
  },
  ribbon: {
    64: { speed: 2.34, count: 0.25, size: 0.85, extra: { spin: 0, bandMul: 3.9, wobMul: 1 } },
    20: { speed: 3.12, count: 0.051, size: 1.073, extra: { spin: 0, bandMul: 4.94, wobMul: 1 } }
  },
  ring: {
    64: { speed: 3.24, count: 0.25, size: 0.956, extra: { spin: 0, bandMul: 3.627, wobMul: 0.368 } },
    20: { speed: 3.78, count: 0.028, size: 1.622, extra: { spin: 0, bandMul: 3.968, wobMul: 0.565 } }
  },
  morph: {
    64: { speed: 2.405, count: 0.702, size: 0.395, extra: { spread: 1.45 } },
    20: { speed: 2.08, count: 0.53, size: 1.011, extra: { spread: 1.45 } }
  },
  simmer: {
    64: { speed: 1.7, count: 0.55, size: 1.05 },
    20: { speed: 2.5, count: 0.15, size: 1.7 }
  },
  swirl: {
    64: { speed: 1.9, count: 0.4, size: 1.0 },
    20: { speed: 2.7, count: 0.1, size: 1.6 }
  },
  steam: {
    64: { speed: 1.6, count: 0.9, size: 1.0 },
    20: { speed: 2.6, count: 0.22, size: 1.65 }
  }
};

export interface Resolved {
  mode: ModeKey;
  speed: number;
  opts: ModeOpts;
}

const cache = new Map<string, Resolved>();

/**
 * Resolve a (state, size) pair to its mode + fully-scaled draw options.
 *
 * Continuous in `size`: the two shipped sizes (20 and 64) resolve to their
 * exact tuned values, anything between them interpolates the count, radius
 * and speed multipliers (geometric for multipliers, linear for speed), and
 * anything larger than 64 keeps the 64px tuning while growing dot counts
 * sub-linearly so a big mark does not thin into empty space.
 */
export function resolvePreset(state: OrbState, size: OrbSize): Resolved {
  const key = `${state}-${size}`;
  const hit = cache.get(key);
  if (hit) return hit;

  const mode = STATE_TO_MODE[state];
  const base = BASE_PROFILES[mode];
  const p20 = PRESETS[mode][20];
  const p64 = PRESETS[mode][64];

  let opts: ModeOpts = { ...base };
  const t = Math.max(0, Math.min(1, (size - 20) / 44));

  if (t === 0) {
    opts = scaleCounts(opts, p20.count);
    opts = scaleRadii(opts, p20.size);
    if (p20.extra) opts = { ...opts, ...p20.extra };
  } else if (t >= 1) {
    opts = scaleCounts(opts, p64.count);
    opts = scaleRadii(opts, p64.size);
    if (size > 64) opts = scaleCounts(opts, (size / 64) ** 0.62);
    if (p64.extra) opts = { ...opts, ...p64.extra };
  } else {
    const count = Math.exp((1 - t) * Math.log(p20.count) + t * Math.log(p64.count));
    const sizeMul = Math.exp((1 - t) * Math.log(p20.size) + t * Math.log(p64.size));
    opts = scaleCounts(opts, count);
    opts = scaleRadii(opts, sizeMul);
    if (p64.extra) opts = { ...opts, ...p64.extra };
  }

  const speed = t === 0 ? p20.speed : p20.speed + (p64.speed - p20.speed) * t;
  const resolved: Resolved = { mode, speed, opts };
  cache.set(key, resolved);
  return resolved;
}
