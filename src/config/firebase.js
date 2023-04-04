import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig= {
  apiKey: "AIzaSyDxEuYfHGSYT5f4vSVaq_Q9HugJ3eicIKI",
  authDomain: "tik-tok-clone-c84a3.firebaseapp.com",
  projectId: "tik-tok-clone-c84a3",
  storageBucket: "tik-tok-clone-c84a3.appspot.com",
  messagingSenderId: "209237496078",
  appId: "1:209237496078:web:4f69d90f01149308c3875f",
  measurementId: "G-HDMW7V9DJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;