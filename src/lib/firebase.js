// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpeEz7nZkV6yGnLw2ttkSXOTfPYlg8NT4",
  authDomain: "react-chat-app-95092.firebaseapp.com",
  projectId: "react-chat-app-95092",
  storageBucket: "react-chat-app-95092.firebasestorage.app",
  messagingSenderId: "412830796215",
  appId: "1:412830796215:web:4c8a356e4a10d89d54c032",
  measurementId: "G-G3TL0JY71Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
