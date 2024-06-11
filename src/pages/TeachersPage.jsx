import TeacherCard from "../components/TeacherCard/TeacherCard";
import { useTeachers } from "../hooks/useTeachers";
import { useCallback, useEffect, useState } from "react";
import FilterForm from "../components/FilterForm/FilterForm";
import { useAuth } from "../hooks/useAuth";

const TeachersPage = () => {
  const { user } = useAuth();
  const [filters, setFilters] = useState({
    language: "",
    level: "",
    price: "",
    onlyFavorites: false,
  });
  const [teachers, favoriteIds, isLastPage, isLoading, error, showMore] = useTeachers(filters);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (teachers.length === 0 && !isLoading) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [isLoading, teachers.length]);

  const changeFilter = useCallback((filterOptions) => {
    setFilters((prev) => ({ ...prev, ...filterOptions }));
  }, []);

  return (
    <div>
      <FilterForm changeFilter={changeFilter} />

      {error && <p>Error: {error.message}</p>}

      <ul>
        {teachers.map((el) => {
          return (
            <TeacherCard key={el.tid} teacherData={el} user={user} favoriteIds={favoriteIds} />
          );
        })}
      </ul>

      {isLoading ? (
        <div>Loading...</div>
      ) : isEmpty ? (
        <p>No teachers found matching your filter criteria. Please try adjusting your filters.</p>
      ) : isLastPage ? (
        <p>You have reached the end of the list of teachers.</p>
      ) : (
        <button onClick={showMore}>Load more</button>
      )}
    </div>
  );
};

export default TeachersPage;
