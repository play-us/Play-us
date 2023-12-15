// 마이페이지 메뉴바 컴포넌트 css
import { css, styled } from 'styled-components';
import calendar from '../../assets/images/mypagecalendar.png';
import commu from '../../assets/images/mypagecommu.png';
import review from '../../assets/images/mypagereview.png';

//마이페이지 메뉴, 리스트
export const MyListWrap = styled.div`
  margin-top: 100px;
`;

// 마이페이지 왼쪽 메뉴 선택
export const ListMenuWrap = styled.div`
  display: flex;
`;

export const ListMenu = styled.button<{ $menuState: string }>`
  align-items: center;
  cursor: pointer;
  border: 1px solid #dcdcdc;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1rem;
  padding: 7px 25px;
  margin-right: 15px;
  margin-bottom: 25px;
  background-color: transparent;
  box-sizing: border-box;
  color: #646464;
  &:focus {
    background-color: #3ce48a;
    color: #ffffff;
  }
  &:nth-of-type(1) {
    background-color: ${(props) => {
      if (props.$menuState === '예약') {
        return '#3ce48a';
      } else {
        return 'transparent';
      }
    }};
    color: ${(props) => {
      if (props.$menuState === '예약') {
        return '#ffffff';
      } else {
        return '#646464';
      }
    }};
  }
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
