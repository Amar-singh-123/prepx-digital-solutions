import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Director, Sunrise Academy",
    content:
      "PrepX Infotech transformed our entire admission process. The student portal and mobile app they built reduced our manual workload by 70%. Exceptional team!",
    rating: 5,
    avatar: "RS",
  },
  {
    name: "Sarah Mitchell",
    role: "CTO, FinEdge Solutions",
    content:
      "We hired a dedicated React developer through PrepX at $20/hr. The quality of code and communication was on par with developers charging 3x more. Highly recommend.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Amit Patel",
    role: "Founder, LearnHub",
    content:
      "From concept to App Store in just 8 weeks. PrepX delivered our EdTech platform with real-time classes, payment integration, and admin dashboard — all flawlessly.",
    rating: 5,
    avatar: "AP",
  },
  {
    name: "Emily Chen",
    role: "Marketing Head, GrowthPulse",
    content:
      "Their digital marketing strategies doubled our organic traffic in 3 months. The SEO and content strategy was data-driven and results-oriented.",
    rating: 5,
    avatar: "EC",
  },
  {
    name: "Vikram Joshi",
    role: "Principal, Vidya International School",
    content:
      "The school management system PrepX built for us handles everything — attendance, grades, parent communication. Parents love the mobile app!",
    rating: 5,
    avatar: "VJ",
  },
  {
    name: "David Brown",
    role: "CEO, TechNova Startup",
    content:
      "PrepX's IT consulting helped us choose the right tech stack and architecture. They saved us months of potential rework. True technology partners.",
    rating: 5,
    avatar: "DB",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 left-0 right-0 divider-gradient" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/60 text-primary text-xs font-semibold uppercase tracking-[0.2em] font-body mb-5">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight">
            Trusted by <span className="text-gradient">Businesses</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto font-body leading-relaxed">
            Don't just take our word for it — hear from the companies and institutions we've helped grow.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={item}
              className="group relative p-7 rounded-2xl bg-card border border-border/60 hover:border-primary/20 transition-all duration-300 shadow-card hover:shadow-hover overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                <Quote className="w-8 h-8 text-primary/15 mb-4" />

                <p className="text-sm text-muted-foreground leading-relaxed font-body mb-6">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold font-display">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground font-display">{t.name}</div>
                    <div className="text-xs text-muted-foreground font-body">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
