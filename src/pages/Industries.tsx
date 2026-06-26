import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import * as LucideIcons from "lucide-react";
import { HelpCircle } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

type Industry = {
  id?: string;
  name: string;
  icon: string;
  desc?: string;
  color?: string;
  order: number;
};

const getIconComponent = (iconName: string) => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon || HelpCircle;
};

const Industries = () => {
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
  <Layout>
    <PageHeader
      eyebrow="Industries"
      title="Domain expertise across"
      highlight="9+ industries"
      description="We've shipped products for education, fintech, healthcare, retail, gaming, and more — adapting engineering practice to each domain."
    />
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="p-7 rounded-2xl border border-border bg-card shadow-card animate-pulse">
                <div className="w-12 h-12 rounded-xl bg-muted mb-5"></div>
                <div className="h-6 bg-muted rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-muted rounded w-full mb-2"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
              </div>
            ))
          ) : (
            industries.map((it, i) => {
              const IconComp = getIconComponent(it.icon);
              return (
                <motion.div
                  key={it.id || it.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-7 rounded-2xl border border-border bg-card shadow-card hover:shadow-hover hover:border-primary/30 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${it.color || 'from-primary to-primary/80'} flex items-center justify-center mb-5 shadow-lg`}>
                    <IconComp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{it.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{it.desc || "No description provided."}</p>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default Industries;
