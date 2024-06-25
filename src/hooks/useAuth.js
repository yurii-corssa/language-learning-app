import { useContext, useEffect, useState } from "react";
import { auth } from "/firebaseApp";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { AuthContext } from "../contexts/AuthContext";
import { loadFromLocalStorage } from "../helpers/storage";
import { removeFromLocalStorage, saveToLocalsStorage } from "../helpers/storage";

export const useProvideAuth = () => {
  const [user, setUser] = useState(loadFromLocalStorage("user"));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        const saveUser = { uid, displayName, email, photoURL };

        setUser(saveUser);
        saveToLocalsStorage("user", saveUser);
      } else {
        setUser(null);
        removeFromLocalStorage("user");
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signin = async (email, password) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    const { uid, displayName, photoURL } = user;
    const saveUser = { uid, displayName, email, photoURL };

    setUser(saveUser);
    saveToLocalsStorage("user", saveUser);
  };

  const signinWithProvider = async (provider) => {
    const { user } = await signInWithPopup(auth, provider);

    const { uid, displayName, email, photoURL } = user;
    const saveUser = { uid, displayName, email, photoURL };

    setUser(saveUser);
    saveToLocalsStorage("user", saveUser);
  };

  const signup = async (email, password, displayName) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    updateProfile(user, { displayName });

    const { uid, photoURL } = user;
    const saveUser = { uid, displayName, email, photoURL };

    setUser(saveUser);
    saveToLocalsStorage("user", saveUser);
  };

  const signout = async () => {
    await signOut(auth);

    setUser(null);
    removeFromLocalStorage("user");
  };

  return { user, isLoading, signin, signinWithProvider, signup, signout };
};

export const useAuth = () => {
  return useContext(AuthContext);
};
