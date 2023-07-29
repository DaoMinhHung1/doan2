
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRi3ybq14muN3Cad4RedsdgXJjT4t3K9w",
  authDomain: "doanalta2.firebaseapp.com",
  projectId: "doanalta2",
  storageBucket: "doanalta2.appspot.com",
  messagingSenderId: "999843237028",
  appId: "1:999843237028:web:cb8184cc68a03f23f2aa31"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
