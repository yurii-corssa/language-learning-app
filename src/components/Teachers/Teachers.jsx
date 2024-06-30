import { useEffect, useState } from "react";
import { getAllTeachers } from "../../api/teachers";
import { applyFilters } from "../../helpers/applyFilters";
import { useFavoriteIds } from "../../hooks/useFavoriteIds";
import { useAuth } from "../../hooks/useAuth";
import TeacherCard from "../TeacherCard/TeacherCard";
import { RingLoader } from "../ui";
import { pageContent } from "../../styles/variables";

const Teachers = ({ filters, onlyFavorites = false, initialCount = 4 }) => {
  const [allTeachers, setAllTeachers] = useState([]);
  const [visibleTeachers, setVisibleTeachers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useAuth();
  const [favoriteIds] = useFavoriteIds(user);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const newTeachers = await getAllTeachers();
        setAllTeachers(newTeachers);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  useEffect(() => {
    if (allTeachers.length !== 0) {
      const filteredTeacher = applyFilters(allTeachers, filters, favoriteIds, onlyFavorites);

      if (visibleCount >= filteredTeacher.length && filteredTeacher.length !== 0) {
        setIsLastPage(true);
      } else {
        setIsLastPage(false);
      }

      setVisibleTeachers(filteredTeacher.slice(0, visibleCount));
    }
  }, [allTeachers, favoriteIds, filters, onlyFavorites, visibleCount]);

  useEffect(() => {
    if (visibleTeachers.length === 0 && !isLoading) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [isLoading, visibleTeachers.length]);

  useEffect(() => {
    setVisibleCount(initialCount);
  }, [initialCount, filters]);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + initialCount);
  };

  return (
    <>
      {error && <p>Error: {error.message}</p>}

      <ul>
        {visibleTeachers.map((el) => {
          return (
            <TeacherCard key={el.tid} teacherData={el} user={user} favoriteIds={favoriteIds} />
          );
        })}
      </ul>

      {isLoading && <RingLoader width="65" height="65" />}

      {isEmpty ? (
        favoriteIds.length === 0 ? (
          <p>{pageContent.isEmpty.noFavTeachers}</p>
        ) : (
          <p>{pageContent.isEmpty.noFilterTeachers}</p>
        )
      ) : isLastPage ? (
        <p>{pageContent.isLastPage}</p>
      ) : (
        <button onClick={showMore} disabled={isLoading}>
          Load more
        </button>
      )}
    </>
  );
};

export default Teachers;
