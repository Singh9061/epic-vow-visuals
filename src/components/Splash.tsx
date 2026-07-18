import { useEffect, useRef, useState } from "react";
import logo from "@/assets/picsdom-logo-gold.png";

/**
 * Aperture iris that opens exactly on top of the "O" in the Picsdom logo.
 * We measure the logo's rendered box and place the iris precisely.
 */
function ApertureOverO({ logoRef }: { logoRef: React.RefObject<HTMLImageElement | null> }) {
  const [pos, setPos] = useState<{ left: number; top: number; size: number } | null>(null);

  useEffect(() => {
    const compute = () => {
      const el = logoRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      // Logo image is roughly text "Picsdom" — the "O" sits around 62% across.
      // Height of "O" ~ 58% of logo height. Tune to match the gold logo.
      const size = r.height * 0.58;
      const left = r.left + r.width * 0.618 - size / 2;
      const top = r.top + r.height * 0.5 - size / 2;
      setPos({ left, top, size });
    };
    compute();
    window.addEventListener("resize", compute);
    const t = setTimeout(compute, 100);
    return () => {
      window.removeEventListener("resize", compute);
      clearTimeout(t);
    };
  }, [logoRef]);

  if (!pos) return null;

  const blades = 10;
  const bladePath = "M 0 -44 Q 20 -36 24 -8 Q 12 -18 -6 -14 Q -18 -30 0 -44 Z";

  return (
    <div
      className="pointer-events-none fixed"
      style={{ left: pos.left, top: pos.top, width: pos.size, height: pos.size }}
    >
      <svg viewBox="-60 -60 120 120" className="w-full h-full overflow-visible">
        {/* Outer ring with ticks */}
        <g style={{ animation: "aperture-spin 22s linear infinite", transformOrigin: "center" }}>
          <circle r={56} fill="none" stroke="oklch(0.72 0.13 75)" strokeWidth={0.7} opacity={0.6} strokeDasharray="2 5" />
          {Array.from({ length: 48 }).map((_, i) => {
            const a = (i * 360) / 48;
            const rad = (a * Math.PI) / 180;
            const big = i % 4 === 0;
            return (
              <line
                key={i}
                x1={Math.cos(rad) * 51}
                y1={Math.sin(rad) * 51}
                x2={Math.cos(rad) * (big ? 58 : 54)}
                y2={Math.sin(rad) * (big ? 58 : 54)}
                stroke="oklch(0.72 0.13 75)"
                strokeWidth={big ? 0.9 : 0.4}
                opacity={big ? 0.85 : 0.4}
              />
            );
          })}
        </g>

        {/* Inner counter-rotating ring */}
        <g style={{ animation: "aperture-spin 30s linear infinite reverse", transformOrigin: "center" }}>
          <circle r={47} fill="none" stroke="oklch(0.72 0.13 75)" strokeWidth={0.5} opacity={0.4} />
          <circle r={45} fill="none" stroke="oklch(0.85 0.12 80)" strokeWidth={0.3} opacity={0.35} strokeDasharray="1 3" />
        </g>

        {/* Iris blades open then hold */}
        <g style={{ animation: "iris-open 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both", transformOrigin: "center" }}>
          {Array.from({ length: blades }).map((_, i) => {
            const a = (i * 360) / blades;
            return (
              <path
                key={i}
                d={bladePath}
                fill="oklch(0.16 0.02 60)"
                stroke="oklch(0.72 0.13 75)"
                strokeWidth={0.5}
                opacity={0.95}
                style={{ transform: `rotate(${a}deg)`, transformOrigin: "center" }}
              />
            );
          })}
        </g>

        {/* Center flare */}
        <circle r={3} fill="oklch(0.9 0.14 85)" opacity={0.9}>
          <animate attributeName="r" values="2;4;2" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

export function Splash({ onDone }: { onDone: () => void }) {
  const [gone, setGone] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const logoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setShowTagline(true), 1400);
    const t2 = setTimeout(() => setGone(true), 3200);
    const t3 = setTimeout(onDone, 3800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background transition-opacity duration-700 ${
        gone ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Ambient gold vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, oklch(0.85 0.08 80 / 0.35) 0%, transparent 55%), radial-gradient(ellipse at 50% 100%, oklch(0.72 0.13 75 / 0.15) 0%, transparent 60%)",
        }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="relative flex flex-col items-center px-6">
        {/* Top hairline */}
        <div className="h-px w-40 md:w-56 origin-center bg-gradient-to-r from-transparent via-gold to-transparent animate-draw-line mb-6" />

        {/* Kicker */}
        <span
          className={`text-[0.65rem] md:text-xs tracking-[0.55em] text-muted-foreground uppercase mb-6 transition-all duration-700 ${
            showTagline ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          Welcome to
        </span>

        {/* Logo with aperture overlay */}
        <div className="relative animate-logo-reveal">
          <img
            ref={logoRef}
            src={logo}
            alt="Picsdom Raebareli"
            className="w-72 md:w-[26rem] relative z-0"
          />
          <ApertureOverO logoRef={logoRef} />
        </div>

        {/* Gold divider */}
        <div className="h-px w-56 md:w-72 mt-8 origin-left bg-gradient-to-r from-transparent via-gold to-transparent animate-draw-line" />

        {/* Tagline */}
        <span
          className={`mt-5 text-[0.7rem] md:text-xs tracking-[0.45em] uppercase gold-text transition-all duration-1000 delay-200 ${
            showTagline ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          Wedding Films & Photography
        </span>
        <span
          className={`mt-2 text-[0.6rem] md:text-[0.7rem] tracking-[0.4em] uppercase text-muted-foreground transition-all duration-1000 delay-500 ${
            showTagline ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          Raebareli · India
        </span>
      </div>
    </div>
  );
}
