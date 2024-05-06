import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "/firebaseApp";
import { routes } from "/helpers/routes";

const PrivateRoute = ({ comp: Component, redirectTo = routes.HOME }) => {
  const [user, loading] = useAuthState(auth);

  const shouldRedirect = !user && !loading;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
