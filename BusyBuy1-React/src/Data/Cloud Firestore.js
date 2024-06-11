
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAmqqYqlUatzr5YmU3Ce-cPg9nzW5fT_NA",
  authDomain: "busybuy-b56e5.firebaseapp.com",
  projectId: "busybuy-b56e5",
  storageBucket: "busybuy-b56e5.appspot.com",
  messagingSenderId: "113598860897",
  appId: "1:113598860897:web:610690983501f129692420",
  measurementId: "G-NLCN77CFT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export { db, auth };