import { get, push, ref } from "firebase/database";
import { database } from "../firebaseApp";

export const addToFavorites = async (userId, teacherId) => {
  const favoritesRef = ref(database, `users/${userId}/favorites`);

  await push(favoritesRef, teacherId);
};

export const getFavorites = async (userId) => {
  const favoriteRef = ref(database, `users/${userId}/favorites`);
  const snapshot = await get(favoriteRef);

  return snapshot.exists() ? snapshot.val() : [];
};
