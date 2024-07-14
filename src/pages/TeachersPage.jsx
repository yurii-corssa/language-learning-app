import Teachers from "../components/Teachers/Teachers";
import FilterForm from "../components/FilterForm/FilterForm";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import { TeachersWrapper } from "../components/Teachers/Teachers.styled";

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
    <SectionContainer>
      <TeachersWrapper>
        {filters && <FilterForm filters={filters} setSearchParams={setSearchParams} />}
        {filters && <Teachers filters={filters} />}
      </TeachersWrapper>
    </SectionContainer>
  );
};

export default TeachersPage;
