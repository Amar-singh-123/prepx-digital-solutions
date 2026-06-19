import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-36 pb-24 border-b border-border">
      <div className="container mx-auto px-6">
        {/* Top meta row */}
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-muted-foreground font-medium mb-16">
          <span>PrepX Infotech — Est. 2022</span>
          <span className="hidden sm:inline">IT Services · Consulting · Engineering</span>
          <span>India / Remote</span>
        </div>

        {/* Editorial headline */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-9">
            <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.02em] text-foreground">
              Software, built with{" "}
              <em className="italic text-accent-ink">intent</em> —
              <br className="hidden md:block" />
              engineered for the long run.
            </h1>
          </div>
          <div className="lg:col-span-3">
            <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
              A software development and technology consulting firm partnering with
              startups, growing businesses, and enterprises on custom products,
              modernisation, and dedicated engineering teams.
            </p>
          </div>
        </div>

        {/* CTA + supporting links */}
        <div className="mt-14 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-7 py-4 bg-foreground text-background text-sm font-medium hover:bg-primary transition-colors"
          >
            Start a conversation
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link to="/services" className="text-sm font-medium text-foreground underline underline-offset-8 decoration-1 decoration-foreground/30 hover:decoration-primary">
            What we build
          </Link>
          <Link to="/hire-developers" className="text-sm font-medium text-foreground underline underline-offset-8 decoration-1 decoration-foreground/30 hover:decoration-primary">
            Hire engineers
          </Link>
        </div>

        {/* Stat / capability row */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 border-t border-border">
          {[
            { k: "Founded", v: "2022" },
            { k: "Industry", v: "IT Services" },
            { k: "Engagements", v: "Fixed · T&M · Dedicated" },
            { k: "Reach", v: "India & Global" },
          ].map((s) => (
            <div key={s.k} className="py-6 pr-6 border-r border-border last:border-r-0">
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">{s.k}</div>
              <div className="font-display text-2xl text-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
