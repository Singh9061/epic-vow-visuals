export function Nav() {
  const links = ["Home", "Films", "Stories", "About", "Contact"];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between backdrop-blur-md bg-background/30">
      <a href="#" className="font-display text-xl md:text-2xl tracking-[0.2em] text-primary-foreground mix-blend-difference">
        PICSDOM
      </a>
      <ul className="hidden md:flex items-center gap-10 text-xs tracking-[0.3em] uppercase text-primary-foreground mix-blend-difference">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-gold transition-colors duration-300">{l}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
