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
      ease: "easeInOut",
      duration: 0.3,
    },
  },

  exit: {
    opacity: 0,
    scale: 0.95,
    x: "-50%",
    y: "-55%",
    transition: {
      ease: "easeOut",
      duration: 0.2,
    },
  },
};

export const pageScaleVariants = {
  menuOpen: { scale: 0.98 },
  menuClosed: { scale: 1 },
};

export const opacityVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 0.2,
      delay: 0.2,
    },
  },
};

export const headerInVariants = {
  initial: {},
  animate: {},
  exit: {},
};

export const headerChildVariants = {
  initial: {
    opacity: 0,
    y: "-50%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.8,
      ease: "easeIn",
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: "50%",
    transition: {
      ease: "easeOut",
      duration: 0.9,
    },
  },
};

export const menuTranslateVariants = {
  initial: {
    opacity: 0,
    x: "100%",
  },
  animate: {
    opacity: 1,
    x: "0%",
    transition: {
      ease: "easeInOut",
      duration: 0.4,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

export const menuChildrenVariants = {
  initial: {
    opacity: 0,
    x: "50%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.6,
      ease: "easeIn",
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    x: "-50%",
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

export const reviewsVariants = {
  initial: { height: "24px" },
  animate: { height: "auto", transition: { ease: "easeIn", duration: 0.3, staggerChildren: 0.1 } },
  exit: {},
};

export const filterVariants = {
  initial: { height: "0" },
  animate: { height: "auto", transition: { ease: "easeIn", duration: 0.3, staggerChildren: 0.1 } },
  exit: { height: "0" },
};

export const slideUpVariants = {
  initial: {
    opacity: 0,
    y: "10%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 17,
    },
  },
  exit: {
    opacity: 0,
    y: "10%",
  },
};

export const scaleUpVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: (delay) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 17,
      ...(delay && { delay }),
    },
  }),
};

export const dropdownVariants = {
  closed: {
    opacity: 0,
    scale: 0.9,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 23,
    },
    transitionEnd: {
      display: "none",
    },
  },
  open: {
    display: "flex",
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 23,
    },
  },
};

export const scrollToTopBtnVariants = {
  visible: {
    display: "flex",
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  },
};
