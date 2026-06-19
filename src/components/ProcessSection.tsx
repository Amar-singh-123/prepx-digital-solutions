const steps = [
  { n: "I", title: "Discover", desc: "Goals, users, and constraints translated into a clear technical scope, estimate, and roadmap." },
  { n: "II", title: "Design", desc: "Architecture, UX, and delivery plan defined upfront with milestones and measurable outcomes." },
  { n: "III", title: "Build", desc: "Agile sprints with weekly demos. Clean code, reviews, CI/CD and continuous QA throughout." },
  { n: "IV", title: "Launch", desc: "Production rollout with monitoring, performance tuning, and a structured handover." },
  { n: "V", title: "Support", desc: "Post-launch maintenance, iterative enhancements, and SLA-based support as your product evolves." },
];

const ProcessSection = () => {
  return (
    <section className="py-24 border-b border-border bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">§ Engagement</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
              A transparent way of <em className="italic text-accent-ink">working together</em>.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-base text-muted-foreground leading-relaxed">
              Every engagement — whether fixed-scope delivery, team augmentation, or full ownership of a transformation —
              follows the same predictable five-step rhythm.
            </p>
          </div>
        </div>

        <ol className="divide-y divide-border border-y border-border">
          {steps.map((s) => (
            <li key={s.n} className="grid grid-cols-12 gap-6 py-8 items-baseline">
              <div className="col-span-2 md:col-span-1 font-display text-2xl text-muted-foreground">{s.n}</div>
              <div className="col-span-10 md:col-span-3 font-display text-2xl md:text-3xl text-foreground">{s.title}</div>
              <div className="col-span-12 md:col-span-8 text-sm md:text-base text-muted-foreground leading-relaxed">{s.desc}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
