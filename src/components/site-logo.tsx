import { useId } from "react";
import { WORDMARK_D, WORDMARK_W } from "./logo-paths";
import mark from "./logo-mark.json";

// Rare Passages lockup: north star over water + outlined Cormorant wordmark.
// Family system with Safari Awaits' dawn mark — same horizon, different sky:
// the parent navigates by the star; each vertical gets its own horizon scene.
// Geometry single-sourced in logo-mark.json (shared with favicon, OG, kit).

const MARK_W = mark.canvas;
const GAP = 34;
const CAP_TOP = 7;
const BASELINE = 78;

export function StarMarkShapes({ horizon = "currentColor" }: { horizon?: string }) {
  const gid = `star-${useId().replace(/[^a-zA-Z0-9-]/g, "")}`;
  return (
    <>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={mark.gradient.from} />
          <stop offset="1" stopColor={mark.gradient.to} />
        </linearGradient>
      </defs>
      <path d={mark.starPath} fill={`url(#${gid})`} />
      <g stroke={mark.starColor} strokeWidth={mark.glintWidth}>
        {mark.glints.map(([x1, y1, x2, y2]) => (
          <line key={`${x1}-${y1}`} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>
      {/* Starlight on the water */}
      <g stroke={mark.starColor} strokeWidth={mark.reflectionWidth}>
        {mark.reflection.map((r) => (
          <line key={r.y} x1={r.x1} y1={r.y} x2={r.x2} y2={r.y} opacity={r.opacity} />
        ))}
      </g>
      <rect x={mark.horizon.x} y={mark.horizon.y} width={mark.horizon.w} height={mark.horizon.h} fill={horizon} />
    </>
  );
}

export function StarMark({ size = 30, title }: { size?: number; title?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${mark.canvas} ${mark.canvas}`}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <StarMarkShapes />
    </svg>
  );
}

export function SiteLogo({ height = 26 }: { height?: number }) {
  const total = MARK_W + GAP + WORDMARK_W;
  return (
    <svg
      height={height}
      viewBox={`0 0 ${total.toFixed(0)} 100`}
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <g transform={`translate(0, ${(CAP_TOP + BASELINE) / 2 - 44})`}>
        <StarMarkShapes />
      </g>
      <g transform={`translate(${MARK_W + GAP}, ${BASELINE})`}>
        <path d={WORDMARK_D} fill="currentColor" />
      </g>
    </svg>
  );
}
