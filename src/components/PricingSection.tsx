import { motion } from "framer-motion";
import { Check, Crown, Star } from "lucide-react";

const plans = [
  {
    name: "Junior Developer",
    price: "$10",
    unit: "/hr",
    description: "Perfect for simple tasks and maintenance work",
    features: [
      "1–2 years experience",
      "Frontend or backend",
      "Bug fixes & maintenance",
      "Daily progress reports",
      "Slack/Email communication",
    ],
    highlighted: false,
  },
  {
    name: "Mid-Level Developer",
    price: "$20",
    unit: "/hr",
    description: "Ideal for feature development and integrations",
    features: [
      "3–5 years experience",
      "Full-stack capable",
      "API integrations & features",
      "Code reviews included",
      "Agile workflow",
    ],
    highlighted: true,
  },
  {
    name: "Senior Developer",
    price: "$30",
    unit: "/hr",
    description: "For complex architecture and team leadership",
    features: [
      "5+ years experience",
      "Architecture & system design",
      "Team lead capabilities",
      "DevOps & CI/CD setup",
      "Strategic tech consulting",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-0 left-0 right-0 divider-gradient" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/60 text-primary text-xs font-semibold uppercase tracking-[0.2em] font-body mb-5">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight">
            Hire Developers <span className="text-gradient">Your Way</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto font-body leading-relaxed">
            Flexible hourly rates with no long-term commitments. Scale up or down as needed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col ${
                plan.highlighted
                  ? "bg-gradient-primary text-primary-foreground border-transparent scale-[1.03] glow-premium"
                  : "bg-card border-border/60 shadow-card hover:shadow-hover hover:border-primary/15"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-card text-primary text-xs font-bold flex items-center gap-1.5 shadow-elegant border border-primary/20">
                  <Star className="w-3 h-3 fill-primary" />
                  Most Popular
                </div>
              )}
              <h3 className={`font-display font-bold text-lg ${plan.highlighted ? "" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mt-1 mb-6 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"} font-body`}>
                {plan.description}
              </p>
              <div className="flex items-baseline gap-1 mb-7">
                <span className={`text-4xl font-extrabold font-display ${plan.highlighted ? "" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm font-body ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.unit}
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-3 text-sm font-body ${plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlighted ? "bg-primary-foreground/20" : "bg-accent/70"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3.5 rounded-lg font-semibold text-sm transition-all ${
                  plan.highlighted
                    ? "bg-card text-primary hover:bg-card/90 shadow-elegant"
                    : "bg-gradient-primary text-primary-foreground hover:opacity-90 glow-primary"
                }`}
              >
                Hire Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;