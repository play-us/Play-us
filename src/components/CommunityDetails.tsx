import * as MypageS from '../styles/Mypage';
import * as MypageCommuS from '../styles/MypageCommu';

const CommunityDetails = () => {
    return(
        <MypageS.MyListRight>
            <MypageCommuS.CommuConBox>
                <MypageCommuS.CommuStateWrap>
                    <MypageCommuS.CommuStateBtn>작성 글</MypageCommuS.CommuStateBtn>
                    <MypageCommuS.CommuStateBtn>작성 댓글</MypageCommuS.CommuStateBtn>
                </MypageCommuS.CommuStateWrap>
            </MypageCommuS.CommuConBox>
        </MypageS.MyListRight>
    )
}

export default CommunityDetails;