import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Navigation = () => {
  const navLinks = [
    { name: "Research", path: "/research" },
    { name: "Careers", path: "/careers" },
    { name: "Events", path: "/events" },
    { name: "EDI", path: "/edi" },
    { name: "Education", path: "/education" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <Leaf className="h-6 w-6" />
          <span>Plantae</span>
        </Link>
        
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button className="text-foreground">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
