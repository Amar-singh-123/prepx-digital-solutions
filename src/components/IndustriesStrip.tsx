import { Link } from "react-router-dom";
import { HeartPulse, Building2, ShoppingCart, GraduationCap, Truck, Briefcase } from "lucide-react";

const industries = [
  { name: "Healthcare & MedTech", icon: HeartPulse },
  { name: "FinTech & Banking", icon: Building2 },
  { name: "E-Commerce & Retail", icon: ShoppingCart },
  { name: "EdTech & E-Learning", icon: GraduationCap },
  { name: "Logistics & Supply", icon: Truck },
  { name: "SaaS & B2B Software", icon: Briefcase },
];

const IndustriesStrip = () => (
  <section className="py-24 px-6 lg:px-24 bg-background">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full bg-surface border border-border text-primary font-semibold text-xs tracking-widest uppercase mb-4">
          Industries
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-ink">
          Domain Expertise Across Sectors
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {industries.map((it, i) => {
          const Icon = it.icon;
          return (
            <Link 
              key={it.name} 
              to="/industries"
              className="bg-white border border-border rounded-xl p-8 flex flex-col items-center text-center group hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-surface text-muted-foreground flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <Icon size={24} />
              </div>
              <h3 className="font-display text-sm font-bold text-ink mb-3 group-hover:text-primary transition-colors">{it.name}</h3>
              <span className="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                See Projects &rarr;
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  </section>
);

export default IndustriesStrip;
