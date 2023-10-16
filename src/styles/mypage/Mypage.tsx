//마이페이지 공통, 최상단 유저프로필 ,프로필 보기  css
import { css, styled } from 'styled-components';
import { Link } from 'react-router-dom';

//마이페이지 전체 감싸는 부분
export const MypageWrap = styled.div`
  padding: 100px 30px 30px 20px;
  box-sizing: border-box;
`;

//마이페이지 최상단 유저프로필, 프로필 보기
export const MypageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MyInfoLeft = styled.div``;
export const UserInfoName = styled.div`
  font-size: 2.1875rem;
  font-weight: bold;
  text-align: left;
`;
export const UserInfoCode = styled.div`
  margin-top: 25px;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  color: #939393;
`;
export const KakaoImg = styled.div`
  width: 100px;
  height: 25px;
  margin-left: 20px;
  background-color: yellow;
`;

export const MyInfoRight = styled.button`
  text-decoration-line: none;
  background-color: #3ce4a8;
  border-radius: 10px;
  padding: 20px;
  font-size: 1.25rem;
  color: #ffffff;
  box-sizing: border-box;
  cursor: pointer;
`;



// 마이페이지 오른쪽 내용 공통으로 감싸주는 부분
export const MyListRight = styled.div`
  width: 65%;
  height: 700px;
  background-color: #d9d9d9;
  border-radius: 10px;
  overflow: scroll;
  &::-webkit-scrollbar{
    width: 0px;
  }
  padding: 30px 40px;
  box-sizing: border-box;
`;


