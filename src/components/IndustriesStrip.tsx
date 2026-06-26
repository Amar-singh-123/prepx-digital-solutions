import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { HelpCircle } from "lucide-react";
import * as LucideIcons from "lucide-react";

// Explicitly list all allowed gradients so Tailwind CSS compiler generates the classes for the frontend
const gradients = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-orange-500 to-red-500",
  "from-green-500 to-emerald-500",
  "from-indigo-500 to-violet-500",
  "from-slate-500 to-gray-500",
  "from-rose-500 to-orange-500",
];

type Industry = {
  id?: string;
  name: string;
  icon: string;
  color?: string;
  order: number;
};

// Map icons dynamically
const getIconComponent = (iconName: string) => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon || HelpCircle;
};

const IndustriesStrip = () => {
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const q = query(collection(db, "industries"), orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Industry[];
        setIndustries(data);
      } catch (error) {
        console.error("Error fetching industries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIndustries();
  }, []);

  return (
    <section className="py-24 px-6 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-surface border border-border text-primary font-semibold text-xs tracking-widest uppercase mb-4">
            Industries
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-ink">
            Domain Expertise Across Sectors
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {loading ? (
            // Loading Skeletons
            Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={i} 
                className="bg-white border border-border rounded-xl p-8 flex flex-col items-center text-center animate-pulse"
              >
                <div className="w-12 h-12 rounded-full bg-muted mb-4" />
                <div className="h-4 bg-muted rounded w-24 mb-3" />
                <div className="h-3 bg-muted rounded w-16" />
              </div>
            ))
          ) : (
            industries.map((it, i) => {
              const Icon = getIconComponent(it.icon);
              const safeColor = it.color ? it.color.replace(/\/20/g, '') : '';
              
              return (
                <Link 
                  key={it.id || it.name} 
                  to="/industries"
                  className="bg-white border border-border rounded-xl p-8 flex flex-col items-center text-center group hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors ${safeColor ? 'bg-gradient-to-br ' + safeColor + ' text-white' : 'bg-surface text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-sm font-bold text-ink mb-3 group-hover:text-primary transition-colors">{it.name}</h3>
                  <span className="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    See Projects &rarr;
                  </span>
                </Link>
              )
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default IndustriesStrip;
