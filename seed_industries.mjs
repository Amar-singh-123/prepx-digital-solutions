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

const industries = [
  { name: "Healthcare & MedTech", icon: "HeartPulse", order: 1 },
  { name: "FinTech & Banking", icon: "Building2", order: 2 },
  { name: "E-Commerce & Retail", icon: "ShoppingCart", order: 3 },
  { name: "EdTech & E-Learning", icon: "GraduationCap", order: 4 },
  { name: "Logistics & Supply", icon: "Truck", order: 5 },
  { name: "SaaS & B2B Software", icon: "Briefcase", order: 6 },
];

async function seed() {
  console.log("Starting to seed industries...");
  for (const industry of industries) {
    await addDoc(collection(db, "industries"), industry);
    console.log(`Added industry: ${industry.name}`);
  }
  console.log("Done seeding industries.");
  process.exit(0);
}

seed();
