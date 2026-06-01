import logo from "@/assets/picsdom-logo-gold.png";

export function Nav() {
  const links = ["Home", "Films", "Stories", "About", "Contact"];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between backdrop-blur-md bg-black/20">
      <a href="#" className="flex items-center">
        <img src={logo} alt="Picsdom" className="h-10 md:h-12 w-auto drop-shadow-lg" />
      </a>
      <ul className="hidden md:flex items-center gap-10 text-xs tracking-[0.3em] uppercase text-white">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-gold transition-colors duration-300">{l}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
