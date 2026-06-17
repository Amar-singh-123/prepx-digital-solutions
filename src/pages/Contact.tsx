import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";

const Contact = () => (
  <Layout>
    <PageHeader
      eyebrow="Contact"
      title="Let's build something"
      highlight="great together"
      description="Tell us about your project — we'll get back within one business day."
    />
    <ContactSection />
  </Layout>
);

export default Contact;
