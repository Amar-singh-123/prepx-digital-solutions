import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import TechStackSection from "@/components/TechStackSection";

const models = [
  { n: "01", title: "Dedicated Developer", desc: "1 developer, full-time, embedded as part of your team and managed by you." },
  { n: "02", title: "Dedicated Team", desc: "A full pod — devs, QA, and PM — for end-to-end product ownership." },
  { n: "03", title: "Staff Augmentation", desc: "Short or long-term skill gaps filled inside your existing workflow." },
  { n: "04", title: "Hire Freelancers", desc: "Project-based or hourly engagement for smaller, scoped tasks." },
];

const steps = [
  { n: "01", title: "Share your requirement", desc: "Send us role, skills, seniority, and timeline." },
  { n: "02", title: "We shortlist in 48 hours", desc: "Pre-vetted profiles matched to your stack and domain." },
  { n: "03", title: "Interview & select", desc: "You interview candidates and choose the right fit." },
  { n: "04", title: "Onboard within a week", desc: "Developer joins your team and starts shipping fast." },
];

const expertise = [
  { label: "Mobile", items: ["Android (Kotlin/Java)", "iOS (Swift)", "React Native", "Flutter"] },
  { label: "Frontend", items: ["React", "Angular", "Vue", "Next.js"] },
  { label: "Backend", items: ["Node.js", "Python/Django", "Java/Spring", "PHP/Laravel", ".NET"] },
  { label: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"] },
  { label: "Cloud/DevOps", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"] },
  { label: "Other", items: ["AI/ML", "Data Engineering", "QA Automation"] },
];

const benefits = [
  "Pre-vetted talent pool",
  "Flexible contracts (monthly, hourly, project-based)",
  "No recruitment overhead",
  "Direct communication with developers",
  "Replace a developer free of charge if not a fit",
];

const HireDevelopers = () => (
  <Layout>
    <PageHeader
      eyebrow="Hire Developers"
      title="Hire Pre-Vetted Developers in"
      highlight="48 Hours"
      description="Scale your engineering team without the overhead of hiring. Choose dedicated developers, augmented teams, or freelancers — on your terms."
    />

    <section className="py-24 px-6 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Engagement Models</h2>
          <div className="w-20 h-1.5 bg-primary mt-5" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {models.map((m) => (
            <div key={m.n} className="bg-surface p-8">
              <div className="text-2xl font-display font-bold text-primary mb-4">{m.n}</div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Hiring Process</h2>
          <div className="w-20 h-1.5 bg-primary mt-5" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {steps.map((s) => (
            <div key={s.n} className="bg-card p-8">
              <div className="text-xs uppercase tracking-widest text-primary font-semibold font-display mb-3">Step {s.n}</div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Technology Expertise</h2>
          <div className="w-20 h-1.5 bg-primary mt-5" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {expertise.map((g) => (
            <div key={g.label} className="bg-surface p-8">
              <div className="text-xs uppercase tracking-widest text-primary mb-4 font-display font-semibold">{g.label}</div>
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

    <section className="py-24 px-6 lg:px-24 bg-ink text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Why hire from <span className="text-primary">PrepX</span>
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            We obsess over fit, communication, and outcomes — not headcount.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-white hover:bg-white hover:text-foreground px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all"
          >
            Talk to Our Hiring Team
          </Link>
        </div>
        <ul className="space-y-4">
          {benefits.map((b) => (
            <li key={b} className="flex gap-4 p-5 bg-white/5 border-l-2 border-primary">
              <span className="text-primary font-bold">→</span>
              <span className="text-white/90">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <TechStackSection />
  </Layout>
);

export default HireDevelopers;
