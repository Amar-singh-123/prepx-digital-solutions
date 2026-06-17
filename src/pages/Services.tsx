import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ServicesSection from "@/components/ServicesSection";
import TechStackSection from "@/components/TechStackSection";
import MarqueeStrip from "@/components/MarqueeStrip";

const Services = () => (
  <Layout>
    <PageHeader
      eyebrow="What We Do"
      title="Full-stack digital"
      highlight="services & solutions"
      description="From custom software to AI-driven platforms — we deliver scalable, production-grade engineering across web, mobile, and cloud."
    />
    <ServicesSection />
    <MarqueeStrip />
    <TechStackSection />
  </Layout>
);

export default Services;
