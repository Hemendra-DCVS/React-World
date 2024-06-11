
// firebase.config.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBPB-OMzxd0tVKqozHKdS7H8VMETLb-jdY",
    authDomain: "project1-9ef14.firebaseapp.com",
    projectId: "project1-9ef14",
    storageBucket: "project1-9ef14.appspot.com",
    messagingSenderId: "400677279532",
    appId: "1:400677279532:web:caaf8a03c5f203aab17e89"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
