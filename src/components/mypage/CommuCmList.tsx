import Axios from 'axios';
import * as MypageCommuS from '../../styles/mypage/Community';
import ConvertDate from '../common/date/dateFormat';
import { ICommentData } from '../recruitTeam/RecruitTeamDetail';
import { useEffect } from 'react';
const CommuCoList = (props: { data: ICommentData }) => {
  const { data } = props;
  console.log(data, ' prop');
  // const url = 'http://localhost:8080/mypage/getMyPageData';

  // useEffect(() => {
  //   const commentListApiR = Axios.get<any>(
  //     url,
  //     //      {
  //     //     params: {
  //     //       commuId: param1Value,
  //     //     },
  //     //   }
  //   ).then((response) => {
  //     console.log(response, 'eeeee');

  //     const { result } = response.data;
  //     console.log(result, 'rest');

  //     // if (result.length < 0) {
  //     console.log('hi');

  //     const rows: ICommentData[] = [];
  //     result.forEach((element: any) => {
  //       console.log(element);

  //       const row = {
  //         // createdDate: element.created_date,
  //         // commuTitle: element.commu_title,
  //         commentId: element.commentId,
  //         commentSeq: element.commentSeq,
  //         commentText: element.commentTxt,
  //         name: element.name,
  //         pImg: element.p_img,
  //         commentDate: element.insertDatetime,
  //       };
  //       console.log(row);

  //       rows.push(row);
  //     });

  //     // }
  //   });
  // }, []);

  return (
    <MypageCommuS.CommuListBox style={{ padding: '50px' }}>
      <MypageCommuS.CommuListInfoWrap>
        <MypageCommuS.CommentImg></MypageCommuS.CommentImg>
        <MypageCommuS.CommentTxtWrap>
          <MypageCommuS.CommentPostTitle>
            강서구에서 풋살 하실분 모집합니다.
          </MypageCommuS.CommentPostTitle>
          <MypageCommuS.CommentTxt>{data.commentText}</MypageCommuS.CommentTxt>
        </MypageCommuS.CommentTxtWrap>
        <MypageCommuS.CommuListDate>
          {ConvertDate(data.commentDate)}
        </MypageCommuS.CommuListDate>
      </MypageCommuS.CommuListInfoWrap>
    </MypageCommuS.CommuListBox>
  );
};

export default CommuCoList;
