import { Navigate } from "react-router-dom";
import { routes } from "../helpers/routes";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ comp: Component, redirectTo = routes.HOME }) => {
  const { user, isLoading } = useAuth();

  const shouldRedirect = !user && !isLoading;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
