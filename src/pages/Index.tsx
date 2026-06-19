import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import IndustriesStrip from "@/components/IndustriesStrip";
import TechStackSection from "@/components/TechStackSection";
import WhyUsSection from "@/components/WhyUsSection";

const Index = () => (
  <Layout>
    <HeroSection />
    <ServicesSection />
    <ProcessSection />
    <IndustriesStrip />
    <TechStackSection />
    <WhyUsSection />
  </Layout>
);

export default Index;
