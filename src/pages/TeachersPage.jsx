import TeacherCard from "../components/TeacherCard/TeacherCard";
import { useTeachers } from "../hooks/useTeachers";
import { auth } from "../firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCallback, useEffect, useState } from "react";
import FilterForm from "../components/FilterForm/FilterForm";

const TeachersPage = () => {
  const [user] = useAuthState(auth);
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
        <div style={{ position: "relative", top: "50%", left: "50%" }}>Loading...</div>
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
