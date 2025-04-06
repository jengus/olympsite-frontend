import { ROLES } from "@constants";

export const hasPermission = (userRoleId, requiredPermission) => {
  const role = ROLES.find((role) => role.id === userRoleId);
  return role && role.permissions.includes(requiredPermission);
};
