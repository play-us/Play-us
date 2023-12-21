import moment from 'moment';
import * as ReviewWrites from '../../styles/mypage/ReviewModal';
import * as MypageModalS from '../../styles/common/Modal';
import { useState, SetStateAction, Dispatch } from 'react';
import { IFieldResvData } from '../../utils/FieldType';
import getDayofWeek from '../../hooks/getDayofWeek';
import { Rate, Input } from 'antd';
import { insertFieldReview } from '../../service/FieldApi';

interface wModalProp {
  setWModalState: Dispatch<SetStateAction<boolean>>;
  data: IFieldResvData;
}
interface Ireview {
  starCnt: number;
  reviewCon: string;
}
//컴포넌트 함수
const ReviewWriteModal = (props: wModalProp) => {
  const email = 'chu';
  const { TextArea } = Input;
  const [review, setReview] = useState<Ireview>({
    starCnt: 0,
    reviewCon: '',
  });

  // 별점 수정
  const handleRateChange = (value: number) => {
    setReview((review: any) => {
      return { ...review, starCnt: value };
    });
  };

  // 텍스트 수정
  const handleContentChange = (e: any) => {
    setReview((review: any) => {
      return { ...review, reviewCon: e.target.value };
    });
  };

  // 리뷰 작성
  async function handleSubmit(e: any) {
    e.preventDefault();

    if (review.reviewCon.length < 5) {
      alert('5글자 이상의 리뷰만 등록이 가능합니다.');
      return;
    }

    if (!review.starCnt) {
      alert('별점을 등록해주세요.');
      return;
    }

    const d: any = await insertFieldReview(
      props.data.fieldId,
      props.data.resvId,
      email,
      String(review.starCnt),
      review.reviewCon,
    );
    console.log(d);

    if (d.status === 200) {
      props.setWModalState(false);
    } else {
      alert('리뷰 등록에 실패하였습니다.');
      return;
    }
  }
  return (
    <MypageModalS.ModalWrap>
      <MypageModalS.ModalBox>
        <MypageModalS.ContentWrap>
          <MypageModalS.Title>후기 등록</MypageModalS.Title>
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
              {props.data.resvStartTime.slice(0, 5)} ~&nbsp;
              {props.data.resvEndTime.slice(0, 5)}
            </MypageModalS.InfoTxt>
          </MypageModalS.InfoBox>
          <MypageModalS.ReserPriceWrap>
            <MypageModalS.SubTitle>별점 및 후기</MypageModalS.SubTitle>
            <ReviewWrites.StarInputField>
              <Rate onChange={handleRateChange} value={review.starCnt} />
            </ReviewWrites.StarInputField>
          </MypageModalS.ReserPriceWrap>
          <TextArea
            rows={4}
            onChange={handleContentChange}
            value={review.reviewCon}
          />
        </MypageModalS.ContentWrap>
        <MypageModalS.WarnBtnWrap>
          <MypageModalS.WarnBtn onClick={(e) => handleSubmit(e)}>
            등록
          </MypageModalS.WarnBtn>
          <MypageModalS.WarnBtn
            onClick={() => {
              props.setWModalState(false);
            }}
          >
            닫기
          </MypageModalS.WarnBtn>
        </MypageModalS.WarnBtnWrap>
      </MypageModalS.ModalBox>
    </MypageModalS.ModalWrap>
  );
};

export default ReviewWriteModal;
