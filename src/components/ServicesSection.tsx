import { Link } from "react-router-dom";
import { Smartphone, Users, Rocket, MonitorPlay, Cloud, Brain, ArrowRight } from "lucide-react";

const services = [
  { icon: Smartphone, title: "Mobile App Dev", desc: "Native & cross-platform apps built for performance and scale.", link: "/services/mobile-app-development" },
  { icon: Users, title: "Staff Aug & Dedicated Teams", desc: "Scale your team in days. Pre-vetted developers, your workflow.", link: "/hire-developers" },
  { icon: Rocket, title: "MVP & Startup Product Dev", desc: "Idea to live MVP in 6–8 weeks. Agile delivery. Fixed scope.", link: "/mvp-development" },
  { icon: MonitorPlay, title: "Custom Software Development", desc: "Tailor-built software platforms designed around your exact needs.", link: "/services/custom-software" },
  { icon: Cloud, title: "SaaS Development", desc: "Multi-tenant, subscription-ready SaaS architectures from scratch.", link: "/services/saas-development" },
  { icon: Brain, title: "IT Consulting & AI Automation", desc: "Strategic tech guidance combined with AI-powered workflows.", link: "/services/it-consulting" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-surface border border-border text-primary font-semibold text-xs tracking-widest uppercase mb-4">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-ink">
            Everything You Need to Build, Ship & Scale
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From day-one mobile development to enterprise platforms — we cover the full technology stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.title}
                to={s.link}
                className="bg-white/80 backdrop-blur-sm border border-border/60 p-8 rounded-3xl shadow-soft hover:shadow-soft-xl hover:border-primary/30 transition-all duration-500 group flex flex-col animate-fade-in-up hover:-translate-y-2 relative overflow-hidden"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm border border-primary/10">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold font-display text-ink mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">{s.desc}</p>
                <div className="flex items-center text-primary font-semibold text-sm group-hover:underline">
                  Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Link to="/services" className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-ink hover:border-primary/50 hover:bg-surface font-semibold text-sm uppercase tracking-wider rounded-lg transition-all shadow-sm">
            View All 15+ Services &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
