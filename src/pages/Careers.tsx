import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import CareersSection from "@/components/CareersSection";

const Careers = () => (
  <Layout>
    <PageHeader
      eyebrow="Careers"
      title="Build the future with"
      highlight="PrepX Infotech"
      description="Join a team that ships meaningful software. We're hiring across engineering, design and growth."
    />
    <CareersSection />
  </Layout>
);

export default Careers;
