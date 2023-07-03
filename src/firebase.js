// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADGb2Cl-qekg9aOr4zwmIQz7ls3GiEzEY",
  authDomain: "scan-tag.firebaseapp.com",
  projectId: "scan-tag",
  storageBucket: "scan-tag.appspot.com",
  messagingSenderId: "612632823609",
  appId: "1:612632823609:web:e701661e709733fce74ae8",
  databaseURL: "https://scan-tag-default-rtdb.firebaseio.com",

};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
