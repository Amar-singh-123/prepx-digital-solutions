import { Code2, Smartphone, Cloud, Brain, Database, Globe, ShoppingBag, GraduationCap, BarChart3, Layers, Cpu, Shield } from "lucide-react";

const items = [
  { icon: Brain, label: "AI & Machine Learning", color: "from-violet-500 to-fuchsia-500" },
  { icon: Smartphone, label: "Mobile Apps", color: "from-emerald-500 to-teal-500" },
  { icon: Cloud, label: "Cloud Infrastructure", color: "from-sky-500 to-blue-600" },
  { icon: GraduationCap, label: "EdTech Platforms", color: "from-amber-500 to-orange-500" },
  { icon: ShoppingBag, label: "E-Commerce", color: "from-pink-500 to-rose-500" },
  { icon: BarChart3, label: "Data Analytics", color: "from-indigo-500 to-blue-500" },
  { icon: Database, label: "Big Data", color: "from-cyan-500 to-sky-500" },
  { icon: Shield, label: "Blockchain", color: "from-slate-600 to-slate-900" },
  { icon: Globe, label: "Web Platforms", color: "from-blue-500 to-indigo-600" },
  { icon: Layers, label: "SaaS Products", color: "from-fuchsia-500 to-purple-600" },
  { icon: Cpu, label: "IoT Solutions", color: "from-teal-500 to-emerald-600" },
  { icon: Code2, label: "Custom Software", color: "from-orange-500 to-red-500" },
];

const Card = ({ icon: Icon, label, color }: typeof items[number]) => (
  <div className="mx-3 flex items-center gap-3 px-5 py-4 rounded-2xl border border-border bg-card shadow-card min-w-[260px]">
    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Capability</div>
      <div className="font-display font-bold text-foreground">{label}</div>
    </div>
  </div>
);

const MarqueeStrip = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-subtle border-y border-border/60">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-primary font-bold mb-3">What We Build</p>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground">
          End-to-end <span className="text-gradient-premium">digital capabilities</span>
        </h2>
      </div>

      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...items, ...items].map((it, i) => (
            <Card key={i} {...it} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};

export default MarqueeStrip;
