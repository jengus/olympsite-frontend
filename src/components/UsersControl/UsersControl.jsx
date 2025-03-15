import * as S from "./Users.styles";
import { useState, useEffect } from "react";
import { useUser } from "@context";
import { ROLES } from "@constants";

export const UsersControl = () => {
  const [loading, setLoading] = useState(true);
  const { token } = useUser();

  const [usersData, setUsersData] = useState(null);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [orgFilter, setOrgFilter] = useState("Все организации");
  const [olympiadFilter, setOlympiadFilter] = useState("Все олимпиады");
  const [organisations, setOrganisations] = useState([]);
  const [olympiads, setOlympiads] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/customusers/all`,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok) {
        console.log("Ошибка");
      } else {
        setUsersData(data);
        const uniqueOrgs = [
          "Все организации",
          ...getUniqueValues(data, "organisation"),
        ];
        const uniqueOlympiads = [
          "Все олимпиады",
          ...getUniqueValues(data, "olymp_id"),
        ];
        setOrganisations(uniqueOrgs);
        setOlympiads(uniqueOlympiads);
        setLoading(false);
      }
    } catch (error) {
      console.log("Ошибка запроса получения пользователей", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getUniqueValues = (data, key) => {
    const values = new Set();
    Object.values(data).forEach((user) => {
      if (user[key]) {
        values.add(user[key]);
      }
    });
    return Array.from(values);
  };
  const filteredUsers = usersData
    ? Object.values(usersData).filter((user) => {
        const matchesSearch =
          user.name?.toLowerCase().includes(search.toLowerCase()) ||
          user.lastname?.toLowerCase().includes(search.toLowerCase()) ||
          user.surname?.toLowerCase().includes(search.toLowerCase());

        const matchesRole =
          roleFilter === "all" || user.role_id.toString() === roleFilter;

        const matchesOrg =
          orgFilter === "Все организации" || user.organisation === orgFilter;

        const matchesOlympiad =
          olympiadFilter === "Все олимпиады" ||
          (user.olymp_id && user.olymp_id.toString() === olympiadFilter);

        return matchesSearch && matchesRole && matchesOrg && matchesOlympiad;
      })
    : [];
  if (loading) {
    return <p>Загрузка...</p>;
  }

  return (
    <S.UserContainer>
      <S.HeaderContainer>
        <span>Управление пользователями</span>
      </S.HeaderContainer>
      <S.FilterContainer>
        <S.SearchInput
          type="text"
          placeholder="Поиск по ФИО/Команде..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <S.RoleFilter
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="all">Все роли</option>
          {ROLES.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </S.RoleFilter>
        <S.OrgFilter
          value={orgFilter}
          onChange={(e) => setOrgFilter(e.target.value)}
        >
          {organisations.map((org) => (
            <option key={org} value={org}>
              {org}
            </option>
          ))}
        </S.OrgFilter>
        <S.OlympiadFilter
          value={olympiadFilter}
          onChange={(e) => setOlympiadFilter(e.target.value)}
        >
          {olympiads.map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </S.OlympiadFilter>
      </S.FilterContainer>
      <S.TableContainer>
        <S.StyledTable>
          <thead>
            <tr>
              <S.TableHeader>Имя</S.TableHeader>
              <S.TableHeader>Фамилия</S.TableHeader>
              <S.TableHeader>Отчество</S.TableHeader>
              <S.TableHeader>Email</S.TableHeader>
              <S.TableHeader>Роль</S.TableHeader>
              <S.TableHeader>Действия</S.TableHeader>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <S.TableRow key={user.id}>
                  <S.TableCell>{user.name}</S.TableCell>
                  <S.TableCell>{user.lastname}</S.TableCell>
                  <S.TableCell>{user.surname}</S.TableCell>
                  <S.TableCell>{user.email}</S.TableCell>
                  <S.TableCell>{user.role_name}</S.TableCell>
                  <S.TableCell>
                    <S.EditButton>Изменить</S.EditButton>
                    <S.DeleteButton>Удалить</S.DeleteButton>
                  </S.TableCell>
                </S.TableRow>
              ))
            ) : (
              <tr>
                <S.TableCell colSpan="8" style={{ textAlign: "center" }}>
                  Нет данных
                </S.TableCell>
              </tr>
            )}
          </tbody>
        </S.StyledTable>
      </S.TableContainer>
    </S.UserContainer>
  );
};
