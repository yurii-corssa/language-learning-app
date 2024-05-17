import { get, limitToFirst, orderByKey, query, ref, startAfter } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../firebaseApp";

export const useTeachers = (initialDisplayCount) => {
  const [teachers, setTeachers] = useState([]);
  const [displayedCardCount, setDisplayedCardCount] = useState(initialDisplayCount);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchTrachers = async () => {
      const newTeachers = [];
      const lastTeacherKey = displayedCardCount - initialDisplayCount - 1;
      const queryRef = query(
        ref(database),
        orderByKey(),
        startAfter(lastTeacherKey.toString()),
        limitToFirst(initialDisplayCount)
      );

      try {
        const snapshot = await get(queryRef);

        snapshot.forEach((teacher) => {
          newTeachers.push({ key: teacher.key, ...teacher.val() });
        });
        if (initialDisplayCount === displayedCardCount) {
          setTeachers(newTeachers);
        } else {
          setTeachers((prevTeachers) => [...prevTeachers, ...newTeachers]);
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchTrachers();

    setIsLoading(false);
  }, [displayedCardCount, initialDisplayCount]);

  return [teachers, setDisplayedCardCount, isLoading, error];
};
