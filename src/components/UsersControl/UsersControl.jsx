import * as S from './Users.styles'
import { useState, useEffect } from 'react';
import { useUser } from "@context";

export const UsersControl = () => { 
    const [loading, setLoading] = useState(true);
    const {token} = useUser();
    const [users, setUsers] = useState(null);


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
          const response = await fetch(`http://127.0.0.1:8000/customusers/all`, requestOptions);
          const data = await response.json();
          if (!response.ok) {
            console.log("Ошибка")
          } else {
            setUsers(data);
            setLoading(false);
          }
        } catch (error) {
          console.log("Ошибка запроса получения пользователей", error);
        }
      };
    
      useEffect(() => {
        getUsers();
      }, []);
      
    if (loading) {
        return <p>Загрузка...</p>;
    }
     
    return (
        <S.UserContainer>
      <S.HeaderContainer>
        <span>Управление пользователями</span>
      </S.HeaderContainer>
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
            {users.map((user) => (
              <tr key={user.id}>
                <S.TableCell>{user.name}</S.TableCell>
                <S.TableCell>{user.lastname}</S.TableCell>
                <S.TableCell>{user.surname}</S.TableCell>
                <S.TableCell>{user.email}</S.TableCell>
                <S.TableCell>{user.role_name}</S.TableCell>
                <S.TableCell>
                  <S.EditButton>
                    Изменить
                  </S.EditButton>
                  <S.DeleteButton>
                    Удалить
                  </S.DeleteButton>
                </S.TableCell>
              </tr>
            ))}
          </tbody>
        </S.StyledTable>
        </S.TableContainer>
    </S.UserContainer>
    );
}