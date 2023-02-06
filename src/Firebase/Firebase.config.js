// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBivrC6uHKwLF954bTg_C_31q4orT--SHI",
    authDomain: "ecommmus.firebaseapp.com",
    projectId: "ecommmus",
    storageBucket: "ecommmus.appspot.com",
    messagingSenderId: "834949402014",
    appId: "1:834949402014:web:b57b39d832c155cc571a8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;