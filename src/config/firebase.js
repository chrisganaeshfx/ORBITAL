// Using Firebase for Authentication => auto HASHING password, UNIQUE email, password >6 chars 
// Using Firestore to store n number of additional details 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Helps to register user to firebase console
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNl_3tKIcGgzdX7rMPDgRO6fwDuQ0XEVc",
  authDomain: "authentication-d0a6c.firebaseapp.com",
  projectId: "authentication-d0a6c",
  storageBucket: "authentication-d0a6c.appspot.com",
  messagingSenderId: "1011643992470",
  appId: "1:1011643992470:web:2ed3caeeb1764d4b6df5b7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);