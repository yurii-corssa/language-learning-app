import { useMediaQuery } from "../../hooks";
import { breakpoints } from "../../styles/variables";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.tablet - 1}px)`);

  if (!isMobile) {
    return null;
  }

  return <>{children}</>;
};

export default Mobile;
