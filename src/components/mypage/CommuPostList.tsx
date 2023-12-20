import * as MypageCommuS from '../../styles/mypage/Community';
import { PiHandPalmLight } from 'react-icons/pi';
import { BiSolidCommentDots } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';
import { ICommunityRowData } from '../recruitTeam/RecruitTeamList';
import { useNavigate } from 'react-router-dom';
const CommuList = (props: { data: ICommunityRowData }) => {
  const navigate = useNavigate();
  const {
    memberCount,
    stadium,
    deadLine,
    likeCnt,
    commuTitle,
    name,
    commentCnt,
    wishCnt,
    commuId,
    wishYn,
  } = props.data;

  return (
    <MypageCommuS.CommuListBox
      onClick={() => navigate(`/recruitTeamDetail?commId=${commuId}`)}
      style={{ padding: '30px' }}
    >
      <MypageCommuS.CommuListDate>{deadLine}</MypageCommuS.CommuListDate>
      <MypageCommuS.CommuPostListTit>
        {commuTitle}
      </MypageCommuS.CommuPostListTit>
      <MypageCommuS.CommuListInfoWrap>
        <MypageCommuS.CommuPostListInfo>
          <MypageCommuS.UtilsWrap>
            <PiHandPalmLight size={23} color="#9d9d9d" />
            <MypageCommuS.UtilsNum>{likeCnt}</MypageCommuS.UtilsNum>
          </MypageCommuS.UtilsWrap>
          <MypageCommuS.UtilsWrap>
            <BiSolidCommentDots size={23} color="#9d9d9d" />
            <MypageCommuS.UtilsNum>{commentCnt}</MypageCommuS.UtilsNum>
          </MypageCommuS.UtilsWrap>
        </MypageCommuS.CommuPostListInfo>
      </MypageCommuS.CommuListInfoWrap>
    </MypageCommuS.CommuListBox>
  );
};
export default CommuList;
