import { useLocation } from "react-router-dom";
import { useModal, useSidebar } from "../../hooks";
import { pageScaleVariants } from "../../styles/animations";
import { AppContainerStyled } from "./AppContainer.styled";
import { useEffect, useRef } from "react";

const AppContainer = ({ children }) => {
  const { isSidebarOpen } = useSidebar();
  const { content } = useModal();
  const { pathname } = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      console.log("scroll");
    }
  }, [pathname, containerRef]);

  return (
    <AppContainerStyled
      ref={containerRef}
      variants={pageScaleVariants}
      animate={isSidebarOpen || content ? "menuOpen" : "menuClosed"}
      transition={{ duration: 0.3 }}
    >
      {children}
    </AppContainerStyled>
  );
};

export default AppContainer;
