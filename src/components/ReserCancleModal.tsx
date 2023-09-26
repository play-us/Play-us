import * as MypageCanModalS from '../styles/MypageReviewCancleModal';
const ReserCancle = () => {
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
          <MypageCanModalS.CancleWarnBtn>취소</MypageCanModalS.CancleWarnBtn>
          <MypageCanModalS.CancleWarnBtn>확인</MypageCanModalS.CancleWarnBtn>
        </MypageCanModalS.CancleWarnBtnWrap>
      </MypageCanModalS.CancleBox>
    </MypageCanModalS.CancleWrap>
  );
};

export default ReserCancle;
