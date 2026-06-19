import { Link } from "react-router-dom";

const points = [
  { k: "Full-stack expertise", v: "Engineers fluent across modern web, mobile, cloud, and data — one team, end to end." },
  { k: "Predictable delivery", v: "Weekly demos, transparent reporting, and an agile cadence built around real milestones." },
  { k: "Engineering quality", v: "Code reviews, automated testing, CI/CD and observability baked into every build." },
  { k: "Long-term partnership", v: "Dedicated leads, NDA and IP protection, and post-launch support that doesn't disappear." },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-28 border-b border-border bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">§ Why PrepX</div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-foreground mb-8">
              A studio that behaves like an{" "}
              <em className="italic text-accent-ink">in-house team</em>.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md mb-10">
              We're small enough to care about details and structured enough to ship reliably —
              the kind of partner you wish you'd started with.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-7 py-4 bg-foreground text-background text-sm font-medium hover:bg-primary transition-colors"
            >
              Talk to us
            </Link>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <dl className="border-t border-border">
              {points.map((p) => (
                <div key={p.k} className="grid grid-cols-12 gap-4 py-7 border-b border-border">
                  <dt className="col-span-12 md:col-span-5 font-display text-xl text-foreground">{p.k}</dt>
                  <dd className="col-span-12 md:col-span-7 text-sm text-muted-foreground leading-relaxed">{p.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
