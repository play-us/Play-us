import { Button, Col, Row } from 'antd';
import { Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Axios from 'axios';
import { ArrowLeft, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const urlGetRecruitTeamList = '/json/comment.json';
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
const { Text, Title } = Typography;

const RecruitTeamDetail = () => {
  const [commentDataList, setCommentDataList] = useState<any>([]);
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
              <Col className="comment_info_name">{name}</Col>
              <Col className="comment_info_date">{commentDate}</Col>
            </Col>
          </Row>
        </Col>
        <Comment className="comment">{commentText}</Comment>
      </>
    );
  };

  useEffect(() => {
    // 타입설정 없이 초기 연결
    // axios.get<any>('/json/community.json').then((res) => {
    //   setRowDataList(res);
    //   console.log(res);
    // });
    // 목데이터 연결
    Axios.get<[]>(urlGetRecruitTeamList).then((response) => {
      const data = response.data;
      console.log(data);

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
  }, []);
  // 리스트 컴포넌트
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
        <Col
          span={3}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <ButtonWrap>수정</ButtonWrap>
          <ButtonWrap>삭제</ButtonWrap>
        </Col>
      </Col>
      <Col span={24} className="recruit_detail_title">
        <Title>제목</Title>
      </Col>
      <Col
        span={24}
        // style={{ display: 'flex', justifyContent: 'space-between' }}
        style={{ borderBottom: '3px solid #f2f2f2' }}
      >
        <Row style={{ paddingBottom: '24px' }}>
          <Col span={20} style={{ display: 'flex', alignItems: 'center' }}>
            <ButtonWrap marginRight="10px" backgroundColor="EFEFEF">
              축구장
            </ButtonWrap>
            <ButtonWrap backgroundColor="EFEFEF">10명</ButtonWrap>
          </Col>
          <Col span={4}>
            <UserInfo>
              {/* <Col> {itemData.userImg === null ? <User /> : itemData.userImg}</Col> */}
              <Col>
                <User />
              </Col>
              {/* <Col>{commnnityName}</Col> */}
              <Col className="recruit_detail_name">사용자 이름</Col>
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
            마감날짜
          </Col>
          <Col className="commnent_info_title" span={4}>
            구장유형
          </Col>
          <Col span={8} className="comment_info_content">
            축구
          </Col>
        </Row>
      </Col>
      <Col span={24} style={{ marginBottom: '10px' }}>
        <Row>
          <Col span={4} className="commnent_info_title">
            모집인원
          </Col>
          <Col span={8} className="comment_info_content">
            4명
          </Col>
          <Col span={4} className="commnent_info_title">
            참여인원
          </Col>
          <Col span={8} className="comment_info_content">
            4명
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row>
          <Col span={4} className="commnent_info_title">
            지역
          </Col>
          <Col span={8} className="comment_info_content">
            서울 관악구
          </Col>
        </Row>
      </Col>
      <Col span={24} style={{ marginTop: '60px', marginBottom: '60px' }}>
        <Contents>
          안녕하세요. 정기적으로 한 달에 한 번정도 모여서 축구를 같이 할 팀원을
          모집합니다. 가능한 불참 없이 모두가 참여했으면 좋겠어요. 날짜는
          단톡에서 협의해서 진행하려 합니다. 오픈채팅방 링크 안녕하세요.
          정기적으로 한 달에 한 번정도 모여서 축구를 같이 할 팀원을 모집합니다.
          가능한 불참 없이 모두가 참여했으면 좋겠어요. 날짜는 단톡에서 협의해서
          진행하려 합니다. 오픈채팅방 링크
        </Contents>
      </Col>
      <CommentHeader>
        <div>댓글</div>
        <div> {commentDataList.length}</div>
      </CommentHeader>
      <Col span={24} style={{ marginBottom: '20px' }}>
        <Row>
          <Col span={2}>
            <User />
          </Col>
          <Col span={22}>
            <TextArea placeholder="댓글을 입력하세요"></TextArea>
          </Col>
        </Row>
      </Col>

      <Col span={24} style={{ textAlign: 'right' }}>
        <CommentButton>댓글등록</CommentButton>
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
  white-space: pre-line;
  word-break: keep-all;
  font-size: 1.125rem;
  text-align: left;
  letter-spacing: -0.004em;
`;

const CommentListWrap = styled.pre`
  border-bottom: 2px solid #e1e1e1;
  width: 850px;
  /* height: 100px; */
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const CommentButton = styled.button`
  padding: 12px 24px;
  height: 40px;
  background: #333;
  border-radius: 50px;
  font-weight: 700;
  color: #fff;
  font-size: 16px;
  /* display: flex; */
  /* align-items: center; */
`;
interface ButtonProps {
  backgroundColor?: string;
  marginRight?: string;
}

const ButtonWrap = styled.button<ButtonProps>`
  border-radius: 10px; /* 원하는 값으로 변경 */
  margin-right: ${(props) =>
    props.marginRight || '0'}; /* marginRight 프롭 값 또는 기본값 0 */
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
  max-height: 24px;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.125rem;
  margin: auto;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 700;
`;
