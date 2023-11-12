//예약 취소 , 관리자 상품등록 취소 모달 컴포넌트
import * as MypageModalS from '../../styles/common/Modal';
import React, { SetStateAction, Dispatch } from 'react';
import { useAppDispatch } from '../../stores/Store';
import { reserStateChange } from '../../stores/features/GetReservationSlice';
interface cModalProp {
  setCModalState: Dispatch<SetStateAction<boolean>>;
  dataIndex: number;
}
const ReserCancle = (props: cModalProp) => {
   // 예약내역 데이터 변경 dispatch
   const mocDataDispatch = useAppDispatch();
  return (
    <MypageModalS.ModalWrap>
      <MypageModalS.ModalBox>
        <MypageModalS.ContentWrap>
          <MypageModalS.Title>예약 취소</MypageModalS.Title>
          <MypageModalS.SubTitle>예약 내역</MypageModalS.SubTitle>
          <MypageModalS.InfoBox>
            <MypageModalS.InfoTxt $color ={'#5a5a5a'}>서울 영등포 더에프 필드 B구장</MypageModalS.InfoTxt>
            <MypageModalS.InfoTxt>10월 12일 목요일</MypageModalS.InfoTxt>
            <MypageModalS.InfoTxt>14:00 ~ 16:00</MypageModalS.InfoTxt>
          </MypageModalS.InfoBox>
          <MypageModalS.ReserPriceWrap>
            <MypageModalS.SubTitle>이용금액</MypageModalS.SubTitle>
            <MypageModalS.ReserPrice>10000원</MypageModalS.ReserPrice>
          </MypageModalS.ReserPriceWrap>
          <MypageModalS.WarnText $color ={'#5a5a5a'}>
            예약{' '}
            <MypageModalS.WarnAccText>
              취소
            </MypageModalS.WarnAccText>
            시 예약 내역은 삭제되어 복구가 불가합니다.
          </MypageModalS.WarnText>
          <MypageModalS.WarnText>
            정말로 취소하시겠어요?
          </MypageModalS.WarnText>
        </MypageModalS.ContentWrap>
        <MypageModalS.WarnBtnWrap>
          <MypageModalS.WarnBtn
            onClick={() => {
              mocDataDispatch(reserStateChange({ reserState: 0, index: props.dataIndex }));
              props.setCModalState(false);
            }}
          >
            예약취소
          </MypageModalS.WarnBtn>
          <MypageModalS.WarnBtn
            onClick={() => {
              props.setCModalState(false);
            }}
          >
            닫기
          </MypageModalS.WarnBtn>
        </MypageModalS.WarnBtnWrap>
      </MypageModalS.ModalBox>
    </MypageModalS.ModalWrap>
  );
};

export default ReserCancle;
