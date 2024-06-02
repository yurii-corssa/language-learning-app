import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ModalProvider } from "../../contexts/ModalContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <ModalProvider>
      <Container>
        <Header />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
      <Footer />
    </ModalProvider>
  );
};

export default SharedLayout;
