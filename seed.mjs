import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJGA9ya-TBv-zsGZ4uCW0PFSoUq7lnaFE",
  authDomain: "prepxinfotech-40938.firebaseapp.com",
  projectId: "prepxinfotech-40938",
  storageBucket: "prepxinfotech-40938.firebasestorage.app",
  messagingSenderId: "735569209495",
  appId: "1:735569209495:web:d1c7e331a21d884559e1d2",
  measurementId: "G-EFWF44RPMD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const projects = [
  {
    iconName: "GraduationCap",
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
    iconName: "Smartphone",
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
    iconName: "ShoppingBag",
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
    iconName: "Globe",
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
    iconName: "BarChart3",
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
    iconName: "Layers",
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
  }
];

async function seed() {
  for (const project of projects) {
    await addDoc(collection(db, "projects"), project);
    console.log(`Added ${project.title}`);
  }
  console.log("Done seeding projects.");
  process.exit(0);
}

seed();
