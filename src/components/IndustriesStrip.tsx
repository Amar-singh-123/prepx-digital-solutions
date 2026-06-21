const industries = [
  { name: "SaaS & Startups", desc: "MVPs, product engineering, and scaling architectures." },
  { name: "Education & EdTech", desc: "LMS, admissions, student and coaching platforms." },
  { name: "E-Commerce & Retail", desc: "Storefronts, marketplaces, and order management." },
  { name: "Healthcare", desc: "Practice management, telehealth, and patient portals." },
  { name: "Fintech", desc: "Dashboards, integrations, and compliance-aware builds." },
  { name: "Logistics & Operations", desc: "ERP, CRM, internal tools, and automation." },
];

const IndustriesStrip = () => (
  <section className="py-24 px-6 lg:px-24 bg-surface">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">Industries We Serve</h2>
        <div className="w-20 h-1.5 bg-primary" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {industries.map((it, i) => (
          <div key={it.name} className="bg-card p-10 border-l-2 border-primary/20 hover:border-primary transition-colors">
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-4 font-display">
              {String(i + 1).padStart(2, "0")} / Vertical
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{it.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesStrip;
