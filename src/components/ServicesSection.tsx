import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import * as LucideIcons from "lucide-react";
import { ArrowRight, HelpCircle } from "lucide-react";

type Service = {
  id?: string;
  icon: string;
  title: string;
  desc: string;
  link: string;
  order: number;
};

const getIconComponent = (iconName: string) => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon || HelpCircle;
};

const ServicesSection = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const q = query(collection(db, "services"), orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Service[];
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);
  return (
    <section id="services" className="py-24 px-6 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-surface border border-border text-primary font-semibold text-xs tracking-widest uppercase mb-4">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-ink">
            Everything You Need to Build, Ship & Scale
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From day-one mobile development to enterprise platforms — we cover the full technology stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            // Loading Skeletons
            Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={i} 
                className="bg-white/80 backdrop-blur-sm border border-border/60 p-8 rounded-3xl flex flex-col animate-pulse"
              >
                <div className="w-14 h-14 rounded-2xl bg-muted mb-6" />
                <div className="h-6 bg-muted rounded w-3/4 mb-4" />
                <div className="h-4 bg-muted rounded w-full mb-2" />
                <div className="h-4 bg-muted rounded w-5/6 mb-8 flex-1" />
                <div className="h-4 bg-muted rounded w-24" />
              </div>
            ))
          ) : (
            services.map((s, i) => {
              const Icon = getIconComponent(s.icon);
              return (
                <Link
                  key={s.id || s.title}
                  to={s.link || "#"}
                  className="bg-white/80 backdrop-blur-sm border border-border/60 p-8 rounded-3xl shadow-soft hover:shadow-soft-xl hover:border-primary/30 transition-all duration-500 group flex flex-col animate-fade-in-up hover:-translate-y-2 relative overflow-hidden"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm border border-primary/10">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-1">{s.desc}</p>
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:underline">
                    Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })
          )}
        </div>

        <div className="mt-16 text-center">
          <Link to="/services" className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-ink hover:border-primary/50 hover:bg-surface font-semibold text-sm uppercase tracking-wider rounded-lg transition-all shadow-sm">
            View All 15+ Services &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
