import { useEffect, useState } from "react";
import TeacherCard from "../components/TeacherCard/TeacherCard";
import { useTeachers } from "../hooks/useTeachers";
import { getFavorites } from "../api/users";
import { auth } from "../firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";

const INITIAL_DISPLAY_COUNT = 4;

const TeachersPage = () => {
  const [favorites, setFavorites] = useState({});
  const [teachers, isLoading, error, showMore] = useTeachers(INITIAL_DISPLAY_COUNT);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (user) {
        const favoriteIds = await getFavorites(user.uid);
        setFavorites(favoriteIds);
      }
    };

    fetchFavorites();
  }, [user]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>
        {teachers.map((el) => {
          return <TeacherCard key={el.tid} teacherData={el} user={user} favorites={favorites} />;
        })}
      </ul>
      <button onClick={showMore}>Load more</button>
    </div>
  );
};

export default TeachersPage;
