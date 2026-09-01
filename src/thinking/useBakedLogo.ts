// Baking, made safe to call from render.
//
// A bake costs a rasterise, a contour trace and several Poisson passes —
// tens of milliseconds. Doing that on every render, or once per mounted
// instance, would be the single worst thing this library could do to a host
// app's frame budget, since the common case is a logo that never changes
// and a component that mounts in a dozen places.
//
// So: one module-level cache keyed by the artwork plus the options that
// affect the output, shared across every instance in the page.

import { useEffect, useRef, useState } from 'react';
import type { BakeOptions, LogoSource } from './bake/bake';
import { bakeLogo } from './bake/bake';
import type { LogoPointSet } from './engine/cloud';

const cache = new Map<string, Promise<LogoPointSet>>();

/**
 * A stable cache key, or null when the source cannot be identified by
 * value.
 *
 * Bitmap sources are the null case: two `CanvasImageSource` objects can be
 * pixel-identical and still be different references, and reading them back
 * to hash would cost as much as the bake. Rather than key them wrongly and
 * serve one logo's points for another, they simply do not cache.
 */
function cacheKey(source: LogoSource, options: BakeOptions): string | null {
  const art = 'svg' in source ? source.svg : 'path' in source ? `p:${source.viewBox ?? 24}:${source.path}` : null;
  if (art === null) return null;
  const o = options;
  return [art, o.count, o.style, o.shell, o.depth, o.resolution, o.threshold, o.margin, o.seed].join('\u0000');
}

/** Bake through the shared cache. Concurrent callers await the same promise. */
export function bakeCached(source: LogoSource, options: BakeOptions = {}): Promise<LogoPointSet> {
  const key = cacheKey(source, options);
  if (key === null) return bakeLogo(source, options);
  const hit = cache.get(key);
  if (hit) return hit;
  const promise = bakeLogo(source, options).catch((err: unknown) => {
    // A failed bake must not be cached, or a transient failure becomes
    // permanent for the lifetime of the page.
    cache.delete(key);
    throw err;
  });
  cache.set(key, promise);
  return promise;
}

export interface BakedLogoResult {
  points: LogoPointSet | null;
  error: Error | null;
  pending: boolean;
}

/**
 * Bake artwork for use in a component, or pass an already-baked set
 * straight through.
 *
 * Passing a pre-baked `LogoPointSet` is the recommended production path:
 * bake once at build time, commit the JSON, and the runtime never touches a
 * rasteriser at all.
 */
export function useBakedLogo(
  logo: LogoSource | LogoPointSet,
  options: BakeOptions = {}
): BakedLogoResult {
  const prebaked = 'version' in logo ? (logo as LogoPointSet) : null;
  const key = prebaked ? null : cacheKey(logo as LogoSource, options);

  const [state, setState] = useState<BakedLogoResult>(() => ({
    points: prebaked,
    error: null,
    pending: !prebaked
  }));

  // Identity of the source object is not a useful dependency — callers
  // write `logo={{ svg }}` inline — so the effect keys off the value hash,
  // and holds the source in a ref for the one bake that actually runs.
  const sourceRef = useRef(logo);
  sourceRef.current = logo;

  useEffect(() => {
    if (prebaked) {
      setState({ points: prebaked, error: null, pending: false });
      return;
    }
    let live = true;
    setState((s) => ({ ...s, pending: true }));
    bakeCached(sourceRef.current as LogoSource, options)
      .then((points) => {
        if (live) setState({ points, error: null, pending: false });
      })
      .catch((error: Error) => {
        if (live) setState({ points: null, error, pending: false });
      });
    return () => {
      live = false;
    };
    // `key` collapses the source and every output-affecting option into one
    // value; `options` itself is a fresh object on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, prebaked]);

  return state;
}