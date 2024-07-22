import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SharedMobileMenu from "./MobileMenu/MobileMenu";
import AppContainer from "./AppContainer/AppContainer";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { SharedModal } from "./Modals";
import styled from "styled-components";
import { RingLoader } from "./ui";
import Backdrop from "./Backdrop/Backdrop";
import { breakpoints } from "../styles/variables";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;

  @media only screen and (max-width: ${breakpoints.tablet - 1}px) {
    min-height: calc(100dvh - 68px);
  }
  @media only screen and (min-width: ${breakpoints.tablet}px) {
    min-height: calc(100vh - 88px);
  }
`;

const SharedLayout = () => {
  return (
    <>
      <AppContainer>
        <Header />

        <Main>
          <Suspense
            fallback={
              <Backdrop>
                <RingLoader />
              </Backdrop>
            }
          >
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
