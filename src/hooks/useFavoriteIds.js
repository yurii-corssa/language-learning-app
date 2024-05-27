import { useEffect, useState } from "react";
import { subscribeToFavorites } from "../api/users";

const useFavoriteIds = (user) => {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [isLoadingIds, setIsLoadingIds] = useState(true);

  useEffect(() => {
    if (user) {
      setIsLoadingIds(true);
      const unsubscribe = subscribeToFavorites(user.uid, (favorites) => {
        setFavoriteIds(Object.values(favorites));
        setIsLoadingIds(false);
      });

      return () => {
        unsubscribe();
      };
    } else {
      setIsLoadingIds(false);
    }
  }, [user]);

  return [favoriteIds, isLoadingIds];
};

export default useFavoriteIds;
