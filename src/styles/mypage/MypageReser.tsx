// 마이페이지 예약 디테일 컴포넌트 css
import { styled } from 'styled-components';

export const ReserConWrap = styled.div`
`

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
  font-size: 1.25rem;
  font-weight: bold;
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