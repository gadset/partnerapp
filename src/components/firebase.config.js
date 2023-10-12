// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-WzX3QDvuH3MWhrnWZP2mwvG6bYxr_Sg",
  authDomain: "tamboola-b7fe3.firebaseapp.com",
  projectId: "tamboola-b7fe3",
  storageBucket: "tamboola-b7fe3.appspot.com",
  messagingSenderId: "234987616047",
  appId: "1:234987616047:web:6c4727bfdcf008dcd193da",
  measurementId: "G-HBKN1M7K82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Export Firebase configuration
export default firebaseConfig;
