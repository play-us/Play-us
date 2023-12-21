import * as MypageS from '../../styles/mypage/Mypage';
import * as MypageCommuS from '../../styles/mypage/Community';
import CommuPostList from './CommuPostList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ICommuDetailProps } from '../../pages';
import ConvertDate from '../common/date/dateFormat';
import { ICommunityRowData } from '../recruitTeam/RecruitTeamList';
import { Col, Pagination } from 'antd';
const urlGetMainDataList = 'http://localhost:8080/main/getMainData';
const ITEM_PER_PAGE = 5;
const CommunityDetails = () => {
  const [currentPage, setCurrentPage] = useState(1); //페이지네이션 현재페이지
  const [recruitData, setRecruitData] = useState<ICommunityRowData[]>([]);
  const startIndex = (currentPage - 1) * ITEM_PER_PAGE;
  const endIndex = startIndex + ITEM_PER_PAGE;
  // 페이지네이션 이벤트 함수
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  // 팀원 모집 리스트 컴포넌트
  const communityList = recruitData
    .slice(startIndex, endIndex)
    .map((data: ICommunityRowData) => <CommuPostList data={data} />);

  useEffect(() => {
    //상세 정보

    // 메인 페이지 커뮤니티 데이터 init
    axios
      .get(urlGetMainDataList, {
        params: {
          email: 'chu',
        },
      })
      .then((response) => {
        // console.log(response);

        const data = response.data.result['commuList'];
        // console.log(data, ' data!!!');

        // if (data.length > 0) {
        const rows: any[] = [];
        data.forEach((element: ICommuDetailProps) => {
          console.log(element, 'dd');

          const row = {
            deadline: ConvertDate(element.insertDatetime),
            commuTitle: element.commuTitle,
            likeCnt: element.wishCnt,
            commentCnt: element.commentCnt,
            name: '황창민',
            userImg: null, //이미지 추후작업
            deadLine: ConvertDate(element.deadLine),
            memberCount: element.memberCnt,
            stadium: element.fieldTp,
            wishCnt: element.wishCnt,
            commuId: element.commuId,
            wishYn: element.wishYn,
          };
          rows.push(row);
        });

        setRecruitData(rows);
        console.log(recruitData, 'initdata');
        // }
      });
  }, []);
  return (
    <MypageS.MyListRight>
      <MypageCommuS.CommuConBox>
        <MypageCommuS.CommuListWrap>{communityList}</MypageCommuS.CommuListWrap>
      </MypageCommuS.CommuConBox>
      <Col span={24}>
        <Pagination
          current={currentPage}
          total={recruitData.length}
          pageSize={ITEM_PER_PAGE}
          onChange={handlePageChange}
        ></Pagination>
      </Col>
    </MypageS.MyListRight>
  );
};

export default CommunityDetails;
