import logoIcon from "@/assets/logo-icon.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />

      <div className="container relative mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-5">
              <img
                src={logoIcon}
                alt="PrepX Infotech"
                className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/20"
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
            <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xs">
              Building digital products that scale. Software development, EdTech solutions, and IT consulting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm text-foreground mb-5">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: "Services", href: "#services" },
                { label: "Projects", href: "#projects" },
                { label: "Pricing", href: "#pricing" },
                { label: "Careers", href: "#careers" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors font-body font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm text-foreground mb-5">Services</h4>
            <div className="space-y-3">
              {[
                "Software Development",
                "EdTech Solutions",
                "Mobile Apps",
                "Digital Marketing",
                "IT Consulting",
              ].map((s) => (
                <span key={s} className="block text-sm text-muted-foreground font-body">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm text-foreground mb-5">Contact</h4>
            <div className="space-y-3">
              {[
                { icon: Mail, text: "contact@prepxinfotech.com" },
                { icon: Phone, text: "+91 XXXXX XXXXX" },
                { icon: MapPin, text: "India" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 text-sm text-muted-foreground font-body">
                  <item.icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-7 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} PrepX Infotech. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground font-body">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
