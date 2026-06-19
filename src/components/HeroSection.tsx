import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 border-b border-border/60">
      <div className="absolute inset-0 bg-gradient-subtle" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card mb-7"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.18em]">
                IT Services & IT Consulting · Est. 2022
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold tracking-tight leading-[1.05] text-foreground text-[clamp(2.25rem,5.2vw,4rem)]"
            >
              Software development and{" "}
              <span className="text-gradient">engineering teams</span> for ambitious businesses.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed font-body"
            >
              PrepX Infotech partners with startups, growing businesses, and enterprises to build
              custom software, modernize systems, and extend engineering capacity with flexible,
              outcome-driven engagement models.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 grid sm:grid-cols-2 gap-2.5 max-w-lg"
            >
              {[
                "Custom Software & Product Engineering",
                "Dedicated Engineering Teams",
                "Web, Mobile, SaaS, ERP & CRM",
                "Digital Transformation & Consulting",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-foreground/80 font-body">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {t}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all"
              >
                Request a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-card text-foreground font-semibold text-sm hover:border-primary/40 transition-all"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Company snapshot card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-border bg-card shadow-card p-7">
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground font-semibold mb-5">
                Company Snapshot
              </div>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
                {[
                  { k: "Founded", v: "2022" },
                  { k: "Industry", v: "IT Services & Consulting" },
                  { k: "Headquarters", v: "India" },
                  { k: "Engagements", v: "Project · Dedicated · T&M" },
                ].map((i) => (
                  <div key={i.k}>
                    <dt className="text-[11px] uppercase tracking-wider text-muted-foreground font-body">
                      {i.k}
                    </dt>
                    <dd className="text-sm font-semibold text-foreground font-display mt-1">
                      {i.v}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 pt-6 border-t border-border/60 space-y-2 text-sm font-body">
                <a href="mailto:hello@prepxinfotech.com" className="block text-foreground hover:text-primary transition-colors">
                  hello@prepxinfotech.com
                </a>
                <a href="tel:+919504007442" className="block text-foreground hover:text-primary transition-colors">
                  +91 95040 07442
                </a>
                <a
                  href="https://www.linkedin.com/company/prepxinfotech"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  linkedin.com/company/prepxinfotech
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
