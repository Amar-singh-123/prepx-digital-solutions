import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Globe, TrendingUp, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 mesh-gradient" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-[10%] w-80 h-80 rounded-full bg-primary/5 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-primary/4 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[150px] animate-pulse-glow" style={{ animationDelay: "0.8s" }} />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/15 bg-accent/50 glass mb-10"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider font-body">
              Software & Digital Solutions
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display leading-[1.08] mb-7 tracking-tight">
            We Build Digital
            <br />
            Products That{" "}
            <span className="text-gradient-premium">Scale</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-body">
            Enterprise software, EdTech platforms, digital marketing — we deliver 
            technology solutions that drive growth. Hire dedicated developers from{" "}
            <span className="text-primary font-bold">$10/hr</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group px-8 py-4 rounded-lg bg-gradient-primary font-semibold text-primary-foreground hover:opacity-90 transition-all flex items-center gap-2.5 glow-primary text-sm"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-lg border border-border hover:border-primary/25 text-foreground font-semibold transition-all flex items-center gap-2.5 bg-card/50 glass hover:shadow-hover text-sm"
            >
              <Code2 className="w-4 h-4 text-primary" />
              Explore Services
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { icon: Globe, value: "50+", label: "Projects Delivered" },
            { icon: TrendingUp, value: "30+", label: "Happy Clients" },
            { icon: Code2, value: "15+", label: "Tech Stacks" },
            { icon: Award, value: "99%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-xl bg-card/60 glass border border-border/50 hover:border-primary/20 transition-all duration-300 group"
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