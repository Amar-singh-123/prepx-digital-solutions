import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  { icon: Search, title: "Discover", description: "We start by understanding your business goals, users, and constraints — then translate them into a clear technical scope." },
  { icon: PenTool, title: "Design", description: "Architecture, UX, and delivery plan defined upfront with milestones, estimates, and measurable outcomes." },
  { icon: Code2, title: "Build", description: "Agile sprints with weekly demos. Clean code, code reviews, CI/CD and continuous QA throughout." },
  { icon: Rocket, title: "Launch", description: "Production rollout with monitoring, performance tuning, and a structured handover or co-managed operation." },
  { icon: LifeBuoy, title: "Support", description: "Post-launch maintenance, iterative enhancements, and SLA-based support as your product evolves." },
];

const ProcessSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container relative mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-primary font-semibold mb-4">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
            A structured engagement model focused on outcomes
          </h2>
          <p className="text-muted-foreground mt-4 font-body leading-relaxed">
            Whether we're delivering a fixed-scope product, augmenting your team, or owning a full
            transformation initiative — every engagement follows a transparent, predictable process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                  <s.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
