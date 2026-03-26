import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 left-0 right-0 divider-gradient" />

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/60 text-primary text-xs font-semibold uppercase tracking-[0.2em] font-body mb-5">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 tracking-tight">
              Let's Build <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 font-body">
              Have a project in mind? Need developers? Let's discuss how PrepX Infotech 
              can help you achieve your goals.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", text: "contact@prepxinfotech.com" },
                { icon: Phone, label: "Phone", text: "+91 XXXXX XXXXX" },
                { icon: MapPin, label: "Location", text: "India" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/60 shadow-card hover:shadow-hover hover:border-primary/15 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-accent/70 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-body font-medium">{item.label}</div>
                    <span className="text-sm text-foreground font-body font-medium">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-card border border-border/60 shadow-elegant space-y-5"
          >
            <div>
              <label className="text-xs font-semibold text-foreground mb-2 block font-body uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all font-body text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground mb-2 block font-body uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all font-body text-sm"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground mb-2 block font-body uppercase tracking-wider">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all resize-none font-body text-sm"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-gradient-primary font-semibold text-primary-foreground hover:opacity-90 transition-all flex items-center justify-center gap-2.5 glow-primary text-sm"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;