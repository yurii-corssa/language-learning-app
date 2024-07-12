import { useEffect, useState } from "react";
import { getAllTeachers } from "../../api/teachers";
import { applyFilters } from "../../helpers/applyFilters";
import { useFavoriteIds } from "../../hooks/useFavoriteIds";
import { useAuth } from "../../hooks/useAuth";
import { RingLoader } from "../ui";
import { pageContent } from "../../styles/variables";
import TeachersList from "./TeachersList/TeachersList";
import { nanoid } from "nanoid";

const Teachers = ({ filters, onlyFavorites = false, initialCount = 4 }) => {
  const [allTeachers, setAllTeachers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [isLastPage, setIsLastPage] = useState(false);
  const [visibleTeachers, setVisibleTeachers] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [error, setError] = useState(null);

  const [favoriteIds, isLoadingIds] = useFavoriteIds();
  const { user } = useAuth();

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const newTeachers = await getAllTeachers();
        setAllTeachers(newTeachers);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoadingData(false);
      }
    };

    setIsLoadingData(true);
    fetchTeachers();
  }, []);

  useEffect(() => {
    if (isLoadingIds || !allTeachers.length) {
      return;
    }
    const newFilteredTeacher = applyFilters(allTeachers, filters, favoriteIds, onlyFavorites);

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
  }, [allTeachers, favoriteIds, filters, isLoadingIds, onlyFavorites, visibleCount]);

  useEffect(() => {
    setVisibleCount(initialCount);
  }, [initialCount, filters]);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + initialCount);
  };

  if (error) {
    alert(error.message);
  }

  if (isLoadingData) {
    return <RingLoader width="65" height="65" />;
  }
  return isEmpty ? (
    favoriteIds.length === 0 ? (
      <p>{pageContent.isEmpty.noFavTeachers}</p>
    ) : (
      <p>{pageContent.isEmpty.noFilterTeachers}</p>
    )
  ) : (
    <>
      {visibleTeachers.length !== 0 && (
        <TeachersList
          key={nanoid()}
          teachers={visibleTeachers}
          user={user}
          favoriteIds={favoriteIds}
          filters={filters}
          delayCount={visibleCount - initialCount}
        />
      )}

      {isLastPage ? (
        <p>{pageContent.isLastPage}</p>
      ) : (
        <button onClick={showMore} disabled={isLoadingData}>
          Load more
        </button>
      )}
    </>
  );
};

export default Teachers;
