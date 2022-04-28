// src/firebase.js

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyClMGYKyxbo_n_tB4D-pqCCfFcA9o9txXc",
  authDomain: "todo-list-app-jj.firebaseapp.com",
  projectId: "todo-list-app-jj",
  storageBucket: "todo-list-app-jj.appspot.com",
  messagingSenderId: "440904171756",
  appId: "1:440904171756:web:8385d4bc7a60fb1f16a5c9",
  measurementId: "G-3EKGB3MW96",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
