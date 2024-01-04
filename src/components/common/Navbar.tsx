import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { primaryColor } from '../../styles/CommonStyle';
import { useAppDispatch, useAppSelector } from '../../stores/Store';
import { clearUser } from '../../stores/features/AuthenticationSlice';
const Background = styled.div`
  box-shadow: 0 4px 10px -8px transparent;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
`;

const HeaderWrap = styled.div`
  width: 51.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  margin: 0 auto;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
`;
const MenuWrap = styled.ul`
  margin-left: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0 40px;
  max-width: 500px;

  & li a {
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.4px;
    font-size: 18px;

    &:hover {
      color: ${primaryColor};
    }
  }
`;

const LogoWrap = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  background-color: aqua;
`;
const NavWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > a {
    color: #666;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
    padding: 0 1.2rem;
  }
  & > a:hover {
    color: #a9a9a9;
  }
  & > a + a {
    border-left: 1px solid #ddd;
  }
`;
const Nav = styled.li`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
  &.profile {
    padding: 0 6px;
    position: relative;
  }
  &.profile span {
    font-weight: 600;
    padding: 0.2rem;
  }
  &.profile:hover img {
    background-color: #ebebeb;
  }
  &.profile:hover {
    background-color: #f7f7f7;
    border-radius: 8px;
  }
`;

const ThumbImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
`;
const MyMenu = styled.div<{ isMenuOpend: boolean }>`
  position: absolute;
  bottom: -83px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 400;
  font-size: 16px;
  color: #666;
  vertical-align: baseline;
  box-sizing: border-box;
  width: 150px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fff;
  z-index: 1;
  display: ${(props) => (props.isMenuOpend ? 'block' : 'none')};

  & a {
    display: block;
    text-align: center;
    padding: 12px;
    color: #666;
    box-sizing: border-box;

    &:hover {
      background-color: #f7f7f7;
      border-radius: 6px;
    }

    & li {
      display: block;
      font-size: 14px;
    }
  }
  & a:last-child {
    border-top: 1px solid #e9e9e9;
    box-sizing: border-box;
  }
`;
const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [isMenuOpend, setIsMenuOpend] = useState<boolean>(false);

  return (
    <Background>
      <HeaderWrap>
        <Flex>
          <LogoWrap></LogoWrap>
          <MenuWrap>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/fieldList">구장목록</Link>
            </li>
            <li>
              <Link to="/community">커뮤니티</Link>
            </li>
          </MenuWrap>
        </Flex>
        {!user.isLogin ? (
          <NavWrap>
            <Link to="/signIn">
              <Nav>로그인</Nav>
            </Link>
            <Link to="/signUp">
              <Nav>회원가입</Nav>
            </Link>
          </NavWrap>
        ) : (
          <NavWrap>
            <Nav
              className="profile"
              onClick={() => setIsMenuOpend(!isMenuOpend)}
            >
              <ThumbImg
                src="https://lh3.googleusercontent.com/-LNDcyoUZV3U/AAAAAAAAAAI/AAAAAAAAAAA/AML38-szSEwtVxDGrb8lU9truJxdb9pwWQ/photo.jpg?sz=46"
                alt="프로필이미지"
              />
              <span>{user.name}</span>님
              <MyMenu isMenuOpend={isMenuOpend}>
                <Link to="/profileRetouch">
                  <Nav>프로필보기</Nav>
                </Link>
                <Link to="/mypage">
                  <Nav>마이페이지</Nav>
                </Link>
              </MyMenu>
            </Nav>
            <Link to="/">
              <Nav onClick={() => dispatch(clearUser())}>로그아웃</Nav>
            </Link>
          </NavWrap>
        )}
      </HeaderWrap>
    </Background>
  );
};

export default Header;
