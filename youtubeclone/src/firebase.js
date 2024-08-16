// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3buouc7fiecWINeFZQB6ohwXYsmViAec",
  authDomain: "ytclone-bf7b4.firebaseapp.com",
  projectId: "ytclone-bf7b4",
  storageBucket: "ytclone-bf7b4.appspot.com",
  messagingSenderId: "598655271761",
  appId: "1:598655271761:web:ed0922e48169be800d0970",
  measurementId: "G-WQWNSYVYLZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export { app, db, auth, timestamp, provider };
