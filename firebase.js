// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_OWN_INFO_HERE",
  authDomain: "YOUR_OWN_INFO_HERE",
  projectId: "YOUR_OWN_INFO_HERE",
  storageBucket: "YOUR_OWN_INFO_HERE",
  messagingSenderId: "YOUR_OWN_INFO_HERE",
  appId: "YOUR_OWN_INFO_HERE",
  measurementId: "YOUR_OWN_INFO_HERE"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }

//const analytics = getAnalytics(app);