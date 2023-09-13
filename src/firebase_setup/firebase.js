// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBglaH0HSy6q5dZ_TX_OJ9-EH4hvzANnhI",
    authDomain: "united-bot-398103.firebaseapp.com",
    projectId: "united-bot-398103",
    storageBucket: "united-bot-398103.appspot.com",
    messagingSenderId: "819139476583",
    appId: "1:819139476583:web:b6bceb2a6851bb3547a8c2",
    measurementId: "G-CM9MMWBG34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const dataBase = getFirestore(app);