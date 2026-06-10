// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB-lren4iuAHbQAOv2YSbUjxVYV7la904s",
  authDomain: "travelapp-66472.firebaseapp.com",
  projectId: "travelapp-66472",
  storageBucket: "travelapp-66472.firebasestorage.app",
  messagingSenderId: "445669906340",
  appId: "1:445669906340:web:bfa89297bbf2bd2266d331",
  measurementId: "G-YQE5BXJ7HB"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
