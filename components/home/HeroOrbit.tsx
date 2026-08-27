"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { heroLetters } from "@/data/hero-letters";

/**
 * The Corplabs mark orbiting the words "Idea To Reality", with the astronaut
 * drifting inside the ring. Geometry is lifted from the Claude Design hero
 * export: orbit = ellipse cx512 cy341 rx168.09 ry496.3, rotated -64.21°
 * about translate(-17.78 653.66).
 *
 * The animation runs on its own requestAnimationFrame loop and only ever
 * re-renders this subtree; it is skipped entirely under prefers-reduced-motion.
 */

const TOTAL = 8; // seconds per orbit
const ANGLE = (-64.21 * Math.PI) / 180;
const COS_A = Math.cos(ANGLE);
const SIN_A = Math.sin(ANGLE);

const ARC =
  "m958.87,556.91c-40.39,83.59-273.2,54.68-519.99-64.57C192.08,373.1,24.75,208.67,65.13,125.09";
const TRAIL_COLORS = ["#F6F2FF", "#DFD6FF", "#AA97FF", "#8AD5FF", "#733FFF", "#5605FF", "#3C01A2"];
const MARK =
  "m97.83,26.6c-19.48-19.8-51.32-20.06-71.11-.58-19.8,19.48-20.06,51.32-.58,71.11,19.48,19.8,51.32,20.06,71.11.58,9.61-9.46,15.02-22.38,15.02-35.86h-50.28l35.84-35.25Z";

const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);

/** Point on the tilted orbit at `deg`, pushed `out` px away from the centre. */
function orbitPoint(deg: number, out = 0) {
  const t = (deg * Math.PI) / 180;
  const lx = 512 + 168.09 * Math.cos(t);
  const ly = 341 + 496.3 * Math.sin(t);
  const x = lx * COS_A - ly * SIN_A - 17.78;
  const y = lx * SIN_A + ly * COS_A + 653.66;
  if (!out) return { x, y };
  const dx = x - 512;
  const dy = y - 341;
  const m = Math.hypot(dx, dy) || 1;
  return { x: x + (dx / m) * out, y: y + (dy / m) * out };
}

function ramp(T: number, start: number, end: number, ease: "out" | "sine") {
  const u = clamp((T - start) / (end - start), 0, 1);
  return ease === "out" ? 1 - Math.pow(1 - u, 3) : 0.5 - 0.5 * Math.cos(Math.PI * u);
}

const cycle = (T: number, k: number, ph = 0) => Math.sin((2 * Math.PI * k * T) / TOTAL + ph);

/** Word brightness: ramps up as the mark passes it, fades before the loop ends. */
function glow(T: number, cue: number, fallEnd: number) {
  const p = cue + 0.67;
  return Math.min(ramp(T, p - 0.6, p + 0.15, "out"), 1 - ramp(T, fallEnd - 1.1, fallEnd, "sine"));
}

const STARS = (() => {
  let a = 11;
  const rand = () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  return Array.from({ length: 96 }, () => ({
    x: -60 + rand() * 1144,
    y: -70 + rand() * 822,
    s: 0.5 + rand() * 1.7,
    ph: rand() * 6.283,
    k: 1 + Math.floor(rand() * 3),
    o: 0.12 + rand() * 0.5,
  }));
})();

const TRAIL_STRENGTH = 1.1;
const WORD_SPREAD = 1.12;

function Word({ paths, cx, cy, g }: { paths: string[]; cx: number; cy: number; g: number }) {
  const s = 1 + 0.028 * g;
  const base = 0.34;
  // push the word outward from the centre so the astronaut has room
  const dx = (cx - 512) * (WORD_SPREAD - 1);
  const dy = (cy - 341) * (WORD_SPREAD - 1);
  return (
    <g
      transform={`translate(${dx},${dy}) translate(${cx},${cy}) scale(${s}) translate(${-cx},${-cy - 7 * g})`}
      opacity={base + (1 - base) * g}
      style={{
        filter: g > 0.02 ? `drop-shadow(0 0 ${16 * g}px rgba(224,174,255,${0.65 * g}))` : "none",
      }}
    >
      {paths.map((d, i) => (
        <path key={i} d={d} fill="var(--color-white)" />
      ))}
    </g>
  );
}

/** Comet tail behind the mark, split so the far half can render behind the figure. */
function Trail({ deg, side }: { deg: number; side: "front" | "back" }) {
  const N = 20;
  const SPAN = 112;
  const pts = Array.from({ length: N + 1 }, (_, i) =>
    orbitPoint(deg - SPAN * (i / N), 44 * (1 - 0.3 * (i / N)))
  );
  return (
    <g strokeLinecap="round" fill="none">
      {pts.slice(0, N).map((p, i) => {
        const q = pts[i + 1];
        const f = 1 - i / N;
        if (((p.y + q.y) / 2 >= 341 ? "front" : "back") !== side) return null;
        return (
          <path
            key={i}
            d={`M${p.x},${p.y}L${q.x},${q.y}`}
            stroke={TRAIL_COLORS[Math.min(TRAIL_COLORS.length - 1, Math.floor((i / N) * TRAIL_COLORS.length))]}
            strokeWidth={1.2 + 4.2 * f}
            opacity={Math.pow(f, 1.4) * TRAIL_STRENGTH}
          />
        );
      })}
    </g>
  );
}

