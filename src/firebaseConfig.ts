import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXmMrivgUlRjRpyqJtzd-o0tv8Bp_zm64",
  authDomain: "consultorvinicius-1bea1.firebaseapp.com",
  projectId: "consultorvinicius-1bea1",
  storageBucket: "consultorvinicius-1bea1.appspot.com",
  messagingSenderId: "186380951416",
  appId: "1:186380951416:web:c3509471ab03899f64728d",
  measurementId: "G-L2EFJP73Y6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
