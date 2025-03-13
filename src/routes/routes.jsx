import { Routes, Route } from "react-router-dom";
import { HomePage } from "@pages";
import { AboutPage } from "@pages";
import { Paths } from "@constants";
import { UsersPage } from "@pages";

export const AppRoutes = () => (
    <Routes>
      <Route path={Paths.Main} element={<HomePage />} />
      <Route path={Paths.Users} element={<UsersPage />} />
    </Routes>
);