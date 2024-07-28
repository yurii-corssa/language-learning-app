import Info from "./Info/Info";
import Stats from "./Stats/Stats";
import { SvgIcon } from "../ui";
import { scaleUpVariants } from "../../styles/animations";
import { routes } from "../../helpers/routes";
import { Emoji, HeroContainer, ImageContainer, Mac } from "./Hero.styled";

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
        <Emoji src={`${routes.BASE}/images/emoji.png`} alt="emoji" />

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
