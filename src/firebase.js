// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg-YcKa8pVL1b18JQX7euXN9lBRv0bXHU",
  authDomain: "jersey-orders-2023.firebaseapp.com",
  projectId: "jersey-orders-2023",
  storageBucket: "jersey-orders-2023.appspot.com",
  messagingSenderId: "268586307251",
  appId: "1:268586307251:web:d9dc2cac6c77ddb412eac6",
  measurementId: "G-P80WTCMWZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };