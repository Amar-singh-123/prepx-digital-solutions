import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const services = [
  { n: "01", title: "Custom Software Development", desc: "Web applications, internal tools, APIs and cloud-native systems engineered for your domain — built to ship, scale, and stay maintainable." },
  { n: "02", title: "Enterprise & SaaS Platforms", desc: "Multi-tenant SaaS, ERP and CRM platforms with role-based access, integrations, dashboards, and operational reporting." },
  { n: "03", title: "Mobile Application Development", desc: "Native and cross-platform iOS and Android apps with clean architecture, smooth UX, and reliable release pipelines." },
  { n: "04", title: "MVP & Startup Product Engineering", desc: "Idea to launch in focused milestones — pragmatic scope, weekly demos, and an architecture that can grow with you." },
  { n: "05", title: "AI & Intelligent Automation", desc: "LLM-powered workflows, document understanding, internal copilots, and pragmatic automations grounded in your real processes." },
  { n: "06", title: "Hire Dedicated Developers", desc: "Pre-vetted engineers and full pods working as an extension of your team — transparent reporting and flexible hourly engagements." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">§ Services</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
              What we <em className="italic text-accent-ink">do</em>.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 flex items-end">
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              An end-to-end engineering partner across the product lifecycle —
              from early discovery and architecture to delivery, scale, and ongoing support.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 border-t border-border">
          {services.map((s, i) => (
            <Link
              to="/services"
              key={s.n}
              className={`group p-8 md:p-10 border-b border-border md:[&:nth-child(odd)]:border-r flex flex-col gap-6 hover:bg-secondary/60 transition-colors ${
                i === services.length - 1 ? "md:border-b-0" : ""
              } ${i === services.length - 2 ? "md:border-b-0" : ""}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-2xl text-muted-foreground">{s.n}</span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 leading-tight">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
