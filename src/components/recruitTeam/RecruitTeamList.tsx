import { Button, Col, Pagination, Row, Typography } from 'antd';
import Axios from 'axios';
import { Eye, Hand, MessageSquare, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { primaryColor, PageStyle, ButtonStyle } from '../../styles/CommonStyle';
import RecruitTeamInfo from './RecruitTeamInfo';

//url 팀원모집 게시판 리스트
const urlGetRecruitTeamList = '/json/community.json';

export interface ICommunityItem {
  created_date: string;
  commu_title: string;
  like_cnt: number;
  comment_cnt: number;
  views: number;
  name: string;
  p_img: any;
  deadLine: string;
  member_count: number;
  stadium: string;
  content?: string;
  location?: string;
}

export interface ICommunityRowData {
  createdDate: string;
  commuTitle: string;
  likeCnt: number;
  commentCnt: number;
  views: number;
  name: string;
  userImg: null | string;
  deadLine: string;
  memberCount: number;
  stadium: string;
  content?: string;
  location?: string;
}

interface CommunityHeaderWrapProps {
  wrapWidth?: string;
}
const ITEM_PER_PAGE = 9;
const { Title } = Typography;

const RecruitTeamList = () => {
  const navigate = useNavigate();

  const [rowDataList, setRowDataList] = useState<ICommunityRowData[]>([]); //팀원 모집글 데이터
  const [currentPage, setCurrentPage] = useState(1); //페이지네이션 현재페이지

  const startIndex = (currentPage - 1) * ITEM_PER_PAGE;
  const endIndex = startIndex + ITEM_PER_PAGE;

  // 페이지네이션 이벤트 함수
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const NavigateCommunityDetail = () => {
    navigate('/recruitTeamDetail');
  };

  // 화면 진입시 커뮤니티 게시글들 렌더링 하기.
  useEffect(() => {
    // 타입설정 없이 초기 연결
    // axios.get<any>('/json/community.json').then((res) => {
    //   setRowDataList(res);
    //   console.log(res);
    // });
    // 목데이터 연결
    Axios.get<ICommunityItem[]>(urlGetRecruitTeamList).then((response) => {
      const data = response.data;

      if (data.length > 0) {
        const rows: ICommunityRowData[] = [];
        data.forEach((element: ICommunityItem) => {
          const row = {
            createdDate: element.created_date,
            commuTitle: element.commu_title,
            likeCnt: element.like_cnt,
            commentCnt: element.comment_cnt,
            views: element.views,
            name: element.name,
            userImg: element.p_img,
            deadLine: element.deadLine,
            memberCount: element.member_count,
            stadium: element.stadium,
          };
          rows.push(row);
        });

        setRowDataList(rows);
      }
    });
  }, []);

  // 팀원 모집 리스트 컴포넌트
  const communityList = rowDataList
    .slice(startIndex, endIndex)
    .map((data: ICommunityRowData) => <RecruitTeamInfo item={data} />);

  return (
    <Row>
      <Col span={24} style={{ marginBottom: '20px' }}>
        {/* display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.125rem;
  margin: 0 auto;
  margin-top: 1.875rem;
  margin-bottom: 1.875rem;
  border-bottom: 1px solid #000000; */}
        {/* 커뮤니티 헤더 */}
        <PageTopWrap>
          <PageTitle>커뮤니티 게시판</PageTitle>
          <DarkButton onClick={NavigateCommunityDetail}>
            팀 모집 글쓰기
          </DarkButton>
        </PageTopWrap>
        {/* 커뮤니티 게시글 리스트 
        width: 820px;
  height: 720px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px; // 그리드 간격 조절 (선택 사항)
        */}
        {/* <GridContainer>{communityList}</GridContainer> */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gap: '1.2rem',
          }}
        >
          {communityList}
        </div>
      </Col>
      <Col span={24}>
        <Pagination
          current={currentPage}
          total={rowDataList.length}
          pageSize={ITEM_PER_PAGE}
          onChange={handlePageChange}
        ></Pagination>
      </Col>
    </Row>
  );
};
const { PageTopWrap, PageTitle } = PageStyle;
const { DarkButton } = ButtonStyle;
// 커뮤니티 게시글
// const CommunutyListItem = (props: { itemData: ICommunityRowData }) => {
//   const { Title } = Typography;
//   const { itemData } = props;
//   console.log(itemData);

//   // 커뮤니티 게시글 정보
//   const createdDate = `${itemData.createdDate}`;
//   const stadiumValue = `${itemData.stadium} | ${itemData.memberCount}명 | ~${itemData.deadLine}`;
//   const communityTitle = `${itemData.commuTitle}`;
//   const commnnityName = itemData.name;
//   const likeCnt = itemData.likeCnt;
//   const commentCnt = itemData.commentCnt;
//   const views = itemData.views;

//   return (
//     //이전 리스트
//     // <Row style={{ border: '1px solid #000000;' }}>
//     //   {/* 날짜와 구장 정보 */}
//     //   <ItemInfo>
//     //     <Col>
//     //       {/* 날짜 데이터 */}
//     //       {/* 2021.04.13 */}
//     //       {createdDate}
//     //     </Col>
//     //     {/* <Col>축구장 | 10명 | ~2023.09.06</Col> */}
//     //     <Col span={8}>{stadiumValue}</Col>
//     //   </ItemInfo>

//     //   {/* 제목 */}
//     //   <ItemTitle>
//     //     <Title level={4}>{communityTitle}</Title>
//     //   </ItemTitle>
//     //   {/* 작성자 정보와 게시글 정보 */}
//     //   <UserItemInfoWrap>
//     //     {/* <UserOutlined /> */}

//     //     <UserInfo>
//     //       <Col> {itemData.userImg === null ? <User /> : itemData.userImg}</Col>
//     //       <Col>{commnnityName}</Col>
//     //     </UserInfo>
//     //     <Col
//     //       style={{ display: 'flex', justifyContent: 'space-between' }}
//     //       span={8}
//     //     >
//     //       {/* <Col>게시글 정보 컴포넌트</Col> */}
//     //       <CommunityItemInfo>
//     //         <Hand />
//     //         {likeCnt}
//     //       </CommunityItemInfo>

//     //       <CommunityItemInfo>
//     //         <MessageSquare />
//     //         {commentCnt}
//     //       </CommunityItemInfo>
//     //       <CommunityItemInfo>
//     //         <Eye />
//     //         {views}
//     //       </CommunityItemInfo>
//     //     </Col>
//     //   </UserItemInfoWrap>
//     // </Row>
//     <Row style={{ border: '1px solid #000000;' }}>

//       <RecruitTeamInfo item={item}></RecruitTeamInfo>
//     </Row>
//   );
// };

export default RecruitTeamList;

const CommunityHearderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.125rem;
  margin: 0 auto;
  margin-top: 1.875rem;
  margin-bottom: 1.875rem;
  border-bottom: 1px solid #000000;
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 3.125rem;
  margin: 0 auto;
`;

const ItemTitle = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 3.125rem;
  margin: 0 auto;
`;
const GridContainer = styled.div`
  width: 820px;
  height: 720px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px; // 그리드 간격 조절 (선택 사항)
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.125rem;
  margin: 0 auto;
`;

const UserItemInfoWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 3.125rem;
  margin: 0 auto;
`;

const CommunityModalButton = styled.button`
  background-color: ${primaryColor};
  color: white;
  border: none;
  width: 6.25rem;
  height: 1.875rem;
  border-radius: 0.375rem;
`;

const CommunityItemInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 33%;
  margin: 0 auto;
`;
