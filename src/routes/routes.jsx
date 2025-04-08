import { Routes, Route } from "react-router-dom";
import { HomePage } from "@pages";
import { AboutPage } from "@pages";
import { Paths } from "@constants";
import { UsersPage } from "@pages";
import { ProtectedRoute } from "./ProtectedRoute";
import { useUser } from "@context";
import { Permissions } from "@constants";

export const AppRoutes = () => {
  const { user, loading } = useUser();
  if (loading) {
    return <div>Загрузка...</div>;
  }
  return (
    <Routes>
      <Route path={Paths.Main} element={<HomePage />} />
      <Route
        element={
          <ProtectedRoute
            userRoleId={user?.role_id}
            requiredPermission={Permissions.VIEW_USERS}
          />
        }
      >
        <Route path={Paths.Users} element={<UsersPage />} />
      </Route>
    </Routes>
  );
};