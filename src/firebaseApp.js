import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const app = initializeApp({
  apiKey: "AIzaSyCpuhRIrjk7iVhKTIi8C_BJxaWYVD6kyKI",
  authDomain: "learn-lingo-connect.firebaseapp.com",
  projectId: "learn-lingo-connect",
  storageBucket: "learn-lingo-connect.appspot.com",
  messagingSenderId: "947344857741",
  appId: "1:947344857741:web:14a89974e1b6d6d887e0c4",
  databaseURL: "https://learn-lingo-connect-default-rtdb.europe-west1.firebasedatabase.app/",
});

export const database = getDatabase(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
