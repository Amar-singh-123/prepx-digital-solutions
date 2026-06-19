const industries = [
  { name: "SaaS & Startups", desc: "MVPs, product engineering, scaling architectures." },
  { name: "Education & EdTech", desc: "LMS, admissions, student & coaching platforms." },
  { name: "E-Commerce & Retail", desc: "Storefronts, marketplaces, order management." },
  { name: "Healthcare", desc: "Practice management, telehealth, patient portals." },
  { name: "Fintech", desc: "Dashboards, integrations, compliance-aware builds." },
  { name: "Logistics & Operations", desc: "ERP, CRM, internal tools and automation." },
];

const IndustriesStrip = () => (
  <section className="py-24 border-b border-border">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-10 mb-12">
        <div className="lg:col-span-5">
          <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">§ Industries</div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
            Domains we know <em className="italic text-accent-ink">deeply</em>.
          </h2>
        </div>
      </div>

      <div className="border-t border-border">
        {industries.map((it, i) => (
          <div
            key={it.name}
            className="grid grid-cols-12 gap-6 py-6 border-b border-border items-baseline group hover:bg-secondary/50 transition-colors px-2 -mx-2"
          >
            <div className="col-span-1 font-display text-lg text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
            <div className="col-span-11 md:col-span-5 font-display text-2xl md:text-3xl text-foreground">{it.name}</div>
            <div className="col-span-12 md:col-span-6 text-sm text-muted-foreground leading-relaxed">{it.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesStrip;