function Mark({ deg, bob, flick }: { deg: number; bob: number; flick: number }) {
  const p = orbitPoint(deg, 44);
  return (
    <g transform={`translate(${p.x},${p.y})`}>
      <circle r={116} fill="url(#clHeroGlow)" opacity={0.5 + 0.14 * flick} />
      <g transform={`rotate(${bob * 1.1}) scale(1.45) translate(-62,-62)`}>
        <path d={MARK} fill="#F7F7FD" stroke="#5605FF" strokeWidth={3} />
        <ellipse
          cx={62.3}
          cy={62.18}
          rx={45.87}
          ry={24.63}
          transform="translate(-22.7 39.31) rotate(-29.89)"
          fill="url(#clHeroLens)"
          opacity={0.9}
        />
        <circle cx={61.5} cy={62} r={26} fill="#060226" />
      </g>
    </g>
  );
}

export default function HeroOrbit() {
  // 0.9 is the prototype's resting frame — also what SSR and reduced-motion show.
  const [T, setT] = useState(0.9);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const t0 = performance.now();
    const loop = (now: number) => {
      raf.current = requestAnimationFrame(loop);
      setT(((now - t0) / 1000) % TOTAL);
    };
    raf.current = requestAnimationFrame(loop);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const deg = 195 + 360 * clamp(T / TOTAL, 0, 1);
  const camS = 1 + 0.026 * (0.5 - 0.5 * Math.cos((2 * Math.PI * T) / TOTAL));
  const cam = `translate(${512 + 15 * cycle(T, 1)},${341 - 11 * cycle(T, 1, 1)}) scale(${camS}) translate(-512,-341)`;
  const head = orbitPoint(deg, 44);
  // the near half of the tilted ellipse reads as in front of the figure
  const side = head.y >= 341 ? "front" : "back";
  const bob = 5 * cycle(T, 3);
  const flick = 0.82 + 0.18 * cycle(T, 8);

  return (
    <div className="relative w-full max-w-[620px]">
      {/* behind the astronaut: starfield, orbit ring, far half of the trail */}
      <svg
        viewBox="-60 -70 1144 822"
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full overflow-visible"
      >
        <g>
          {STARS.map((s, i) => (
            <circle
              key={i}
              cx={s.x + 16 * cycle(T, 1, s.ph)}
              cy={s.y + 10 * cycle(T, 1, s.ph + 2)}
              r={s.s}
              fill={i % 7 === 0 ? "#8AD5FF" : "#EAEBF4"}
              opacity={s.o * (0.55 + 0.45 * cycle(T, s.k, s.ph))}
            />
          ))}
        </g>
        <circle cx={512} cy={341} r={300} fill="url(#clHeroCore)" opacity={0.85 + 0.15 * cycle(T, 1)} />
        <g transform={cam}>
          <ellipse
            cx={512}
            cy={341}
            rx={168.09}
            ry={496.3}
            transform="translate(-17.78 653.66) rotate(-64.21)"
            fill="none"
            stroke="var(--color-white)"
            strokeOpacity="0.08"
            strokeWidth={1.2}
          />
          <path d={ARC} fill="none" stroke="url(#clHeroArc)" strokeOpacity="0.3" strokeWidth={1.8} />
          <Trail deg={deg} side="back" />
          {side === "back" && <Mark deg={deg} bob={bob} flick={flick} />}
        </g>
      </svg>

      {/* the astronaut drifts inside the ring */}
      <div className="pointer-events-none absolute left-[53%] top-[39%] z-[1] w-[64%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative [animation:float_7s_ease-in-out_infinite]">
          <div className="absolute left-1/2 top-[44%] aspect-square w-[104%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(86,5,255,0.34)_0%,rgba(86,5,255,0.12)_48%,rgba(86,5,255,0)_74%)]" />
          <Image
            src="/astronaut.webp"
            alt=""
            width={900}
            height={600}
            priority
            className="relative block h-auto w-full [mask-image:linear-gradient(180deg,#000_0%,#000_74%,rgba(0,0,0,0.45)_90%,transparent_100%)]"
          />
        </div>
      </div>

      {/* in front: near half of the trail, the mark, and the words */}
      <svg
        viewBox="-60 -70 1144 822"
        role="img"
        aria-label="The Corplabs mark orbiting the words Idea To Reality"
        className="pointer-events-none relative z-[2] block h-auto w-full overflow-visible"
      >
        <defs>
          <radialGradient id="clHeroGlow">
            <stop offset="0%" stopColor="#8AD5FF" stopOpacity="0.5" />
            <stop offset="55%" stopColor="#5605FF" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#5605FF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="clHeroLens" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#8E70FF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7400BD" />
          </linearGradient>
          <linearGradient id="clHeroArc" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#8AD5FF" />
            <stop offset="100%" stopColor="#E0AEFF" />
          </linearGradient>
          <radialGradient id="clHeroCore">
            <stop offset="0%" stopColor="#5605FF" stopOpacity="0.42" />
            <stop offset="52%" stopColor="#5605FF" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#5605FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g transform={cam}>
          <Trail deg={deg} side="front" />
          {side === "front" && <Mark deg={deg} bob={bob} flick={flick} />}
          <Word paths={heroLetters.idea} cx={224} cy={256} g={glow(T, 0.68, 2.9)} />
          <Word paths={heroLetters.to} cx={839} cy={327} g={glow(T, 4.08, 6.9)} />
          <Word paths={heroLetters.reality} cx={699} cy={536} g={glow(T, 5.03, TOTAL - 0.05)} />
        </g>
      </svg>
    </div>
  );
}
