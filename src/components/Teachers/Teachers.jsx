import { useEffect, useLayoutEffect, useState } from "react";
import { applyFilters } from "../../helpers/applyFilters";
import { useFavoriteIds } from "../../hooks/useFavoriteIds";
import { useAuth } from "../../hooks/useAuth";
import { pageContent } from "../../styles/variables";
import TeachersList from "./TeachersList/TeachersList";
import PagePlaceholder from "../PagePlaceholder/PagePlaceholder";

const baseURL = import.meta.env.BASE_URL;

const Teachers = ({ teachers, filters, onlyFavorites = false, initialCount = 4 }) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [isLastPage, setIsLastPage] = useState(false);
  const [visibleTeachers, setVisibleTeachers] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  const [favoriteIds, isLoadingIds] = useFavoriteIds();
  const { user } = useAuth();

  useLayoutEffect(() => {
    setVisibleCount(initialCount);
  }, [initialCount, filters]);

  useEffect(() => {
    if (isLoadingIds || !teachers.length) {
      return;
    }
    const newFilteredTeacher = applyFilters(teachers, filters, favoriteIds, onlyFavorites);

    if (!newFilteredTeacher.length) {
      setIsEmpty(true);
      setVisibleTeachers([]);
      return;
    } else {
      setIsEmpty(false);
    }

    const newVisibleTeachers = newFilteredTeacher.slice(0, visibleCount);
    setVisibleTeachers(newVisibleTeachers);

    if (visibleCount >= newFilteredTeacher.length) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
  }, [teachers, favoriteIds, filters, isLoadingIds, onlyFavorites, visibleCount]);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + initialCount);
  };

  return isEmpty ? (
    favoriteIds.length === 0 ? (
      <PagePlaceholder
        src={`${baseURL}images/empty.svg`}
        notification={pageContent.isEmpty.noFavTeachers}
      />
    ) : (
      <PagePlaceholder
        src={`${baseURL}images/filter.svg`}
        notification={pageContent.isEmpty.noFilterTeachers}
      />
    )
  ) : (
    visibleTeachers.length !== 0 && (
      <TeachersList
        teachers={visibleTeachers}
        user={user}
        favoriteIds={favoriteIds}
        initialCount={initialCount}
        visibleCount={visibleCount}
        isLastPage={isLastPage}
        showMore={showMore}
      />
    )
  );
};

export default Teachers;
