import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const About = () => (
  <Layout>
    <PageHeader
      eyebrow="About PrepX Infotech"
      title="Engineering teams that"
      highlight="ship real products"
      description="We're a global technology studio building software, EdTech, mobile, and AI solutions for ambitious teams since 2020."
    />
    <WhyUsSection />
    <TestimonialsSection />
  </Layout>
);

export default About;
