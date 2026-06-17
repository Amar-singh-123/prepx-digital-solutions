import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import ServicesSection from "@/components/ServicesSection";
import TechStackSection from "@/components/TechStackSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => (
  <Layout>
    <HeroSection />
    <MarqueeStrip />
    <ServicesSection />
    <TechStackSection />
    <WhyUsSection />
    <TestimonialsSection />
  </Layout>
);

export default Index;
