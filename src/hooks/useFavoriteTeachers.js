import { useEffect, useState } from "react";
import { getTeachersByIds } from "../api/teachers";

export const useFavoriteTeachers = (favoriteIds, initialCount = 4) => {
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);
  const [lastLoadedIndex, setLastLoadedIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(initialCount);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLastLoadedIndex(0);
  }, [favoriteIds]);

  useEffect(() => {
    if (lastLoadedIndex === displayCount) return;

    const fetchFavoriteTeachers = async () => {
      setIsLoading(true);

      try {
        const slisedFavoriteIds = favoriteIds.slice(lastLoadedIndex, displayCount);

        const newFavoriteTeachers = await getTeachersByIds(slisedFavoriteIds);
        if (!lastLoadedIndex) {
          setFavoriteTeachers(newFavoriteTeachers);
        } else {
          setFavoriteTeachers((prevFavoriteTeachers) => [
            ...prevFavoriteTeachers,
            ...newFavoriteTeachers,
          ]);
        }

        if (newFavoriteTeachers.length < initialCount) {
          setIsLastPage(true);
        }

        setLastLoadedIndex(displayCount);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavoriteTeachers();
  }, [displayCount, favoriteIds, initialCount, lastLoadedIndex]);

  const showMore = () => {
    setDisplayCount((prev) => prev + initialCount);
  };

  return [favoriteTeachers, isLastPage, isLoading, error, showMore];
};
