import styled from 'styled-components';

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
export const InputWrap = styled.div<{ $width?: string }>`
  width: ${(props) => props.$width};
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
  position: relative;

  & input {
    width: 100%;
    font-size: 16px;
    min-height: 60px;
    padding: 15px 13px;
    align-items: flex-start;
    border-radius: 5px;
    border: 1px solid rgb(225, 226, 227);
    box-sizing: border-box;
  }
`;
export const InputTit = styled.div`
  font-weight: bold;
  color: rgb(51, 51, 51);
`;

export const CommonInput = styled.input`
  width: 100%;
  font-size: 16px;
  min-height: 60px;
  padding: 15px 13px;
  align-items: flex-start;
  border-radius: 5px;
  border: 1px solid rgb(225, 226, 227);
  box-sizing: border-box;
  &:focus {
    outline: 0.5px solid #3ce48a;
  }
`;

export const RetouchBtn = styled.button`
  width: 100%;
  height: 60px;
  background-color: #3ce48a;
  font-weight: bold;
  font-size: 1rem;
  color: #ffffff;
  border-radius: 30px;
`;

export const SelectBox = styled.div`
  position: relative;
`;

export const Select = styled.select`
  width: 100%;
  font-size: 16px;
  min-height: 60px;
  padding: 15px 13px;
  align-items: flex-start;
  border-radius: 5px;
  border: 1px solid rgb(225, 226, 227);
  box-sizing: border-box;
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;
  line-height: 30px;

  &::-ms-expand {
    display: none; /*for IE10,11*/
  }

  & option {
    position: relative;
    background: #fff;
    color: #333;
    padding: 4px 0;
    font-size: 16px;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 50%;
  right: 13px;
  color: rgb(204, 204, 204);
  display: flex;
  /* padding: 15px 13px; */
  transition: color 150ms ease 0s;
  box-sizing: border-box;
  /* line-height: 30px; */
  transform: translateY(-50%);

  &svg {
    display: inline-block;
    fill: currentcolor;
    line-height: 1;
    stroke: currentcolor;
    stroke-width: 0;
  }
`;

export const ErrorMsg = styled.p`
  font-size: 0.8rem;
  color: red;
  position: absolute;
  bottom: -1.5rem;
  left: 0;
`;

export const SubmitBtn = styled.input`
  text-decoration-line: none;
  background-color: #dadada;
  border-radius: 50px;
  padding: 15px 20px;
  font-size: 1.25rem;
  font-weight: bold;
  color: #424242;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
`;
