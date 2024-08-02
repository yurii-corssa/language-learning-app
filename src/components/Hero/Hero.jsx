import Info from "./Info/Info";
import Stats from "./Stats/Stats";
import { SvgIcon } from "../ui";
import { scaleUpVariants } from "../../styles/animations";
import { Emoji, HeroContainer, ImageContainer, Mac } from "./Hero.styled";

const baseURL = import.meta.env.BASE_URL;

const Hero = () => {
  return (
    <HeroContainer>
      <ImageContainer
        custom={0}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={scaleUpVariants}
        layout="position"
      >
        <Emoji src={`${baseURL}images/emoji.png`} alt="emoji" />

        <Mac>
          <SvgIcon name="icon-mac" width="100%" height="100%" />
        </Mac>
      </ImageContainer>

      <Info delay={0.2} />

      <Stats delay={0.3} />
    </HeroContainer>
  );
};

export default Hero;
