// 마이페이지 리뷰 취소 모달, 관리자 페이지 상품등록 취소 컴포넌트 css
import { css, styled } from 'styled-components';
import warn from '../../assets/images/mypagemodalwarning.png';

export const CancleWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 998;
`;
export const CancleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  height: 350px;
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
export const CancleImgTxtWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CancleWarnImg = styled.div`
  width: 80px;
  height: 80px;
  margin: 30px;
  background-image: url(${warn});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
export const CancleWarnText = styled.p`
  margin-bottom: 20px;
  &:nth-child(2) {
    font-size: 1.25rem;
    font-weight: bold;
  }
  &:nth-child(3) {
    /* font-size: 1.125rem;/ */
    font-weight: bold;
    color: rgba(0, 0, 0, 0.3);
  } 
`;
export const CancleWarnAccText = styled.b`
  color: #3ce4a8;
`;
export const CancleWarnBtnWrap = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const CancleWarnBtn = styled.li`
  width: 40%;
  padding: 20px;
  /* border: 1px solid; */
  border-radius: 10px;
  box-sizing: border-box;
  font-weight: bold;
  cursor: pointer;
  &:nth-child(1){
    background-color: #d9d9d9;
  }
  &:nth-child(2){
    background-color: #3ce48a;
    color: #ffffff;
  }
`;
