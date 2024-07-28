import { Avatar, Button, SvgIcon } from "../ui";
import { HeaderLink, UserContainer, UserName } from "../Header/Header.styled";
import { routes } from "../../helpers/routes";
import { Mobile } from "../Responsive";
import AuthBtns from "../Header/AuthBtns/AuthBtns";
import Backdrop from "../Backdrop/Backdrop";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import { menuTranslateVariants, menuChildrenVariants } from "../../styles/animations";
import { useAuth, useSidebar } from "../../hooks";
import { MenuContainer, NavMobileMenu } from "./MobileMenu.styled";

const menuRoot = document.querySelector("#menu-root");

const SharedMobileMenu = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar();
  const { user } = useAuth();

  return createPortal(
    <AnimatePresence>
      {isSidebarOpen && (
        <>
          <Backdrop onClose={closeSidebar} />
          <MenuContainer
            variants={menuTranslateVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Button variant="x" onClick={closeSidebar}>
              <SvgIcon name="icon-x" width="32" height="32" />
            </Button>

            {user && (
              <UserContainer>
                <Avatar src={user.photoURL} alt={user.displayName} />

                <UserName>{user.displayName}</UserName>
              </UserContainer>
            )}

            <Mobile>
              <NavMobileMenu>
                <HeaderLink variants={menuChildrenVariants} to={routes.HOME} onClick={closeSidebar}>
                  Home
                </HeaderLink>
                <HeaderLink
                  variants={menuChildrenVariants}
                  to={routes.TEACHERS}
                  onClick={closeSidebar}
                >
                  Teachers
                </HeaderLink>
                {user && (
                  <HeaderLink
                    variants={menuChildrenVariants}
                    to={routes.FAVORITES}
                    onClick={closeSidebar}
                  >
                    Favorites
                  </HeaderLink>
                )}
              </NavMobileMenu>
            </Mobile>

            <AuthBtns type="mobile" onCloseMobileMenu={closeSidebar} />
          </MenuContainer>
        </>
      )}
    </AnimatePresence>,
    menuRoot
  );
};

export default SharedMobileMenu;
