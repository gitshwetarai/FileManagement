import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDydX-EtFIBFb_mP8zD0VWXNQZrDMcjOPI",
  authDomain: "filemanagement-f8ad0.firebaseapp.com",
  projectId: "filemanagement-f8ad0",
  storageBucket: "filemanagement-f8ad0.appspot.com",
  messagingSenderId: "432817779332",
  appId: "1:432817779332:web:6c4b6ccfbfca229e2dc8d1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);
const storage = getStorage(app);

export { auth, database, storage, ref, uploadBytes, getDownloadURL, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, onAuthStateChanged };  