import { motion } from "framer-motion";
import {
  Code2,
  GraduationCap,
  Lightbulb,
  Users,
  Globe,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Full-stack development across all technologies — web apps, enterprise systems, APIs, and cloud-native solutions tailored to your business.",
  },
  {
    icon: GraduationCap,
    title: "EdTech Digital Solutions",
    description:
      "Purpose-built platforms for coaching centers, private colleges, and schools — student portals, LMS, admission systems, and mobile apps.",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description:
      "SEO, social media marketing, PPC campaigns, and brand strategy to establish your digital presence and drive measurable growth.",
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    description:
      "Strategic technology consulting to modernize infrastructure, optimize workflows, and align IT with your business objectives.",
  },
  {
    icon: Users,
    title: "Hire Dedicated Developers",
    description:
      "Access pre-vetted developers on an hourly basis ($10–$30/hr) across any technology stack — scale your team instantly.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android — from concept to App Store deployment.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3">
            Services We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            End-to-end technology solutions designed to transform your ideas into
            scalable digital products.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group p-6 rounded-2xl bg-card-gradient border-glow hover:border-primary/30 transition-all duration-300 hover:glow-primary"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold font-display text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
