import { motion } from "framer-motion";
import { Building2, GraduationCap, ShoppingBag, HeartPulse, Wallet, Truck } from "lucide-react";

const industries = [
  { icon: Building2, name: "SaaS & Startups", desc: "MVPs, product engineering, scaling architectures." },
  { icon: GraduationCap, name: "Education & EdTech", desc: "LMS, admission, student & coaching platforms." },
  { icon: ShoppingBag, name: "E-Commerce & Retail", desc: "Storefronts, marketplaces, order management." },
  { icon: HeartPulse, name: "Healthcare", desc: "Practice management, telehealth, patient portals." },
  { icon: Wallet, name: "Fintech", desc: "Dashboards, integrations, compliance-aware builds." },
  { icon: Truck, name: "Logistics & Operations", desc: "ERP, CRM, internal tools and automation." },
];

const IndustriesStrip = () => (
  <section className="py-24 border-y border-border/60">
    <div className="container mx-auto px-6">
      <div className="max-w-2xl mb-12">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-primary font-semibold mb-4">
          Industries We Serve
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
          Domain experience across regulated and fast-moving sectors
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries.map((it, i) => (
          <motion.div
            key={it.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
              <it.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-1.5">{it.name}</h3>
            <p className="text-sm text-muted-foreground font-body">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesStrip;
