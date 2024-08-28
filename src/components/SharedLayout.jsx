import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import AppContainer from "./AppContainer/AppContainer";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import SharedMobileMenu from "./SharedMobileMenu";
import SharedModal from "./SharedModal";
import LinearIndeterminate from "./ui/LinearIndeterminate/LinearIndeterminate";
import SharedToasts from "./SharedToasts";
import { Main } from "../styles/GlobalStyle.styled";

const SharedLayout = () => {
  return (
    <>
      <AppContainer>
        <Header />

        <Main>
          <Suspense fallback={<LinearIndeterminate />}>
            <Outlet />
          </Suspense>
        </Main>

        <Footer />
      </AppContainer>

      <SharedModal />
      <SharedMobileMenu />
      <SharedToasts />
    </>
  );
};

export default SharedLayout;
