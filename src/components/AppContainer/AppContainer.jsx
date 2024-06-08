import { useSidebar } from "../../hooks";
import { pageScaleVariants } from "../../styles/animations";
import { AppContainerStyled } from "./AppContainer.styled";

const AppContainer = ({ children }) => {
  // const { isSidebarOpen } = useSidebar();

  return (
    <AppContainerStyled
    // variants={pageScaleVariants}
    // animate={isSidebarOpen ? "menuOpen" : "menuClosed"}
    // transition={{ duration: 0.3 }}
    >
      {children}
    </AppContainerStyled>
  );
};

export default AppContainer;
