// 마이페이지 리뷰작성 모달 css
import { styled } from 'styled-components';
import { css } from "styled-components";
export const ReWriteWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 998;
`;
export const ReWriteBox = styled.form`
  background-color: #ffffff;
  width: 500px;
  position: relative;
  border-radius: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  box-sizing: border-box;
`;
export const ReWriteTit = styled.p`
  font-weight: bold;
  font-size: 1.875rem;
  text-align: left;
  letter-spacing: -2px;
`;
export const ReWriteSubTit = styled.p`
  font-weight: bold;
  font-size: 1.25rem;
  text-align: left;
  letter-spacing: -2px;
  color: rgba(0, 0, 0, 0.3);
  &:nth-of-type(2){
    margin: 40px 0 20px 0;
  }
  &:nth-of-type(3){
    margin: 35px 0 20px 0;
  }
`;
export const StarInputField = styled.fieldset`
  position: relative;
  width: max-content;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  margin: 0 auto;
  input:checked ~ label,
  labeL:hover,
  labeL:hover ~ label {
    transition: 0.2s;
    color: #3ce48a;
  }
`;
export const StarInput = styled.input`
  display: none;
`;
export const StarLable = styled.label<{$isHalf:boolean}>`
  cursor: pointer;
  font-size: 3.75rem; // 별 크기 조절
  color: lightgray;
  ${({ $isHalf }) =>
    $isHalf &&
    css`
      position: absolute;
      width: 1.875rem;
      overflow: hidden;

      &:nth-of-type(10){
        left: 0;
      }
      &:nth-of-type(8){
        left: 3.75rem;
      }
      &:nth-of-type(6){
        left: 7.5rem;
      }
      &:nth-of-type(4){
        left: 11.25rem;
      }
      &:nth-of-type(2){
        left: 15rem;
      }
    `}
`;

export const ReviewTxtArea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid lightgray;
  resize: none;
  font-size: 1.25rem;
  font-weight: bold;
  &:hover{
    transition: 0.1s ease-in-out;
    border: 3px solid #3ce48a;
  }
  &:active,&:focus{
    outline: none;
    border: 3px solid #3ce48a;
  }
`;

export const ReBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
export const ReBtn = styled.button`
  padding: 15px 25px;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-sizing: border-box;
  font-size: 1.25rem;
  font-weight: bold;
  &:nth-child(1){
    color: lightgray;
  }
  &:nth-child(2){
    background-color: #3ce48a;
    color: #ffffff;
  }
`;

