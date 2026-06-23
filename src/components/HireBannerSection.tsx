import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Pre-vetted Senior Engineers",
  "Seamless Team Integration",
  "Flexible Monthly Contracts",
  "Zero Recruitment Fees",
];

const HireBannerSection = () => {
  return (
    <section className="py-24 px-6 lg:px-24 bg-surface border-y border-border overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="bg-primary text-white rounded-3xl p-8 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-12 lg:gap-24 animate-fade-in-up">
          
          {/* Decorative background vectors */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-[50%] -right-[10%] w-[80%] h-[200%] bg-white/10 rotate-12 transform-gpu blur-3xl rounded-full" />
            <div className="absolute inset-0 dot-grid opacity-20" />
          </div>

          <div className="relative z-10 flex-1 lg:max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 border border-white/30 font-semibold text-xs tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm">
              Staff Augmentation
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Need Extra Firepower?
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 font-light">
              Scale your engineering team in 48 hours. React, Node, Python, and Mobile experts ready to integrate directly into your workflow.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/80 shrink-0" />
                  <span className="text-sm font-medium">{b}</span>
                </div>
              ))}
            </div>

            <Link
              to="/hire-developers"
              className="inline-flex items-center justify-center bg-white text-primary hover:bg-surface px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 rounded-lg shadow-lg gap-2"
            >
              Hire Developers <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right side image representation */}
          <div className="relative z-10 flex-1 w-full lg:w-auto h-[400px] lg:h-auto self-stretch">
            <div className="absolute inset-0 bg-white/5 rounded-2xl transform rotate-3" />
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
              alt="Engineering team collaborating" 
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl border border-white/20"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HireBannerSection;
