import { useEffect, useState } from "react";
import ornament from "@/assets/ornament.png";
import logo from "@/assets/picsdom-logo-gold.png";

function ApertureIris() {
  const blades = 8;
  // Curved aperture blade (iris leaf) shape
  const bladePath =
    "M 0 -42 Q 18 -34 22 -10 Q 14 -18 -4 -16 Q -14 -28 0 -42 Z";

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {/* Position over the "O" in Picsdom — slightly right of center */}
      <div
        className="relative"
        style={{
          width: "clamp(56px, 14%, 110px)",
          aspectRatio: "1 / 1",
          transform: "translateX(22%)",
        }}
      >
        <svg viewBox="-60 -60 120 120" className="absolute inset-0 w-full h-full overflow-visible">
          {/* Outer rotating ring with ticks */}
          <g style={{ animation: "aperture-spin 18s linear infinite", transformOrigin: "center" }}>
            <circle r={54} fill="none" stroke="oklch(0.72 0.13 75)" strokeWidth={0.8} opacity={0.55} strokeDasharray="2 6" />
            {Array.from({ length: 36 }).map((_, i) => {
              const a = (i * 360) / 36;
              const rad = (a * Math.PI) / 180;
              const big = i % 3 === 0;
              const r1 = 50;
              const r2 = big ? 56 : 53;
              return (
                <line
                  key={i}
                  x1={Math.cos(rad) * r1}
                  y1={Math.sin(rad) * r1}
                  x2={Math.cos(rad) * r2}
                  y2={Math.sin(rad) * r2}
                  stroke="oklch(0.72 0.13 75)"
                  strokeWidth={big ? 0.9 : 0.5}
                  opacity={big ? 0.8 : 0.4}
                />
              );
            })}
          </g>

          {/* Inner counter-rotating ring */}
          <g style={{ animation: "aperture-spin 26s linear infinite reverse", transformOrigin: "center" }}>
            <circle r={46} fill="none" stroke="oklch(0.72 0.13 75)" strokeWidth={0.6} opacity={0.35} />
            <circle r={44} fill="none" stroke="oklch(0.72 0.13 75)" strokeWidth={0.3} opacity={0.25} strokeDasharray="1 3" />
          </g>

          {/* Iris blades — open animation */}
          <g style={{ animation: "iris-open 2.4s ease-out 0.4s both", transformOrigin: "center" }}>
            {Array.from({ length: blades }).map((_, i) => {
              const a = (i * 360) / blades;
              return (
                <path
                  key={i}
                  d={bladePath}
                  fill="oklch(0.18 0.02 60)"
                  stroke="oklch(0.72 0.13 75)"
                  strokeWidth={0.5}
                  opacity={0.92}
                  style={{ transform: `rotate(${a}deg)`, transformOrigin: "center" }}
                />
              );
            })}
          </g>

          {/* Center glint */}
          <circle r={2.5} fill="oklch(0.85 0.12 80)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
            <animate attributeName="r" values="2;3.5;2" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </div>
  );
}

export function Splash({ onDone }: { onDone: () => void }) {
  const [gone, setGone] = useState(false);
  const [showBody, setShowBody] = useState(false);
  useEffect(() => {
    const t0 = setTimeout(() => setShowBody(true), 900);
    const t1 = setTimeout(() => setGone(true), 3000);
    const t2 = setTimeout(onDone, 3400);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${gone ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.85 0.08 80) 0%, transparent 60%)" }} />

      {/* Logo first — visible immediately */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${showBody ? "opacity-0 scale-105" : "opacity-100 scale-100"}`}>
        <div className="flex flex-col items-center animate-logo-reveal">
          <img src={logo} alt="Picsdom Raebareli" className="w-64 md:w-80" />
        </div>
      </div>

      {/* Full splash body — fades in after logo */}
      <div className={`relative flex flex-col items-center transition-opacity duration-700 ease-out ${showBody ? "opacity-100" : "opacity-0"}`}>
        <img src={ornament} alt="" className="w-64 md:w-80 opacity-90 animate-float-slow" width={1024} height={512} />
        <div className="-mt-2 md:-mt-4 flex flex-col items-center relative">
          <span className="text-xs md:text-sm tracking-[0.5em] text-muted-foreground uppercase mb-4">Welcome to</span>
          <img src={logo} alt="Picsdom Raebareli" className="w-72 md:w-[28rem]" />
          <div className="h-px w-48 md:w-64 mt-6 origin-left bg-gradient-to-r from-transparent via-gold to-transparent animate-draw-line" />
          <span className="mt-4 text-[0.7rem] md:text-xs tracking-[0.4em] text-muted-foreground uppercase">
            Wedding Films & Photography
          </span>
        </div>
        <img src={ornament} alt="" className="w-64 md:w-80 opacity-90 rotate-180 mt-2 animate-float-slow" width={1024} height={512} />
      </div>
    </div>
  );
}
