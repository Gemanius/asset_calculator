import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { BottomNavBar } from "../components/bottomNavBar/Nav";
import { MainPage } from "../pages/Main";
import { TotalAssetsModal } from "../components/TotalAssetsModal/TotalAssets";
import { Login } from "../pages/Login";
import ProtectedRoute from "./protected";
import { Proifle } from "../pages/Profile";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route element={<BottomNavBar />}>
      <Route index element={<MainPage />} />
      <Route path="home" element={<MainPage />}>
        <Route path="total" element={<TotalAssetsModal />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="profile" element={<Proifle />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Route>
  )
);
