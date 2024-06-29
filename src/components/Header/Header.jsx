import { routes } from "../../helpers/routes";
import { HeaderLink, HeaderContainer, NavMenu } from "./Header.styled";
import AuthBtns from "./AuthBtns/AuthBtns";
import { Desktop, MobileAndTablet, TabletAndDesktop } from "../Responsive";
import { Button, HomeLogo, SvgIcon } from "../ui";
import { useAuth, useSidebar } from "../../hooks";
import { AnimatePresence } from "framer-motion";
import { headerChildVariants, headerInVariants } from "../../styles/animations";

const Header = () => {
  const { user } = useAuth();
  const { openSidebar } = useSidebar();

  return (
    <AnimatePresence>
      <HeaderContainer variants={headerInVariants} initial="initial" animate="animate" exit="exit">
        <NavMenu key={user ? "isLoginMenu" : "isLogoutMenu"} variants={headerChildVariants}>
          <HomeLogo to={routes.HOME} />

          <TabletAndDesktop>
            <HeaderLink to={routes.HOME}>Home</HeaderLink>
            <HeaderLink to={routes.TEACHERS}>Teachers</HeaderLink>
            {user && <HeaderLink to={routes.FAVORITES}>Favorites</HeaderLink>}
          </TabletAndDesktop>
        </NavMenu>

        <MobileAndTablet>
          <Button variant="icon" onClick={openSidebar}>
            <SvgIcon name="icon-burger-menu" width="28" height="28" />
          </Button>
        </MobileAndTablet>

        <Desktop>
          <AuthBtns key={user ? "isLoginAuth" : "isLogoutAuth"} />
        </Desktop>
      </HeaderContainer>
    </AnimatePresence>
  );
};

export default Header;
