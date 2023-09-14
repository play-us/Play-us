import { Button, Col, Row, Typography } from 'antd';
import Title from 'antd/es/skeleton/Title';
import Axios from 'axios';
import { Eye, Hand, MessageSquare, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface ICommunityItem {
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
}

interface IRowData {
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
}
interface CommunityHeaderWrapProps {
  wrapWidth?: string;
}

interface CommunityProps {
  wrapWidth?: string;
  w;
}
// 팀원 모집 게시판 컴포넌트
const RecruitTeamList = () => {
  const { Title } = Typography;
  const navigate = useNavigate();
  const [rowDataList, setRowDataList] = useState<IRowData[]>([]);

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
    Axios.get<ICommunityItem[]>('/json/community.json').then((response) => {
      const data = response.data;

      if (data.length > 0) {
        const rows: IRowData[] = [];
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

  // 리스트 컴포넌트
  const communityList = rowDataList.map((data: IRowData) => (
    <CommunityItemWrap>
      <CommunutyListItem itemData={data} />
    </CommunityItemWrap>
  ));

  return (
    <Row>
      <Col span={24}>
        {/* 커뮤니티 헤더 */}
        <CommunityHearderWrap wrapWidth="100%">
          <Title level={4}>커뮤니티 게시판</Title>
          <CommunityModalButton onClick={NavigateCommunityDetail}>
            글쓰기
          </CommunityModalButton>
        </CommunityHearderWrap>
        {/* 커뮤니티 게시글 리스트 */}
        {communityList}
      </Col>
    </Row>
  );
};

// 커뮤니티 게시글
const CommunutyListItem = (props: { itemData: IRowData }) => {
  const { Title } = Typography;
  const { itemData } = props;
  console.log(itemData);

  // 커뮤니티 게시글 정보
  const createdDate = `${itemData.createdDate}`;
  const stadiumValue = `${itemData.stadium} | ${itemData.memberCount}명 | ~${itemData.deadLine}`;
  const communityTitle = `${itemData.commuTitle}`;
  const commnnityName = itemData.name;
  const likeCnt = itemData.likeCnt;
  const commentCnt = itemData.commentCnt;
  const views = itemData.views;
  return (
    <Row style={{ border: '1px solid #000000;' }}>
      {/* 날짜와 구장 정보 */}
      <ItemInfo>
        <Col>
          {/* 날짜 데이터 */}
          {/* 2021.04.13 */}
          {createdDate}
        </Col>
        {/* <Col>축구장 | 10명 | ~2023.09.06</Col> */}
        <Col span={8}>{stadiumValue}</Col>
      </ItemInfo>

      {/* 제목 */}
      <ItemTitle>
        <Title level={4}>{communityTitle}</Title>
      </ItemTitle>
      {/* 작성자 정보와 게시글 정보 */}
      <UserItemInfoWrap>
        {/* <UserOutlined /> */}

        <UserInfo>
          <Col> {itemData.userImg === null ? <User /> : itemData.userImg}</Col>
          <Col>{commnnityName}</Col>
        </UserInfo>
        <Col
          style={{ display: 'flex', justifyContent: 'space-between' }}
          span={8}
        >
          {/* <Col>게시글 정보 컴포넌트</Col> */}
          <CommunityItemInfo>
            <Hand />
            {likeCnt}
          </CommunityItemInfo>

          <CommunityItemInfo>
            <MessageSquare />
            {commentCnt}
          </CommunityItemInfo>
          <CommunityItemInfo>
            <Eye />
            {views}
          </CommunityItemInfo>
        </Col>
      </UserItemInfoWrap>
    </Row>
  );
};

export default RecruitTeamList;

const CommunityHearderWrap = styled.div<CommunityHeaderWrapProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => (props.wrapWidth ? props.wrapWidth : '100%')};
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
const CommunityItemWrap = styled.div`
  width: 100%;
  height: 150px;
  margin: 0 auto;
  border: 1px solid #000000;
  margin-bottom: 1rem;
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
  background-color: #00ffff;
  color: white;
  border: none;
  width: 6.25rem;
  height: 1.875rem;
`;

const CommunityItemInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 33%;
  margin: 0 auto;
`;
