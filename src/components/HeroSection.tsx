import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-ink text-white px-6 lg:px-24 py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary to-transparent" />
        <div className="absolute inset-0 dot-grid" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="text-primary font-semibold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 font-display">
            Founded 2022 · PrepX Infotech
          </p>
          <h1 className="font-display font-bold leading-[1.05] mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Engineering High-Performance{" "}
            <span className="text-primary">Digital Ecosystems</span>
          </h1>
          <p className="text-base md:text-xl text-white/80 max-w-2xl mb-12 font-light leading-relaxed">
            PrepX Infotech delivers enterprise-grade software solutions, specialized AI automation, and expert product engineering for global startups and established enterprises.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-primary text-white hover:bg-white hover:text-foreground transition-all duration-300 px-8 py-4 font-semibold text-sm uppercase tracking-wider"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="border border-white/30 hover:border-white px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
