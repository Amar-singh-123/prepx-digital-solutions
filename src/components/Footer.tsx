import logoIcon from "@/assets/logo-icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 pt-20 pb-10">
        {/* Big editorial mark */}
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.0] text-foreground">
              Let's build something{" "}
              <em className="italic text-accent-ink">worth keeping</em>.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end">
            <a
              href="mailto:hello@prepxinfotech.com"
              className="font-display text-2xl text-foreground hover:text-primary transition-colors block mb-2"
            >
              hello@prepxinfotech.com
            </a>
            <a
              href="tel:+919504007442"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors block mb-1"
            >
              +91 95040 07442
            </a>
            <a
              href="https://www.linkedin.com/company/prepxinfotech"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              linkedin.com/company/prepxinfotech
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-10 border-t border-border">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src={logoIcon} alt="PrepX Infotech" className="h-8 w-8 rounded-full object-cover" />
              <span className="font-display text-lg text-foreground">PrepX Infotech</span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[16rem]">
              Software development & technology consulting for startups, growing businesses, and enterprises.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About", to: "/about" },
                { label: "Careers", to: "/careers" },
                { label: "Portfolio", to: "/portfolio" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-foreground/80 hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { label: "Web Applications", to: "/services" },
                { label: "Enterprise Software", to: "/services" },
                { label: "MVP Development", to: "/services" },
                { label: "AI & Automation", to: "/services" },
                { label: "Hire Developers", to: "/hire-developers" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-foreground/80 hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">Industries</h4>
            <ul className="space-y-2">
              {["SaaS & Startups", "Education", "Healthcare", "Fintech", "Logistics"].map((l) => (
                <li key={l}>
                  <Link to="/industries" className="text-sm text-foreground/80 hover:text-primary transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} PrepX Infotech. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
