// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYsw5JcnIX3d_t60bQxtkKjJY4X5T99BU",
  authDomain: "kjl-jiujitsu-blog.firebaseapp.com",
  projectId: "kjl-jiujitsu-blog",
  storageBucket: "kjl-jiujitsu-blog.appspot.com",
  messagingSenderId: "190502969157",
  appId: "1:190502969157:web:fab8b66ce87b528b1a282c",
  measurementId: "G-K595GKK9QY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const functions = getFunctions(app)