import { motion } from "framer-motion";
import {
  Code2,
  GraduationCap,
  Lightbulb,
  Users,
  Globe,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Full-stack development across all technologies — web apps, enterprise systems, APIs, and cloud-native solutions tailored to your business.",
    color: "from-primary/10 to-primary/5",
  },
  {
    icon: GraduationCap,
    title: "EdTech Digital Solutions",
    description:
      "Purpose-built platforms for coaching centers, private colleges, and schools — student portals, LMS, admission systems, and mobile apps.",
    color: "from-primary/10 to-primary/5",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description:
      "SEO, social media marketing, PPC campaigns, and brand strategy to establish your digital presence and drive measurable growth.",
    color: "from-primary/10 to-primary/5",
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    description:
      "Strategic technology consulting to modernize infrastructure, optimize workflows, and align IT with your business objectives.",
    color: "from-primary/10 to-primary/5",
  },
  {
    icon: Users,
    title: "Hire Dedicated Developers",
    description:
      "Access pre-vetted developers on an hourly basis ($10–$30/hr) across any technology stack — scale your team instantly.",
    color: "from-primary/10 to-primary/5",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android — from concept to App Store deployment.",
    color: "from-primary/10 to-primary/5",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
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
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight">
            Services We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto font-body leading-relaxed">
            End-to-end technology solutions designed to transform your ideas into
            scalable digital products.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group relative p-7 rounded-2xl bg-card border border-border/60 hover:border-primary/20 transition-all duration-300 shadow-card hover:shadow-hover cursor-pointer overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center border border-primary/10`}>
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="text-base font-semibold font-display text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;