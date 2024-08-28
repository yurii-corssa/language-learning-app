import PagePlaceholder from "../components/PagePlaceholder/PagePlaceholder";
import SectionContainer from "../components/SectionContainer/SectionContainer";

const baseURL = import.meta.env.BASE_URL;

const NotFoundPage = () => {
  return (
    <SectionContainer>
      <PagePlaceholder
        src={`${baseURL}images/page-not-found.svg`}
        notification="Oops! The page you&rsquo;re looking for doesn&rsquo;t exist. It might have been moved or deleted. Please check the URL, or go back to the homepage."
      />
    </SectionContainer>
  );
};

export default NotFoundPage;
