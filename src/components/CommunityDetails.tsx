import * as MypageS from '../styles/Mypage';

const CommunityDetails = () => {
    return(
        <MypageS.MyListRight>
            <MypageS.CommuConBox>
                <MypageS.CommuStateWrap>
                    <MypageS.CommuStateBtn>작성 글</MypageS.CommuStateBtn>
                    <MypageS.CommuStateBtn>작성 댓글</MypageS.CommuStateBtn>
                </MypageS.CommuStateWrap>
            </MypageS.CommuConBox>
        </MypageS.MyListRight>
    )
}

export default CommunityDetails;