import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "ia-shopping-bucket.firebaseapp.com",
  projectId: "ia-shopping-bucket",
  storageBucket: "ia-shopping-bucket.appspot.com",
  messagingSenderId: "207326490628",
  appId: "1:207326490628:web:1937214d0831ba8fb00551",
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
