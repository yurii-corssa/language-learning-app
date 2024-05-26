import { useEffect, useState } from "react";
import { subscribeToFavorites } from "../api/users";

const useFavoriteIds = (user) => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    if (user) {
      const unsubscribe = subscribeToFavorites(user.uid, (favorites) => {
        setFavoriteIds(Object.values(favorites));
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  return [favoriteIds];
};

export default useFavoriteIds;
