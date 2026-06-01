import { Link } from "@tanstack/react-router";
import logo from "@/assets/picsdom-logo-gold.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/films", label: "Films" },
  { to: "/stories", label: "Stories" },
  { to: "/team", label: "Team" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between backdrop-blur-md bg-black/20">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Picsdom" className="h-10 md:h-12 w-auto drop-shadow-lg" />
      </Link>
      <ul className="hidden md:flex items-center gap-8 text-xs tracking-[0.3em] uppercase text-white">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="hover:text-gold transition-colors duration-300"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
