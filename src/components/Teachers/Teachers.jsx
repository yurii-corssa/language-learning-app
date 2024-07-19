import { useEffect, useState } from "react";
import { applyFilters } from "../../helpers/applyFilters";
import { useFavoriteIds } from "../../hooks/useFavoriteIds";
import { useAuth } from "../../hooks/useAuth";
import { pageContent } from "../../styles/variables";
import TeachersList from "./TeachersList/TeachersList";
import empty from "/assets/images/empty.svg";
import filter from "/assets/images/filter.svg";
import PagePlaceholder from "../PagePlaceholder/PagePlaceholder";

const Teachers = ({ teachers, filters, onlyFavorites = false, initialCount = 4 }) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [isLastPage, setIsLastPage] = useState(false);
  const [visibleTeachers, setVisibleTeachers] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  const [favoriteIds, isLoadingIds] = useFavoriteIds();
  const { user } = useAuth();

  useEffect(() => {
    if (isLoadingIds || !teachers.length) {
      return;
    }
    const newFilteredTeacher = applyFilters(teachers, filters, favoriteIds, onlyFavorites);

    if (!newFilteredTeacher.length) {
      setIsEmpty(true);
      setVisibleTeachers([]);
      return;
    }

    const newVisibleTeachers = newFilteredTeacher.slice(0, visibleCount);
    setVisibleTeachers(newVisibleTeachers);

    if (visibleCount >= newFilteredTeacher.length) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
  }, [teachers, favoriteIds, filters, isLoadingIds, onlyFavorites, visibleCount]);

  useEffect(() => {
    setVisibleCount(initialCount);
  }, [initialCount, filters]);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + initialCount);
  };

  return isEmpty ? (
    favoriteIds.length === 0 ? (
      <PagePlaceholder image={empty} notification={pageContent.isEmpty.noFavTeachers} />
    ) : (
      <PagePlaceholder image={filter} notification={pageContent.isEmpty.noFilterTeachers} />
    )
  ) : (
    visibleTeachers.length !== 0 && (
      <TeachersList
        teachers={visibleTeachers}
        user={user}
        favoriteIds={favoriteIds}
        filters={filters}
        delayCount={visibleCount - initialCount}
        isLastPage={isLastPage}
        showMore={showMore}
      />
    )
  );
};

export default Teachers;
