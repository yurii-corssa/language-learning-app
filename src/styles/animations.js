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
  initial: { opacity: 0, x: "100%" },
  animate: { opacity: 1, x: "0%", transition: { ease: "easeInOut", duration: 0.4 } },
  exit: { opacity: 0, x: "100%", transition: { ease: "easeInOut", duration: 0.3 } },
};

export const pageScaleVariants = {
  menuOpen: { scale: 0.98 },
  menuClosed: { scale: 1 },
};

export const inputMessageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
