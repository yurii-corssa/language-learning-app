import Teachers from "../components/Teachers/Teachers";
import FilterForm from "../components/FilterForm/FilterForm";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const TeachersPage = () => {
  const [filters, setFilters] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setFilters({
      language: searchParams.get("language"),
      level: searchParams.get("level"),
      price: searchParams.get("price"),
    });
  }, [searchParams]);

  return (
    <>
      {filters && <FilterForm filters={filters} setSearchParams={setSearchParams} />}
      {filters && <Teachers filters={filters} />}
    </>
  );
};

export default TeachersPage;
