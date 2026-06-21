const steps = [
  { n: "01", title: "Consultative Discovery", desc: "Deep dive into business logic, user needs, and technical constraints to define a robust roadmap." },
  { n: "02", title: "Iterative Development", desc: "Bi-weekly sprints with continuous integration and transparent progress tracking via Jira and Slack." },
  { n: "03", title: "QA & Security Hardening", desc: "Automated testing and rigorous security audits to ensure production-ready stability." },
  { n: "04", title: "Launch & Continuous Support", desc: "Structured rollout with monitoring, performance tuning, and ongoing SLA-based engineering support." },
];

const ProcessSection = () => {
  return (
    <section className="py-24 px-6 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20">
        <div className="lg:w-1/3">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-foreground leading-tight">
            The PrepX <br />Methodology
          </h2>
          <p className="text-ink/70 leading-relaxed mb-10">
            We combine rigorous engineering standards with agile delivery to ensure project success from day one.
          </p>
          <div className="p-8 bg-ink text-white">
            <div className="text-4xl font-display font-bold mb-2">100%</div>
            <div className="text-xs text-primary uppercase tracking-widest font-semibold">Transparent Delivery</div>
          </div>
        </div>

        <div className="lg:w-2/3 space-y-10">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-6 md:gap-8">
              <span className="shrink-0 w-12 h-12 rounded-full border border-primary flex items-center justify-center font-bold text-primary font-display">
                {s.n}
              </span>
              <div>
                <h4 className="text-xl font-bold font-display mb-3 text-foreground">{s.title}</h4>
                <p className="text-ink/70 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
