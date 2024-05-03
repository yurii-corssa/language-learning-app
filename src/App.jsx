import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
