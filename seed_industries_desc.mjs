import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, deleteDoc, doc, addDoc } from "firebase/firestore";

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

const industries = [
  { name: "Education & EdTech", icon: "GraduationCap", desc: "LMS, coaching platforms, online assessments and live class infrastructure.", color: "from-blue-500 to-cyan-500", order: 1 },
  { name: "E-Commerce & Retail", icon: "ShoppingBag", desc: "Storefronts, marketplaces, payments, inventory, and omni-channel CRM.", color: "from-purple-500 to-pink-500", order: 2 },
  { name: "Healthcare", icon: "HeartPulse", desc: "Patient portals, telemedicine, clinical dashboards, and HIPAA-aware design.", color: "from-orange-500 to-red-500", order: 3 },
  { name: "Fintech", icon: "Banknote", desc: "Wallets, lending, KYC, trading, and secure payment infrastructure.", color: "from-green-500 to-emerald-500", order: 4 },
  { name: "Travel & Hospitality", icon: "Plane", desc: "Booking engines, dynamic pricing, multi-currency, and CRM integrations.", color: "from-indigo-500 to-violet-500", order: 5 },
  { name: "Manufacturing", icon: "Factory", desc: "ERP, IoT dashboards, supply-chain visibility, and process automation.", color: "from-slate-500 to-gray-500", order: 6 },
  { name: "Gaming & Web3", icon: "Gamepad2", desc: "Game backends, blockchain integrations, NFTs and decentralized apps.", color: "from-rose-500 to-orange-500", order: 7 },
  { name: "Logistics", icon: "Truck", desc: "Fleet tracking, route optimization, dispatch, and warehouse software.", color: "from-blue-500 to-cyan-500", order: 8 },
  { name: "Real Estate", icon: "Building2", desc: "Listing portals, CRM, virtual tours, and lead management tools.", color: "from-purple-500 to-pink-500", order: 9 },
];

async function seed() {
  console.log("Seeding industries...");
  const industriesRef = collection(db, "industries");

  // Clear existing
  const existingIndustries = await getDocs(industriesRef);
  for (const docSnapshot of existingIndustries.docs) {
    await deleteDoc(doc(db, "industries", docSnapshot.id));
  }

  for (const ind of industries) {
    await addDoc(industriesRef, ind);
    console.log(`Added industry: ${ind.name}`);
  }

  console.log("Seeding complete!");
  process.exit(0);
}

seed().catch(console.error);
