// 마이페이지 리뷰 취소 모달, 후기작성 모달 공통 css
import { css, styled } from 'styled-components';

export const ModalWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 998;
`;
export const ModalBox = styled.div`
  background-color: #ffffff;
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  padding: 30px 35px;
  box-sizing: border-box;
`;



export const ContentWrap = styled.div`
  text-align: left;
`;

export const Title = styled.p`
   font-size:  1.25rem;
   font-weight: bold;
   margin-bottom: 20px;
`
export const SubTitle = styled.p`
   color: #d2d2d2;
   font-weight: bold;
   font-size: 0.75rem;
`
export const InfoBox = styled.div`
  padding: 30px 35px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #f4f4f4;
  margin: 20px 0;
`

export const InfoTxt = styled.p<{$color?:string}>`
   color: ${(props) => props.$color};
   font-weight: bold;
   font-size:  1.125rem;
   line-height: 30px;
   margin-right: 70px;
`

export const ReserPriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  
`
export const ReserPrice = styled.p`
  font-weight: bold;
`

export const WarnText = styled.p<{$color?:string}>`
  font-size: 0.875em;
  margin-bottom: 20px;
  font-weight: bold;
  color: ${(props) => props.$color};
`;
export const WarnAccText = styled.b`
  color: #3ce4a8;
`;
export const WarnBtnWrap = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const WarnBtn = styled.li`
  width: 40%;
  padding: 10px 20px;
  /* border: 1px solid; */
  border-radius: 10px;
  box-sizing: border-box;
  font-weight: bold;
  cursor: pointer;
  &:nth-child(1){
    background-color: #3ce48a;
    color: #ffffff;
  }
  &:nth-child(2){
    background-color: #d9d9d9;
  }
`;
