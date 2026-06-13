import { useEffect, useState } from "react";
import ornament from "@/assets/ornament.png";
import logo from "@/assets/picsdom-logo-gold.png";

function ApertureRing() {
  const blades = 8;
  const rings = [
    { r: 52, w: 1.5, dur: 8, dir: "normal" },
    { r: 58, w: 1, dur: 14, dir: "reverse" },
    { r: 64, w: 0.8, dur: 20, dir: "normal" },
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-80 h-20 md:w-[28rem] md:h-24 flex items-center justify-center">
        <svg
          viewBox="0 0 200 80"
          className="absolute w-full h-full"
          style={{ overflow: "visible" }}
        >
          {/* Center the ring around the "O" in Picsdom — roughly x=108, y=40 */}
          <g transform="translate(108, 40)">
            {rings.map((ring, ri) => (
              <g key={ri}>
                <circle
                  r={ring.r}
                  fill="none"
                  stroke="oklch(0.72 0.13 75)"
                  strokeWidth={ring.w}
                  opacity={0.5}
                  strokeDasharray="4 8"
                  style={{
                    animation: `aperture-spin ${ring.dur}s linear infinite ${ring.dir}`,
                    transformOrigin: "center",
                  }}
                />
                {/* Tick marks */}
                {Array.from({ length: blades * 2 }).map((_, i) => {
                  const a = (i * 360) / (blades * 2);
                  const rad = (a * Math.PI) / 180;
                  const x1 = Math.cos(rad) * (ring.r - 4);
                  const y1 = Math.sin(rad) * (ring.r - 4);
                  const x2 = Math.cos(rad) * (ring.r + (i % 2 === 0 ? 4 : 2));
                  const y2 = Math.sin(rad) * (ring.r + (i % 2 === 0 ? 4 : 2));
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="oklch(0.72 0.13 75)"
                      strokeWidth={0.6}
                      opacity={0.4}
                      style={{
                        animation: `aperture-spin ${ring.dur}s linear infinite ${ring.dir}`,
                        transformOrigin: "center",
                      }}
                    />
                  );
                })}
              </g>
            ))}
            {/* Aperture blades */}
            {Array.from({ length: blades }).map((_, i) => {
              const a = (i * 360) / blades;
              return (
                <polygon
                  key={`blade-${i}`}
                  points="0,0 6,-22 14,-10"
                  fill="oklch(0.14 0.01 60)"
                  stroke="oklch(0.72 0.13 75)"
                  strokeWidth={0.4}
                  opacity={0.7}
                  style={{
                    transform: `rotate(${a}deg) translateY(-42px)`,
                    transformOrigin: "center",
                    animation: `aperture-pulse 3s ease-in-out infinite`,
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              );
            })}
            {/* Center highlight dot */}
            <circle r={3} fill="oklch(0.72 0.13 75)" opacity={0.9}>
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function Splash({ onDone }: { onDone: () => void }) {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setGone(true), 3000);
    const t2 = setTimeout(onDone, 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${gone ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.85 0.08 80) 0%, transparent 60%)" }} />
      <div className="relative flex flex-col items-center animate-splash">
        <img src={ornament} alt="" className="w-64 md:w-80 opacity-90 animate-float-slow" width={1024} height={512} />
        <div className="-mt-2 md:-mt-4 flex flex-col items-center relative">
          <span className="text-xs md:text-sm tracking-[0.5em] text-muted-foreground uppercase mb-4">Welcome to</span>
          <div className="relative">
            <img src={logo} alt="Picsdom Raebareli" className="w-72 md:w-[28rem] relative z-10" />
            <ApertureRing />
          </div>
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
