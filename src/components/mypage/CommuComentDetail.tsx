import * as MypageS from '../../styles/mypage/Mypage';
import * as MypageCommuS from '../../styles/mypage/Community';
import CommuCoList from './CommuCmList';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { ICommentData } from '../recruitTeam/RecruitTeamDetail';
import { Col, Pagination } from 'antd';
const urlGetCommentList =
  'http://localhost:8080/community/getCommunityCommentList';

const CommuComentDetail = () => {
  const ITEM_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(1); //페이지네이션 현재페이지
  const startIndex = (currentPage - 1) * ITEM_PER_PAGE;
  const endIndex = startIndex + ITEM_PER_PAGE;
  const [commentDataList, setCommentDataList] = useState<any>([]);
  // 페이지네이션 이벤트 함수
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
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
        <Col span={24}>
          <Pagination
            current={currentPage}
            total={commentDataList.length}
            pageSize={ITEM_PER_PAGE}
            onChange={handlePageChange}
          ></Pagination>
        </Col>
      </MypageCommuS.CommuConBox>
    </MypageS.MyListRight>
  );
};

export default CommuComentDetail;
