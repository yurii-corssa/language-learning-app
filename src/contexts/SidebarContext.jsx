import { createContext, useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "../hooks";
import { breakpoints } from "../styles/variables";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobileAndTablet = useMediaQuery(`(max-width: ${breakpoints.desktop - 1}px)`);

  useEffect(() => {
    if (!isMobileAndTablet) {
      setIsOpen(false);
    }
  }, [isMobileAndTablet]);

  const openSidebar = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsOpen(false);
  }, []);

  const contextValue = { isSidebarOpen: isOpen, openSidebar, closeSidebar };

  return <SidebarContext.Provider value={contextValue}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
