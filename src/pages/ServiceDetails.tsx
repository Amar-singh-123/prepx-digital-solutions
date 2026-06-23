import { useState } from "react";
import { useParams } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const { toast } = useToast();
  
  // Format the service ID into a readable title (e.g. mobile-app-development -> Mobile App Development)
  const formattedTitle = serviceId 
    ? serviceId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : "Service Details";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    developerType: formattedTitle,
    description: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      toast({
        title: "Error",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "service_inquiries"), {
        ...formData,
        timestamp: new Date().toISOString(),
        source: "Service Details Page",
      });

      toast({
        title: "Inquiry Received!",
        description: "Our technical team will reach out to you within 24 hours.",
      });

      setFormData({ ...formData, name: "", email: "", description: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Dynamic Header */}
      <section className="pt-40 pb-20 px-6 lg:px-24 bg-gradient-to-b from-surface to-background border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase mb-6">
            Hire Expert Developers
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-ink mb-6">
            {formattedTitle}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Scale your team with top-tier {formattedTitle.toLowerCase()} experts. Share your requirements and we'll match you with the perfect talent.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-6 lg:px-24 bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white rounded-3xl shadow-soft-xl border border-border/60 p-8 md:p-12">
            <div className="mb-10 text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-ink mb-3">
                Let's Build Together
              </h2>
              <p className="text-muted-foreground">
                Tell us what you need, and we'll get back to you with the right developers.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-ink">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-ink">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="john@company.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="developerType" className="text-sm font-semibold text-ink">
                  Developer / Service Type
                </label>
                <select
                  id="developerType"
                  value={formData.developerType}
                  onChange={(e) => setFormData({ ...formData, developerType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none"
                  disabled={isSubmitting}
                >
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Custom Software Development">Custom Software Development</option>
                  <option value="SaaS Development">SaaS Development</option>
                  <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                  <option value="Enterprise Application Development">Enterprise Application Development</option>
                  <option value="IT Consulting">IT Consulting</option>
                  <option value="Digital Transformation">Digital Transformation</option>
                  <option value="AI & Automation">AI & Automation</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="E-commerce Development">E-commerce Development</option>
                  <option value="ERP Development">ERP Development</option>
                  <option value="CRM Development">CRM Development</option>
                  <option value={formattedTitle}>{formattedTitle}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-semibold text-ink">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  rows={5}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                  placeholder="Tell us about your project, timeline, and the skills you are looking for..."
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group flex items-center justify-center gap-2 bg-primary text-white font-semibold py-4 rounded-xl hover:bg-primary/90 transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  <>
                    Connect With Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetails;
