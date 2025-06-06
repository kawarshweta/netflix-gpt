// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb-N8buyaeX2h-6gTmFfd_2I7pNYRsjto",
  authDomain: "netflixgpt-9a594.firebaseapp.com",
  projectId: "netflixgpt-9a594",
  storageBucket: "netflixgpt-9a594.firebasestorage.app",
  messagingSenderId: "743145875982",
  appId: "1:743145875982:web:57e210442bce744624ea5f",
  measurementId: "G-BCKG99DDY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);