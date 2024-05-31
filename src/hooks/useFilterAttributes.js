import { useEffect, useState } from "react";
import { getAllTeachers } from "../api/teachers";

export const useFilterAttributes = () => {
  const [languages, setLanguages] = useState([]);
  const [levels, setLevels] = useState([]);
  const [prices, setPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const teachers = await getAllTeachers();

        const languagesSet = new Set();
        const levelsSet = new Set();
        const pricesSet = new Set();

        teachers.forEach((teacher) => {
          teacher.languages.forEach((lang) => languagesSet.add(lang));
          teacher.levels.forEach((lvl) => levelsSet.add(lvl));
          pricesSet.add(teacher.price_per_hour);
        });

        setLanguages([...languagesSet]);
        setLevels([...levelsSet]);
        setPrices([...pricesSet]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, []);

  return [languages, levels, prices, isLoading, error];
};
