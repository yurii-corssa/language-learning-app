import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SharedMobileMenu from "./MobileMenu/MobileMenu";
import AppContainer from "./AppContainer/AppContainer";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { SharedModal } from "./Modals";
import styled from "styled-components";

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const SharedLayout = () => {
  return (
    <>
      <AppContainer>
        <Header />

        <Main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Main>

        <Footer />
      </AppContainer>

      <SharedModal />
      <SharedMobileMenu />
    </>
  );
};

export default SharedLayout;
