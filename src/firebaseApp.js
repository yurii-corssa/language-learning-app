import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyCpuhRIrjk7iVhKTIi8C_BJxaWYVD6kyKI",
  authDomain: "learn-lingo-connect.firebaseapp.com",
  projectId: "learn-lingo-connect",
  storageBucket: "learn-lingo-connect.appspot.com",
  messagingSenderId: "947344857741",
  appId: "1:947344857741:web:14a89974e1b6d6d887e0c4",
});

export const auth = getAuth(app);
