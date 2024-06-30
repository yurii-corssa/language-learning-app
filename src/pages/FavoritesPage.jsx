import { useCallback, useState } from "react";
import Teachers from "../components/Teachers/Teachers";
import FilterForm from "../components/FilterForm/FilterForm";

const TeachersPage = () => {
  const [filters, setFilters] = useState({
    language: "",
    level: "",
    price: "",
  });

  const changeFilter = useCallback((filterOptions) => {
    setFilters((prev) => ({ ...prev, ...filterOptions }));
  }, []);
  return (
    <>
      <FilterForm changeFilter={changeFilter} />
      <Teachers filters={filters} onlyFavorites={true} />
    </>
  );
};

export default TeachersPage;
