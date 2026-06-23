const steps = [
  { n: "01", title: "Consultative Discovery", desc: "Deep dive into business logic, user needs, and technical constraints to define a robust roadmap." },
  { n: "02", title: "Iterative Development", desc: "Bi-weekly sprints with continuous integration and transparent progress tracking via Jira and Slack." },
  { n: "03", title: "QA & Security Hardening", desc: "Automated testing and rigorous security audits to ensure production-ready stability." },
  { n: "04", title: "Launch & Continuous Support", desc: "Structured rollout with monitoring, performance tuning, and ongoing SLA-based engineering support." },
];

const ProcessSection = () => {
  return (
    <section className="py-24 px-6 lg:px-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20">
        <div className="lg:w-1/3 animate-fade-in-up">
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-border text-primary font-semibold text-xs tracking-widest uppercase mb-4">
            How We Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-ink leading-tight">
            The PrepX <br />Methodology
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            We combine rigorous engineering standards with agile delivery to ensure project success from day one.
          </p>
          <div className="p-8 bg-white/90 backdrop-blur-sm border border-border/60 rounded-3xl shadow-soft hover:shadow-soft-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-colors" />
            <div className="text-5xl font-display font-bold mb-2 text-ink relative z-10">100%</div>
            <div className="text-xs text-primary uppercase tracking-widest font-semibold relative z-10">Transparent Delivery</div>
          </div>
        </div>

        <div className="lg:w-2/3 space-y-10 relative">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent hidden md:block" />
          {steps.map((s, i) => (
            <div key={s.n} className="flex gap-6 md:gap-8 animate-fade-in-up group relative z-10" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-white border border-border/80 shadow-soft flex items-center justify-center font-bold text-primary font-display text-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-glow transition-all duration-300">
                {s.n}
              </div>
              <div className="flex-1 pb-10 border-b border-border/40 group-last:border-0 group-last:pb-0">
                <h4 className="text-xl font-bold font-display mb-3 text-ink">{s.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
