import { Link } from "react-router-dom";
import { Zap, Smartphone, RefreshCw, Layers, Target, UserCheck, ArrowRight } from "lucide-react";

const points = [
  { icon: Zap, title: "Speed Without Sacrifice", desc: "Agile delivery. Weekly sprint demos. No slow waterfall." },
  { icon: Smartphone, title: "Mobile-First, Always", desc: "Android + iOS + cross-platform. We live in the mobile layer." },
  { icon: RefreshCw, title: "Flexible Engagement Models", desc: "Dedicated teams, hourly devs, project-based — you choose." },
  { icon: Layers, title: "Full-Stack Under One Roof", desc: "UI/UX → Backend → DevOps → QA. Zero vendor juggling." },
  { icon: Target, title: "Product Thinkers, Not Just Coders", desc: "We run our own SaaS products. We understand product-market fit." },
  { icon: UserCheck, title: "Dedicated PM on Every Engagement", desc: "One point of contact. Transparent Jira/Notion boards. Weekly calls." },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 px-6 lg:px-24 bg-background relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Column */}
        <div className="animate-fade-in-up">
          <div className="sticky top-32">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-ink leading-tight">
              Why 50+ Teams Choose <br/>PrepX to Build Their Products
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
              We combine the speed of a startup studio, the reliability of an enterprise partner, and the product-thinking of a founder — all in one team.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio" className="inline-flex items-center text-primary font-semibold text-sm uppercase tracking-wider hover:underline">
                See Our Work <ArrowRight size={16} className="ml-1" />
              </Link>
              <span className="text-border">|</span>
              <Link to="/about" className="inline-flex items-center text-ink font-semibold text-sm uppercase tracking-wider hover:text-primary transition-colors">
                Meet the Team <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: 6 Features */}
        <div className="space-y-4">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <div 
                key={p.title} 
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-soft hover:shadow-soft-xl border border-border/50 hover:border-primary/30 transition-all duration-300 flex items-start gap-5 animate-fade-in-up hover:-translate-y-1 group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm border border-primary/10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
