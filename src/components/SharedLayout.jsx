import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ModalProvider } from "../contexts/ModalContext";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const SharedLayout = () => {
  return (
    <ModalProvider>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </ModalProvider>
  );
};

export default SharedLayout;
