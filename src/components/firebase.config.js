// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
//   apiKey: "AIzaSyC-WzX3QDvuH3MWhrnWZP2mwvG6bYxr_Sg",
//   authDomain: "tamboola-b7fe3.firebaseapp.com",
//   projectId: "tamboola-b7fe3",
//   storageBucket: "tamboola-b7fe3.appspot.com",
//   messagingSenderId: "234987616047",
//   appId: "1:234987616047:web:6c4727bfdcf008dcd193da",
//   measurementId: "G-HBKN1M7K82"
apiKey: "AIzaSyAfxmcgmSEJP7m4u0vtwYVq_9g4dgU1iWk",
  authDomain: "gadset-6fb3d.firebaseapp.com",
  projectId: "gadset-6fb3d",
  storageBucket: "gadset-6fb3d.appspot.com",
  messagingSenderId: "176728143278",
  appId: "1:176728143278:web:77dfe7375b335c2d87443f",
  measurementId: "G-ZC2T83X5RK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Export Firebase configuration
export default firebaseConfig;
