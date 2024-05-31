import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { user, isLoading, error } = useAuth();

  return (
    <div>
      {isLoading ? "loading..." : <p> {user?.email} </p>}
      {error}
    </div>
  );
};

export default HomePage;
