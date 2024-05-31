import { useEffect, useState } from "react";
import { getAllTeachers } from "../api/teachers";
import { applyFilters } from "../helpers/applyFilters";
import { useFavoriteIds } from "./useFavoriteIds";
import { useAuth } from "./useAuth";

export const useTeachers = (filters, initialCount = 4) => {
  const [visibleTeachers, setVisibleTeachers] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [allTeachers, setAllTeachers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const { user } = useAuth();
  const [favoriteIds] = useFavoriteIds(user);

  useEffect(() => {
    setVisibleCount(initialCount);
  }, [initialCount, filters]);

  useEffect(() => {
    const fetchTrachers = async () => {
      try {
        const newTeachers = await getAllTeachers();
        setAllTeachers(newTeachers);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrachers();
  }, []);

  useEffect(() => {
    if (allTeachers.length !== 0) {
      const filteredTeacher = applyFilters(allTeachers, filters, favoriteIds);

      if (visibleCount >= filteredTeacher.length && filteredTeacher.length !== 0) {
        setIsLastPage(true);
      } else {
        setIsLastPage(false);
      }

      setVisibleTeachers(filteredTeacher.slice(0, visibleCount));
    }
  }, [allTeachers, favoriteIds, filters, initialCount, visibleCount]);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + initialCount);
  };

  return [visibleTeachers, favoriteIds, isLastPage, isLoading, error, showMore];
};
