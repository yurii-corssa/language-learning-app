import TeacherCard from "../components/TeacherCard/TeacherCard";
import { useTeachers } from "../hooks/useTeachers";

const INITIAL_DISPLAY_COUNT = 4;

const TeachersPage = () => {
  const [teachers, isLoading, error, showMore] = useTeachers(INITIAL_DISPLAY_COUNT);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>
        {teachers.map((el) => {
          return <TeacherCard key={el.tid} teacherData={el} />;
        })}
      </ul>
      <button onClick={showMore}>Load more</button>
    </div>
  );
};

export default TeachersPage;
