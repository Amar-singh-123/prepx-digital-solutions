import { motion } from "framer-motion";
import { Shield, Zap, Clock, HeartHandshake, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Full-Stack Expertise",
    description: "Proficient across React, Node, Python, Flutter, AWS, and 15+ technologies.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Agile methodology ensures your product ships on time, every time.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Rigorous testing, code reviews, and best practices baked into every project.",
  },
  {
    icon: HeartHandshake,
    title: "Client-First Approach",
    description: "Transparent communication with dedicated project managers for every engagement.",
  },
];

const highlights = [
  "100% on-time delivery track record",
  "Dedicated project manager for every client",
  "Post-launch support & maintenance",
  "NDA & IP protection included",
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 left-0 right-0 divider-gradient" />

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/60 text-primary text-xs font-semibold uppercase tracking-[0.2em] font-body mb-5">
              Why PrepX Infotech
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 tracking-tight">
              Your Trusted{" "}
              <span className="text-gradient">Technology Partner</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 font-body text-sm md:text-base">
              We don't just write code — we architect solutions. Whether you're a startup 
              needing an MVP or an educational institution going digital, PrepX Infotech 
              brings the expertise, speed, and reliability to make it happen.
            </p>

            {/* Highlights list */}
            <div className="space-y-3 mb-8">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground/80 font-body">{h}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex px-7 py-3.5 rounded-lg bg-gradient-primary font-semibold text-sm text-primary-foreground hover:opacity-90 transition-all glow-primary"
            >
              Let's Talk
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/60 shadow-card hover:shadow-hover hover:border-primary/15 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/70 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 text-sm">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;