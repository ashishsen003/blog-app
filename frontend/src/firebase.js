// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-ffb2a.firebaseapp.com",
  projectId: "blog-app-ffb2a",
  storageBucket: "blog-app-ffb2a.appspot.com",
  messagingSenderId: "162774535945",
  appId: "1:162774535945:web:bef4d35b98cad060a08dd8"
};
// console.log(import.meta.env.FIREBASE_APIKEY);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);