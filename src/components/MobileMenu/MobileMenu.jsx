import { Button, SvgIcon } from "../ui";
import { HeaderLink } from "../Header/Header.styled";
import { routes } from "../../helpers/routes";
import { Mobile } from "../Responsive";
import AuthBtns from "../Header/AuthBtns/AuthBtns";
import Backdrop from "../Backdrop/Backdrop";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import { menuTranslateVariants } from "../../styles/animations";
import { MenuContainer } from "./MobileMenu.styled";
import Avatar from "../ui/Avatar/Avatar";
import styled from "styled-components";
import { useAuth, useSidebar } from "../../hooks";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

export const UserName = styled.span`
  font-weight: 700;
  margin-bottom: 18px;
`;

const menuRoot = document.querySelector("#modal-root");

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
              <HeaderLink to={routes.HOME} onClick={closeSidebar}>
                Home
              </HeaderLink>
              <HeaderLink
                to={routes.TEACHERS}
                onClick={() => {
                  debugger;
                  closeSidebar();
                }}
              >
                Teachers
              </HeaderLink>
              {user && (
                <HeaderLink to={routes.FAVORITES} onClick={closeSidebar}>
                  Favorites
                </HeaderLink>
              )}
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
