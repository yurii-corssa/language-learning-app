export const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { ease: "easeOut", duration: 0.3 } },
  exit: { opacity: 0, transition: { ease: "easeIn", duration: 0.2 } },
};

export const modalScaleVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    x: "-50%",
    y: "-55%",
  },

  animate: {
    opacity: 1,
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },

  exit: {
    opacity: 0,
    scale: 0.95,
    x: "-50%",
    y: "-45%",
    transition: {
      ease: "easeIn",
      duration: 0.2,
    },
  },
};

export const menuTranslateVariants = {
  initial: { x: "100%" },
  animate: { x: "0%", transition: { ease: "easeInOut", duration: 0.4 } },
  exit: { x: "100%", transition: { ease: "easeInOut", duration: 0.3 } },
};
