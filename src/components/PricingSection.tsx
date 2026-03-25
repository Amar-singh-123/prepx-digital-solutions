import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3">
            Hire Developers <span className="text-gradient">Your Way</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Flexible hourly rates with no long-term commitments. Scale up or down as needed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-7 rounded-2xl border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-card-gradient border-primary/40 glow-primary scale-[1.02]"
                  : "bg-card-gradient border-glow hover:border-primary/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}
              <h3 className="font-display font-semibold text-foreground text-lg">
                {plan.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 mb-5">
                {plan.description}
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold font-display text-gradient">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm">{plan.unit}</span>
              </div>
              <ul className="space-y-3 mb-7">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlighted
                    ? "bg-gradient-primary text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:border-primary/40"
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
