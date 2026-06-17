import { motion } from "framer-motion";
import { GraduationCap, ShoppingBag, HeartPulse, Banknote, Plane, Factory, Gamepad2, Truck, Building2 } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const industries = [
  { icon: GraduationCap, title: "Education & EdTech", desc: "LMS, coaching platforms, online assessments and live class infrastructure." },
  { icon: ShoppingBag, title: "E-Commerce & Retail", desc: "Storefronts, marketplaces, payments, inventory, and omni-channel CRM." },
  { icon: HeartPulse, title: "Healthcare", desc: "Patient portals, telemedicine, clinical dashboards, and HIPAA-aware design." },
  { icon: Banknote, title: "Fintech", desc: "Wallets, lending, KYC, trading, and secure payment infrastructure." },
  { icon: Plane, title: "Travel & Hospitality", desc: "Booking engines, dynamic pricing, multi-currency, and CRM integrations." },
  { icon: Factory, title: "Manufacturing", desc: "ERP, IoT dashboards, supply-chain visibility, and process automation." },
  { icon: Gamepad2, title: "Gaming & Web3", desc: "Game backends, blockchain integrations, NFTs and decentralized apps." },
  { icon: Truck, title: "Logistics", desc: "Fleet tracking, route optimization, dispatch, and warehouse software." },
  { icon: Building2, title: "Real Estate", desc: "Listing portals, CRM, virtual tours, and lead management tools." },
];

const Industries = () => (
  <Layout>
    <PageHeader
      eyebrow="Industries"
      title="Domain expertise across"
      highlight="9+ industries"
      description="We've shipped products for education, fintech, healthcare, retail, gaming, and more — adapting engineering practice to each domain."
    />
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-7 rounded-2xl border border-border bg-card shadow-card hover:shadow-hover hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-lg">
                <it.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Industries;
