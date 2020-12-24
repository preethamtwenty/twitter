import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAhN0n77qgOdmlYTuZRAiGMRjUiSxcSXs4",
  authDomain: "preetham-lekkala.firebaseapp.com",
  projectId: "preetham-lekkala",
  storageBucket: "preetham-lekkala.appspot.com",
  messagingSenderId: "51933945979",
  appId: "1:51933945979:web:7b87a0cbb8538ad42602de",
  measurementId: "G-P9FLVJ1FL5"
  
  
  });
const db=firebaseApp.firestore();
const auth=firebase.auth();

const storage=firebase.storage();
  
export {auth};
export default db;