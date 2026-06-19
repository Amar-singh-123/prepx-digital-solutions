import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Hire Developers", to: "/hire-developers" },
  { label: "Careers", to: "/careers" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-[13px] font-medium tracking-tight transition-colors ${
      isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background transition-shadow ${
        scrolled ? "border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoIcon}
            alt="PrepX Infotech"
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl text-foreground tracking-tight">
              PrepX <span className="italic text-accent-ink">Infotech</span>
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <div className="ml-3 mr-2">
            <ThemeToggle />
          </div>
          <Link
            to="/contact"
            className="ml-1 px-5 py-2.5 bg-foreground text-background text-[13px] font-medium hover:bg-primary transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-1.5"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="flex flex-col gap-1 p-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 transition-colors font-medium text-sm ${
                    isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-5 py-3 bg-foreground text-center text-sm font-medium text-background"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
