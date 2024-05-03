import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const RegistrationForm = () => {
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState("admin5@admin.com");
  const [password, setPassword] = useState("admin123");
  const [displayName, setDisplayName] = useState("admin");

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleSubmit = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName,
    });
  };

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <button onClick={handleSubmit}>register</button>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default RegistrationForm;
