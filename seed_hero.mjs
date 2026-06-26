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

const slides = [
  { 
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    altText: "Team collaborating on software development",
    order: 1 
  },
  { 
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    altText: "Data dashboard",
    order: 2 
  },
];

async function seed() {
  console.log("Seeding hero slider...");
  const slidesRef = collection(db, "hero_slider");

  // Clear existing
  const existingSlides = await getDocs(slidesRef);
  for (const docSnapshot of existingSlides.docs) {
    await deleteDoc(doc(db, "hero_slider", docSnapshot.id));
  }

  for (const slide of slides) {
    await addDoc(slidesRef, slide);
    console.log(`Added slide: ${slide.altText}`);
  }

  console.log("Seeding complete!");
  process.exit(0);
}

seed().catch(console.error);
