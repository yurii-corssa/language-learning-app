import { useNavigate } from "react-router-dom";
import { routes } from "../../../helpers/routes";
import { scaleUpVariants } from "../../../styles/animations";
import { Description, Highlight, InfoContainer, StartBtn, Title } from "./Info.styled";

const Info = ({ delay }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.TEACHERS);
  };

  return (
    <InfoContainer
      custom={delay}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={scaleUpVariants}
      layout="position"
    >
      <Title>
        Unlock your potential with the best <Highlight>language</Highlight> tutors
      </Title>

      <Description>
        Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language
        proficiency to new heights by connecting with highly qualified and experienced tutors.
      </Description>

      <StartBtn onClick={handleClick}>Get started</StartBtn>
    </InfoContainer>
  );
};

export default Info;
