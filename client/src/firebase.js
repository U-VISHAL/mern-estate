// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "real-estate-d4349.firebaseapp.com",
  projectId: "real-estate-d4349",
  storageBucket: "real-estate-d4349.firebasestorage.app",
  messagingSenderId: "460371069387",
  appId: "1:460371069387:web:a4319562863169dbd6ce4e",
  measurementId: "G-0LL2TSLYH2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);