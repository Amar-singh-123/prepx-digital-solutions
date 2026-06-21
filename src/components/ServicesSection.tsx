import { Link } from "react-router-dom";

const services = [
  { n: "01", title: "Web App Development", desc: "Scalable, secure, and responsive web platforms built with modern frameworks to drive business growth." },
  { n: "02", title: "Enterprise App Development", desc: "Complex backend architectures and business intelligence tools designed for organizational efficiency." },
  { n: "03", title: "AI & Intelligent Automation", desc: "Leveraging machine learning and custom AI models to automate workflows and unlock predictive insights." },
  { n: "04", title: "MVP Development", desc: "Rapid prototyping and lean development to bring your product vision to market and validate early." },
  { n: "05", title: "Startup Product Dev", desc: "End-to-end technical partnership for founders, focusing on agility, UX excellence, and technical debt management." },
  { n: "06", title: "Hire Freelancers", desc: "On-demand access to our vetted pool of specialized engineers, architects, and product designers." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 lg:px-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">Service Spectrum</h2>
          <div className="w-20 h-1.5 bg-primary" />
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
      </div>
    </section>
  );
};

export default ServicesSection;
