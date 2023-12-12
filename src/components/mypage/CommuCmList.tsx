import * as MypageCommuS from '../../styles/mypage/Community';
import { ICommentData } from '../recruitTeam/RecruitTeamDetail';
const CommuCoList = (props: { data: ICommentData }) => {
  const { data } = props;
  console.log(data, ' prop');

  return (
    <MypageCommuS.CommuListBox $padding={'50px'}>
      <MypageCommuS.CommuListInfoWrap>
        <MypageCommuS.CommentImg></MypageCommuS.CommentImg>
        <MypageCommuS.CommentTxtWrap>
          <MypageCommuS.CommentPostTitle>
            강서구에서 풋살 하실분 모집합니다.
          </MypageCommuS.CommentPostTitle>
          <MypageCommuS.CommentTxt>
            저 참여하고싶습니다!!!
          </MypageCommuS.CommentTxt>
        </MypageCommuS.CommentTxtWrap>
        <MypageCommuS.CommuListDate>2023.04.01</MypageCommuS.CommuListDate>
      </MypageCommuS.CommuListInfoWrap>
    </MypageCommuS.CommuListBox>
  );
};

export default CommuCoList;
