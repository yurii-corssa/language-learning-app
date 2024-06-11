import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SharedMobileMenu from "./MobileMenu/MobileMenu";
import AppContainer from "./AppContainer/AppContainer";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { SharedModal } from "./Modals";
import SectionContainer from "./SectionContainer/SectionContainer";

const SharedLayout = () => {
  return (
    <>
      <AppContainer>
        <Header />

        <SectionContainer>
          <main>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </main>

          <Footer />
        </SectionContainer>
      </AppContainer>

      <SharedModal />
      <SharedMobileMenu />
    </>
  );
};

export default SharedLayout;
