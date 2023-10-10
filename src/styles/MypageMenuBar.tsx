// 마이페이지 메뉴바 컴포넌트 css
import { css, styled } from 'styled-components';
import calendar from '../assets/images/mypagecalendar.png';
import commu from '../assets/images/mypagecommu.png';
import review from '../assets/images/mypagereview.png';



//마이페이지 메뉴, 리스트
export const MyListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

// 마이페이지 왼쪽 메뉴 선택
export const MyListLeft = styled.div`
  width: 20%;
`;

export const ListMenu = styled.div<{ $menuState: string }>`
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