const groups = [
  { label: "Frontend", items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Python", "Django", "GraphQL", "REST"] },
  { label: "Mobile", items: ["Flutter", "React Native", "iOS", "Android"] },
  { label: "Cloud & Data", items: ["AWS", "Docker", "PostgreSQL", "MongoDB", "Redis", "Firebase"] },
];

const TechStackSection = () => {
  return (
    <section className="py-24 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">§ Stack</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
              Modern tools, chosen <em className="italic text-accent-ink">on purpose</em>.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-base text-muted-foreground leading-relaxed">
              We're framework-agnostic and pick the stack that fits your product, team, and operating
              environment — never the other way around.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-border">
          {groups.map((g) => (
            <div key={g.label} className="p-8 border-b md:[&:nth-child(odd)]:border-r lg:[&:nth-child(-n+4)]:border-r lg:last:border-r-0 border-border">
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-5">{g.label}</div>
              <ul className="space-y-2">
                {g.items.map((t) => (
                  <li key={t} className="font-display text-xl text-foreground">{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
