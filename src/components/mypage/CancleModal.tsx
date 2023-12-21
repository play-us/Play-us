import moment from 'moment';
import * as MypageModalS from '../../styles/common/Modal';
import { SetStateAction, Dispatch } from 'react';
import { deleteReservation } from '../../service/FieldApi';
import { IFieldResvData } from '../../utils/FieldType';
import getDayofWeek from '../../hooks/getDayofWeek';
interface cModalProp {
  setCModalState: Dispatch<SetStateAction<boolean>>;
  data: IFieldResvData;
  getReservationList: Function;
}
const ReserCancle = (props: cModalProp) => {
  /* 예약 취소 */
  const deleteResv = async () => {
    const d: any = await deleteReservation(props.data.resvId);

    if (d.status === 200) {
      alert('예약이 취소되었습니다.');
      props.getReservationList();
    }
  };

  return (
    <MypageModalS.ModalWrap>
      <MypageModalS.ModalBox>
        <MypageModalS.ContentWrap>
          <MypageModalS.Title>예약 취소</MypageModalS.Title>
          <MypageModalS.SubTitle>예약 내역</MypageModalS.SubTitle>
          <MypageModalS.InfoBox>
            <MypageModalS.InfoTxt $color={'#5a5a5a'}>
              {props.data.fieldNm}
            </MypageModalS.InfoTxt>
            <MypageModalS.InfoTxt>
              {moment(props.data.resvDate).format('YYYY년 MM월 DD일')} &nbsp;
              {getDayofWeek(moment(props.data.resvDate).day())}
            </MypageModalS.InfoTxt>
            <MypageModalS.InfoTxt>
              &nbsp;
              {props.data.resvStartTime.slice(0, 5)} ~&nbsp;
              {props.data.resvEndTime.slice(0, 5)}
            </MypageModalS.InfoTxt>
          </MypageModalS.InfoBox>
          <MypageModalS.ReserPriceWrap>
            <MypageModalS.SubTitle>이용금액</MypageModalS.SubTitle>
            <MypageModalS.ReserPrice>
              {props.data.resvPrice.toLocaleString('ko-KR')}원
            </MypageModalS.ReserPrice>
          </MypageModalS.ReserPriceWrap>
          <MypageModalS.WarnText $color={'#5a5a5a'}>
            예약 <MypageModalS.WarnAccText>취소</MypageModalS.WarnAccText>시
            예약 내역은 삭제되어 복구가 불가합니다.
          </MypageModalS.WarnText>
          <MypageModalS.WarnText>정말로 취소하시겠어요?</MypageModalS.WarnText>
        </MypageModalS.ContentWrap>
        <MypageModalS.WarnBtnWrap>
          <MypageModalS.WarnBtn
            onClick={() => {
              deleteResv();
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
