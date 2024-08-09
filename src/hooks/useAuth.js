import { useContext, useEffect, useState } from "react";
import { auth } from "../firebaseApp";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "../contexts/AuthContext";
import { loadFromLocalStorage } from "../helpers/storage";
import { removeFromLocalStorage, saveToLocalsStorage } from "../helpers/storage";

export const useProvideAuth = () => {
  const [user, setUser] = useState(loadFromLocalStorage("user"));
  const [isLoadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    setLoadingAuth(true);

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const { uid, displayName, email, photoURL } = currentUser;
        const saveUser = { uid, displayName, email, photoURL };

        setUser(saveUser);
        saveToLocalsStorage("user", saveUser);
      } else {
        setUser(null);
        removeFromLocalStorage("user");
      }
      setLoadingAuth(false);
    });

    return () => unsubscribe();
  }, []);

  const signin = (email, password) => signInWithEmailAndPassword(auth, email, password);

  const signinWithGoogleProvider = () => {
    const googleProvider = new GoogleAuthProvider();

    // return signInWithRedirect(auth, googleProvider);
    return signInWithPopup(auth, googleProvider);
  };

  const signup = async (email, password, displayName) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    updateProfile(user, { displayName });
  };

  const signout = () => signOut(auth);

  return { user, isLoadingAuth, signin, signinWithGoogleProvider, signup, signout };
};

export const useAuth = () => {
  return useContext(AuthContext);
};
