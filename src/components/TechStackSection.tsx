const groups = [
  { label: "Frontend", items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Python", "Django", "GraphQL", "REST APIs"] },
  { label: "Mobile", items: ["Flutter", "React Native", "iOS", "Android"] },
  { label: "Cloud & Data", items: ["AWS", "Docker", "PostgreSQL", "MongoDB", "Redis"] },
];

const TechStackSection = () => {
  return (
    <section className="py-24 px-6 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">Engineering Capabilities</h2>
          <div className="w-20 h-1.5 bg-primary mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            We are framework-agnostic and pick the stack that fits your product, team, and operating environment — never the other way around.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {groups.map((g) => (
            <div key={g.label} className="bg-surface p-8">
              <div className="text-xs uppercase tracking-widest text-primary mb-5 font-display font-semibold">{g.label}</div>
              <ul className="space-y-2">
                {g.items.map((t) => (
                  <li key={t} className="text-base text-foreground font-medium">{t}</li>
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
