const groups = [
  { label: "Mobile", items: ["Android (Kotlin/Java)", "iOS (Swift)", "React Native", "Flutter"] },
  { label: "Frontend", items: ["React", "Next.js", "Angular", "Vue", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Python / Django", "Java / Spring", "PHP / Laravel", ".NET"] },
  { label: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Redis"] },
  { label: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"] },
  { label: "AI & Data", items: ["OpenAI / LLMs", "LangChain", "ML Pipelines", "QA Automation"] },
];

const TechStackSection = () => {
  return (
    <section className="py-24 px-6 lg:px-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl text-center mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-border text-primary font-semibold text-xs tracking-widest uppercase mb-4">
            Tech Stack
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-ink">
            Technologies We Master
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We are framework-agnostic and pick the stack that fits your product, team, and operating environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <div key={g.label} className="bg-white/90 backdrop-blur-sm border border-border/60 rounded-2xl p-8 shadow-soft hover:shadow-soft-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 animate-fade-in-up group relative overflow-hidden" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl -mr-8 -mt-8 group-hover:bg-primary/10 transition-colors" />
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary font-bold font-display text-lg group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm border border-primary/10">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display font-bold text-xl text-ink">{g.label}</h3>
              </div>
              <ul className="space-y-3">
                {g.items.map((t) => (
                  <li key={t} className="text-sm text-muted-foreground font-medium flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/50 before:mr-3">
                    {t}
                  </li>
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
