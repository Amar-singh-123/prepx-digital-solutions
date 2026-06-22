const stats = [
  { k: "50+", v: "Projects Delivered" },
  { k: "30+", v: "Developers on Bench" },
  { k: "3+", v: "Years in Business" },
  { k: "40+", v: "Happy Clients" },
];

const TrustBar = () => (
  <section className="bg-surface border-y border-border">
    <div className="max-w-7xl mx-auto px-6 lg:px-24 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s) => (
        <div key={s.v} className="text-center md:text-left">
          <div className="font-display text-3xl md:text-4xl font-bold text-foreground">{s.k}</div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2 font-semibold">{s.v}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TrustBar;
