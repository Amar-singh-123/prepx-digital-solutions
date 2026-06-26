import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import TechStackSection from "@/components/TechStackSection";
import FinalCTASection from "@/components/FinalCTASection";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

type ServiceItem = {
  title: string;
  desc: string;
};

type ServiceCategory = {
  id?: string;
  label: string;
  items: ServiceItem[];
  order: number;
};

const Services = () => {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const q = query(collection(db, "service_categories"), orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as ServiceCategory[];
        setCategories(data);
      } catch (error) {
        console.error("Error fetching service categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);
  return (
    <Layout>
      <PageHeader
        eyebrow="Services Overview"
        title="From idea to launch —"
        highlight="and beyond"
        description="Explore the full range of services PrepX Infotech offers to help you build, scale, and modernize your software."
      />

      <section className="py-20 px-6 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto space-y-20">
          {loading ? (
            <div className="space-y-20">
              {[1, 2, 3].map(i => (
                <div key={i} className="animate-pulse">
                  <div className="mb-10">
                    <div className="h-8 bg-muted rounded w-64 mb-4"></div>
                    <div className="w-16 h-1 bg-muted mt-4"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {[1, 2, 3, 4].map(j => (
                      <div key={j} className="bg-surface p-8 border border-border/50">
                        <div className="h-3 w-8 bg-muted rounded mb-4"></div>
                        <div className="h-5 w-48 bg-muted rounded mb-3"></div>
                        <div className="h-3 w-full bg-muted rounded mb-2"></div>
                        <div className="h-3 w-5/6 bg-muted rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            categories.map((cat) => (
              <div key={cat.label}>
                <div className="mb-10">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{cat.label}</h2>
                  <div className="w-16 h-1 bg-primary mt-4" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                  {cat.items?.map((s, i) => (
                    <div key={s.title} className="bg-surface p-8">
                      <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3 font-display">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <TechStackSection />
      <FinalCTASection />
    </Layout>
  );
};

export default Services;
