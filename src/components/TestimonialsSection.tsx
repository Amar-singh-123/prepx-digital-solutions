import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Director, Sunrise Academy",
    content: "PrepX Infotech transformed our entire admission process. The student portal and mobile app they built reduced our manual workload by 70%. Exceptional team!",
    rating: 5,
    avatar: "RS",
  },
  {
    name: "Sarah Mitchell",
    role: "CTO, FinEdge Solutions",
    content: "We hired a dedicated React developer through PrepX at $20/hr. The quality of code and communication was on par with developers charging 3x more. Highly recommend.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Amit Patel",
    role: "Founder, LearnHub",
    content: "From concept to App Store in just 8 weeks. PrepX delivered our EdTech platform with real-time classes, payment integration, and admin dashboard — all flawlessly.",
    rating: 5,
    avatar: "AP",
  },
];

const TestimonialsSection = () => {
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="container relative mx-auto px-6 lg:px-24 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in-up">
          <span className="inline-block px-3 py-1 rounded-full bg-surface border border-border text-primary font-semibold text-xs tracking-widest uppercase mb-4">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-ink mb-6">
            Trusted by Businesses
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Don't just take our word for it — hear from the companies and institutions we've helped grow.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden py-4">
        {/* Infinite Marquee Container */}
        <div className="flex animate-marquee whitespace-nowrap gap-8 px-4 w-max hover:[animation-play-state:paused]">
          {/* Duplicate array for seamless looping */}
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="group relative p-8 w-[350px] md:w-[450px] whitespace-normal rounded-3xl bg-white/60 backdrop-blur-md border border-border hover:border-primary/40 transition-all duration-500 shadow-soft hover:shadow-soft-xl flex flex-col shrink-0"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              <Quote className="w-8 h-8 text-primary/20 mb-6 group-hover:text-primary/60 transition-colors group-hover:scale-110" />

              <p className="text-base md:text-lg text-ink/80 leading-relaxed font-sans mb-8 flex-1 italic group-hover:text-ink transition-colors">
                "{t.content}"
              </p>

              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-border/60">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold font-display text-lg shadow-md group-hover:shadow-lg transition-all group-hover:scale-105">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-base font-bold text-ink font-display">{t.name}</div>
                  <div className="text-sm text-primary font-semibold font-sans">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays to hide edges and make it look smooth */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
};

export default TestimonialsSection;
