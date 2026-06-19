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
    <section className="pt-36 pb-20 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-10">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground">{breadcrumb ?? title}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            {eyebrow && (
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-5">§ {eyebrow}</div>
            )}
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.02em] text-foreground">
              {title}
              {highlight && <> <em className="italic text-accent-ink">{highlight}</em></>}
            </h1>
          </div>
          {description && (
            <div className="lg:col-span-4">
              <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
