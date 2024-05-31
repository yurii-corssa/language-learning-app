import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { user, isLoading } = useAuth();

  return <div>{isLoading ? "loading..." : <p> {user?.email} </p>}</div>;
};

export default HomePage;
