import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Layers, Smartphone, Globe, BarChart3, GraduationCap, ShoppingBag } from "lucide-react";

const projects = [
  {
    icon: GraduationCap,
    title: "EduConnect LMS",
    category: "EdTech Platform",
    description:
      "Complete learning management system with live classes, assignments, auto-grading, and parent portals for a network of 15+ coaching centers.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    color: "from-primary to-blue-600",
  },
  {
    icon: Smartphone,
    title: "SchoolSync Mobile",
    category: "Mobile Application",
    description:
      "Cross-platform mobile app for school management — attendance tracking, fee payments, push notifications, and real-time grade updates.",
    tech: ["Flutter", "Firebase", "Stripe", "FCM"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: ShoppingBag,
    title: "MarketPulse Dashboard",
    category: "SaaS Analytics",
    description:
      "Real-time analytics dashboard for e-commerce businesses to track sales, customer behavior, and marketing ROI across multiple channels.",
    tech: ["Next.js", "Python", "D3.js", "Redis"],
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Globe,
    title: "TravelNest Platform",
    category: "Web Application",
    description:
      "Full-featured travel booking platform with dynamic pricing, multi-currency support, booking management, and integrated CRM.",
    tech: ["React", "Django", "MongoDB", "Razorpay"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "GrowthEngine SEO",
    category: "Digital Marketing",
    description:
      "End-to-end digital marketing campaign that boosted organic traffic 240% and generated 500+ qualified leads in 6 months.",
    tech: ["SEO", "Google Ads", "Analytics", "Content"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Layers,
    title: "CloudOps Automation",
    category: "DevOps & Cloud",
    description:
      "Enterprise CI/CD pipeline and cloud infrastructure setup reducing deployment time from days to minutes with 99.9% uptime.",
    tech: ["AWS", "Docker", "Terraform", "GitHub Actions"],
    color: "from-pink-500 to-rose-600",
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

const ProjectShowcaseSection = () => {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-0 left-0 right-0 divider-gradient" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/60 text-primary text-xs font-semibold uppercase tracking-[0.2em] font-body mb-5">
            Our Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight">
            Projects That <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto font-body leading-relaxed">
            A glimpse into the solutions we've crafted for businesses and institutions worldwide.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group relative rounded-2xl bg-card border border-border/60 hover:border-primary/20 transition-all duration-300 shadow-card hover:shadow-hover overflow-hidden"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />

              <div className="p-7">
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div className="text-[10px] uppercase tracking-[0.2em] text-primary font-body font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-base font-semibold font-display text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-accent/60 text-accent-foreground text-[10px] font-semibold font-body uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcaseSection;
