import { motion } from "framer-motion";

const technologies = [
  "React", "Next.js", "Vue.js", "Angular", "Node.js", "Python",
  "Django", "Flutter", "React Native", "AWS", "Docker", "PostgreSQL",
  "MongoDB", "Firebase", "TypeScript", "Tailwind CSS", "GraphQL", "Redis",
];

const TechStackSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 divider-gradient" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/60 text-primary text-xs font-semibold uppercase tracking-[0.2em] font-body mb-5">
            Tech Arsenal
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight">
            Technologies We <span className="text-gradient">Master</span>
          </h2>
        </motion.div>

        {/* Scrolling tech ribbon */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-3 flex-wrap justify-center"
          >
            {technologies.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="px-5 py-2.5 rounded-xl bg-card border border-border/60 text-sm font-semibold text-foreground font-body shadow-card hover:shadow-hover hover:border-primary/25 hover:bg-accent/30 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
