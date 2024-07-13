
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfG6B8r87inZrIiu-v0KsBCuWHxUrDuYk",
  authDomain: "react-netflix-clone-1ed37.firebaseapp.com",
  projectId: "react-netflix-clone-1ed37",
  storageBucket: "react-netflix-clone-1ed37.appspot.com",
  messagingSenderId: "347898724622",
  appId: "1:347898724622:web:9cd4e826b0d116c95d575f",
  measurementId: "G-PR4LGPJQRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);