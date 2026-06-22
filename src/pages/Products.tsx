import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import FinalCTASection from "@/components/FinalCTASection";

const Products = () => (
  <Layout>
    <PageHeader
      eyebrow="Our Products"
      title="SaaS products built &"
      highlight="run by our team"
      description="Beyond client work, we build and run our own SaaS products — proof that we understand products, not just projects."
    />

    <section className="py-24 px-6 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 bg-surface border border-border text-xs uppercase tracking-widest text-primary font-semibold font-display mb-6">
          Coming Soon
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          Our product catalog is being prepared
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
          We're polishing the public listings for our in-house SaaS products. If you'd like an early preview or are exploring a partnership, get in touch and we'll share details directly.
        </p>
        <a
          href="mailto:hello@prepxinfotech.com?subject=Products%20Inquiry"
          className="inline-block bg-primary text-white hover:bg-ink px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all"
        >
          Request Product Preview
        </a>
      </div>
    </section>

    <FinalCTASection />
  </Layout>
);

export default Products;
