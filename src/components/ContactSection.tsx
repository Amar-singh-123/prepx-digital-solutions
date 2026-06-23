import { useState } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "General Inquiry",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Validation Error", description: "Please fill out all required fields.", variant: "destructive" });
      return;
    }
    
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "contact_inquiries"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      toast({
        title: "Inquiry received",
        description: "A member of our team will respond within one business day.",
      });
      setFormData({ name: "", email: "", service: "General Inquiry", message: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-surface py-24 px-6 lg:px-24 border-y border-border relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="animate-fade-in-up">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight text-foreground">
              Ready to scale your <span className="text-primary relative inline-block">
                technology stack?
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4"/></svg>
              </span>
            </h2>
            <p className="text-muted-foreground mb-12 text-lg leading-relaxed">
              Consult with our engineering team about your product roadmap. Whether you need a dedicated team or a turnkey MVP, we're here to help.
            </p>

            <div className="space-y-6">
              <a href="mailto:hello@prepxinfotech.com" className="flex items-center gap-5 group p-4 rounded-xl hover:bg-white hover:shadow-soft-md transition-all border border-transparent hover:border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium text-foreground">hello@prepxinfotech.com</span>
              </a>
              <a href="tel:+919504007442" className="flex items-center gap-5 group p-4 rounded-xl hover:bg-white hover:shadow-soft-md transition-all border border-transparent hover:border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium text-foreground">+91 95040 07442</span>
              </a>
              <a
                href="https://www.linkedin.com/company/prepxinfotech"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 group p-4 rounded-xl hover:bg-white hover:shadow-soft-md transition-all border border-transparent hover:border-border"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium text-foreground">linkedin.com/company/prepxinfotech</span>
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-xl border border-border/60 p-8 md:p-10 space-y-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-2xl" />
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-surface border border-border/80 text-foreground px-4 py-3.5 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-surface border border-border/80 text-foreground px-4 py-3.5 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="john@company.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="space-y-2 relative z-10">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Subject / Reason</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-surface border border-border/80 text-foreground px-4 py-3.5 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
                  disabled={isSubmitting}
                >
                  {["General Inquiry", "Hire Developers", "MVP Development", "Staff Augmentation", "Mobile App Development", "Partnership", "Careers"].map((o) => (
                    <option key={o} className="bg-background text-foreground">{o}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2 relative z-10">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-surface border border-border/80 text-foreground px-4 py-3.5 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 font-bold uppercase tracking-widest hover:bg-primary/90 hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all rounded-lg relative z-10 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Submit Inquiry"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
