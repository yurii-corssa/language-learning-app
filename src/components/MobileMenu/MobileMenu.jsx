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
import { useEffect } from "react";

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

const MobileMenu = ({ user, isOpen, onClose }) => {
  useEffect(() => {
    console.log("user", user);
  }, [user]);
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <Backdrop onClose={onClose} />
          <MenuContainer
            variants={menuTranslateVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Button variant="x" onClick={onClose}>
              <SvgIcon name="icon-x" width="32" height="32" />
            </Button>

            {user && (
              <UserContainer>
                <Avatar src={user.photoURL} alt={user.displayName} />

                <UserName>{user.displayName}</UserName>
              </UserContainer>
            )}

            <Mobile>
              <HeaderLink to={routes.HOME} onClick={onClose}>
                Home
              </HeaderLink>
              <HeaderLink to={routes.TEACHERS} onClick={onClose}>
                Teachers
              </HeaderLink>
              {user && (
                <HeaderLink to={routes.FAVORITES} onClick={onClose}>
                  Favorites
                </HeaderLink>
              )}
            </Mobile>

            <AuthBtns type="mobile" onCloseMobileMenu={onClose} />
          </MenuContainer>
        </>
      )}
    </AnimatePresence>,
    menuRoot
  );
};

export default MobileMenu;
