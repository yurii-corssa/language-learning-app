import { createPortal } from "react-dom";
import { lazy, Suspense } from "react";
import { useSidebar } from "../hooks";
import { AnimatePresence } from "framer-motion";
import LinearIndeterminate from "./ui/LinearIndeterminate/LinearIndeterminate";

const MobileMenu = lazy(() => import("./MobileMenu/MobileMenu"));

const SharedMobileMenu = () => {
  const { isSidebarOpen } = useSidebar();

  const menuRoot = document.querySelector("#menu-root");

  return createPortal(
    <Suspense fallback={<LinearIndeterminate />}>
      <AnimatePresence>{isSidebarOpen && <MobileMenu />}</AnimatePresence>
    </Suspense>,
    menuRoot
  );
};

export default SharedMobileMenu;
