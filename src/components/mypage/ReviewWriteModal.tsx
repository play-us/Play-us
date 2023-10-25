import * as ReviewWrites from '../../styles/mypage/ReviewModal';
import * as MypageModalS from '../../styles/common/Modal';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { useState,useRef,SetStateAction, Dispatch  } from 'react';
// 별점 총 개수를 위한 배열 (상수는 대문자로 따로 뺴놓기)
const STARCOUNT = [5,4.5,4,3.5,3,2.5,2,1.5,1,0.5];

interface wModalProp {
  setWModalState: Dispatch<SetStateAction<boolean>>;
}
//컴포넌트 함수
const ReviewWriteModal = (props:wModalProp) => {
  // 별점을 저장해둘 스테이트
  const [rating, setRating] = useState(0);
  // 마우스가 해당 별점 위에 있을 때 스테이트를 변경해줄 함수
  let handleOverRating: (value: number) => void;
  handleOverRating = function (value) {
    setRating(value);
  };
  const inputRef = useRef<any>([]);
  if(inputRef.current.length !== 0){
    console.log(inputRef.current[0].previousSibling);
  }
  return (
    // <ReviewWrites.ReWriteWrap>
    //   <ReviewWrites.ReWriteBox action='' method='post' name='reviewSubmit'>
    //     <ReviewWrites.ReWriteTit>리뷰 작성</ReviewWrites.ReWriteTit>
    //     <ReviewWrites.ReWriteSubTit>별점등록 ({rating}/5)</ReviewWrites.ReWriteSubTit>
    //     <ReviewWrites.StarInputField>
    //       {STARCOUNT.map(function(star,i){
    //         let isHalf: boolean = false;
    //         if(Number.isInteger(star) === true){
    //           isHalf = false;
    //         }else{
    //           isHalf = true;
    //         }
    //         return(
    //           <>
    //             <ReviewWrites.StarInput type="radio" name="rating" id={`star${star}`} value={star} />
    //             <ReviewWrites.StarLable ref={(e)=>{inputRef.current[i] = e;}} onClick={(e) => { handleOverRating(star);} } $isHalf={isHalf} htmlFor={`star${star}`}>
    //               {isHalf ? <FaStarHalf/> : <FaStar/>}
    //             </ReviewWrites.StarLable>
    //           </>
    //         );
    //       })}
    //     </ReviewWrites.StarInputField>
    //     <ReviewWrites.ReWriteSubTit>리뷰</ReviewWrites.ReWriteSubTit>
    //     <ReviewWrites.ReviewTxtArea></ReviewWrites.ReviewTxtArea>
    //     <ReviewWrites.ReBtnWrap>
    //       <ReviewWrites.ReBtn onClick={()=>{props.setWModalState(false);}}>취소</ReviewWrites.ReBtn>
    //       <ReviewWrites.ReBtn>등록</ReviewWrites.ReBtn>
    //     </ReviewWrites.ReBtnWrap>
    //   </ReviewWrites.ReWriteBox>
    // </ReviewWrites.ReWriteWrap>
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
          <MypageModalS.SubTitle>별점 및 후기</MypageModalS.SubTitle>
          <ReviewWrites.StarInputField>
            {STARCOUNT.map(function(star,i){
                    let isHalf: boolean = false;
                    if(Number.isInteger(star) === true){
                      isHalf = false;
                    }else{
                      isHalf = true;
                    }
                    return(
                      <>
                        <ReviewWrites.StarInput type="radio" name="rating" id={`star${star}`} value={star} />
                        <ReviewWrites.StarLable ref={(e)=>{inputRef.current[i] = e;}} onClick={(e) => { handleOverRating(star);} } $isHalf={isHalf} htmlFor={`star${star}`}>
                          {isHalf ? <FaStarHalf/> : <FaStar/>}
                        </ReviewWrites.StarLable>
                      </>
                    );
                  })}
            </ReviewWrites.StarInputField>
        </MypageModalS.ReserPriceWrap>
        <ReviewWrites.ReviewTxtArea></ReviewWrites.ReviewTxtArea>  
      </MypageModalS.ContentWrap>
      <MypageModalS.WarnBtnWrap>
        <MypageModalS.WarnBtn
          onClick={() => {
          }}
        >
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
