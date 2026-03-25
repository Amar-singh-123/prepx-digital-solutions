const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-14">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm shadow-elegant">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-foreground leading-tight">
                Prep<span className="text-gradient">X</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-body font-medium">
                Infotech
              </span>
            </div>
          </div>
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
