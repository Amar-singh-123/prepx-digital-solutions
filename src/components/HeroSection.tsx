import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Globe, TrendingUp, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Perspective grid floor */}
      <div
        className="absolute inset-x-0 bottom-0 h-[60%] opacity-[0.07] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(to top, black 0%, transparent 90%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 90%)",
          transform: "perspective(800px) rotateX(60deg)",
          transformOrigin: "bottom",
        }}
      />

      {/* Floating 3D-ish gradient shapes */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1 }}
        className="hidden md:block absolute top-[18%] left-[4%] w-44 h-44 rounded-[2.2rem] rotate-[18deg] shadow-2xl animate-float"
        style={{
          background:
            "linear-gradient(135deg, #ff8ec7 0%, #ffb37a 40%, #ffd25c 100%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, x: 60, y: -30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.15 }}
        className="hidden md:block absolute top-[10%] right-[5%] w-56 h-56 rounded-[2.5rem] -rotate-[22deg] shadow-2xl animate-float"
        style={{
          animationDelay: "1.2s",
          background:
            "linear-gradient(135deg, #8ee0ff 0%, #a78bfa 50%, #f472b6 100%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden lg:block absolute bottom-[14%] right-[12%] w-24 h-24 rounded-full shadow-xl animate-float"
        style={{
          animationDelay: "0.6s",
          background:
            "linear-gradient(135deg, hsl(217 91% 60%), hsl(230 80% 55%))",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.85, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="hidden lg:block absolute bottom-[22%] left-[10%] w-16 h-16 rounded-2xl rotate-12 shadow-xl animate-float"
        style={{ background: "linear-gradient(135deg, #34d399, #10b981)" }}
      />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-card/70 glass mb-8 shadow-card"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-semibold text-foreground uppercase tracking-[0.18em] font-body">
            Award-Winning Software Studio · Est. 2020
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display font-extrabold tracking-tight leading-[0.98] text-foreground text-[clamp(2.6rem,7vw,5.75rem)] max-w-6xl mx-auto"
        >
          Engineering the <span className="text-gradient-premium">Future</span> of
          <br className="hidden sm:block" /> Digital{" "}
          <span className="text-gradient-premium">Products</span> & AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body"
        >
          PrepX Infotech is a global technology company building scalable software,
          EdTech platforms, mobile apps, and AI-driven solutions. Hire dedicated
          engineers from <span className="font-bold text-primary">$10/hr</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group px-8 py-4 rounded-full bg-gradient-primary font-semibold text-primary-foreground hover:opacity-95 transition-all flex items-center gap-2.5 glow-primary text-sm"
          >
            Consult Our Experts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            className="px-8 py-4 rounded-full border border-border bg-card/70 glass text-foreground font-semibold hover:border-primary/40 hover:shadow-hover transition-all text-sm"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Trusted by strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-20"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-6">
            Trusted by industry leaders and innovators
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
            {["CERTIK", "Coinccino", "PHANTASMA", "SeedX", "TARALITY", "INRx", "MERKLECHAIN"].map(
              (b) => (
                <span
                  key={b}
                  className="text-sm md:text-base font-display font-bold tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                >
                  {b}
                </span>
              ),
            )}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { icon: Globe, value: "50+", label: "Projects Delivered" },
            { icon: TrendingUp, value: "30+", label: "Happy Clients" },
            { icon: Code2, value: "15+", label: "Tech Stacks" },
            { icon: Award, value: "99%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl bg-card/70 glass border border-border/60 hover:border-primary/30 hover:shadow-hover transition-all duration-300 group text-left"
            >
              <stat.icon className="w-5 h-5 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-bold font-display text-foreground">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1 font-body font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
