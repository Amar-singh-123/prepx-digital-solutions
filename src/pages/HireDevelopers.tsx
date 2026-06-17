import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import PricingSection from "@/components/PricingSection";
import TechStackSection from "@/components/TechStackSection";

const HireDevelopers = () => (
  <Layout>
    <PageHeader
      eyebrow="Hire Dedicated Developers"
      title="Senior engineers, on demand —"
      highlight="from $10/hr"
      description="Hire vetted full-stack, mobile, AI, and DevOps engineers on flexible monthly engagements."
    />
    <PricingSection />
    <TechStackSection />
  </Layout>
);

export default HireDevelopers;
