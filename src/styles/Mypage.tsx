import { css, styled } from 'styled-components';
import { Link } from 'react-router-dom';
import calendar from '../assets/images/mypagecalendar.png';
import commu from '../assets/images/mypagecommu.png';
import review from '../assets/images/mypagereview.png';

export const MypageWrap = styled.div`
  padding: 100px 30px 30px 20px;
  box-sizing: border-box;
`;
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

export const MyInfoRight = styled(Link)`
  text-decoration-line: none;
  background-color: #3ce4a8;
  border-radius: 10px;
  padding: 20px;
  font-size: 1.25rem;
  color: #ffffff;
  box-sizing: border-box;
`;

export const MyInfoRightInner = styled.div``;

export const MyListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

// 마이페이지 왼쪽 메뉴 선택
export const MyListLeft = styled.div`
  width: 20%;
`;

export const ListMenu = styled.div<{ $menuState?: string }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:nth-child(1) {
    background-color: ${(props) => {
      if (props.$menuState === 'reservation') {
        return '#3ce48a';
      } else {
        return '#ffffff';
      }
    }};
  }
  &:nth-child(2) {
    background-color: ${(props) => {
      if (props.$menuState === 'community') {
        return '#3ce48a';
      } else {
        return '#ffffff';
      }
    }};
  }
  &:nth-child(3) {
    background-color: ${(props) => {
      if (props.$menuState === 'review') {
        return '#3ce48a';
      } else {
        return '#ffffff';
      }
    }};
  }
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
`;
export const ListIcon = styled.div`
  width: 30px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 20px;
`;
export const ListIcon1 = styled(ListIcon)`
  background-image: url(${calendar});
`;
export const ListIcon2 = styled(ListIcon)`
  background-image: url(${commu});
`;
export const ListIcon3 = styled(ListIcon)`
  background-image: url(${review});
`;
export const ListTitle = styled.div`
  font-size: 1rem;
  color: #5a5a5a5a;
  font-weight: bold;
`;

export const ListTitle1 = styled.div<{ $menuState: string }>`
  color: ${(props) => {
    if (props.$menuState === 'reservation') {
      return '#ffffff';
    } else {
      return '#5a5a5a5a';
    }
  }};
`;
export const ListTitle2 = styled.div<{ $menuState: string }>`
  color: ${(props) => {
    if (props.$menuState === 'community') {
      return '#ffffff';
    } else {
      return '#5a5a5a5a';
    }
  }};
`;
export const ListTitle3 = styled.div<{ $menuState: string }>`
  color: ${(props) => {
    if (props.$menuState === 'review') {
      return '#ffffff';
    } else {
      return '#5a5a5a5a';
    }
  }};
`;

// 마이페이지 오른쪽 내용
// 예약 컴포넌트
export const MyListRight = styled.div`
  width: 65%;
  height: 700px;
  background-color: #d9d9d9;
  border-radius: 10px;
  padding: 30px 40px;
  box-sizing: border-box;
`;

export const ReserConBox = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px 25px;
  box-sizing: border-box;
`;
export const ReserTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;
export const ReserTitle = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  box-sizing: border-box;
`;
export const ReserCurrent = styled.p`
  color: red;
  font-size: 1rem;
  font-weight: bold;
`;

export const ReserStateBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ReserDetailsWrap = styled.ul``;
export const ReserListWrap = styled.li`
  display: flex;
  align-items: start;
  &:nth-child(2) {
    margin: 8px 0;
  }
`;
export const ReserListText = styled.p`
  font-size: 1rem;
  font-weight: bolder;
  margin-left: 5px;
`;

export const ReserStateWrap = styled.div`
  display: flex;
  align-items: end;
`;
export const ReserStateBtn = styled.button`
  border: 1px solid #000000;
  background-color: transparent;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: bold;
`;
//마이페이지 오른쪽 커뮤니티 상세
export const CommuConBox = styled.div``;
export const CommuStateWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow:  1px 1px 15px  #3CE4A8 ;
`;
export const CommuStateBtn = styled.li`
  width: 50%;
  text-align: center;
  padding: 25px 0;
  /* border-bottom: 5px solid #3CE4A8; */
  box-sizing: border-box;
  color: #3CE4A8;
  font-weight: bold;
`;
export const CommuWriteBtn = styled.li`
`;
