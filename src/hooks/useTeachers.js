import { useEffect, useState } from "react";
import { getTeachers } from "../api/teachers";

export const useTeachers = (initialDisplayCount = 4) => {
  const [teachers, setTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchTrachers = async () => {
      try {
        const newTeachers = await getTeachers(initialDisplayCount);
        setTeachers(newTeachers);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrachers();
  }, [initialDisplayCount]);

  const showMore = async () => {
    setIsLoading(true);

    const lastTeacherKey = teachers[teachers.length - 1]?.tid;

    try {
      const newTeachers = await getTeachers(initialDisplayCount, lastTeacherKey);
      setTeachers((prevTeachers) => [...prevTeachers, ...newTeachers]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return [teachers, isLoading, error, showMore];
};
