import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import FinalCTASection from "@/components/FinalCTASection";

const values = [
  { k: "Speed to Market", v: "MVP-first mindset and agile delivery so you ship before competitors plan." },
  { k: "Flexible Talent", v: "Hire developers or full teams on demand — scale up or down without friction." },
  { k: "Mobile-First Engineering", v: "Android, iOS, and cross-platform expertise built into our DNA." },
  { k: "Full-Stack Capability", v: "From UI/UX to backend, cloud, and DevOps — one accountable partner." },
  { k: "Product Ownership", v: "We build and run our own SaaS, so we think like product people, not just coders." },
];

const About = () => (
  <Layout>
    <PageHeader
      eyebrow="About PrepX Infotech"
      title="Building mobile-first products,"
      highlight="scaling teams, launching MVPs"
      description="PrepX Infotech is a software development partner helping startups and enterprises hire skilled developers, build mobile-first products, and go from idea to MVP in weeks, not months."
    />

    <section className="py-24 px-6 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <div className="text-xs uppercase tracking-widest text-primary font-display font-semibold mb-4">Our Mission</div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5 leading-tight">
            Turn ideas into reliable, scalable software — fast.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We help startups and businesses combine dedicated engineering talent with proven product-development processes to ship software that performs in the real world.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-primary font-display font-semibold mb-4">Our Vision</div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5 leading-tight">
            A trusted global technology partner.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Known for mobile-first engineering, dependable staff augmentation, and rapid MVP delivery for founders and enterprises alike.
          </p>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 lg:px-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Core Value Pillars</h2>
          <div className="w-20 h-1.5 bg-primary mt-5" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {values.map((p, i) => (
            <div key={p.k} className="bg-card p-8">
              <div className="text-2xl font-display font-bold text-primary mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{p.k}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <WhyUsSection />
    <ProcessSection />
    <FinalCTASection />
  </Layout>
);

export default About;
