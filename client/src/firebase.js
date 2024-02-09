// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4f8ff.firebaseapp.com",
  projectId: "mern-estate-4f8ff",
  storageBucket: "mern-estate-4f8ff.appspot.com",
  messagingSenderId: "556951399633",
  appId: "1:556951399633:web:51ea46f70f875fb2c5a9f0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
