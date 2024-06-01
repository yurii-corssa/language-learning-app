import { useMediaQuery } from "../../hooks";
import { breakpoints } from "../../styles/variables";

const TabletAndDesktop = ({ children }) => {
  const isTabletAndDesktop = useMediaQuery(`(min-width: ${breakpoints.tablet}px)`);

  if (!isTabletAndDesktop) {
    return null;
  }

  return <>{children}</>;
};

export default TabletAndDesktop;
