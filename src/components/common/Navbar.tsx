import { User } from 'lucide-react';
import React, { Fragment,useState } from 'react';
import { styled } from 'styled-components';
const Background = styled.div`
  border-bottom: 1px solid #000000;
  box-sizing: border-box;
`;
const HeaderWrap = styled.div`
  width: 51.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;
const Header = () => {
  const [logined,setLogined] = useState<boolean>(false);
  return (
    <Background>
      <HeaderWrap>
        <LogoWrap></LogoWrap>
        {!logined ? <NavWrap>
          <Nav>
            <User />
            login
          </Nav>
          <Nav>join</Nav>
        </NavWrap>:
        <NavWrap>
          <Nav>
            <User />
            mypage
          </Nav>
          <Nav>logout</Nav>
        </NavWrap>}
      </HeaderWrap>
    </Background>
  );
};

export default Header;
