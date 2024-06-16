export const colors = {
  primary: "#F4C550",
  backgroundApp: "#F8F8F8",
  backgroundPage: "#FFF",
  black: "#121417",
  white: "#FFF",
  error: "#FF4D4D",
  backdrop: "rgba(107, 114, 128, 0.75)",
  semiTransparent: (alpha = 0.5) => `rgba(18, 20, 23, ${alpha})`,
};

export const transitions = {
  default: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
};

export const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
};

export const shadows = {
  menu: "-20px -2px 41px -25px rgba(107, 114, 128, 0.75)",
};

export const modalContent = {
  login: {
    title: "Log In",
    text: "Welcome back! Please enter your credentials to access your account and continue your search for an teacher.",
  },
  registration: {
    title: "Registration",
    text: "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information",
  },
  authRequiredModal: {
    title: "Authentication Required",
    text: "You need to be logged in to access this feature.",
  },
};
