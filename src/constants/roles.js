import { Permissions } from "./permissions";

export const ROLES = [
  {
    id: 1,
    name: "Пользователь",
    permissions: [Permissions.VIEW_PROFILE],
  },
  {
    id: 2,
    name: "Администратор",
    permissions: [Permissions.VIEW_PROFILE, Permissions.VIEW_USERS, Permissions.EDIT_OLYMPS],
  },
  {
    id: 3,
    name: "Организатор",
    permissions: [Permissions.VIEW_PROFILE, Permissions.VIEW_USERS, Permissions.EDIT_OLYMPS, Permissions.CHECK_OLYMPS],
  },
  { id: 4,
    name: "Эксперт",
    permissions: [Permissions.VIEW_PROFILE, Permissions.CHECK_OLYMPS] },
  { id: 5,
    name: "Участник",
    permissions: [Permissions.VIEW_PROFILE, Permissions.PASS_OLYMPS] },
  { id: 6,
    name: "Команда",
    permissions: [Permissions.VIEW_PROFILE, Permissions.PASS_OLYMPS] },
];
