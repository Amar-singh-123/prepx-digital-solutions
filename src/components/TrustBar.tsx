import { Building2, Landmark, Briefcase, Factory, Plane, Cpu, Shield, Globe } from "lucide-react";

const companies = [
  { name: "Acme Corp", icon: Building2 },
  { name: "GlobalBank", icon: Landmark },
  { name: "TechNova", icon: Cpu },
  { name: "Vanguard", icon: Shield },
  { name: "Nexus Ind.", icon: Factory },
  { name: "AeroFly", icon: Plane },
  { name: "WorldNet", icon: Globe },
  { name: "Synergy", icon: Briefcase },
];

const TrustBar = () => (
  <section className="bg-white border-y border-border py-8 relative overflow-hidden">
    <div className="container mx-auto px-6 mb-6 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">Trusted by innovative businesses worldwide</p>
    </div>
    
    <div className="relative flex overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap items-center gap-16 px-8">
        {[...companies, ...companies, ...companies].map((company, i) => {
          const Icon = company.icon;
          return (
            <div key={i} className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Icon className="w-8 h-8 text-primary" />
              <span className="font-display font-bold text-xl text-ink">{company.name}</span>
            </div>
          );
        })}
      </div>
      {/* Gradient Fades for Smooth Marquee */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
    </div>
  </section>
);

export default TrustBar;
