import Teachers from "../components/Teachers/Teachers";
import FilterForm from "../components/FilterForm/FilterForm";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import { TeachersWrapper } from "../components/Teachers/Teachers.styled";
import { getAllTeachers } from "../api/teachers";
import Skeleton from "../components/Skeleton/Skeleton";
import { useToast } from "../hooks";

const TeachersPage = ({ onlyFavorites = false }) => {
  const [teachers, setTeachers] = useState([]);
  const [filters, setFilters] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const { addToast } = useToast();

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const newTeachers = await getAllTeachers();
        setTeachers(newTeachers);
      } catch (error) {
        console.error(error);
        addToast.error("Failed to load data. Please check your connection or try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    fetchTeachers();
  }, [addToast]);

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
