import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

type TechStackGroup = {
  id?: string;
  label: string;
  items: string[];
  order: number;
};

const TechStackSection = () => {
  const [groups, setGroups] = useState<TechStackGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechStacks = async () => {
      try {
        const q = query(collection(db, "tech_stacks"), orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as TechStackGroup[];
        setGroups(data);
      } catch (error) {
        console.error("Error fetching tech stacks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechStacks();
  }, []);
  return (
    <section className="py-24 px-6 lg:px-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl text-center mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-border text-primary font-semibold text-xs tracking-widest uppercase mb-4">
            Tech Stack
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-ink">
            Technologies We Master
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We are framework-agnostic and pick the stack that fits your product, team, and operating environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            // Loading Skeletons
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white/90 backdrop-blur-sm border border-border/60 rounded-2xl p-8 flex flex-col animate-pulse">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-muted" />
                  <div className="h-6 bg-muted rounded w-24" />
                </div>
                <ul className="space-y-4">
                  <li className="h-3 bg-muted rounded w-3/4" />
                  <li className="h-3 bg-muted rounded w-5/6" />
                  <li className="h-3 bg-muted rounded w-2/3" />
                  <li className="h-3 bg-muted rounded w-1/2" />
                </ul>
              </div>
            ))
          ) : (
            groups.map((g, i) => (
              <div key={g.id || g.label} className="bg-white/90 backdrop-blur-sm border border-border/60 rounded-2xl p-8 shadow-soft hover:shadow-soft-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 animate-fade-in-up group relative overflow-hidden" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl -mr-8 -mt-8 group-hover:bg-primary/10 transition-colors" />
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary font-bold font-display text-lg group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm border border-primary/10">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display font-bold text-xl text-ink">{g.label}</h3>
                </div>
                <ul className="space-y-3">
                  {g.items?.map((t) => (
                    <li key={t} className="text-sm text-muted-foreground font-medium flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/50 before:mr-3">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
