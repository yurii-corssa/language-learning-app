import { useContext, useEffect, useState } from "react";
import { auth } from "/firebaseApp";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { AuthContext } from "../contexts/AuthContext";

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signin = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password);

    setUser(res.user);

    return res.user;
  };

  const signinWithProvider = async (provider) => {
    const res = await signInWithPopup(auth, provider);
    setUser(res.user);

    return res.user;
  };

  const signup = async (email, password, displayName) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    updateProfile(res.user, { displayName });

    setUser(res.user);

    return res.user;
  };

  const signout = async () => {
    await signOut(auth);

    setUser(null);
  };

  return { user, isLoading, signin, signinWithProvider, signup, signout };
};

export const useAuth = () => {
  return useContext(AuthContext);
};
