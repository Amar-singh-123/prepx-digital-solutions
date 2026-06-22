import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import IndustriesStrip from "@/components/IndustriesStrip";
import TechStackSection from "@/components/TechStackSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => (
  <Layout>
    <HeroSection />
    <TrustBar />
    <ServicesSection />
    <WhyUsSection />
    <ProcessSection />
    <IndustriesStrip />
    <TechStackSection />
    <FinalCTASection />
  </Layout>
);

export default Index;
