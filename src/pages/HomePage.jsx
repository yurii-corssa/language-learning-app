import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseApp";

const HomePage = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      {loading ? "loading..." : <p> {user?.email} </p>}
      {error}
    </div>
  );
};

export default HomePage;
