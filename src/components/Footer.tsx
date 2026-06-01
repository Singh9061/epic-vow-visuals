import ornament from "@/assets/ornament.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 px-6 text-center">
      <img src={ornament} alt="" loading="lazy" width={1024} height={512} className="w-40 mx-auto opacity-60 invert" />
      <h3 className="text-4xl md:text-5xl mt-6 gold-text">Picsdom</h3>
      <p className="mt-3 text-xs tracking-[0.4em] uppercase opacity-70">Visual Storytellers · Memory Keepers</p>
      <div className="h-px w-24 mx-auto my-8 bg-gold/60" />
      <p className="text-sm opacity-70">hello@picsdom.in · +91 00000 00000</p>
      <p className="mt-8 text-xs opacity-40">© {new Date().getFullYear()} Picsdom. All rights reserved.</p>
    </footer>
  );
}
