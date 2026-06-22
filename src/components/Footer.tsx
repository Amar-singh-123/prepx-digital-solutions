import logoIcon from "@/assets/logo-icon.png";
import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ink text-white">
      <div className="container mx-auto px-6 lg:px-24 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src={logoIcon} alt="PrepX Infotech" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-display text-xl font-bold">
                PrepX <span className="text-primary">Infotech</span>
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs mb-6">
              Software development and technology consulting for startups, growing businesses, and enterprises.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:hello@prepxinfotech.com" className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> hello@prepxinfotech.com
              </a>
              <a href="tel:+919504007442" className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> +91 95040 07442
              </a>
              <a
                href="https://www.linkedin.com/company/prepxinfotech"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" /> linkedin.com/company/prepxinfotech
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-primary mb-4 font-display font-bold">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", to: "/about" },
                { label: "Careers", to: "/careers" },
                { label: "Portfolio", to: "/portfolio" },
                { label: "Products", to: "/products" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-white/70 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-primary mb-4 font-display font-bold">Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Mobile App Development", to: "/services" },
                { label: "Staff Augmentation", to: "/hire-developers" },
                { label: "MVP Development", to: "/mvp-development" },
                { label: "Custom Software Dev", to: "/services" },
                { label: "IT Consulting", to: "/services" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-white/70 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-primary mb-4 font-display font-bold">Resources</h4>
            <ul className="space-y-2.5">
              <li><Link to="/industries" className="text-sm text-white/70 hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/hire-developers" className="text-sm text-white/70 hover:text-white transition-colors">Hire Developers</Link></li>
              <li><a href="https://wa.me/919504007442" target="_blank" rel="noreferrer" className="text-sm text-white/70 hover:text-white transition-colors">WhatsApp Chat</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} PrepX Infotech. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
