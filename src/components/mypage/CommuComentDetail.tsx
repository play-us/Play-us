import * as MypageS from '../../styles/mypage/Mypage';
import * as MypageCommuS from '../../styles/mypage/Community';
import CommuCoList from './CommuCmList';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { ICommentData } from '../recruitTeam/RecruitTeamDetail';
const urlGetCommentList =
  'http://localhost:8080/community/getCommunityCommentList';
const comDatas = [1, 2, 3, 4, 5, 6]; //임시 데이터 배열

const CommuComentDetail = () => {
  const [commentDataList, setCommentDataList] = useState<any>([]);
  useEffect(() => {
    const commentListApiR = Axios.get<any>(
      urlGetCommentList,
      //      {
      //     params: {
      //       commuId: param1Value,
      //     },
      //   }
    ).then((response) => {
      console.log(response, 'wow');

      const { result } = response.data;
      console.log(result, 'rest');

      // if (result.length < 0) {
      console.log('hi');

      const rows: ICommentData[] = [];
      result.forEach((element: any) => {
        console.log(element);

        const row = {
          // createdDate: element.created_date,
          // commuTitle: element.commu_title,
          commentId: element.commentId,
          commentSeq: element.commentSeq,
          commentText: element.commentTxt,
          name: element.name,
          pImg: element.p_img,
          commentDate: element.insertDatetime,
        };
        console.log(row);

        rows.push(row);
      });

      setCommentDataList(rows);
      // }
    });
  }, []);

  return (
    <MypageS.MyListRight>
      <MypageCommuS.CommuConBox>
        <MypageCommuS.CommuListWrap>
          {commentDataList.map((data: any) => {
            return <CommuCoList data={data}></CommuCoList>;
          })}
        </MypageCommuS.CommuListWrap>
      </MypageCommuS.CommuConBox>
    </MypageS.MyListRight>
  );
};

export default CommuComentDetail;
