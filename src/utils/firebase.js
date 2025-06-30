// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGjyUg7O-utNvCeHa71tc3EXkIVllXqbs",
  authDomain: "movieapp-85cad.firebaseapp.com",
  projectId: "movieapp-85cad",
  storageBucket: "movieapp-85cad.firebasestorage.app",
  messagingSenderId: "722052357280",
  appId: "1:722052357280:web:de061c228e944bac043dc5",
  measurementId: "G-XEZSMZCTY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);