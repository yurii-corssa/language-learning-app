import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseApp";
import { useFavoriteTeachers } from "../hooks/useFavoriteTeachers";
import TeacherCard from "../components/TeacherCard/TeacherCard";
import useFavoriteIds from "../hooks/useFavoriteIds";
import { useEffect, useState } from "react";

const FavoritesPage = () => {
  const [user] = useAuthState(auth);
  const [favoriteIds, isLoadingIds] = useFavoriteIds(user);
  const [teachers, isLastPage, isLoadingTchrs, error, showMore] = useFavoriteTeachers(favoriteIds);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoadingIds || isLoadingTchrs) {
      setIsLoading(true);
    } else setIsLoading(false);
  }, [isLoadingIds, isLoadingTchrs]);

  useEffect(() => {
    if (favoriteIds.length === 0 && !isLoading) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [favoriteIds.length, isLoading]);

  return (
    <>
      <div>
        {error && <p>Error: {error.message}</p>}

        {isEmpty && (
          <p>You don&apos;t have any favorite teachers yet. Add some to see them here!</p>
        )}

        <ul>
          {teachers.map((el) => {
            return (
              <TeacherCard key={el.tid} teacherData={el} user={user} favoriteIds={favoriteIds} />
            );
          })}
        </ul>

        {isLoading ? (
          <p>Loading...</p>
        ) : isLastPage ? (
          <p>You have reached the end of the list of teachers.</p>
        ) : (
          <button onClick={showMore}>Load more</button>
        )}
      </div>
    </>
  );
};

export default FavoritesPage;
