import ornament from "@/assets/ornament.png";
import logo from "@/assets/picsdom-logo-gold.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 px-6 text-center">
      <img src={ornament} alt="" loading="lazy" width={1024} height={512} className="w-40 mx-auto opacity-50" />
      <img src={logo} alt="Picsdom" className="h-16 md:h-20 mx-auto mt-6" />
      <p className="mt-4 text-xs tracking-[0.4em] uppercase opacity-70">Visual Storytellers · Memory Keepers</p>
      <div className="h-px w-24 mx-auto my-8 bg-gold/60" />
      <p className="text-sm opacity-70">hello@picsdom.in · +91 00000 00000 · Raebareli</p>
      <p className="mt-8 text-xs opacity-40">© {new Date().getFullYear()} Picsdom. All rights reserved.</p>
    </footer>
  );
}
