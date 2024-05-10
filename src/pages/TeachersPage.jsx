import { database } from "../firebaseApp";
import { ref } from "firebase/database";
// import { useEffect } from "react";
import { useList } from "react-firebase-hooks/database";
import TeacherCard from "../components/TeacherCard/TeacherCard";

const TeachersPage = () => {
  const [snapshots, loading, error] = useList(ref(database));

  // useEffect(() => {
  //   console.log(loading);
  // }, [loading]);

  // useEffect(() => {
  //   console.log(error);
  // }, [error]);

  // useEffect(() => {}, [snapshots]);

  return (
    <div>
      <ul>
        {snapshots.map((el) => {
          return <TeacherCard key={el.key} data={el.val()} />;
        })}
      </ul>
    </div>
  );
};

export default TeachersPage;
