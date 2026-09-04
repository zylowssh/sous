// Custom Sous modes: simmer, swirl, steam. Same contract as the other orb
// modes , pure arithmetic over (size, t, opts), finished z-sorted frames.

import type { Dot, ModeFrame } from './types';
import { fibDir, finalizeFrame, frac, hashD, makeProj, radiusScale, vnoise } from './core';

const TURN = Math.PI * 2;

function clamp01(x: number): number {
  return x < 0 ? 0 : x > 1 ? 1 : x;
}

// --- Simmer: a boiling sphere , frisson --------------------------------
// A lat/long field breathes under scrolling noise, and bubbles rise from
// the bottom, swell, and pop near the surface.

export const frameSimmer: ModeFrame = (size, t, o) => {
  const cx = size / 2;
  const cy = size / 2;
  const R = (size / 2) * 0.82;
  const pt = makeProj(t * 0.15, 0.32, cx, cy, 1);
  const rs = radiusScale(size, o.rsPow ?? 0.6);
  const dots: Dot[] = [];

  const latRings = o.latRings ?? 15;
  const lonDensity = o.lonDensity ?? 36;
  for (let li = 0; li <= latRings; li++) {
    const lat = -Math.PI / 2 + (li / latRings) * Math.PI;
    const cosLat = Math.cos(lat);
    const sinLat = Math.sin(lat);
    const lonCount = Math.max(1, Math.round(Math.abs(cosLat) * lonDensity));
    for (let lj = 0; lj < lonCount; lj++) {
      const lon = (lj / lonCount) * TURN;
      // rolling boil: each cell swells and sinks under slow value noise
      const n = vnoise(cosLat * Math.cos(lon) * 3 + li * 0.7, sinLat * 3 + t * 0.55) - 0.5;
      const r = R * (1 + 0.07 * n * 2);
      const [px, py, z] = pt(cosLat * Math.cos(lon) * r, sinLat * r, cosLat * Math.sin(lon) * r);
      const depth = (z / R + 1) / 2;
      dots.push({
        x: px,
        y: py,
        z,
        r: ((o.rBase ?? 0.55) + (o.rDepth ?? 1.5) * depth) * rs,
        white: (o.inkFar ?? 0.62) - (o.inkSpan ?? 0.5) * depth,
        a: 0.5 + 0.5 * depth
      });
    }
  }

  // bubbles: staggered rises, grow then pop at the top
  const bubbleN = o.bubbleN ?? 7;
  const bubbleR = o.bubbleR ?? 1.15;
  const period = o.bubblePeriod ?? 2.6;
  for (let b = 0; b < bubbleN; b++) {
    const ph = hashD(b, 1.3);
    const lp = frac(t / period + ph);
    const yPos = (-0.9 + 1.75 * lp) * R;
    const ring = Math.max(0, 1 - ((yPos / R) ** 2));
    const grow = Math.sin(clamp01(lp) * Math.PI);
    const ux = Math.max(-1, Math.min(1, (hashD(b, 3.7) - 0.5) * 1.5));
    const uz = Math.max(-1, Math.min(1, (hashD(b, 5.9) - 0.5) * 1.5));
    const [px, py, z] = pt(ux * Math.sqrt(ring) * R * 0.7, yPos, uz * Math.sqrt(ring) * R * 0.7);
    const depth = (z / R + 1) / 2;
    dots.push({
      x: px,
      y: py,
      z,
      r: ((o.rBase ?? 0.55) + (o.rDepth ?? 1.5) * depth + bubbleR * grow) * rs,
      white: 0.12 - 0.12 * depth,
      a: 0.25 + 0.75 * grow
    });
  }
  return finalizeFrame(dots, [], o.rMin);
};

// --- Swirl: spiral arms turning around a ghost sphere , tourbillon ------
// Helical arms wind pole to pole; the radius breathes while the whole
// armature turns, reading as soup being stirred.

