import { useEffect, useState } from "react";
import { subscribeToFavorites } from "../api/users";
import { useAuth } from "./useAuth";

export const useFavoriteIds = () => {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [isLoadingIds, setIsLoadingIds] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setIsLoadingIds(true);
      const unsubscribe = subscribeToFavorites(user.uid, (favorites) => {
        setFavoriteIds(Object.values(favorites).reverse());
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
