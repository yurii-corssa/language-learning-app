import { child, get, off, onValue, push, ref, remove } from "firebase/database";
import { database } from "../firebaseApp";

export const addToFavorites = async (userId, teacherId) => {
  const favoritesRef = ref(database, `users/${userId}/favorites`);
  push(favoritesRef, teacherId);
};

export const removeFromFavorites = async (userId, teacherId) => {
  const favoritesRef = ref(database, `users/${userId}/favorites`);
  const snapshot = await get(favoritesRef);
  snapshot.forEach((favorite) => {
    if (favorite.val() === teacherId) {
      remove(child(favoritesRef, favorite.key));
    }
  });
};

export const subscribeToFavorites = (userId, callback) => {
  const favoriteRef = ref(database, `users/${userId}/favorites`);

  const handleValueChange = (snapshot) => {
    if (snapshot.exists()) {
      callback(snapshot.val());
    } else {
      callback({});
    }
  };

  onValue(favoriteRef, handleValueChange);

  return () => {
    off(favoriteRef, handleValueChange);
  };
};
