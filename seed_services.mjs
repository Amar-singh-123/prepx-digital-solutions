import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJGA9ya-TBv-zsGZ4uCW0PFSoUq7lnaFE",
  authDomain: "prepxinfotech-40938.firebaseapp.com",
  projectId: "prepxinfotech-40938",
  storageBucket: "prepxinfotech-40938.firebasestorage.app",
  messagingSenderId: "735569209495",
  appId: "1:735569209495:web:d1c7e331a21d884559e1d2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const services = [
  { icon: "Smartphone", title: "Mobile App Dev", desc: "Native & cross-platform apps built for performance and scale.", link: "/services/mobile-app-development", order: 1 },
  { icon: "Users", title: "Staff Aug & Dedicated Teams", desc: "Scale your team in days. Pre-vetted developers, your workflow.", link: "/hire-developers", order: 2 },
  { icon: "Rocket", title: "MVP & Startup Product Dev", desc: "Idea to live MVP in 6–8 weeks. Agile delivery. Fixed scope.", link: "/mvp-development", order: 3 },
  { icon: "MonitorPlay", title: "Custom Software Development", desc: "Tailor-built software platforms designed around your exact needs.", link: "/services/custom-software", order: 4 },
  { icon: "Cloud", title: "SaaS Development", desc: "Multi-tenant, subscription-ready SaaS architectures from scratch.", link: "/services/saas-development", order: 5 },
  { icon: "Brain", title: "IT Consulting & AI Automation", desc: "Strategic tech guidance combined with AI-powered workflows.", link: "/services/it-consulting", order: 6 },
];

const techStacks = [
  { label: "Mobile", items: ["Android (Kotlin/Java)", "iOS (Swift)", "React Native", "Flutter"], order: 1 },
  { label: "Frontend", items: ["React", "Next.js", "Angular", "Vue", "TypeScript", "Tailwind CSS"], order: 2 },
  { label: "Backend", items: ["Node.js", "Python / Django", "Java / Spring", "PHP / Laravel", ".NET"], order: 3 },
  { label: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Redis"], order: 4 },
  { label: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"], order: 5 },
  { label: "AI & Data", items: ["OpenAI / LLMs", "LangChain", "ML Pipelines", "QA Automation"], order: 6 },
];

const serviceCategories = [
  {
    label: "A. Product & MVP Development",
    order: 1,
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
    order: 2,
    items: [
      { title: "Mobile App Development", desc: "Native and cross-platform mobile apps built for performance and scale." },
      { title: "Android App Development", desc: "Kotlin/Java native Android apps optimized for the Play Store." },
      { title: "iPhone App Development", desc: "Swift-based native iOS apps built to Apple's design and performance standards." },
      { title: "Cross-Platform Development", desc: "React Native / Flutter apps for faster, cost-efficient multi-platform launches." },
    ],
  },
  {
    label: "C. Staff Augmentation & Hiring",
    order: 3,
    items: [
      { title: "Staff Augmentation", desc: "Add skilled developers to your existing team within days, on flexible contracts." },
      { title: "Dedicated Engineering Teams", desc: "A full team — devs, QA, PM — working exclusively on your product." },
      { title: "Hire Developers", desc: "Hire pre-vetted developers by skill, seniority, and engagement duration." },
      { title: "Hire Freelancers", desc: "On-demand freelance talent for short-term or project-based work." },
    ],
  },
  {
    label: "D. Software & Web Development",
    order: 4,
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
    order: 5,
    items: [
      { title: "E-commerce Development", desc: "Custom online stores and marketplace platforms with payment & inventory integrations." },
      { title: "ERP Development", desc: "Centralized systems to manage operations, finance, HR, and supply chain." },
      { title: "CRM Development", desc: "Custom CRM platforms to manage leads, sales pipelines, and customer relationships." },
      { title: "SaaS Development", desc: "Multi-tenant, subscription-based SaaS platforms built for scale." },
    ],
  },
  {
    label: "F. Design",
    order: 6,
    items: [
      { title: "UI/UX Design", desc: "User research, wireframing, prototyping, and pixel-perfect interface design." },
      { title: "Website Design", desc: "Brand-aligned, mobile-responsive website design." },
    ],
  },
  {
    label: "G. Consulting & Strategy",
    order: 7,
    items: [
      { title: "IT Consulting", desc: "Technology audits, architecture planning, and tooling recommendations." },
      { title: "Technology Consulting", desc: "Strategic guidance on tech stack, scalability, and build-vs-buy decisions." },
      { title: "Digital Transformation Initiatives", desc: "Modernize legacy operations with digital workflows and automation." },
      { title: "AI & Intelligent Automation", desc: "AI-powered features, chatbots, workflow automation, and intelligent integrations." },
    ],
  },
];

async function seed() {
  console.log("Seeding services...");
  const servicesRef = collection(db, "services");
  
  // Clear existing
  const existingServices = await getDocs(servicesRef);
  for (const docSnapshot of existingServices.docs) {
    await deleteDoc(doc(db, "services", docSnapshot.id));
  }

  for (const s of services) {
    await addDoc(servicesRef, s);
    console.log(`Added service: ${s.title}`);
  }

  console.log("Seeding tech stacks...");
  const techStacksRef = collection(db, "tech_stacks");

  // Clear existing
  const existingTechStacks = await getDocs(techStacksRef);
  for (const docSnapshot of existingTechStacks.docs) {
    await deleteDoc(doc(db, "tech_stacks", docSnapshot.id));
  }

  for (const ts of techStacks) {
    await addDoc(techStacksRef, ts);
    console.log(`Added tech stack: ${ts.label}`);
  }

  console.log("Seeding service categories...");
  const serviceCategoriesRef = collection(db, "service_categories");

  // Clear existing
  const existingServiceCategories = await getDocs(serviceCategoriesRef);
  for (const docSnapshot of existingServiceCategories.docs) {
    await deleteDoc(doc(db, "service_categories", docSnapshot.id));
  }

  for (const sc of serviceCategories) {
    await addDoc(serviceCategoriesRef, sc);
    console.log(`Added service category: ${sc.label}`);
  }

  console.log("Seeding complete!");
  process.exit(0);
}

seed();
