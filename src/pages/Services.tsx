import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import TechStackSection from "@/components/TechStackSection";
import FinalCTASection from "@/components/FinalCTASection";

const categories = [
  {
    label: "A. Product & MVP Development",
    items: [
      { title: "MVP Development", desc: "Validate your idea fast with a lean, functional MVP built in weeks using agile sprints." },
      { title: "Startup Product Development", desc: "End-to-end product builds for early-stage founders — from concept to investor-ready product." },
      { title: "End-to-End Product Development", desc: "Full lifecycle ownership: discovery, design, development, QA, deployment, and iteration." },
      { title: "Product Engineering", desc: "Scalable architecture and engineering best practices for long-term product growth." },
      { title: "Product Modernization & Support", desc: "Re-architect legacy systems, upgrade tech stacks, and provide ongoing maintenance." },
    ],
  },
  {
    label: "B. Mobile Development",
    items: [
      { title: "Mobile App Development", desc: "Native and cross-platform mobile apps built for performance and scale." },
      { title: "Android App Development", desc: "Kotlin/Java native Android apps optimized for the Play Store." },
      { title: "iPhone App Development", desc: "Swift-based native iOS apps built to Apple's design and performance standards." },
      { title: "Cross-Platform Development", desc: "React Native / Flutter apps for faster, cost-efficient multi-platform launches." },
    ],
  },
  {
    label: "C. Staff Augmentation & Hiring",
    items: [
      { title: "Staff Augmentation", desc: "Add skilled developers to your existing team within days, on flexible contracts." },
      { title: "Dedicated Engineering Teams", desc: "A full team — devs, QA, PM — working exclusively on your product." },
      { title: "Hire Developers", desc: "Hire pre-vetted developers by skill, seniority, and engagement duration." },
      { title: "Hire Freelancers", desc: "On-demand freelance talent for short-term or project-based work." },
    ],
  },
  {
    label: "D. Software & Web Development",
    items: [
      { title: "Custom Software Development", desc: "Tailor-built software solutions designed around your exact business workflows." },
      { title: "Full Stack Development", desc: "End-to-end web development covering frontend, backend, database, and DevOps." },
      { title: "Web Application Development", desc: "Scalable, secure web apps built with modern frameworks." },
      { title: "Website Design", desc: "Responsive, conversion-focused websites for businesses of all sizes." },
      { title: "Enterprise Application Development", desc: "Large-scale, secure, integration-ready applications for enterprise needs." },
    ],
  },
  {
    label: "E. Business Platforms",
    items: [
      { title: "E-commerce Development", desc: "Custom online stores and marketplace platforms with payment & inventory integrations." },
      { title: "ERP Development", desc: "Centralized systems to manage operations, finance, HR, and supply chain." },
      { title: "CRM Development", desc: "Custom CRM platforms to manage leads, sales pipelines, and customer relationships." },
      { title: "SaaS Development", desc: "Multi-tenant, subscription-based SaaS platforms built for scale." },
    ],
  },
  {
    label: "F. Design",
    items: [
      { title: "UI/UX Design", desc: "User research, wireframing, prototyping, and pixel-perfect interface design." },
      { title: "Website Design", desc: "Brand-aligned, mobile-responsive website design." },
    ],
  },
  {
    label: "G. Consulting & Strategy",
    items: [
      { title: "IT Consulting", desc: "Technology audits, architecture planning, and tooling recommendations." },
      { title: "Technology Consulting", desc: "Strategic guidance on tech stack, scalability, and build-vs-buy decisions." },
      { title: "Digital Transformation Initiatives", desc: "Modernize legacy operations with digital workflows and automation." },
      { title: "AI & Intelligent Automation", desc: "AI-powered features, chatbots, workflow automation, and intelligent integrations." },
    ],
  },
];

const Services = () => (
  <Layout>
    <PageHeader
      eyebrow="Services Overview"
      title="From idea to launch —"
      highlight="and beyond"
      description="Explore the full range of services PrepX Infotech offers to help you build, scale, and modernize your software."
    />

    <section className="py-20 px-6 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto space-y-20">
        {categories.map((cat) => (
          <div key={cat.label}>
            <div className="mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{cat.label}</h2>
              <div className="w-16 h-1 bg-primary mt-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {cat.items.map((s, i) => (
                <div key={s.title} className="bg-surface p-8">
                  <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3 font-display">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <TechStackSection />
    <FinalCTASection />
  </Layout>
);

export default Services;
