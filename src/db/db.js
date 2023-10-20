import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAjGk94P7xGVfZ0roJo8mpY36qjN_lWhOY",
  authDomain: "ecommerce-47200.firebaseapp.com",
  projectId: "ecommerce-47200",
  storageBucket: "ecommerce-47200.appspot.com",
  messagingSenderId: "617926755433",
  appId: "1:617926755433:web:a1fc16833efa12827a4ef8"
};

initializeApp(firebaseConfig);

export const db = getFirestore()