import { createContext, useCallback, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [content, setContent] = useState(null);

  const openModal = useCallback((content) => {
    setContent(content);
  }, []);

  const closeModal = useCallback(() => {
    setContent(null);
  }, []);

  const contextValue = { content, openModal, closeModal };

  return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
