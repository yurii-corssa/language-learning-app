import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { routes } from "./helpers/routes";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import PrivateRoute from "./components/PrivateRoute";
import { useAuth } from "./hooks/useAuth";

const HomePage = lazy(() => import("./pages/HomePage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  const { isLoading } = useAuth();

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Routes>
      <Route path={routes.HOME} element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path={routes.TEACHERS} element={<TeachersPage />} />
        <Route path={routes.FAVORITES} element={<PrivateRoute comp={<FavoritesPage />} />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
