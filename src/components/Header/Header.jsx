import { routes } from "../../helpers/routes";
import { useAuth } from "../../hooks/useAuth";
import HomeLogo from "../ui/HomeLogo/HomeLogo";
import { HeaderLink, HeaderStyled, NavMenu } from "./Header.styled";
import AuthBtns from "./AuthBtns/AuthBtns";
import { Desktop, MobileAndTablet, TabletAndDesktop } from "../Responsive";
import { Button, SvgIcon } from "../ui";

const Header = ({ openMenu }) => {
  const { user } = useAuth();

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
        <Button variant="icon" onClick={openMenu}>
          <SvgIcon name="icon-burger-menu" width="28" height="28" />
        </Button>
      </MobileAndTablet>

      <Desktop>
        <AuthBtns />
      </Desktop>
    </HeaderStyled>
  );
};

export default Header;
