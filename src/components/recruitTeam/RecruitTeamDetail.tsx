import { Button, Col, Row } from 'antd';
import { Typography } from 'antd';
import Axios from 'axios';
import { ArrowLeft, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ICommunityItem, IRowData } from './RecruitTeamList';

const urlGetCommentList = '/json/comment.json';
const urlGetRecruitTeamList = '/json/communityDetail.json';
interface ICommentResponse {
  name: string;
  p_img: null;
  comment_text: string;
  comment_date: string;
}
interface ICommentData {
  commentDate: string;
  commentText: string;
  name: string;
  pImg: null;
}
const { Title } = Typography;

// 댓글 리스트 컴포넌트
const CommentData = (props: { data: ICommentData }) => {
  const { data } = props;
  console.log(data, '데이터');
  const { commentDate, name, commentText, pImg } = data;
  return (
    <>
      <Col span={24} style={{ minHeight: '70px', paddingBottom: '18px' }}>
        <Row>
          <Col span={2}>{!pImg ? <User /> : pImg}</Col>
          <Col span={22} className="commnent_info_title">
            <CommentInfoName>{name}</CommentInfoName>
            <CommentInfoDate>{commentDate}</CommentInfoDate>
          </Col>
        </Row>
      </Col>
      <Comment className="comment">{commentText}</Comment>
    </>
  );
};
//팀원모집상세 컴포넌트
const RecruitInfoData = (props: { data: IRowData }) => {
  const { data } = props;
  // const createdDate = `${data.createdDate}`;
  // const stadiumValue = `${data.stadium} | ${data.memberCount}명 | ~${data.deadLine}`;
  // const { likeCnt } = data;
  // const commentCnt = data.commentCnt;
  // const views = data.views;
  const {
    commuTitle,
    stadium,
    name,
    memberCount,
    deadLine,
    location,
    content,
  } = data;

  return (
    <>
      <>
        <Col span={24} className="recruit_detail_title">
          <Title>{commuTitle}</Title>
        </Col>
        <Col
          span={24}
          // style={{ display: 'flex', justifyContent: 'space-between' }}
          style={{ borderBottom: '3px solid #f2f2f2' }}
        >
          <Row style={{ paddingBottom: '24px' }}>
            <Col span={20} style={{ display: 'flex', alignItems: 'center' }}>
              <ButtonWrap marginRight="10px" backgroundColor="EFEFEF">
                {stadium}
              </ButtonWrap>
              <ButtonWrap color="rgb(62, 133, 244)" backgroundColor="EFEFEF">
                {memberCount}명
              </ButtonWrap>
            </Col>
            <Col span={4}>
              <UserInfo>
                {/* <Col> {itemData.userImg === null ? <User /> : itemData.userImg}</Col> */}
                <Col>
                  <User />
                </Col>
                {/* <Col>{commnnityName}</Col> */}
                <Col className="recruit_detail_name"> {name}</Col>
              </UserInfo>
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{ marginTop: '60px', marginBottom: '10px' }}>
          <Row>
            <Col span={4} className="commnent_info_title">
              마감일
            </Col>
            <Col span={8} className="comment_info_content">
              {deadLine}
            </Col>
            <Col className="commnent_info_title" span={4}>
              구장유형
            </Col>
            <Col span={8} className="comment_info_content">
              {stadium}
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{ marginBottom: '10px' }}>
          <Row>
            <Col span={4} className="commnent_info_title">
              모집인원
            </Col>
            <Col span={8} className="comment_info_content">
              {memberCount}
            </Col>
            <Col span={4} className="commnent_info_title">
              참여인원
            </Col>
            <Col span={8} className="comment_info_content">
              {memberCount}명
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={4} className="commnent_info_title">
              지역
            </Col>
            <Col span={8} className="comment_info_content">
              {location}
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{ marginTop: '60px', marginBottom: '60px' }}>
          <Contents>{content}</Contents>
        </Col>
      </>
    </>
  );
};

