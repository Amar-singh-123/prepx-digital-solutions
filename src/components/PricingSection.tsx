import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";

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
    <section id="pricing" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 divider-gold" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em] font-body">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-4 tracking-tight">
            Hire Developers <span className="text-gradient">Your Way</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto font-body leading-relaxed">
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
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-card-gradient border-primary/30 glow-premium scale-[1.03]"
                  : "bg-card-gradient border-border/60 shadow-card hover:shadow-elegant hover:border-primary/15"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground flex items-center gap-1.5 shadow-elegant">
                  <Crown className="w-3 h-3" />
                  Most Popular
                </div>
              )}
              <h3 className="font-display font-semibold text-foreground text-lg">
                {plan.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 mb-5 font-body">
                {plan.description}
              </p>
              <div className="flex items-baseline gap-1 mb-7">
                <span className="text-4xl font-bold font-display text-gradient">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm font-body">{plan.unit}</span>
              </div>
              <ul className="space-y-3.5 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground font-body">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlighted
                    ? "bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-elegant glow-primary"
                    : "border border-border text-foreground hover:border-primary/30 hover:shadow-elegant"
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
