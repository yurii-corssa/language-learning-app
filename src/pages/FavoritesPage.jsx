import Teachers from "../components/Teachers/Teachers";
import FilterForm from "../components/FilterForm/FilterForm";

const TeachersPage = () => {
  return (
    <>
      <FilterForm />
      <Teachers onlyFavorites={true} />
    </>
  );
};

export default TeachersPage;