//전체 팀원모집 상세 페이지
const RecruitTeamDetail = () => {
  const [rowDataList, setRowDataList] = useState<IRowData[]>([]);
  const [commentDataList, setCommentDataList] = useState<any>([]);

  //화면 랜더링시 api
  useEffect(() => {
    const commentListApi = Axios.get<[]>(urlGetCommentList).then((response) => {
      const data = response.data;

      if (data.length > 0) {
        const rows: ICommentData[] = [];
        data.forEach((element: ICommentResponse) => {
          const row = {
            // createdDate: element.created_date,
            // commuTitle: element.commu_title,
            commentDate: element.comment_date,
            commentText: element.comment_text,
            name: element.name,
            pImg: element.p_img,
          };
          rows.push(row);
        });

        setCommentDataList(rows);
      }
    });
    const recruitDetail = Axios.get<ICommunityItem[]>(
      urlGetRecruitTeamList,
    ).then((response) => {
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
            content: element.content,
            location: element.location,
          };
          rows.push(row);
        });

        setRowDataList(rows);
      }
    });
  }, []);

  //팀원모집 상세 정보 데이터 주입
  const RecruitTeamInfo = rowDataList.map((data: IRowData) => (
    <RecruitInfoData data={data} />
  ));
  // 댓글 리스트 데이터 주입
  const commentList = commentDataList.map((data: ICommentData) => (
    <CommentListWrap>
      <CommentData data={data} />
    </CommentListWrap>
  ));

  return (
    <Row style={{ padding: '1.5rem 1.5rem 5rem' }}>
      <Col span={24} style={{ display: 'flex', marginTop: '20px' }}>
        <Col span={21} style={{ display: 'flex' }}>
          <ArrowLeft />
        </Col>
        {/* 작성자일때 노출 */}
        <Col
          span={3}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <ButtonWrap>수정</ButtonWrap>
          <ButtonWrap>삭제</ButtonWrap>
        </Col>
      </Col>
      {RecruitTeamInfo}
      <CommentHeaderWrap>
        <CommentHeader>댓글 </CommentHeader>
        <CommentLength>{commentDataList.length}</CommentLength>
      </CommentHeaderWrap>
      <Col span={24} style={{ marginBottom: '20px' }}>
        <Row>
          <Col span={2}>
            <User />
          </Col>
          <Col span={22}>
            <CommentInput placeholder="댓글을 입력하세요"></CommentInput>
          </Col>
        </Row>
      </Col>

      <Col span={24} style={{ textAlign: 'right' }}>
        <CommentAddButton>댓글등록</CommentAddButton>
      </Col>
      {/* {comment.length >0} */}
      {commentList}
    </Row>
  );
};

export default RecruitTeamDetail;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.125rem;
  margin: auto;
`;
const Contents = styled.pre`
  white-space: pre-line;
  word-break: keep-all;
  font-size: 1.125rem;
  line-height: 1.7;
  overflow: auto;
  margin: 10px 0;
  text-align: left;
`;
const Comment = styled.pre`
  color: #333;
  font-size: 1.125rem;
  line-height: 1.7;
  letter-spacing: -0.004em;
  white-space: pre-line;
  word-break: keep-all;
  text-align: left;
`;

const CommentListWrap = styled.pre`
  border-bottom: 2px solid #e1e1e1;
  width: 850px;
  /* height: 100px; */
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const CommentAddButton = styled.button`
  /* padding: 12px 24px; */
  width: 100px;
  height: 40px;
  background: #333;
  border-radius: 20px;
  font-weight: 700;
  color: #fff;
  font-size: 15px;
  margin-right: 1.5rem;
`;
interface ButtonProps {
  backgroundColor?: string;
  marginRight?: string;
  color?: string;
}

const ButtonWrap = styled.button<ButtonProps>`
  border-radius: 10px; /* 원하는 값으로 변경 */
  margin-right: ${(props) =>
    props.marginRight || '0'}; /* marginRight 프롭 값 또는 기본값 0 */
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
  max-height: 24px;
  color: ${(props) =>
    props.color || '#717171'}; /* marginRight 프롭 값 또는 기본값 0 */
`;

const CommentHeaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 50px;
  margin-bottom: 15px;
`;
const CommentHeader = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-right: 10px;
  line-height: 24px;
  align-items: center;
`;
const CommentLength = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #939393;
`;
const CommentInfoDate = styled.div`
  font-size: 14px;
  line-height: 126.5%;
  letter-spacing: -0.005em;
  color: #9f9f9f;
`;
const CommentInfoName = styled.div`
  font-size: 16px;
  color: #333;
  font-weight: 700;
  margin-bottom: 5px;
`;
const CommentInput = styled.textarea`
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border: 2px solid #e1e1e1;
  border-radius: 16px;
  width: 90%;
  min-height: 70px;
  margin-bottom: 10px;
  resize: none;
`;
