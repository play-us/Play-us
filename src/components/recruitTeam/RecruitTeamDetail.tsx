import { Button, Col, Input, Popconfirm, Row } from 'antd';
import { Typography } from 'antd';
import Axios from 'axios';
import { ArrowLeft, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ICommunityItem, ICommunityRowData } from './RecruitTeamList';
import RecruitTeamAddMoadl from './RecruitTeamAddModal';
import axios from 'axios';
import { useNavigate } from 'react-router';

// const urlGetCommentListt = '/json/comment.json';
const urlGetRecruitTeamList = '/json/communityDetail.json';
const uwrDeleteCommu = 'http://localhost:8080/community/deleteCommunity';
const uwrDeleteComment =
  'http://localhost:8080/community/deleteCommunityComment';

const urlGetCommentList =
  'http://localhost:8080/community/getCommunityCommentList';
const urlPostComment = 'http://localhost:8080/community/updateCommunityComment';

const urlAddComment = 'http://localhost:8080/communityinsertCommunityComment';

interface ICommentResponse {
  name: string;
  p_img: null;
  commentTxt: string;
  insertDatetime: any;
  commentId: string;
  commentSeq: string;
}
interface ICommentData {
  commentDate: string;
  commentText: string;
  commentId: string;
  commentSeq: string;
  name: string;
  pImg: null;
}
const { Title } = Typography;
const confirmTitle = () => {
  return '작성하신 글을 삭제 하시겠어요?';
};

// 댓글 리스트 컴포넌트
const CommentData = (props: { data: ICommentData }) => {
  const navigate = useNavigate();
  const { data } = props;
  // console.log(data, '데이터');
  // 이름 추가
  const { commentDate, name, commentText, pImg, commentId } = data;
  const [defaultValue, setDefaultValue] = useState<string>('');
  const [edit, setEdit] = useState<string>('');
  const [editButton, setEditButton] = useState<boolean>(false);
  useEffect(() => {
    setDefaultValue(commentText);
  }, []);

  const handleEditOnchange = (e: any) => {
    const { value } = e.target;
    setDefaultValue(value);
  };
  const NavigateCommunityList = () => {
    navigate('/recruitTeamDetail');
  };
  const handleUpdateCommunityOnClick = () => {
    return;
  };
  //댓글수정
  const handleCommentEditOnclick = (text: string, commentId: string) => {
    const data = {
      commentId: commentId,

      commentTxt: text,
    };
    console.log(data);

    axios.post(urlPostComment, data).then((response) => {
      console.log(response, '응답');
      // 새로고침
      setEditButton(false);
      // if(response === '성공'){
      // // '성공알럿'
      //   onClose()
      // }
      // else{
      //  //실패 앐럿
      //  //창 유지
      // }
    });
    return;
  };

  const handleEditOpenOnClick = () => {
    setEditButton(true);
  };

  //댓글삭제
  const handleDeleteOnClick = () => {
    axios
      .delete(uwrDeleteComment, {
        params: {
          // 여기에 쿼리 매개변수를 추가합니다.
          commentId: commentId,
          // ... 다른 쿼리 매개변수
        },
      })
      .then((response) => {
        // 성공적인 응답을 처리합니다.
        console.log(response);
        console.log('hi');
        if (response.statusText === 'OK') {
          NavigateCommunityList();
        }
      });
  };
  return (
    <>
      <Col span={24} style={{ minHeight: '70px', paddingBottom: '18px' }}>
        <Row>
          <Col span={2}>{!pImg ? <User /> : pImg}</Col>
          <Col span={18} className="commnent_info_title">
            {/* <CommentInfoName>{name}</CommentInfoName> */}
            <CommentInfoName>{'황창민'}</CommentInfoName>
            <CommentInfoDate>{commentDate}</CommentInfoDate>
          </Col>
          <Col span={3}>
            <ButtonWrap onClick={handleEditOpenOnClick}>수정</ButtonWrap>
            <Popconfirm
              title={confirmTitle}
              onConfirm={handleDeleteOnClick}
              okText="네"
              cancelText="아니오"
            >
              <Button>삭제</Button>
            </Popconfirm>
          </Col>
        </Row>
      </Col>
      <Comment>
        {editButton ? (
          <Input onChange={handleEditOnchange} value={defaultValue}></Input>
        ) : (
          commentText
        )}
      </Comment>
      <div>
        {editButton ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'start',
              paddingTop: '10px',
            }}
          >
            <Button
              onClick={() => handleCommentEditOnclick(defaultValue, commentId)}
            >
              수정
            </Button>
            <Button onClick={() => setEditButton(false)}> 취소</Button>
          </div>
        ) : null}
      </div>
    </>
  );
};
//팀원모집상세 컴포넌트
const RecruitInfoData = (props: { data: ICommunityRowData }) => {
  const navigate = useNavigate();
  const { data } = props;
  // const createdDate = `${data.createdDate}`;
  // const stadiumValue = `${data.stadium} | ${data.memberCount}명 | ~${data.deadLine}`;
  // const { likeCnt } = data;
  // const commentCnt = data.commentCnt;
  // const views = data.views;
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleDeleteOnClick = () => {
    return;
  };
  const handleModalOpenOnClick = () => {
    setModalOpen(true);
  };
  const handleModalCloseOnClick = () => {
    setModalOpen(false);
  };
  const NavigateCommunityList = () => {
    navigate('/recruitTeamDetail');
  };
  const handleDeleteCommu = () => {
    axios
      .delete(uwrDeleteCommu, {
        params: {
          // 여기에 쿼리 매개변수를 추가합니다.
          commuId: '9',
          // ... 다른 쿼리 매개변수
        },
      })
      .then((response) => {
        // 성공적인 응답을 처리합니다.
        console.log(response.data);
        NavigateCommunityList();
      });
  };
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
      <Col span={24} className="recruit_detail_title">
        <Title>{commuTitle}</Title>
      </Col>
      <Col
        span={24}
        // style={{ display: 'flex', justifyContent: 'space-between' }}
        style={{ borderBottom: '3px solid #f2f2f2' }}
      >
        <Row style={{ paddingBottom: '12px' }}>
          <Col span={20} style={{ display: 'flex', alignItems: 'center' }}>
            <ButtonWrap marginRight="10px" backgroundColor="EFEFEF">
              ⚽ {stadium}
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
      <Col span={24}>
        <Row>
          <DetailButtonWrap>
            <ButtonWrap onClick={handleModalOpenOnClick}>수정</ButtonWrap>
            <Popconfirm
              title={confirmTitle}
              onConfirm={handleDeleteCommu}
              okText="네"
              cancelText="아니오"
            >
              <ButtonWrap>삭제</ButtonWrap>
            </Popconfirm>
          </DetailButtonWrap>
          <Col
            style={{ marginBottom: '10px' }}
            span={4}
            className="commnent_info_title"
          >
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
      <Col span={24}>
        <Row>
          <Col span={4} className="commnent_info_title">
            모집인원
          </Col>
          <Col span={8} className="comment_info_content">
            {memberCount}
          </Col>
          <Col span={4} className="commnent_info_title">
            지역
          </Col>
          <Col span={8} className="comment_info_content">
            {location}
          </Col>
        </Row>
      </Col>
      {/* <Col span={24}>
          <Row>
            <Col span={4} className="commnent_info_title">
              지역
            </Col>
            <Col span={8} className="comment_info_content">
              {location}
            </Col>
          </Row>
        </Col> */}
      <Col span={24} style={{ marginTop: '40px', marginBottom: '60px' }}>
        <Contents>{content}</Contents>
      </Col>
      {modalOpen ? (
        <RecruitTeamAddMoadl
          open={modalOpen}
          onClose={handleModalCloseOnClick}
        ></RecruitTeamAddMoadl>
      ) : null}
    </>
  );
};

