import { useState } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry received",
      description: "A member of our team will respond within one business day.",
    });
    setFormData({ name: "", email: "", service: "General Inquiry", message: "" });
  };

  return (
    <section id="contact" className="bg-ink text-white py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Ready to scale your <span className="text-primary">technology stack?</span>
            </h2>
            <p className="text-white/70 mb-12 text-lg">
              Consult with our engineering team about your product roadmap.
            </p>

            <div className="space-y-6">
              <a href="mailto:hello@prepxinfotech.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">hello@prepxinfotech.com</span>
              </a>
              <a href="tel:+919504007442" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg">+91 95040 07442</span>
              </a>
              <a
                href="https://www.linkedin.com/company/prepxinfotech"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-lg">linkedin.com/company/prepxinfotech</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-background/5 border border-white/10 p-8 md:p-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50 font-semibold">Full Name</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:border-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50 font-semibold">Email Address</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/50 font-semibold">Subject / Reason</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:border-primary outline-none transition-all appearance-none"
              >
                {["General Inquiry", "Hire Developers", "MVP Development", "Staff Augmentation", "Mobile App Development", "Partnership", "Careers"].map((o) => (
                  <option key={o} className="bg-ink text-white">{o}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/50 font-semibold">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:border-primary outline-none transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-foreground transition-all"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
