import TeacherCard from "../components/TeacherCard/TeacherCard";
import { useTeachers } from "../hooks/useTeachers";
import { auth } from "../firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import useFavoriteIds from "../hooks/useFavoriteIds";

const TeachersPage = () => {
  const [user] = useAuthState(auth);
  const [favoriteIds] = useFavoriteIds(user);
  const [teachers, isLoading, error, showMore] = useTeachers();

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>
        {teachers.map((el) => {
          return (
            <TeacherCard key={el.tid} teacherData={el} user={user} favoriteIds={favoriteIds} />
          );
        })}
      </ul>
      <button onClick={showMore}>Load more</button>
    </div>
  );
};

export default TeachersPage;
