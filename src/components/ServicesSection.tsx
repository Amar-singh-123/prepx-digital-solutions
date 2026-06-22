import { Link } from "react-router-dom";

const services = [
  { n: "01", title: "Mobile App Development", desc: "Native Android, iOS, and cross-platform apps built for performance, scale, and the app stores." },
  { n: "02", title: "Staff Augmentation & Dedicated Teams", desc: "Add pre-vetted developers, QAs, and PMs to your team within days — flexible monthly contracts." },
  { n: "03", title: "MVP & Startup Product Development", desc: "Lean, scalable MVPs delivered in 6–12 weeks so you can validate, raise, and grow with confidence." },
  { n: "04", title: "Custom Software Development", desc: "Tailor-built web platforms, internal tools, and back-office systems designed around your workflows." },
  { n: "05", title: "SaaS Development", desc: "Multi-tenant, subscription-based SaaS platforms architected for growth, security, and uptime." },
  { n: "06", title: "IT Consulting & Digital Transformation", desc: "Architecture audits, modernization roadmaps, and AI-enabled workflows for established teams." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 lg:px-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">Core Services</h2>
          <div className="w-20 h-1.5 bg-primary mb-6" />
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            From mobile-first products to dedicated engineering teams — everything you need to build, scale, and modernize your software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((s) => (
            <Link
              key={s.n}
              to="/services"
              className="bg-card p-10 lg:p-12 group hover:bg-ink hover:text-white transition-all duration-500 block"
            >
              <div className="text-3xl mb-8 text-primary group-hover:text-white font-display font-bold">{s.n}</div>
              <h3 className="text-xl md:text-2xl font-bold font-display mb-4">{s.title}</h3>
              <p className="text-sm leading-relaxed opacity-80 mb-8">{s.desc}</p>
              <div className="h-px w-full bg-foreground/10 group-hover:bg-white/20" />
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Link to="/services" className="inline-flex items-center text-primary font-semibold uppercase tracking-wider text-sm hover:underline">
            Explore all services →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
