import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJGA9ya-TBv-zsGZ4uCW0PFSoUq7lnaFE",
  authDomain: "prepxinfotech-40938.firebaseapp.com",
  projectId: "prepxinfotech-40938",
  storageBucket: "prepxinfotech-40938.firebasestorage.app",
  messagingSenderId: "735569209495",
  appId: "1:735569209495:web:d1c7e331a21d884559e1d2",
  measurementId: "G-EFWF44RPMD"
};

export const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export const db = getFirestore(app);
