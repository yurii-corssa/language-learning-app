import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SharedMobileMenu from "./MobileMenu/MobileMenu";
import AppContainer from "./AppContainer/AppContainer";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { SharedModal } from "./Modals";

const SharedLayout = () => {
  return (
    <AppContainer>
      <Header />

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />

      <SharedModal />
      <SharedMobileMenu />
    </AppContainer>
  );
};

export default SharedLayout;
