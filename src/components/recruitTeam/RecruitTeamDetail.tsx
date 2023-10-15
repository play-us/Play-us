import { Col, Row } from 'antd';
import { Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { ArrowLeft, User } from 'lucide-react';
import { useState } from 'react';
import styled from 'styled-components';
// import '../../styles/recruit';

const { Title } = Typography;
const RecruitTeamDetail = () => {
  const [comment, setComment] = useState<boolean>(false);
  return (
    <Row>
      <Col
        span={24}
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Col>
          <ArrowLeft />
        </Col>
        <Col>
          <button>수정</button>
          <button>삭제</button>
        </Col>
      </Col>
      <Col span={24} style={{ textAlign: 'left' }}>
        <Title>{'제목'}</Title>
      </Col>
      <Col
        span={24}
        // style={{ display: 'flex', justifyContent: 'space-between' }}
        style={{ borderBottom: '1px' }}
      >
        <Row>
          <Col span={20} style={{ display: 'flex' }}>
            <div style={{ textAlign: 'left', marginRight: '10px' }}>축구장</div>
            <div style={{ textAlign: 'left' }}>10명</div>
          </Col>
          <Col span={4}>
            <UserInfo>
              {/* <Col> {itemData.userImg === null ? <User /> : itemData.userImg}</Col> */}
              <Col>
                <User />
              </Col>
              {/* <Col>{commnnityName}</Col> */}
              <Col>{'사용자이름'}</Col>
            </UserInfo>
          </Col>
        </Row>
      </Col>
      <Col span={24} style={{ marginTop: '60px', marginBottom: '10px' }}>
        <Row>
          <Col
            span={4}
            style={{ textAlign: 'left', fontWeight: '700px', fontSize: '20px' }}
          >
            마감일
          </Col>
          <Col span={8} style={{ textAlign: 'left' }}>
            마감날짜
          </Col>
          <Col style={{ textAlign: 'left' }} span={4}>
            구장유형
          </Col>
          <Col span={8} style={{ textAlign: 'left' }}>
            축구
          </Col>
        </Row>
      </Col>
      <Col span={24} style={{ marginBottom: '10px' }}>
        <Row>
          <Col span={4} style={{ textAlign: 'left' }}>
            모집인원
          </Col>
          <Col span={8} style={{ textAlign: 'left' }}>
            4명
          </Col>{' '}
          <Col span={4} style={{ textAlign: 'left' }}>
            참여인원
          </Col>
          <Col span={8} style={{ textAlign: 'left' }}>
            4명
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row>
          <Col span={4} style={{ textAlign: 'left' }}>
            지역
          </Col>
          <Col span={8} style={{ textAlign: 'left' }}>
            서울 관악구
          </Col>
        </Row>
      </Col>
      <Col span={24} style={{ marginTop: '30px' }}>
        <Contents>
          안녕하세요. 정기적으로 한 달에 한 번정도 모여서 축구를 같이 할 팀원을
          모집합니다. 가능한 불참 없이 모두가 참여했으면 좋겠어요. 날짜는
          단톡에서 협의해서 진행하려 합니다. 오픈채팅방 링크
        </Contents>
      </Col>
      <Col span={24} style={{ textAlign: 'left' }}>
        <Title level={5}>댓글</Title> {comment}
      </Col>
      <Col span={24}>
        <Row>
          <Col span={2}>이모티콘</Col>
          <Col span={22}>
            <TextArea placeholder="댓글을 입력하세요"></TextArea>
          </Col>
        </Row>
      </Col>

      <Col> </Col>
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
  font-size: 14px;
  line-height: 22px;
  overflow: auto;
  margin: 10px 0;
  text-align: left;
`;
// const RecuritInfoTitle = styled.di`
//   font-size: 20px;
//   font-weight: 700px;
//   text-align: left;
// `;
