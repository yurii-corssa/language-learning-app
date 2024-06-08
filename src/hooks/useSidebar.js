import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

export const useSidebar = () => {
  return useContext(SidebarContext);
};
