import { motion } from "framer-motion";
import { Shield, Zap, Clock, HeartHandshake } from "lucide-react";

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

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 divider-gold" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em] font-body">
              Why PrepX Infotech
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mt-4 mb-6 tracking-tight">
              Your Trusted{" "}
              <span className="text-gradient">Technology Partner</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 font-body">
              We don't just write code — we architect solutions. Whether you're a startup 
              needing an MVP or an educational institution going digital, PrepX Infotech 
              brings the expertise, speed, and reliability to make it happen.
            </p>
            <a
              href="#contact"
              className="inline-flex px-7 py-3.5 rounded-xl bg-gradient-primary font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-elegant glow-primary"
            >
              Let's Talk
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="p-6 rounded-2xl bg-card-gradient border border-border/60 shadow-card hover:shadow-elegant transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  {reason.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
