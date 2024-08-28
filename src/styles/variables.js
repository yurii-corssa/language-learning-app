export const colors = {
  primary: "#9FBAAE",
  lightPrimary: "#CBDED3",
  darkPrimary: "#295761",

  backgroundApp: "#F8F8F8",
  backgroundPage: "#FFF",
  avatarBorder: "#FBE9BA",
  black: "#121417",
  grey: "#8A8A89",
  white: "#FFF",
  green: "#38CD3E",
  red: "#FF4D4D",
  orange: "#FFAA00",
  blue: "#3C87CD",
  backdrop: "rgba(107, 114, 128, 0.75)",
  semiTransparent: (alpha = 0.5) => `rgba(18, 20, 23, ${alpha})`,
};

export const transitions = {
  default: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
};

export const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1280,
};

export const shadows = {
  menu: "-20px -2px 41px -25px rgba(107, 114, 128, 0.75)",
  dropdown: "0px 50px 100px -20px rgba(50, 50, 93, 0.1)",
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
  thankYouModal: {
    title: "Thank You!",
    text: "You have successfully booked a trial lesson with your language teacher.",
  },
};

export const pageContent = {
  isEmpty: {
    noFavTeachers: "You don't have any favorite teachers yet. Add some to see them here!",
    noFilterTeachers:
      "No teachers found matching your filter criteria. Please try adjusting your filters.",
  },
  isLastPage: "You have reached the end of the list of teachers.",
};
