import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import FinalCTASection from "@/components/FinalCTASection";
import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { ArrowRight, Box, CheckCircle } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

// Define the types matching our Firestore structure
interface Feature {
  name: string;
  icon: string;
  desc: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  color: string;
  badge: string;
  features: Feature[];
  order: number;
}

// Helper to safely render dynamic icons from string names
const DynamicIcon = ({ name, className }: { name: string, className?: string }) => {
  const IconComponent = (LucideIcons as any)[name] || Box;
  return <IconComponent className={className} />;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const getDisplayImage = (url: string) => {
    if (!url) return '';
    if (url.includes('drive.google.com/uc?export=view&id=')) {
      const id = url.split('id=')[1];
      return `https://lh3.googleusercontent.com/d/${id}`;
    }
    if (url.includes('drive.google.com/thumbnail?id=')) {
      const id = url.split('id=')[1].split('&')[0];
      return `https://lh3.googleusercontent.com/d/${id}`;
    }
    return url;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const fetchedProducts = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as Product[];
        
        // Sort by order
        fetchedProducts.sort((a, b) => (a.order || 0) - (b.order || 0));
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Layout>
      <PageHeader
        eyebrow="Our SaaS Products"
        title="Ready-to-Deploy"
        highlight="Business Solutions"
        description="Beyond custom client work, we build and run our own powerful SaaS products. Scale your operations instantly with our battle-tested management software."
      />

      <section className="py-24 px-6 lg:px-24 bg-background relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-24">
          {loading ? (
            <div className="text-center text-muted-foreground py-20 flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
              <p>Loading our amazing products...</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center text-muted-foreground py-20">
              <p>No products available right now. Check back later!</p>
            </div>
          ) : (
            products.map((product, index) => (
              <div 
                key={product.id} 
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center group`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative rounded-[2rem] overflow-hidden border border-border shadow-soft-xl group-hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                  <img 
                    src={getDisplayImage(product.image) || "/placeholder.png"} 
                    alt={`${product.title} Interface`} 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 bg-muted aspect-video"
                  />
                  {product.badge && (
                    <div className="absolute top-6 right-6 z-20">
                      <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-ink text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                        {product.badge}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color || 'from-primary/20 to-primary/10'} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    <DynamicIcon name={product.icon} className="w-8 h-8 text-ink" />
                  </div>
                  
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
                    {product.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  
                  {product.features && product.features.length > 0 && (
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col gap-3 p-5 rounded-2xl bg-surface border border-border/50 hover:border-border hover:shadow-soft transition-all">
                          <div className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm">
                            <DynamicIcon name={feature.icon} className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-bold text-ink text-sm mb-1">{feature.name}</p>
                            <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <Link
                    to={`/products/${product.id}`}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 transition-all"
                  >
                    View Details & Gallery
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <FinalCTASection />
    </Layout>
  );
};

export default Products;
