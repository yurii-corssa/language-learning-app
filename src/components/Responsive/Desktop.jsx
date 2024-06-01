import { useMediaQuery } from "../../hooks";
import { breakpoints } from "../../styles/variables";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.desktop}px)`);

  if (!isDesktop) {
    return null;
  }

  return <>{children}</>;
};
export default Desktop;
