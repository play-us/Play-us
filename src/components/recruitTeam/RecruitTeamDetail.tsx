import { Col, Row } from 'antd';
import { Typography } from 'antd';
import { ArrowLeft, User } from 'lucide-react';
import styled from 'styled-components';

const { Title } = Typography;
const RecruitTeamDetail = () => {
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
      <Col span={24}>
        <Title>{'제목'}</Title>
      </Col>
      <Col
        span={24}
        // style={{ display: 'flex', justifyContent: 'space-between' }}
        style={{ borderBottom: '1px' }}
      >
        <Col>
          <div>축구장</div>
          <div>10명</div>
        </Col>

        <UserInfo>
          {/* <Col> {itemData.userImg === null ? <User /> : itemData.userImg}</Col> */}
          <Col>
            <User />
          </Col>
          {/* <Col>{commnnityName}</Col> */}
          <Col>{'사용자이름'}</Col>
        </UserInfo>
      </Col>
      <Col span={24}>
        <Row>
          <Col span={6}>마감일</Col>
          <Col span={6}>마감날짜</Col> <Col span={6}>구장유형</Col>
          <Col span={6}>축구</Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row>
          <Col span={6}>모집인원</Col>
          <Col span={6}>4명</Col> <Col span={6}>참여인원</Col>
          <Col span={6}>4명</Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row>
          <Col span={6}>지역</Col>
          <Col span={6}>서울 관악구</Col>
        </Row>
      </Col>
      <Col span={24} style={{ marginTop: '130px' }}>
        <Col style={{ margin: '30px 0auto' }}>
          안녕하세요. 정기적으로 한 달에 한 번정도 모여서 축구를 같이 할 팀원을
          모집합니다. 가능한 불참 없이 모두가 참여했으면 좋겠어요. 날짜는
          단톡에서 협의해서 진행하려 합니다. 오픈채팅방 링크
        </Col>
      </Col>
    </Row>
  );
};

export default RecruitTeamDetail;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.125rem;
  margin: 0 auto;
`;
