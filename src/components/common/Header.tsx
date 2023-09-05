import React, { Fragment } from 'react';
import { styled } from 'styled-components';
const Background = styled.div`
  background-color: #ffffff;
  border: 1px solid #000000;
`;
const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 51.25rem;
  height: 100px;
  margin: 0 auto;
`;
const LogoWrap = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  background-color: aqua;
`;
const NavWrap = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const Nav = styled.li`
    margin: 1rem;
`;
const Header: React.FC = () => {
  return (
    <Background>
      <HeaderWrap>
        <LogoWrap></LogoWrap>
        <NavWrap>
          <Nav>로그인</Nav>
          <Nav>회원가입</Nav>
        </NavWrap>
      </HeaderWrap>
    </Background>
  );
};

export default Header;