//전체 팀원모집 상세 페이지
const RecruitTeamDetail = () => {
  const [rowDataList, setRowDataList] = useState<ICommunityRowData[]>([]);
  const [commentDataList, setCommentDataList] = useState<any>([]);

  //화면 랜더링시 api
  useEffect(() => {
    // 댓글 조회 정보
    const commentListApiR = Axios.get<any>(urlGetCommentList).then(
      (response) => {
        const { result } = response.data;
        console.log(result);

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
      },
    );

    // const commentListApi = Axios.get<[]>(urlGetCommentListt).then(
    //   (response) => {
    //     const data = response.data;

    //     if (data.length > 0) {
    //       const rows: ICommentData[] = [];
    //       data.forEach((element: ICommentResponse) => {
    //         const row = {
    //           // createdDate: element.created_date,
    //           // commuTitle: element.commu_title,
    //           // commentDate: element.comment_date,
    //           // commentText: element.comment_text,
    //           // name: element.name,
    //           // pImg: element.p_img,
    //         };
    //         rows.push(row);
    //       });

    //       setCommentDataList(rows);
    //     }
    //   },
    // );
    // 커뮤니티 상세정보
    const recruitDetail = Axios.get<ICommunityItem[]>(
      urlGetRecruitTeamList,
    ).then((response) => {
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
            content: element.content,
            location: element.location,
          };
          rows.push(row);
        });

        setRowDataList(rows);
      }
    });
  }, []);
  const handleCommentAddOnClick = () => {
    // 등록 api
    console.log('OkAdd:::');
    const data = {
      // commuId: ,

      commentTxt: 'hello',

      email: 'chu',
    };
    // console.log(param, ' params');

    axios.post(urlAddComment, data).then((response) => {
      console.log(response, '응답');

      // if(response === '성공'){
      // // '성공알럿'
      //   onClose()
      // }
      // else{
      //  //실패 앐럿
      //  //창 유지
      // }
    });
  };

  //팀원모집 상세 정보 데이터 주입
  const RecruitTeamInfo = rowDataList.map((data: ICommunityRowData) => (
    <RecruitInfoData data={data} />
  ));
  // 댓글 리스트 데이터 주입
  console.log(commentDataList, 'list');

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
        <CommentAddButton onClick={handleCommentAddOnClick}>
          댓글등록
        </CommentAddButton>
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
  font-weight: 400;
  font-size: 16px;
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
    props.color || '#444'}; /* marginRight 프롭 값 또는 기본값 0 */
  font-size: 15px;
  font-weight: 600;
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
const DetailButtonWrap = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
`;
