import styled from "styled-components";
/*background-color: #43751a;*/
export const HeaderContainer = styled.header`
  background-color: rgba(29, 47, 5, 0.8); 
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10%;
  position: sticky;
  top: 0;
  z-index: 1000; 
  backdrop-filter: blur(10px); 
`;

export const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 30px;
  font-weight: bold;
`
export const ProfText = styled.span`
font-size: 18px;
font-weight: normal;
`



export const Nav = styled.nav`
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: inherit;
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    padding: 15px;
  }
`;


export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const NavItem = styled.li`
display: flex;
align-items: center;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s;

  &:hover {
    color: #d8f5d0;
  }
`;

export const BurgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
