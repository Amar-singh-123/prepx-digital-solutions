import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Rocket, Heart, Coffee, TrendingUp } from "lucide-react";

const openPositions = [
  {
    title: "Senior React Developer",
    type: "Full-time",
    location: "Remote / India",
    experience: "3+ years",
  },
  {
    title: "Flutter Mobile Developer",
    type: "Full-time",
    location: "Remote / India",
    experience: "2+ years",
  },
  {
    title: "Python Backend Engineer",
    type: "Full-time",
    location: "Remote",
    experience: "3+ years",
  },
  {
    title: "Digital Marketing Specialist",
    type: "Full-time",
    location: "Remote / India",
    experience: "2+ years",
  },
  {
    title: "UI/UX Designer",
    type: "Contract",
    location: "Remote",
    experience: "2+ years",
  },
];

const perks = [
  { icon: Rocket, label: "Fast Growth" },
  { icon: Coffee, label: "Flexible Hours" },
  { icon: Heart, label: "Health Benefits" },
  { icon: TrendingUp, label: "Learning Budget" },
];

const CareersSection = () => {
  return (
    <section id="careers" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-0 left-0 right-0 divider-gradient" />

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/60 text-primary text-xs font-semibold uppercase tracking-[0.2em] font-body mb-5">
              Join Our Team
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 tracking-tight">
              Build Your <span className="text-gradient">Career</span> With Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 font-body text-sm md:text-base">
              We're a fast-growing tech company looking for passionate developers, designers,
              and marketers who want to work on exciting projects and grow their skills.
            </p>

            {/* Perks */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {perks.map((perk) => (
                <div
                  key={perk.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/60 shadow-card group hover:border-primary/15 hover:shadow-hover transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/70 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <perk.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground font-display">{perk.label}</span>
                </div>
              ))}
            </div>

            <a
              href="mailto:careers@prepxinfotech.com"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-gradient-primary font-semibold text-sm text-primary-foreground hover:opacity-90 transition-all glow-primary"
            >
              Send Your Resume
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right — Open Positions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-bold font-display text-foreground mb-5">
              Open Positions
            </h3>
            {openPositions.map((pos, i) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-5 rounded-2xl bg-card border border-border/60 shadow-card hover:shadow-hover hover:border-primary/15 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-display font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                    {pos.title}
                  </h4>
                  <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-body">
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-3 h-3" />
                    {pos.type}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    {pos.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {pos.experience}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
