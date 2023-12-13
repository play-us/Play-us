// 마이페이지 예약 디테일 컴포넌트 css
import { styled } from 'styled-components';
import { PiMapPinFill } from 'react-icons/pi';
import { AiFillCalendar } from 'react-icons/ai';
import { BiSolidTimeFive } from 'react-icons/bi';

//리액트 아이콘 css
export const PinIcon = styled(PiMapPinFill)`
  color: #3ce4a8;
`;
export const CalendarIcon = styled(AiFillCalendar)`
  color: #3ce4a8;
`;
export const TimeIcon = styled(BiSolidTimeFive)`
  color: #3ce4a8;
`;

export const ReserConWrap = styled.div``;

export const ReserConBox = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px 25px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;
export const ReserTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;
export const ReserTitle = styled.p`
  font-size: 1.875rem;
  font-weight: bold;
  color: #464646;
`;
export const ReserCurrent = styled.p<{ $resv_state: string }>`
  color: ${(props) => {
    if (props.$resv_state === '0') {
      return '#FF0000';
    } else {
      return '#888888';
    }
  }};
  font-size: 1.3125em;
  font-weight: 600;
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
  font-weight: bold;
  color: #464646;
  margin-left: 5px;
`;

export const ReserStateWrap = styled.div`
  display: flex;
  align-items: end;
`;
export const ReserStateBtn = styled.button<{ $resv_state: number }>`
  background-color: ${(props) => {
    if (props.$resv_state === 1) {
      return '#FF7171';
    } else {
      return '#555555';
    }
  }};
  font-size: 1.125rem;
  color: #ffffff;
  border-radius: 50px;
  padding: 10px 25px;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: bold;
`;
