import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCCWyB_Fq1waKbwUVx06IJBh6HnJbueazc",
  authDomain: "lucky90tambola.firebaseapp.com",
  projectId: "lucky90tambola",
  storageBucket: "lucky90tambola.firebasestorage.app",
  messagingSenderId: "990475139586",
  appId: "1:990475139586:web:d13b3974ace5b73081c51b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
