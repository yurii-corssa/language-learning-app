import { routes } from "../../helpers/routes";
import { useAuth } from "../../hooks/useAuth";
import HomeLogo from "../ui/HomeLogo/HomeLogo";
import BurgerBtn from "../ui/BurgerBtn";
import TabletAndDesktop from "../Responsive/TabletAndDesktop";
import MobileAndTablet from "../Responsive/MobileAndTablet";
import Desktop from "../Responsive/Desktop";
import { HeaderLink, HeaderStyled, NavMenu } from "./Header.styled";
import AuthBtns from "./AuthBtn/AuthBtns";

const Header = () => {
  const { user } = useAuth();

  const handleBurgerMenu = () => {
    //
  };

  return (
    <HeaderStyled>
      <NavMenu>
        <HomeLogo to={routes.HOME} />

        <TabletAndDesktop>
          <HeaderLink to={routes.HOME}>Home</HeaderLink>

          <HeaderLink to={routes.TEACHERS}>Teachers</HeaderLink>

          {user && <HeaderLink to={routes.FAVORITES}>Favorites</HeaderLink>}
        </TabletAndDesktop>
      </NavMenu>

      <MobileAndTablet>
        <BurgerBtn onClick={handleBurgerMenu} />
      </MobileAndTablet>

      <Desktop>
        <AuthBtns />
      </Desktop>
    </HeaderStyled>
  );
};

export default Header;
