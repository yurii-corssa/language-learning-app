import { useEffect, useState } from "react";
import { getAllTeachers } from "../api/teachers";
import { applyFilters } from "../helpers/applyFilters";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseApp";
import { useFavoriteIds } from "./useFavoriteIds";

export const useTeachers = (filters, initialCount = 4) => {
  const [visibleTeachers, setVisibleTeachers] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [allTeachers, setAllTeachers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const [user] = useAuthState(auth);
  const [favoriteIds] = useFavoriteIds(user);

  useEffect(() => {
    const fetchTrachers = async () => {
      try {
        const newTeachers = await getAllTeachers();
        setAllTeachers(newTeachers);
      } catch (error) {
        setError(error);
      }
    };

    fetchTrachers();
  }, []);

  useEffect(() => {
    const filteredTeacher = applyFilters(allTeachers, filters, favoriteIds);

    if (visibleCount >= filteredTeacher.length && filteredTeacher.length !== 0) {
      setIsLastPage(true);
    }

    setVisibleTeachers(filteredTeacher.slice(0, visibleCount));

    setIsLoading(false);
  }, [allTeachers, favoriteIds, filters, initialCount, visibleCount]);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + initialCount);
  };

  return [visibleTeachers, isLastPage, isLoading, error, showMore];
};
