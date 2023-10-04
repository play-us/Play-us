import * as ReviewWrites from '../styles/mypageReviewModal';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { useState,useRef,SetStateAction, Dispatch  } from 'react';
interface wModalProp {
  setWModalState: Dispatch<SetStateAction<boolean>>;
}
const ReviewWriteModal = (props:wModalProp) => {
  // 별점을 저장해둘 스테이트
  const [rating, setRating] = useState(0);
  // 마우스가 해당 별점 위에 있을 때 스테이트를 변경해줄 함수
  let handleOverRating: (value: number) => void;
  handleOverRating = function (value) {
    setRating(value);
  };
  // 별점 총 개수를 위한 배열
  const starsCount = [5,4.5,4,3.5,3,2.5,2,1.5,1,0.5];
  const inputRef = useRef<any>([]);
  if(inputRef.current.length !== 0){
    console.log(inputRef.current[0].previousSibling);
  }
  return (
    <ReviewWrites.ReWriteWrap>
      <ReviewWrites.ReWriteBox action='' method='post' name='reviewSubmit'>
        <ReviewWrites.ReWriteTit>리뷰 작성</ReviewWrites.ReWriteTit>
        <ReviewWrites.ReWriteSubTit>별점등록 ({rating}/5)</ReviewWrites.ReWriteSubTit>
        <ReviewWrites.StarInputField>
          {starsCount.map(function(star,i){
            let isHalf: null | boolean = null;
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
        <ReviewWrites.ReWriteSubTit>리뷰</ReviewWrites.ReWriteSubTit>
        <ReviewWrites.ReviewTxtArea></ReviewWrites.ReviewTxtArea>
        <ReviewWrites.ReBtnWrap>
          <ReviewWrites.ReBtn onClick={()=>{props.setWModalState(false);}}>취소</ReviewWrites.ReBtn>
          <ReviewWrites.ReBtn>등록</ReviewWrites.ReBtn>
        </ReviewWrites.ReBtnWrap>
      </ReviewWrites.ReWriteBox>
    </ReviewWrites.ReWriteWrap>
  );
};

export default ReviewWriteModal;
