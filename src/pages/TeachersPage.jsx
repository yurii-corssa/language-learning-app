import { database } from "../firebaseApp";
import { ref } from "firebase/database";
import { useEffect } from "react";
import { useList } from "react-firebase-hooks/database";

const TeachersPage = () => {
  const [snapshots, loading, error] = useList(ref(database));

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  useEffect(() => {
    snapshots.map((el) => {
      console.log(el.key, el.val());
    });
  }, [snapshots]);

  return <div>TeachersPage</div>;
};

export default TeachersPage;
