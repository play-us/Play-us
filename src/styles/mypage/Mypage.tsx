//마이페이지 공통, 최상단 유저프로필 ,프로필 보기  css
import { css, styled } from 'styled-components';
import { Link } from 'react-router-dom';
import proImg from '../../assets/images/mypageprofile.png';

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
export const MyInfoLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const MyInfoLeftInner = styled.div`
  margin-left: 20px;
`;


export const UserProImg = styled.div<{$size:string}>`
  width: ${(props)=>props.$size};
  height: ${(props)=>props.$size};
  border: 1px solid #e1e1e1;
  border-radius: 50%;
  background-image: url(${proImg});
  background-repeat: no-repeat;
  background-size: contain;

`

export const UserInfoName = styled.div`
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: -5px;
  text-align: left;
`;
export const UserInfoCode = styled.div`
  margin-top: 25px;
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #7d7d7d;
`;
export const KakaoImg = styled.div`
  width: 100px;
  height: 25px;
  margin-left: 20px;
  background-color: yellow;
`;

export const MyInfoRight = styled.button`
  text-decoration-line: none;
  background-color: #dadada;
  border-radius: 50px;
  padding: 15px 20px;
  font-size: 1.25rem;
  font-weight: bold;
  color: #424242;
  box-sizing: border-box;
  cursor: pointer;
`;



// 마이페이지 오른쪽 내용 공통으로 감싸주는 부분
export const MyListRight = styled.div`
  width: 100%;
  height: 700px;
  background-color: #f8f8f8;
  border-radius: 30px;
  overflow: scroll;
  &::-webkit-scrollbar{
    width: 0px;
  }
  padding: 30px 40px;
  box-sizing: border-box;
`;


