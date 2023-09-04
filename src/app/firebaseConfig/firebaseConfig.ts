
// Import the functions you need from the SDKs you need
import { initializeApp,getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"


import { getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'



const firebaseConfig = {
  apiKey:"AIzaSyDLRZd0ETVqpSk8k_ZSDJf_79UGL6HGauY",
  authDomain:"scholarsupports-794bf.firebaseapp.com",
  projectId:"scholarsupports-794bf",
  storageBucket:"scholarsupports-794bf.appspot.com",
  messagingSenderId:"144060065385",
  appId:"1:144060065385:web:05fa0e574e2e02f773e4f8",
  measurementId: "G-GSESSG1GB7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// is 
const auth = getAuth();         
const db = getFirestore(app)
//

const analytics = app.name && typeof window !== 'undefined' ? getAnalytics(app) : null;
export {auth, db, analytics}
export const storage = getStorage();