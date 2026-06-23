import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => (
  <section className="relative py-32 px-6 lg:px-24 overflow-hidden bg-ink text-white">
    {/* Decorative background shapes */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-ink to-ink" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60 mix-blend-screen pointer-events-none" />
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[150%] bg-primary/20 rotate-12 transform-gpu blur-[120px] rounded-full" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[150%] bg-primary/10 -rotate-12 transform-gpu blur-[120px] rounded-full" />
      <div className="absolute inset-0 dot-grid opacity-10" />
    </div>

    <div className="container relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
      <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-xs tracking-wider uppercase mb-8 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        Start Your Project
      </span>
      <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-white drop-shadow-md">
        Have a Project in Mind? <br/>Let's Build It Together.
      </h2>
      <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
        Tell us about your product, team, or idea. We respond within one business day with a free consultation and actionable roadmap.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contact"
          className="bg-primary text-white hover:bg-primary/90 hover:-translate-y-1 hover:shadow-glow px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 rounded-xl flex items-center justify-center gap-2 border border-primary/50"
        >
          Get a Free Consultation <ArrowRight size={18} />
        </Link>
        <Link
          to="/portfolio"
          className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 rounded-xl flex items-center justify-center"
        >
          View Our Work
        </Link>
      </div>
    </div>
  </section>
);

export default FinalCTASection;
