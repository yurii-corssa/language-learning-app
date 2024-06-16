import { useModal, useSidebar } from "../../hooks";
import { pageScaleVariants } from "../../styles/animations";
import { AppContainerStyled } from "./AppContainer.styled";

const AppContainer = ({ children }) => {
  const { isSidebarOpen } = useSidebar();
  const { content } = useModal();

  return (
    <AppContainerStyled
      variants={pageScaleVariants}
      animate={isSidebarOpen || content ? "menuOpen" : "menuClosed"}
      transition={{ duration: 0.3 }}
    >
      {children}
    </AppContainerStyled>
  );
};

export default AppContainer;
