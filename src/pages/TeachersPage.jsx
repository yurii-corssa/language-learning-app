import Teachers from "../components/Teachers/Teachers";
import FilterForm from "../components/FilterForm/FilterForm";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import { TeachersWrapper } from "../components/Teachers/Teachers.styled";
import { getAllTeachers } from "../api/teachers";
import Skeleton from "../components/Skeleton/Skeleton";

const TeachersPage = ({ onlyFavorites = false }) => {
  const [teachers, setTeachers] = useState([]);
  const [filters, setFilters] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const newTeachers = await getAllTeachers();
        setTeachers(newTeachers);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    fetchTeachers();
  }, []);

  useEffect(() => {
    setFilters({
      language: searchParams.get("language"),
      level: searchParams.get("level"),
      price: searchParams.get("price"),
    });
  }, [searchParams]);

  if (error) {
    alert(error.message);
  }

  return (
    <SectionContainer>
      <TeachersWrapper>
        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            <FilterForm filters={filters} setSearchParams={setSearchParams} />
            <Teachers teachers={teachers} filters={filters} onlyFavorites={onlyFavorites} />
          </>
        )}
      </TeachersWrapper>
    </SectionContainer>
  );
};

export default TeachersPage;
