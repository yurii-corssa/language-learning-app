import { useEffect, useState } from "react";
import { subscribeToFavorites } from "../api/users";
import { useAuth } from "./useAuth";

export const useFavoriteIds = () => {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [isLoadingIds, setIsLoadingIds] = useState(true);
  const { user, isLoadingAuth } = useAuth();

  useEffect(() => {
    if (isLoadingAuth) {
      setIsLoadingIds(true);
    } else if (user) {
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
  }, [isLoadingAuth, user]);

  return [favoriteIds, isLoadingIds];
};
