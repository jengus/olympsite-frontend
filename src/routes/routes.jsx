import { Routes, Route } from "react-router-dom";
import { HomePage } from "@pages";
import { AboutPage } from "@pages";

export const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
);