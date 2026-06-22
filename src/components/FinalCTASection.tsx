import { Link } from "react-router-dom";

const FinalCTASection = () => (
  <section className="bg-ink text-white py-24 px-6 lg:px-24 border-t border-white/10">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
        Have a Project in Mind? <span className="text-primary">Let's Build It Together.</span>
      </h2>
      <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
        Tell us about your product, team, or idea. We respond within one business day.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/contact"
          className="bg-primary text-white hover:bg-white hover:text-foreground px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all"
        >
          Get a Free Consultation
        </Link>
        <Link
          to="/portfolio"
          className="border border-white/30 hover:border-white px-8 py-4 font-semibold text-sm uppercase tracking-wider transition-all"
        >
          View Our Work
        </Link>
      </div>
    </div>
  </section>
);

export default FinalCTASection;
