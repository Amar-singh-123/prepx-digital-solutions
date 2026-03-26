import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 glass bg-background/70 shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logoIcon}
            alt="PrepX Infotech"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 shadow-elegant"
          />
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold text-foreground leading-tight tracking-tight">
              Prep<span className="text-gradient">X</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-body font-medium -mt-0.5">
              Infotech
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-3 mr-2">
            <ThemeToggle />
          </div>
          <a
            href="#contact"
            className="ml-1 px-6 py-2.5 rounded-lg bg-gradient-primary text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all glow-primary"
          >
            Get Started
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-1.5 rounded-lg hover:bg-accent/50 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass bg-card/90 border-t border-border/60"
          >
            <div className="flex flex-col gap-1 p-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-5 py-3 rounded-lg bg-gradient-primary text-center text-sm font-semibold text-primary-foreground glow-primary"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;