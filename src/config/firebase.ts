import { initializeApp } from "firebase/app";
// import { connectFunctionsEmulator } from 'firebase/functions';
// import { connectAuthEmulator } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const firebase = initializeApp(firebaseConfig);
export const functions = getFunctions(firebase, "asia-northeast1");
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);
