import { LogoText, LogoWrapper } from "./HomeLogo.styled";
import sprite from "/assets/images/sprite.svg";

const HomeLogo = ({ to = "/" }) => (
  <LogoWrapper to={to}>
    <svg width="28" height="28">
      <use href={`${sprite}#icon-home`} />
    </svg>
    <LogoText>LearnLingo</LogoText>
  </LogoWrapper>
);

export default HomeLogo;
