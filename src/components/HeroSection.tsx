import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-background text-ink pt-24 pb-16 overflow-hidden">
      {/* Animated Curvy Background Canvas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Layer 1: Morphing Aurora Blobs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 to-indigo-500/10 blur-[80px] mix-blend-multiply opacity-80 animate-morph duration-[12000ms] origin-center" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 blur-[80px] mix-blend-multiply opacity-60 animate-morph duration-[15000ms] delay-700 origin-center" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-violet-500/5 blur-[100px] opacity-50 animate-morph duration-[10000ms]" />
        
        {/* Layer 2: Animated SVG Waves (Subtle) */}
        <div className="absolute bottom-0 left-0 right-0 h-full overflow-hidden opacity-30">
          <svg className="absolute bottom-0 left-0 w-[200%] h-full text-primary/5 animate-wave origin-bottom" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            <path d="M1440,256L1488,229.3C1536,203,1632,149,1728,154.7C1824,160,1920,224,2016,218.7C2112,213,2208,139,2304,128C2400,117,2496,171,2592,197.3C2688,224,2784,224,2832,224L2880,224L2880,320L2832,320C2784,320,2688,320,2592,320C2496,320,2400,320,2304,320C2208,320,2112,320,2016,320C1920,320,1824,320,1728,320C1632,320,1536,320,1488,320L1440,320Z" transform="translate(-1440, 0)"></path>
          </svg>
          <svg className="absolute bottom-0 left-0 w-[200%] h-[80%] text-blue-500/5 animate-wave opacity-70 origin-bottom" style={{ animationDuration: '20s', animationDirection: 'reverse' }} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path d="M0,128L60,144C120,160,240,192,360,186.7C480,181,600,139,720,144C840,149,960,203,1080,213.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            <path d="M1440,128L1500,144C1560,160,1680,192,1800,186.7C1920,181,2040,139,2160,144C2280,149,2400,203,2520,213.3C2640,224,2760,192,2820,176L2880,160L2880,320L2820,320C2760,320,2640,320,2520,320C2400,320,2280,320,2160,320C2040,320,1920,320,1800,320C1680,320,1560,320,1500,320L1440,320Z" transform="translate(-1440, 0)"></path>
          </svg>
        </div>
        
        <div className="absolute inset-0 dot-grid opacity-[0.1]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Content */}
          <div className="flex-1 animate-fade-in-up relative z-20">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-border/50 text-primary font-semibold text-xs tracking-wider uppercase mb-6 shadow-sm">
              🚀 Trusted by startups & enterprises
            </span>
            <h1 className="font-display font-bold leading-[1.2] mb-6 text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight">
              We Build Mobile Apps,
              <br className="hidden lg:block" /> Scale Your Team,
              <br className="hidden lg:block" /> and <span className="text-primary relative inline-block">
                Launch MVPs
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4"/></svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-sans leading-relaxed">
              PrepX Infotech is a full-stack software development company helping startups and enterprises hire skilled developers, build mobile-first products, and go from idea to MVP in weeks — not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/hire-developers"
                className="bg-primary text-white hover:bg-primary/90 hover:-translate-y-1 hover:shadow-glow transition-all duration-300 px-8 py-4 font-bold text-sm uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
              >
                Hire Developers <ArrowRight size={18} />
              </Link>
              <Link
                to="/mvp-development"
                className="bg-white/80 backdrop-blur-sm text-ink border border-border/60 hover:border-primary/50 hover:bg-white hover:shadow-soft transition-all duration-300 px-8 py-4 font-bold text-sm uppercase tracking-wider rounded-xl flex items-center justify-center"
              >
                Start Your MVP
              </Link>
            </div>

            {/* Social Proof Micro-row */}
            <div className="flex items-center gap-4 text-sm font-semibold text-muted-foreground bg-white/50 backdrop-blur-sm w-fit px-4 py-2 rounded-lg border border-border/40 shadow-sm">
              <div className="flex items-center text-amber-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>Rated 4.9/5</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>50+ Projects Delivered</span>
            </div>
          </div>

          {/* Right: Open-source Image Collage */}
          <div className="flex-1 w-full relative h-[500px] lg:h-[650px] animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent rounded-[2rem] transform rotate-3 scale-105 blur-sm" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Team collaborating on software development"
              className="absolute top-0 right-0 w-4/5 h-[65%] object-cover rounded-3xl shadow-soft-xl border border-white/40 animate-float"
              style={{ animationDuration: '8s' }}
            />
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
              alt="Data dashboard"
              className="absolute bottom-4 left-0 w-3/4 h-[55%] object-cover rounded-3xl shadow-soft-xl border border-white/40 animate-float"
              style={{ animationDuration: '9s', animationDelay: '-4s' }}
            />
            
            {/* Floating decorative elements */}
            <div className="absolute top-1/4 -left-8 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-glass border border-white/50 flex items-center gap-4 animate-float" style={{ animationDuration: '6s', animationDelay: '-2s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold shadow-inner">{"</>"}</div>
              <div>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Sprint</p>
                <p className="text-sm font-bold text-ink">Completed</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
