// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_X0dLpN331taFmibYGrThdp7Cg3drU-A",
  authDomain: "sing-up-or-login-e8638.firebaseapp.com",
  projectId: "sing-up-or-login-e8638",
  storageBucket: "sing-up-or-login-e8638.firebasestorage.app", 
  messagingSenderId: "905475533630",
  appId: "1:905475533630:web:1b2f57d41e325a11695a6f",
  measurementId: "G-6YY4GLE4D4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {
  auth,
  createUserWithEmailAndPassword
}

