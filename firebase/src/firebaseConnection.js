import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlJ0GLt5UTVLU251_9d8evJc1M54JNhG4",
  authDomain: "curso-dd2c2.firebaseapp.com",
  projectId: "curso-dd2c2",
  storageBucket: "curso-dd2c2.appspot.com",
  messagingSenderId: "438959230576",
  appId: "1:438959230576:web:31ae7df31b1fa4d94caeb5",
  measurementId: "G-Z46B1D9F46",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
