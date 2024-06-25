import { routes } from "../../helpers/routes";
import { HeaderLink, HeaderContainer, NavMenu } from "./Header.styled";
import AuthBtns from "./AuthBtns/AuthBtns";
import { Desktop, MobileAndTablet, TabletAndDesktop } from "../Responsive";
import { Button, HomeLogo, SvgIcon } from "../ui";
import { useAuth, useSidebar } from "../../hooks";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const { user } = useAuth();
  const { openSidebar } = useSidebar();

  return (
    <AnimatePresence initial={false} mode="wait">
      <HeaderContainer>
        <NavMenu
          key={!user ? "isLogout" : "isLogin"}
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "50%" }}
        >
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
          <AuthBtns />
        </Desktop>
      </HeaderContainer>
    </AnimatePresence>
  );
};

export default Header;
