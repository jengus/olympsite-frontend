import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { hasPermission } from "@utils";
import { Paths } from "@constants";

export const ProtectedRoute = ({ userRoleId, requiredPermission }) => {
  if (!hasPermission(userRoleId, requiredPermission)) {
    return <Navigate to={Paths.Main}/>;
  }
  return <Outlet />;
};