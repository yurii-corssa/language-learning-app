import { useContext, useEffect, useState } from "react";
import { auth } from "/firebaseApp";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { AuthContext } from "../contexts/AuthContext";

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const signin = async (email, password) => {
    setIsLoading(true);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      setUser(res.user);

      return res.user;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const signinWithProvider = async (provider) => {
    setIsLoading(true);

    try {
      const res = await signInWithPopup(auth, provider);

      setUser(res.user);

      return res.user;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email, password, displayName) => {
    setIsLoading(true);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(res.user, { displayName });

      setUser(res.user);

      return res.user;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const signout = async () => {
    setIsLoading(true);

    try {
      await signOut(auth);

      setUser(null);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

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

  return { user, isLoading, error, signin, signinWithProvider, signup, signout };
};

export const useAuth = () => {
  return useContext(AuthContext);
};
