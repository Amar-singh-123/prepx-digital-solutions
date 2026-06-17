import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ProjectShowcaseSection from "@/components/ProjectShowcaseSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Portfolio = () => (
  <Layout>
    <PageHeader
      eyebrow="Portfolio"
      title="Products we've built &"
      highlight="clients we've shipped for"
      description="50+ projects delivered across web, mobile, EdTech, SaaS and analytics."
    />
    <ProjectShowcaseSection />
    <TestimonialsSection />
  </Layout>
);

export default Portfolio;
