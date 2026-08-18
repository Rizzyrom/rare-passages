import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import starMark from "@/components/logo-mark.json";

export const alt = "Rare Passages — Five brands. One standard.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Palette mirrored from globals.css — satori cannot read CSS custom properties.
const ink = "#0a1628";
const paper = "#f7f2e8";
const gold = "#c8a44d";
const muted = "#8a93a8";

export default async function OgImage() {
  const dir = join(process.cwd(), "src/app/_og");
  const [display, displayItalic, sans] = await Promise.all([
    readFile(join(dir, "cormorant-600.ttf")),
    readFile(join(dir, "cormorant-italic-500.ttf")),
    readFile(join(dir, "manrope-500.ttf")),
  ]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: ink, position: "relative" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 96, height: 630, background: "#13253f", display: "flex" }} />
        <div style={{ position: "absolute", top: 0, right: 96, width: 2, height: 630, background: gold, display: "flex" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 0 0 100px", flex: 1 }}>
          <svg width="84" height="70" viewBox="0 0 84 74" style={{ marginBottom: 30 }}>
            {/* Geometry from logo-mark.json; flat star color (satori gradient support unreliable). */}
            <path d={starMark.starPath} fill={starMark.starColor} />
            <g stroke={starMark.starColor} strokeWidth={starMark.glintWidth}>
              {starMark.glints.map(([x1, y1, x2, y2]) => (
                <line key={`${x1}`} x1={x1} y1={y1} x2={x2} y2={y2} />
              ))}
            </g>
            <g stroke={starMark.starColor} strokeWidth={starMark.reflectionWidth}>
              {starMark.reflection.map((r) => (
                <line key={r.y} x1={r.x1} y1={r.y} x2={r.x2} y2={r.y} opacity={r.opacity} />
              ))}
            </g>
            <rect x={starMark.horizon.x} y={starMark.horizon.y} width={starMark.horizon.w} height={starMark.horizon.h} fill={paper} />
          </svg>
          <div style={{ fontFamily: "Manrope", fontSize: 22, letterSpacing: 8, textTransform: "uppercase", color: muted, display: "flex" }}>
            High-Ticket Travel, Intelligently Matched
          </div>
          <div style={{ fontFamily: "Cormorant", fontSize: 124, lineHeight: 1.02, color: paper, marginTop: 26, letterSpacing: -2, display: "flex" }}>
            Rare Passages
          </div>
          <div style={{ width: 72, height: 2, background: gold, marginTop: 38, display: "flex" }} />
          <div style={{ fontFamily: "CormorantItalic", fontSize: 34, fontStyle: "italic", color: "#c9d2e0", marginTop: 30, display: "flex" }}>
            Five brands. One standard.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant", data: display, style: "normal", weight: 600 },
        { name: "CormorantItalic", data: displayItalic, style: "italic", weight: 500 },
        { name: "Manrope", data: sans, style: "normal", weight: 500 },
      ],
    }
  );
}
