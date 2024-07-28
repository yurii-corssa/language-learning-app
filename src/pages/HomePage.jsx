import Backdrop from "../components/Backdrop/Backdrop";
import Hero from "../components/Hero/Hero";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import { RingLoader } from "../components/ui";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { isLoading } = useAuth();

  return (
    <SectionContainer>
      {isLoading ? (
        <Backdrop>
          <RingLoader />
        </Backdrop>
      ) : (
        <Hero />
      )}
    </SectionContainer>
  );
};

export default HomePage;
