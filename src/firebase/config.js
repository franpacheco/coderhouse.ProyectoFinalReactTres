import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCBVadzSQD0Tz2uD1b7NVD9fm_uZKmobg",
  authDomain: "tienda-reactjs-coderhouse24.firebaseapp.com",
  projectId: "tienda-reactjs-coderhouse24",
  storageBucket: "tienda-reactjs-coderhouse24.appspot.com",
  messagingSenderId: "390914176993",
  appId: "1:390914176993:web:86074d714655bfe35144a0"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };