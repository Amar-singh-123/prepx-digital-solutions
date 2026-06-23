import { useParams, Navigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FinalCTASection from "@/components/FinalCTASection";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const productDatabase = {
  "coaching": {
    title: "Coaching & Institute Software",
    eyebrow: "SaaS Product",
    heroImage: "/coaching-saas.png",
    description: "A comprehensive platform to digitize, streamline, and scale coaching centers and educational institutes.",
    fullDescription: "Built specifically for modern coaching centers, this platform handles everything from lead tracking to student graduation. It provides a centralized dashboard to manage schedules, track attendance, collect fees online, and share study materials. The accompanying mobile app gives students 24/7 access to their resources and fee receipts.",
    color: "from-blue-500/20 to-cyan-500/20",
    modules: [
      {
        name: "Admin Panel",
        benefits: ["Centralized Student Database", "Fee & Invoice Management", "Staff & Tutor Scheduling", "Analytics & Growth Reports"]
      },
      {
        name: "User / Student App",
        benefits: ["Live Timetable Access", "Study Material Downloads", "Online Fee Payments", "Push Notifications & Alerts"]
      }
    ]
  },
  "school": {
    title: "School Management System",
    eyebrow: "SaaS Product",
    heroImage: "/school-saas.png",
    description: "An end-to-end ERP solution that digitizes school administration and bridges the gap between teachers, students, and parents.",
    fullDescription: "A powerful ERP designed to modernize K-12 and higher education institutions. Our school management system fully digitizes admissions, fee collection, examinations, and human resources. By splitting functionality into dedicated Teacher and Student/Parent apps, communication flows seamlessly and securely.",
    color: "from-violet-500/20 to-purple-500/20",
    modules: [
      {
        name: "Admin Panel",
        benefits: ["Automated Admissions", "HR & Payroll Management", "Examination & Result Generation", "Transport & Inventory Tracking"]
      },
      {
        name: "Teacher App",
        benefits: ["Digital Attendance", "Assignment Uploads", "Student Grading & Evaluation", "Leave Management"]
      },
      {
        name: "Student / Parent App",
        benefits: ["Real-time Progress Tracking", "Homework Submissions", "Parent-Teacher Chat", "Fee Reminders"]
      }
    ]
  },
  "restaurant": {
    title: "Restaurant Management Suite",
    eyebrow: "SaaS Product",
    heroImage: "/restaurant-saas.png",
    description: "A modern POS and management platform that accelerates service, tracks inventory, and builds customer loyalty.",
    fullDescription: "From fine dining to fast casual, our restaurant suite speeds up order taking and back-of-house operations. The centralized admin panel acts as a powerful POS, while also tracking raw material inventory to reduce waste. The customizable customer app drives repeat business through digital ordering and built-in loyalty programs.",
    color: "from-orange-500/20 to-amber-500/20",
    modules: [
      {
        name: "Admin Panel / POS",
        benefits: ["Live Table Management", "Inventory & Recipe Costing", "Kitchen Display System (KDS) Sync", "Multi-branch Sales Analytics"]
      },
      {
        name: "Customer App",
        benefits: ["Digital Menu & Ordering", "Table Reservations", "Loyalty Points & Rewards", "Order Status Tracking"]
      }
    ]
  }
};

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productDatabase[productId as keyof typeof productDatabase];

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <Layout>
      <div className="pt-32 pb-16 px-6 lg:px-24 bg-background relative overflow-hidden">
        {/* Background Gradients */}
        <div className={`absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br ${product.color} blur-[120px] rounded-full mix-blend-multiply opacity-50 pointer-events-none -z-10`} />
        
        <div className="max-w-7xl mx-auto">
          <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-surface border border-border text-xs uppercase tracking-widest text-primary font-semibold font-display mb-6 rounded-full">
                {product.eyebrow}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-tight">
                {product.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={`mailto:hello@prepxinfotech.com?subject=Demo Request: ${product.title}`}
                  className="bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-xl font-semibold transition-all shadow-md hover:-translate-y-0.5"
                >
                  Request a Demo
                </a>
              </div>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              <img 
                src={product.heroImage} 
                alt={`${product.title} Dashboard`} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 px-6 lg:px-24 bg-surface/50 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-bold text-ink mb-6">About the Platform</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {product.fullDescription}
              </p>
            </div>
            
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {product.modules.map((module, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-border shadow-soft">
                    <h3 className="font-display text-xl font-bold text-ink mb-6 pb-4 border-b border-border/50">
                      {module.name}
                    </h3>
                    <ul className="space-y-4">
                      {module.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </Layout>
  );
};

export default ProductDetails;
