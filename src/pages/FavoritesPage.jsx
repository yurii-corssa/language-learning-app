import { useEffect } from "react";
import { getFavorites } from "../api/users";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseApp";

const INITIAL_DISPLAY_COUNT = 4;

const FavoritesPage = () => {
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favorites = await getFavorites(user.uid);
      console.log(favorites);
    };

    fetchFavorites();
  }, []);
  return <div>FavoritesPage</div>;
};

export default FavoritesPage;
