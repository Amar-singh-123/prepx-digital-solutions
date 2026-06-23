import { useState, useEffect } from "react";
import { ExternalLink, ArrowUpRight, Layers, Smartphone, Globe, BarChart3, GraduationCap, ShoppingBag, X, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

type Project = {
  icon: any;
  title: string;
  category: string;
  description: string;
  tech: string[];
  color: string;
  image: string;
  details: {
    overview: string;
    challenge: string;
    solution: string;
    results: string[];
    link?: string;
  };
};

const projects: Project[] = [
  {
    icon: GraduationCap,
    title: "EduConnect LMS",
    category: "EdTech Platform",
    description: "Complete learning management system with live classes, assignments, auto-grading, and parent portals.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    color: "from-blue-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
    details: {
      overview: "EduConnect was built to bridge the gap between traditional classrooms and remote learning, serving over 10,000 active students daily.",
      challenge: "The client struggled with server crashes during peak exam hours and a fragmented communication system between teachers and parents.",
      solution: "We engineered a scalable microservices architecture on AWS and developed real-time chat and video integration using WebRTC.",
      results: ["99.99% Uptime during peak loads", "300% increase in parent engagement", "Reduced grading time by 40% via automated pipelines"]
    }
  },
  {
    icon: Smartphone,
    title: "SchoolSync Mobile",
    category: "Mobile Application",
    description: "Cross-platform mobile app for school management — attendance tracking, fee payments, push notifications.",
    tech: ["Flutter", "Firebase", "Stripe", "FCM"],
    color: "from-emerald-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    details: {
      overview: "A comprehensive mobile solution allowing administrators, teachers, and parents to stay synced with daily school operations.",
      challenge: "Existing solutions were slow, clunky, and native-only, doubling development and maintenance costs.",
      solution: "We leveraged Flutter to create a fluid, unified codebase. We integrated Stripe for seamless fee payments and Firebase for real-time notifications.",
      results: ["4.8/5 App Store Rating", "Processed over $2M in secure tuition payments", "Launched iOS and Android simultaneously in 8 weeks"]
    }
  },
  {
    icon: ShoppingBag,
    title: "MarketPulse Dashboard",
    category: "SaaS Analytics",
    description: "Real-time analytics dashboard for e-commerce businesses to track sales, customer behavior, and ROI.",
    tech: ["Next.js", "Python", "D3.js", "Redis"],
    color: "from-violet-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    details: {
      overview: "MarketPulse gives DTC brands a centralized command center to monitor omnichannel sales and advertising ROI in real-time.",
      challenge: "Brands were exporting CSVs from Shopify, Facebook Ads, and Google Analytics and manually merging them in Excel.",
      solution: "We built a robust Python data pipeline fetching API data every 5 minutes, caching it in Redis, and serving it to a lightning-fast Next.js frontend.",
      results: ["Saves merchants 15+ hours per week", "Processes over 10M rows of data daily", "Sub-200ms query response times via Redis"]
    }
  },
  {
    icon: Globe,
    title: "TravelNest Platform",
    category: "Web Application",
    description: "Full-featured travel booking platform with dynamic pricing, multi-currency support, and CRM.",
    tech: ["React", "Django", "MongoDB", "Razorpay"],
    color: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
    details: {
      overview: "A premium booking engine tailored for boutique hotels and independent tour operators looking to bypass massive OTA fees.",
      challenge: "The client needed a system capable of handling complex dynamic pricing rules based on seasonality, occupancy, and booking windows.",
      solution: "We implemented a custom rules engine in Django and integrated Razorpay to handle multi-currency conversions and split payments.",
      results: ["Increased direct bookings by 65%", "Zero downtime during peak holiday season surges", "Integrated with 15+ local payment gateways"]
    }
  },
  {
    icon: BarChart3,
    title: "GrowthEngine SEO",
    category: "Digital Marketing",
    description: "End-to-end digital marketing campaign that boosted organic traffic 240% and generated 500+ qualified leads.",
    tech: ["SEO", "Google Ads", "Analytics", "Content"],
    color: "from-cyan-500 to-blue-500",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    details: {
      overview: "A comprehensive digital growth strategy combining technical SEO, programmatic content generation, and highly targeted PPC.",
      challenge: "The client was in a highly competitive B2B SaaS niche with exorbitant CPCs and declining organic visibility.",
      solution: "We overhauled their site architecture for Web Vitals, deployed a programmatic SEO structure for long-tail keywords, and optimized ad bidding.",
      results: ["240% increase in organic traffic within 6 months", "Reduced Cost-Per-Acquisition (CPA) by 45%", "Generated 500+ Enterprise Marketing Qualified Leads (MQLs)"]
    }
  },
  {
    icon: Layers,
    title: "CloudOps Automation",
    category: "DevOps & Cloud",
    description: "Enterprise CI/CD pipeline and cloud infrastructure setup reducing deployment time from days to minutes.",
    tech: ["AWS", "Docker", "Terraform", "GitHub Actions"],
    color: "from-pink-500 to-rose-600",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    details: {
      overview: "An infrastructure modernization project for a fintech firm migrating from legacy on-premise servers to a fully containerized cloud environment.",
      challenge: "Deployments were entirely manual, error-prone, and required weekend downtime windows.",
      solution: "We codified their entire infrastructure using Terraform, containerized their monolith, and built automated GitHub Actions CI/CD pipelines.",
      results: ["Reduced deployment time from 2 days to 15 minutes", "Achieved zero-downtime deployments", "Cut infrastructure costs by 30% through auto-scaling"]
    }
  },
];

const ProjectShowcaseSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 bg-surface px-6 lg:px-24">
      <div className="container relative mx-auto max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in-up">
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-border text-primary font-semibold text-xs tracking-widest uppercase mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-ink mb-6">
            Projects That Deliver Results
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A glimpse into the robust digital platforms, apps, and SaaS products we've crafted for startups and enterprises worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer relative rounded-3xl bg-white/90 backdrop-blur-md border border-border/60 hover:border-transparent transition-all duration-500 shadow-soft hover:shadow-soft-xl hover:-translate-y-2 overflow-hidden animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Decorative background glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                
                {/* Top image section */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} mix-blend-overlay opacity-40 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5 text-ink group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <div className="absolute bottom-4 left-6 z-20">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center shadow-md border border-white/20`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xs uppercase tracking-widest text-white font-bold bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        {project.category}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10">
                  <h3 className="text-2xl font-bold font-display text-ink mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-border/40 flex items-center justify-between">
                    <span className="text-sm font-semibold text-ink group-hover:text-primary transition-colors flex items-center gap-2">
                      View Case Study <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/portfolio" className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-ink hover:border-primary/50 hover:bg-white font-semibold text-sm uppercase tracking-wider rounded-lg transition-all shadow-sm">
            View Complete Portfolio &rarr;
          </Link>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm" 
            onClick={() => setSelectedProject(null)} 
          />
          <div className="relative w-full max-w-4xl max-h-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
            
            {/* Modal Header Image */}
            <div className="relative h-48 md:h-64 shrink-0">
              <div className={`absolute inset-0 bg-gradient-to-tr ${selectedProject.color} mix-blend-overlay opacity-50 z-10`} />
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
              
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="absolute bottom-6 left-6 md:left-10 z-20 text-white">
                <div className="text-sm font-bold uppercase tracking-widest mb-2 text-white/80">
                  {selectedProject.category}
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-10 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                
                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">
                  <section>
                    <h4 className="text-xl font-bold font-display text-ink mb-3">Project Overview</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.details.overview}
                    </p>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-bold font-display text-ink mb-3">The Challenge</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.details.challenge}
                    </p>
                  </section>

                  <section>
                    <h4 className="text-xl font-bold font-display text-ink mb-3">Our Solution</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.details.solution}
                    </p>
                  </section>
                </div>

                {/* Sidebar (Results & Tech) */}
                <div className="space-y-8">
                  <div className="bg-surface border border-border p-6 rounded-2xl">
                    <h4 className="font-bold font-display text-ink mb-4">Key Outcomes</h4>
                    <ul className="space-y-3">
                      {selectedProject.details.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold font-display text-ink mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 rounded-lg border border-border bg-surface text-ink text-xs font-semibold tracking-wide"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectShowcaseSection;
