import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";

const About = () => (
  <Layout>
    <PageHeader
      eyebrow="About PrepX Infotech"
      title="A software development and"
      highlight="IT consulting company"
      description="Founded in 2022, PrepX Infotech helps startups, growing businesses, and enterprises turn ideas into scalable digital solutions through custom software, dedicated engineering teams, and digital transformation."
    />
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="prose prose-neutral dark:prose-invert max-w-none font-body">
          <p className="text-lg text-muted-foreground leading-relaxed">
            PrepX Infotech partners with organizations to solve complex business challenges through
            technology — building products, modernizing systems, and extending engineering
            capabilities with flexible engagement models tailored to their goals.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-6">
            Whether you're launching a new product, scaling your engineering capacity, accelerating
            delivery, or navigating digital transformation, we provide the expertise, agility, and
            execution required to drive meaningful business outcomes. By combining strategic
            thinking with engineering excellence, we help businesses move faster, adapt to change,
            and create lasting impact.
          </p>
        </div>
      </div>
    </section>
    <WhyUsSection />
    <ProcessSection />
  </Layout>
);

export default About;
