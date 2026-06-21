import { Link } from "react-router-dom";

interface Props {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  breadcrumb?: string;
}

const PageHeader = ({ eyebrow, title, highlight, description, breadcrumb }: Props) => {
  return (
    <section className="pt-36 pb-20 px-6 lg:px-24 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary to-transparent" />
        <div className="absolute inset-0 dot-grid" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/60 mb-10 font-display font-semibold">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary">{breadcrumb ?? title}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            {eyebrow && (
              <div className="text-xs uppercase tracking-[0.22em] text-primary mb-5 font-display font-semibold">{eyebrow}</div>
            )}
            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
              {title}
              {highlight && <> <span className="text-primary">{highlight}</span></>}
            </h1>
          </div>
          {description && (
            <div className="lg:col-span-4">
              <p className="text-base text-white/70 leading-relaxed">{description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
