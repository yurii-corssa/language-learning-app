import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Modal, ModalBody } from "./Modal";
import { LoginForm, RegistrationForm } from "./AuthForms";

const SharedLayout = () => {
  const [isModal, setIsModal] = useState(null);

  return (
    <>
      <Header openModal={setIsModal} />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />

      {isModal === "registration" && (
        <Modal onClose={() => setIsModal(null)}>
          <ModalBody
            title="Registration"
            text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
          >
            <RegistrationForm onClose={() => setIsModal(null)} />
          </ModalBody>
        </Modal>
      )}
      {isModal === "login" && (
        <Modal onClose={() => setIsModal(null)}>
          <ModalBody
            title="Log In"
            text="Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
          >
            <LoginForm onClose={() => setIsModal(null)} />
          </ModalBody>
        </Modal>
      )}
    </>
  );
};

export default SharedLayout;
