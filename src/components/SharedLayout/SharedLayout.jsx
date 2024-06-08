import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { ModalProvider } from "../../contexts/ModalContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container } from "./SharedLayout.styled";
import { MobileAndTablet } from "../Responsive";
import MobileMenu from "../MobileMenu/MobileMenu";
import { pageScaleVariants } from "../../styles/animations";
import { useAuth } from "../../hooks";

const SharedLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    <ModalProvider>
      <Container
        variants={pageScaleVariants}
        animate={isMobileMenuOpen ? "menuOpen" : "menuClosed"}
        transition={{ duration: 0.3 }}
      >
        <Header user={user} openMenu={() => setIsMobileMenuOpen(true)} />

        <MobileAndTablet>
          <MobileMenu
            user={user}
            onClose={() => setIsMobileMenuOpen(false)}
            isOpen={isMobileMenuOpen}
          />
        </MobileAndTablet>

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
