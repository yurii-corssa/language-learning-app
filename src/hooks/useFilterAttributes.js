import { useEffect, useState } from "react";
import { getAllTeachers } from "../api/teachers";
import { useToast } from "./useToast";

export const useFilterAttributes = () => {
  const [languages, setLanguages] = useState([]);
  const [levels, setLevels] = useState([]);
  const [prices, setPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { addToast } = useToast();

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

        const sortedPrices = [...pricesSet].sort((a, b) => a - b);

        setLanguages([...languagesSet]);
        setLevels([...levelsSet]);
        setPrices(sortedPrices);
      } catch (error) {
        console.error(error);
        addToast.error("Something went wrong. Please try again later or refresh the page.");
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [addToast]);

  return [languages, levels, prices, isLoading];
};
