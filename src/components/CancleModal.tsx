//예약 취소 , 관리자 상품등록 취소 모달 컴포넌트
import * as MypageCanModalS from '../styles/common/CancleModal';
import React, { SetStateAction, Dispatch } from 'react';
import { useAppDispatch } from '../stores/Store';
import { reserStateChange } from '../stores/features/GetReservationSlice';
interface cModalProp {
  setCModalState: Dispatch<SetStateAction<boolean>>;
  dataIndex: number;
}
const ReserCancle = (props: cModalProp) => {
   // 예약내역 데이터 변경 dispatch
   const mocDataDispatch = useAppDispatch();
  return (
    <MypageCanModalS.CancleWrap>
      <MypageCanModalS.CancleBox>
        <MypageCanModalS.CancleImgTxtWrap>
          <MypageCanModalS.CancleWarnImg></MypageCanModalS.CancleWarnImg>
          <MypageCanModalS.CancleWarnText>
            예약을{' '}
            <MypageCanModalS.CancleWarnAccText>
              취소
            </MypageCanModalS.CancleWarnAccText>
            하고 나가시겠습니까?
          </MypageCanModalS.CancleWarnText>
          <MypageCanModalS.CancleWarnText>
            선택한 예약내역은 모두 초기화 됩니다.
          </MypageCanModalS.CancleWarnText>
        </MypageCanModalS.CancleImgTxtWrap>
        <MypageCanModalS.CancleWarnBtnWrap>
          <MypageCanModalS.CancleWarnBtn
            onClick={() => {
              props.setCModalState(false);
            }}
          >
            취소
          </MypageCanModalS.CancleWarnBtn>
          <MypageCanModalS.CancleWarnBtn
            onClick={() => {
              mocDataDispatch(reserStateChange({ reserState: 0, index: props.dataIndex }));
              props.setCModalState(false);
            }}
          >
            확인
          </MypageCanModalS.CancleWarnBtn>
        </MypageCanModalS.CancleWarnBtnWrap>
      </MypageCanModalS.CancleBox>
    </MypageCanModalS.CancleWrap>
  );
};

export default ReserCancle;
