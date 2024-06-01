import { useMediaQuery } from "../../hooks";
import { breakpoints } from "../../styles/variables";

const MobileAndTablet = ({ children }) => {
  const isMobileAndTablet = useMediaQuery(`(max-width: ${breakpoints.desktop - 1}px)`);

  if (!isMobileAndTablet) {
    return null;
  }

  return <>{children}</>;
};

export default MobileAndTablet;
