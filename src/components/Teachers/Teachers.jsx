import { useEffect, useState } from "react";
import { getAllTeachers } from "../../api/teachers";
import { applyFilters } from "../../helpers/applyFilters";
import { useFavoriteIds } from "../../hooks/useFavoriteIds";
import { useAuth } from "../../hooks/useAuth";
import TeacherCard from "../TeacherCard/TeacherCard";
import { RingLoader } from "../ui";
import { pageContent } from "../../styles/variables";
import { TeachersList } from "./Teachers.styled";

const Teachers = ({ filters, onlyFavorites = false, initialCount = 4 }) => {
  const [allTeachers, setAllTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [isLastPage, setIsLastPage] = useState(false);
  const [visibleTeachers, setVisibleTeachers] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);
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
      }
    };

    setIsLoadingData(true);
    fetchTeachers();
  }, []);

  useEffect(() => {
    if (isLoadingIds) {
      return;
    }
    if (allTeachers.length !== 0) {
      const newFilteredTeacher = applyFilters(allTeachers, filters, favoriteIds, onlyFavorites);

      if (newFilteredTeacher.length !== 0) {
        setIsEmpty(false);
        setFilteredTeachers(newFilteredTeacher);
      } else {
        setIsLoadingData(false);
        setIsEmpty(true);
      }
    }
  }, [allTeachers, favoriteIds, filters, isLoadingIds, onlyFavorites]);

  useEffect(() => {
    if (isLoadingIds || isEmpty) {
      return;
    }
    if (filteredTeachers.length !== 0) {
      const newVisibleTeachers = filteredTeachers.slice(0, visibleCount);
      setVisibleTeachers(newVisibleTeachers);
      setIsLoadingData(false);

      if (visibleCount >= filteredTeachers.length) {
        setIsLastPage(true);
      } else {
        setIsLastPage(false);
      }
    }
  }, [filteredTeachers, isEmpty, isLoadingIds, visibleCount]);

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
      <TeachersList>
        {visibleTeachers.map((el, index) => {
          return (
            <TeacherCard
              key={el.tid}
              teacherData={el}
              user={user}
              favoriteIds={favoriteIds}
              filters={filters}
              delay={(index - (visibleCount - initialCount)) * 0.1}
            />
          );
        })}
      </TeachersList>

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
