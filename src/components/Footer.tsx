import logo from "@/assets/logo.png";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-14">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#" className="flex items-center gap-3">
            <img src={logoIcon} alt="PrepX Infotech" className="h-10 w-10 rounded-full object-cover border-2 border-primary/30 shadow-elegant" />
            <img src={logo} alt="PrepX Infotech" className="h-8 w-auto" />
          </a>
          <div className="flex items-center gap-8 text-sm text-muted-foreground font-body">
            <a href="#services" className="hover:text-foreground transition-colors font-medium">Services</a>
            <a href="#pricing" className="hover:text-foreground transition-colors font-medium">Pricing</a>
            <a href="#contact" className="hover:text-foreground transition-colors font-medium">Contact</a>
          </div>
          <p className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} PrepX Infotech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
