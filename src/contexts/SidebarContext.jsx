import { createContext, useCallback, useState } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

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
