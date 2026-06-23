import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { label: "Hire Developers", to: "/hire-developers" },
  { label: "Products", to: "/products" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
];

const servicesDropdown = {
  build: [
    { label: "Mobile App Dev", to: "/services/mobile-app-development" },
    { label: "MVP Development", to: "/mvp-development" },
    { label: "Custom Software", to: "/services/custom-software" },
    { label: "SaaS Development", to: "/services/saas-development" },
    { label: "Full-Stack Dev", to: "/services/full-stack-web-development" },
    { label: "Enterprise Apps", to: "/services/enterprise-application-development" },
  ],
  hire: [
    { label: "Staff Augmentation", to: "/hire-developers" },
    { label: "Dedicated Teams", to: "/hire-developers" },
    { label: "Hire Developers", to: "/hire-developers" },
  ],
  transform: [
    { label: "IT Consulting", to: "/services/it-consulting" },
    { label: "Digital Transform", to: "/services/digital-transformation" },
    { label: "AI & Automation", to: "/services/ai-automation" },
  ],
  design: [
    { label: "UI/UX Design", to: "/services/ui-ux-design" },
    { label: "Website Design", to: "/services/ui-ux-design" },
  ],
  platforms: [
    { label: "E-commerce Dev", to: "/services/ecommerce-development" },
    { label: "ERP Development", to: "/services/erp-development" },
    { label: "CRM Development", to: "/services/crm-development" },
  ]
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-[14px] font-semibold text-ink transition-colors relative group flex items-center gap-1 ${
      isActive ? "text-primary" : "hover:text-primary"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "border-b border-border shadow-sm py-3" : "border-b border-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoIcon}
            alt="PrepX Infotech"
            className="h-10 w-10 rounded-full object-cover shadow-sm"
          />
          <span className="font-display text-xl font-bold text-ink tracking-tight">
            PrepX <span className="text-primary">Infotech</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center flex-1 justify-end md:justify-center gap-6">
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="px-3 py-2 text-[14px] font-semibold text-ink transition-colors flex items-center gap-1 hover:text-primary">
              Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mega Menu Dropdown */}
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white border border-border rounded-xl shadow-xl p-8 grid grid-cols-3 gap-8 animate-fade-in-up">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Build</h4>
                    <ul className="space-y-2">
                      {servicesDropdown.build.map(s => (
                        <li key={s.label}><Link to={s.to} className="text-sm text-ink/80 hover:text-primary transition-colors">{s.label}</Link></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Design</h4>
                    <ul className="space-y-2">
                      {servicesDropdown.design.map(s => (
                        <li key={s.label}><Link to={s.to} className="text-sm text-ink/80 hover:text-primary transition-colors">{s.label}</Link></li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Hire</h4>
                    <ul className="space-y-2">
                      {servicesDropdown.hire.map(s => (
                        <li key={s.label}><Link to={s.to} className="text-sm text-ink/80 hover:text-primary transition-colors">{s.label}</Link></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Platforms</h4>
                    <ul className="space-y-2">
                      {servicesDropdown.platforms.map(s => (
                        <li key={s.label}><Link to={s.to} className="text-sm text-ink/80 hover:text-primary transition-colors">{s.label}</Link></li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Transform</h4>
                    <ul className="space-y-2">
                      {servicesDropdown.transform.map(s => (
                        <li key={s.label}><Link to={s.to} className="text-sm text-ink/80 hover:text-primary transition-colors">{s.label}</Link></li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <Link to="/services" className="text-primary font-semibold text-sm hover:underline flex items-center gap-1">
                      View All Services &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>
          
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="ml-4 px-6 py-2.5 bg-primary text-white text-[14px] font-semibold rounded-lg shadow-md hover:bg-primary/90 hover:-translate-y-0.5 transition-all"
          >
            Connect Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-ink p-1.5"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-white absolute top-full left-0 right-0 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-6 space-y-4">
            <Link to="/services" onClick={() => setIsOpen(false)} className="font-semibold text-ink text-lg">Services</Link>
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-semibold text-lg transition-colors ${
                    isActive ? "text-primary" : "text-ink hover:text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full mt-4 text-center px-6 py-3 bg-primary text-white font-semibold rounded-lg"
              >
                Connect Us
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
