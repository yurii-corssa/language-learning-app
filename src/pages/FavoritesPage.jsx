import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseApp";
import { useFavoriteTeachers } from "../hooks/useFavoriteTeachers";
import TeacherCard from "../components/TeacherCard/TeacherCard";
import useFavoriteIds from "../hooks/useFavoriteIds";

const FavoritesPage = () => {
  const [user] = useAuthState(auth);
  const [favoriteIds] = useFavoriteIds(user);
  const [favoriteTeachers, isLastPage, isLoading, error, showMore] =
    useFavoriteTeachers(favoriteIds);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {error && <p>Error: {error.message}</p>}
          {!favoriteTeachers.length && (
            <p>You don&apos;t have any favorite teachers yet. Add some to see them here!</p>
          )}
          <ul>
            {favoriteTeachers.map((el) => {
              return (
                <TeacherCard key={el.tid} teacherData={el} user={user} favoriteIds={favoriteIds} />
              );
            })}
          </ul>
          {isLastPage && favoriteTeachers.length && (
            <p>You have reached the end of the list of teachers.</p>
          )}
          {!isLastPage && favoriteTeachers.length && <button onClick={showMore}>Load more</button>}
        </div>
      )}
    </>
  );
};

export default FavoritesPage;
