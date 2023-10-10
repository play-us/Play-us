import * as MypageCommuS from '../styles/MypageCommu';
const CommuCoList = () => {
    return(
        <MypageCommuS.CommuListBox>
            <MypageCommuS.CommuListInfoWrap>
                <MypageCommuS.CommuListInfoLeft>
                    <MypageCommuS.UserImg></MypageCommuS.UserImg>
                    <MypageCommuS.UserName>홍범진</MypageCommuS.UserName>
                </MypageCommuS.CommuListInfoLeft>
                <MypageCommuS.CommuListInfoRight>
                    <MypageCommuS.CommuListDate>2023.08.12</MypageCommuS.CommuListDate>
                </MypageCommuS.CommuListInfoRight>
            </MypageCommuS.CommuListInfoWrap>
            <MypageCommuS.CommentTxt>댓글~~</MypageCommuS.CommentTxt>
        </MypageCommuS.CommuListBox>
    )
}

export default CommuCoList;