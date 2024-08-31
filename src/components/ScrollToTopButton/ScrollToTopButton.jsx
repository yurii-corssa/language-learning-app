import { useEffect, useState } from "react";
import { SvgIcon } from "../ui";
import { scrollToTopBtnVariants } from "../../styles/animations";
import { ScrollToTopButtonStyled } from "./ScrollToTopButton.styled";

const ScrollToTopButton = ({ parentRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const appContainer = parentRef.current;

    const toggleVisibility = () => {
      if (appContainer.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    appContainer.addEventListener("scroll", toggleVisibility);

    return () => appContainer.removeEventListener("scroll", toggleVisibility);
  }, [parentRef]);

  const scrollToTop = () => {
    parentRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollToTopButtonStyled
      variants={scrollToTopBtnVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit="hidden"
      onClick={scrollToTop}
    >
      <SvgIcon name="icon-chevron-down" />
    </ScrollToTopButtonStyled>
  );
};

export default ScrollToTopButton;
