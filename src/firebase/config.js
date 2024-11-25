// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4to8A-h3Znj_cePbsUslhhJwPLqKYdCA",
    authDomain: "react-curso-f47bd.firebaseapp.com",
    projectId: "react-curso-f47bd",
    storageBucket: "react-curso-f47bd.firebasestorage.app",
    messagingSenderId: "16865411822",
    appId: "1:16865411822:web:2280cc35789d9cb94429ff",
    measurementId: "G-H5FSEG4RKQ"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp);