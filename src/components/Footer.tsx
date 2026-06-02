import ornament from "@/assets/ornament.png";
import logo from "@/assets/picsdom-logo-gold.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 px-6 text-center">
      <img src={ornament} alt="" loading="lazy" width={1024} height={512} className="w-40 mx-auto opacity-50" />
      <img src={logo} alt="Picsdom" className="h-16 md:h-20 mx-auto mt-6" />
      <p className="mt-4 text-xs tracking-[0.4em] uppercase opacity-70">Visual Storytellers · Memory Keepers</p>
      <div className="h-px w-24 mx-auto my-8 bg-gold/60" />
      <p className="text-sm opacity-70">picdomrbl@gmail.com · +91 92355 13863</p>
      <p className="text-xs opacity-60 mt-2 max-w-md mx-auto">
        666X+WPC, Vishnu Nagar, Indira Nagar Awas Vikas Colony, Raebareli, UP 229001
      </p>
      <p className="mt-8 text-xs opacity-40">© {new Date().getFullYear()} Picsdom. All rights reserved.</p>
    </footer>
  );
}
