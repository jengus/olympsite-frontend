import React, { useState } from "react";
import * as S from "./Header.styles";
import { Paths } from "@constants";
import { useUser } from "@context";
import {Modal} from "@components"
import { LoginForm } from "@components";
import { hasPermission } from "@utils";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useUser();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleProfileClick = (e) => {
    if (!user) {
      e.preventDefault();
      setIsLoginModalOpen(true);
    }
  };


  return (
    <S.HeaderContainer>
      <S.LogoBlock>
        <a href="https://cspu.ru">
          <img src="/images/logoun.png" alt="Логотип ЮУрГГПУ" />
        </a>
        OlympMaster
      </S.LogoBlock>

      <S.BurgerButton onClick={() => setIsOpen(!isOpen)}>☰</S.BurgerButton>

      <S.Nav $isOpen={isOpen}>
        <S.NavList>
          <S.NavItem>
            <S.NavLink href={Paths.Main}>Главная</S.NavLink>
          </S.NavItem>
          {hasPermission(user?.role_id, "view_users") && 
          <S.NavItem>
          <S.NavLink href={Paths.Users}>Пользователи</S.NavLink>
        </S.NavItem>}          
          <S.NavItem onClick={handleProfileClick}>
            <S.NavLink href={Paths.Main}>
              <S.LogoBlock>
                <S.ProfText>{user && `${user.lastname[0]}${user.name[0]}`}</S.ProfText>
                <img src="/images/logoprof.png" alt="Профиль" />
              </S.LogoBlock>
            </S.NavLink>
          </S.NavItem>
        </S.NavList>
      </S.Nav>
      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        title="Вход в систему"
      >
        <LoginForm onSuccess={() => setIsLoginModalOpen(false)} />
      </Modal>
    </S.HeaderContainer>
  );
};

