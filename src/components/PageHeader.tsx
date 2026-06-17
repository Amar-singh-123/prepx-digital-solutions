import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Props {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  breadcrumb?: string;
}

const PageHeader = ({ eyebrow, title, highlight, description, breadcrumb }: Props) => {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-hero border-b border-border/60">
      <div className="absolute inset-0 mesh-gradient opacity-70" />
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mb-6 font-medium"
        >
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{breadcrumb ?? title}</span>
        </motion.div>

        {eyebrow && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-[11px] uppercase tracking-[0.3em] text-primary font-bold mb-4"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="font-display font-extrabold tracking-tight leading-[1.05] text-foreground text-4xl md:text-6xl max-w-4xl mx-auto"
        >
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-gradient-premium">{highlight}</span>
            </>
          )}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
