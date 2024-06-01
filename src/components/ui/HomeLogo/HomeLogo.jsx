import SvgIcon from "../SvgIcon";
import { LogoText, LogoWrapper } from "./HomeLogo.styled";

const HomeLogo = ({ to = "/" }) => (
  <LogoWrapper to={to}>
    <SvgIcon name="icon-home" width="28" height="28" />
    <LogoText>LearnLingo</LogoText>
  </LogoWrapper>
);

export default HomeLogo;
