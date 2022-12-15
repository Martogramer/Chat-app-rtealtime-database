// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmZkrKLRKyO_SkmkCgCNANOFPszDV-5m4",
  authDomain: "chat-8663b.firebaseapp.com",
  projectId: "chat-8663b",
  storageBucket: "chat-8663b.appspot.com",
  messagingSenderId: "355599141156",
  appId: "1:355599141156:web:ef22043db497c5f9058bb1",
  measurementId: "G-MN5GWGZNDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics();
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
export const provider = new GoogleAuthProvider()