export const frameSwirl: ModeFrame = (size, t, o) => {
  const cx = size / 2;
  const cy = size / 2;
  const R = (size / 2) * 0.8;
  const pt = makeProj(t * 0.2, 0.32, cx, cy, 1);
  const rs = radiusScale(size, o.rsPow ?? 0.6);
  const dots: Dot[] = [];

  const ghostN = o.ghostN ?? 60;
  for (let i = 0; i < ghostN; i++) {
    const d = fibDir(i, ghostN);
    const [px, py, z] = pt(d[0] * R, d[1] * R, d[2] * R);
    const depth = (z / R + 1) / 2;
    dots.push({ x: px, y: py, z, r: 0.7 * rs, white: 0.8, a: 0.05 + 0.16 * depth });
  }

  const arms = Math.max(1, Math.round(o.arms ?? 4));
  const swirlN = o.swirlN ?? 44;
  const speed = o.swirlSpeed ?? 1.1;
  for (let i = 0; i < swirlN; i++) {
    const u = i / swirlN;
    const y = (u * 2 - 1) * 0.88;
    const rad = Math.sqrt(Math.max(0, 1 - y * y));
    const a = u * TURN * arms + t * speed;
    // the spiral breathes: arms swell and pinch as they turn
    const r = rad * (0.84 + 0.16 * Math.sin(u * TURN * arms - t * 0.7));
    const [px, py, z] = pt(Math.cos(a) * r * R, y * R, Math.sin(a) * r * R);
    const depth = (z / R + 1) / 2;
    dots.push({
      x: px,
      y: py,
      z,
      r: ((o.rBase ?? 0.7) + (o.rDepth ?? 1.6) * depth) * rs,
      white: (o.inkFar ?? 0.62) - (o.inkSpan ?? 0.5) * depth,
      a: 0.55 + 0.45 * depth
    });
  }
  return finalizeFrame(dots, [], o.rMin);
};

// --- Steam: wisps rising over a faint sphere , vapeur -------------------
// The sous steam mark as a state: a few dotted strands coil upward, fading
// at each end, over a dim sphere that never quite surfaces.

export const frameSteam: ModeFrame = (size, t, o) => {
  const cx = size / 2;
  const cy = size / 2;
  const R = (size / 2) * 0.8;
  const pt = makeProj(t * 0.1, 0.24, cx, cy, 1);
  const rs = radiusScale(size, o.rsPow ?? 0.6);
  const dots: Dot[] = [];

  const ghostN = o.ghostN ?? 80;
  for (let i = 0; i < ghostN; i++) {
    const d = fibDir(i, ghostN);
    const [px, py, z] = pt(d[0] * R, d[1] * R, d[2] * R);
    const depth = (z / R + 1) / 2;
    dots.push({ x: px, y: py, z, r: 0.7 * rs, white: 0.78, a: 0.05 + 0.14 * depth });
  }

  const strands = Math.max(1, Math.round(o.strandN ?? 3));
  const perStrand = o.perStrand ?? 22;
  const widen = o.widen ?? 0.3;
  const speedMul = o.rise ?? 0.06;
  for (let s = 0; s < strands; s++) {
    const xOff = (s - (strands - 1) / 2) * widen;
    for (let i = 0; i < perStrand; i++) {
      const u = frac(i / perStrand + t * speedMul * (1 + 0.25 * s));
      const wob = vnoise(u * 3 + s * 1.7, t * 0.5) - 0.5;
      const tail = clamp01((1 - Math.abs(u - 0.5) * 2) / 0.3);
      const xx = (xOff + wob * 0.7) * R * 0.62;
      const yy = (u * 2 - 1) * 0.9 * R;
      const zz = wob * 0.9 * R * 0.4;
      const [px, py, z] = pt(xx, yy, zz);
      const depth = (z / R + 1) / 2;
      dots.push({
        x: px,
        y: py,
        z,
        r: ((o.rBase ?? 0.85) + (o.rDepth ?? 1.4) * depth) * rs,
        white: 0.3 - 0.3 * depth,
        a: tail * (0.35 + 0.65 * depth) * 0.95
      });
    }
  }
  return finalizeFrame(dots, [], o.rMin);
};