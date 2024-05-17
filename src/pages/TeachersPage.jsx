import TeacherCard from "../components/TeacherCard/TeacherCard";
import { useTeachers } from "../hooks/useTeachers";

const TeachersPage = () => {
  const [teachers, setDisplayedCardCount, isLoading, error] = useTeachers(3);

  const showMoreCards = () => {
    setDisplayedCardCount((prevCount) => prevCount + 5);
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>
        {teachers.map((el) => {
          return <TeacherCard key={el.key} data={el} />;
        })}
      </ul>
      <button onClick={showMoreCards}>Load more</button>
    </div>
  );
};

export default TeachersPage;
