import * as MypageS from '../styles/Mypage';
import * as MypageReviewS from '../styles/MypageReview';
const ReviewDetails = () => {
    const RevDatas = [1,2,3,4,5,6]; //임시 데이터 배열
    // 별점 총 개수를 위한 배열
    const starsCount = [5,4.5,4,3.5,3,2.5,2,1.5,1,0.5];
    return(
        <MypageS.MyListRight>
            {RevDatas.map(function(){
                return(
                    <MypageReviewS.ReviewConBox>
                        <MypageReviewS.ReviewTopWrap>
                            <MypageReviewS.NameStarsWrap>
                                <MypageReviewS.ReviewUserName>홍범진</MypageReviewS.ReviewUserName>
                                <MypageReviewS.StarsWrap>
                                    {starsCount.map(function(star,i){
                                        let isHalf: null | boolean = null;
                                        if(Number.isInteger(star) === true){
                                        isHalf = false;
                                        }else{
                                        isHalf = true;
                                        }
                                        return(
                                            <>
                                                {isHalf ? <MypageReviewS.HalfStar/>: <MypageReviewS.Star/>}
                                            </>
                                        );
                                    })}
                                </MypageReviewS.StarsWrap>
                            </MypageReviewS.NameStarsWrap>
                            <MypageReviewS.ReviewReserDate>2023.08.07</MypageReviewS.ReviewReserDate>
                        </MypageReviewS.ReviewTopWrap>
                        <MypageReviewS.ReviewContent>
                            너무 좋았어요! 소규모로 모임 있을 때 조용하게 보내는게 돈도 아끼고 이득일듯요
                            친구랑도 재밌게 놀았습니다! 시설도 깔끔하고 너무 좋아요
                        </MypageReviewS.ReviewContent>
                        <MypageReviewS.ReviewUseDateTime>사용일시: 2023.08.08 20:00~22:00</MypageReviewS.ReviewUseDateTime>
            </MypageReviewS.ReviewConBox>
                )
            })}
        </MypageS.MyListRight>
    )
}

export default ReviewDetails;