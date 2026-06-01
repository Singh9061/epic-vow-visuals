import { useEffect, useState } from "react";
import ornament from "@/assets/ornament.png";

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
        <div className="-mt-4 md:-mt-6 flex flex-col items-center">
          <span className="text-xs md:text-sm tracking-[0.5em] text-muted-foreground uppercase mb-3">Welcome to</span>
          <h1 className="font-display text-6xl md:text-8xl tracking-[0.15em] gold-text">
            PICSDOM
          </h1>
          <div className="h-px w-48 md:w-64 mt-4 origin-left bg-gradient-to-r from-transparent via-gold to-transparent animate-draw-line" />
          <span className="mt-4 text-[0.7rem] md:text-xs tracking-[0.4em] text-muted-foreground uppercase">
            Wedding Films & Photography
          </span>
        </div>
        <img src={ornament} alt="" className="w-64 md:w-80 opacity-90 rotate-180 -mt-2 animate-float-slow" width={1024} height={512} />
      </div>
    </div>
  );
}
