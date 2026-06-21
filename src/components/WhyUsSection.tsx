import { Check } from "lucide-react";

const points = [
  { k: "Full-stack expertise", v: "Engineers fluent across modern web, mobile, cloud, and data — one team, end to end." },
  { k: "Predictable delivery", v: "Weekly demos, transparent reporting, and an agile cadence built around real milestones." },
  { k: "Engineering quality", v: "Code reviews, automated testing, CI/CD, and observability baked into every build." },
  { k: "Long-term partnership", v: "Dedicated leads, NDA and IP protection, and post-launch support that doesn't disappear." },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 px-6 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
            Why teams choose <span className="text-primary">PrepX Infotech</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mb-6" />
          <p className="text-muted-foreground leading-relaxed max-w-md">
            We're structured enough to deliver reliably and small enough to care about the details — the kind of engineering partner you wish you had started with.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-6">
          {points.map((p) => (
            <div key={p.k} className="flex gap-5 p-6 bg-surface border-l-2 border-primary">
              <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{p.k}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.v}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
