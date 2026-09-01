// Custom Sous logo modes: float and pulse. Both obey the logo-mode
// contract — beatAt dwell, morph in/out through the seats, ink carried by
// baked edge — but keep their character in the working form and show the
// mark alive rather than static.

import type { Dot, LogoBinding, ModeFrame, OrbFrame } from './types';
import { finalizeFrame, fibDir, hashD, makeProj, radiusScale, vnoise } from './core';
import { beatAt, dotAssembly, inkOf } from './logo';

const TURN = Math.PI * 2;

function clamp01(x: number): number {
  return x < 0 ? 0 : x > 1 ? 1 : x;
}

/** What a logo mode renders before its artwork is baked (private local copy). */
function empty(): OrbFrame {
  return { dots: [], lines: [] };
}

// --- Float: the mark breathes like it hovers — flotte --------------------
//
// Working form: the dot cloud lifts and falls as motes in the air, each
// bobbing on its own noise phase, drifting slowly. As the mark forms the
// whole thing settles, then continues to bob while assembled — a steam-kiss
// mounted on a slow swell, riding the frame like a cork.

export const frameLogoFloat: ModeFrame = (size, t, o, logo) => {
  if (!logo) return empty();
  const { p, e, n } = logo.points;
  const seats = logo.seats;
  const cx = size / 2;
  const R = (size / 2) * 0.82;
  const rs = radiusScale(size, o.rsPow ?? 0.6);

  const b = beatAt(t, o.dwell ?? 5.5, o.morph ?? 1.9, o.turns ?? 0, o.settle ?? 0.15, o.expo ?? 0.3);
  const m = b.m;
  const g = 1 - m;

  const pt = makeProj(TURN * b.turns, (o.tiltAmp ?? 0.3) * g, cx, cx, R);

  // The assembled mark itself rides a slow swell; the cloud borrows it too.
  const lift = (o.liftAmp ?? 0.07) * Math.sin(t * (o.liftRate ?? 0.5));

  const dots: Dot[] = [];
  for (let i = 0; i < n; i++) {
    const [fx, fy, fz] = fibDir(seats[i], n);

    // Mote field: each dot bobs up and down on its own phase, drifting a
    // little sideways under noise, so the cloud never reads as a solid mass.
    const bobY =
      fy * (o.vertAmp ?? 0.85) +
      (vnoise(fx * 2 + t * 0.6, fz * 2 + hashD(i, 4.7) * 3) - 0.5) * (o.bob ?? 0.55);
    const bobR = Math.sqrt(Math.max(1e-9, 1 - bobY * bobY)) * (o.sphereR ?? 0.92);

    const lx = p[i * 3];
    const ly = p[i * 3 + 1];
    const lz = p[i * 3 + 2];

    const x = fx * bobR + (lx - fx * bobR) * m;
    const y = bobY + lift + (ly - bobY - lift) * m;
    const z3 = fz * bobR + (lz - fz * bobR) * m;

    const [px, py, z] = pt(x, y, z3);
    const zx = clamp01((z + 1) / 2);
    const flight = g * Math.sin(Math.PI * dotAssembly(i, m, 0.2));
    dots.push({
      x: px,
      y: py,
      z,
      r: ((o.rBase ?? 0.5) + (o.rDepth ?? 1.4) * zx) * rs,
      white: inkOf(o, zx, e[i] * m + (1 - m)),
      a: 1 - (o.flightFade ?? 0.25) * flight
    });
  }
  return finalizeFrame(dots, [], o.rMin);
};

// --- Pulse: the mark beats and sheds rings — palpite ---------------------
//
// Working form: dots revolve slowly in a loose band about the mark's
// building box, like a seasoning suspended in the liquor. Assembled, the
// mark pulses — dots swell and dim on the heartbeat of the draw — and each
// beat sheds a ring of dots that expands outward and dissolves.

export const frameLogoPulse: ModeFrame = (size, t, o, logo) => {
  if (!logo) return empty();
  const { p, e, n } = logo.points;
  const seats = logo.seats;
  const cx = size / 2;
  const R = (size / 2) * 0.82;
  const rs = radiusScale(size, o.rsPow ?? 0.6);

  const b = beatAt(t, o.dwell ?? 5.5, o.morph ?? 1.9, o.turns ?? 0, o.settle ?? 0.1, o.expo ?? 0.3);
  const m = b.m;
  const g = 1 - m;

  const pt = makeProj(TURN * b.turns, (o.tiltAmp ?? 0.3) * g, cx, cx, R);

  // A heartbeat that survives the whole cycle, strongest on the mark.
  const rate = o.rate ?? 3.0;
  const beat = 0.5 + 0.5 * Math.sin(t * rate);
  const swell = 1 + (o.swell ?? 0.06) * beat;

  const ringBand = o.sphereR ?? 0.9;
  const dots: Dot[] = [];
  for (let i = 0; i < n; i++) {
    const [fx, fy, fz] = fibDir(seats[i], n);
    const ring = Math.sqrt(Math.max(1e-9, 1 - fy * fy)) * ringBand;

    // Working form: dots keep to a band tilted toward the viewer, revolving
    // slowly, so the dwell reads as a gathering rather than a sphere.
    const lat = fy * (o.vertAmp ?? 0.6);
    const latR = Math.sqrt(Math.max(0, 1 - lat * lat));
    const swirl = t * (o.workSpeed ?? 0.5) + hashD(i, 2.3) * TURN;
    const wx = Math.cos(swirl) * latR * ring * 0.85;
    const wz = Math.sin(swirl) * latR * ring * 0.85;

    const lx = p[i * 3];
    const ly = p[i * 3 + 1];
    const lz = p[i * 3 + 2];

    // On the mark the beat swells every dot radially from the centre.
    const mx = lx * swell;
    const my = ly * swell;
    const mz = lz * swell;

    const x = wx + (mx - wx) * m;
    const y = lat + (my - lat) * m;
    const z3 = wz + (mz - wz) * m;

    const [px, py, z] = pt(x, y, z3);
    const zx = clamp01((z + 1) / 2);
    dots.push({
      x: px,
      y: py,
      z,
      r: ((o.rBase ?? 0.5) + (o.rDepth ?? 1.4) * zx + (o.pulseR ?? 0.22) * beat * m) * rs,
      white: inkOf(o, zx, e[i] * m + (1 - m)) - (o.pulseInk ?? 0.12) * beat,
      a: 1 - (o.flightFade ?? 0.15) * g
    });
  }

  // A shed ring per heartbeat: dots expanding from the mark's centre, same
  // depth rhythm as the orb lines, fading before the next beat.
  const ringN = Math.max(0, Math.round(o.ringN ?? 10));
  if (ringN > 0 && m > 0.5) {
    const reach = o.ringReach ?? 1.15;
    const rr = 0.55 * ringBand + reach * beat;
    for (let j = 0; j < ringN; j++) {
      const a = (j / ringN) * TURN + t * 0.8;
      const [px, py, z] = pt(Math.cos(a) * rr, Math.sin(a) * rr * 0.72, 0);
      const zx = clamp01((z + 1) / 2);
      dots.push({
        x: px,
        y: py,
        z,
        r: ((o.rBase ?? 0.5) + 0.4 * zx) * rs * (1 - beat * 0.4),
        white: 0.35 - 0.25 * zx,
        a: (1 - beat) * m * 0.75
      });
    }
  }
  return finalizeFrame(dots, [], o.rMin);
};