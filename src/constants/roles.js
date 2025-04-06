export const ROLES = [
  {
    id: 1,
    name: "Пользователь",
    permissions: ["view_profile"],
  },
  {
    id: 2,
    name: "Администратор",
    permissions: ["view_profile", "view_users", "edit_olymps"],
  },
  {
    id: 3,
    name: "Организатор",
    permissions: ["view_profile", "view_users", "edit_olymps", "check_olymps"],
  },
  { id: 4,
    name: "Эксперт",
    permissions: ["view_profile", "check_olymps"] },
  { id: 5,
    name: "Участник",
    permissions: ["view_profile", "pass_olymp"] },
  { id: 6,
    name: "Команда",
    permissions: ["view_profile", "pass_olymp"] },
];
