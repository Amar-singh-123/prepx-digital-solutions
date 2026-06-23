import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import FinalCTASection from "@/components/FinalCTASection";

const process = [
  { n: "01", title: "Discovery & Scoping", desc: "Define the core problem and must-have features." },
  { n: "02", title: "UI/UX Prototyping", desc: "Clickable prototypes before a line of code is written." },
  { n: "03", title: "Agile Build Sprints", desc: "Weekly sprints with visible, demoable progress." },
  { n: "04", title: "Testing & QA", desc: "Functional, performance, and usability testing." },
  { n: "05", title: "Launch", desc: "Deploy to app stores and production environments." },
  { n: "06", title: "Iterate", desc: "Post-launch support and feature roadmap planning." },
];

const tiers = [
  { name: "Lean MVP", best: "Validating a single core feature", time: "4–6 weeks" },
  { name: "Standard MVP", best: "Multi-feature product with auth, payments, dashboard", time: "8–12 weeks" },
  { name: "Advanced MVP", best: "Complex platforms (marketplace, SaaS, multi-role)", time: "12–16 weeks" },
];

const reasons = [
  "Fixed-scope, fixed-timeline delivery",
  "Founder-friendly pricing",
  "Built-in product thinking — we build our own SaaS too",
  "Post-MVP scaling support",
];

const MVPDevelopment = () => (
  <Layout>
    <PageHeader
      eyebrow="MVP & Startup Product Development"
      title="From Idea to MVP in as little as"
      highlight="6–8 Weeks"
      description="We help founders validate ideas fast with lean, scalable MVPs — without burning your entire runway."
    />

    <section className="py-24 px-6 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our MVP Process</h2>
          <div className="w-20 h-1.5 bg-primary mt-5" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {process.map((p) => (
            <div key={p.n} className="bg-surface p-8">
              <div className="text-2xl font-display font-bold text-primary mb-3">{p.n}</div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">MVP Packages</h2>
          <div className="w-20 h-1.5 bg-primary mt-5" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {tiers.map((t) => (
            <div key={t.name} className="bg-card p-10">
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">{t.name}</h3>
              <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3 font-display">
                {t.time}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">Best for: {t.best}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight text-foreground">
            Why startups choose <span className="text-primary">PrepX</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We bring engineering discipline and product instincts to every founder we work with.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-white hover:bg-primary/90 px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all"
          >
            Book a Free MVP Scoping Call
          </Link>
        </div>
        <ul className="space-y-4">
          {reasons.map((b) => (
            <li key={b} className="flex gap-4 p-5 bg-background border border-border border-l-2 border-l-primary shadow-sm">
              <span className="text-primary font-bold">→</span>
              <span className="text-foreground">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <FinalCTASection />
  </Layout>
);

export default MVPDevelopment;
