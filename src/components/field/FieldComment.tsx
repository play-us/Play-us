import { User } from 'lucide-react';
import { Rate } from 'antd';
import styled, { css } from 'styled-components';
import { Col, Row } from 'antd';
const FieldComment = () => {
  return (
    <CommentList>
      <Col span={24} style={{ minHeight: '70px', paddingBottom: '18px' }}>
        <Row>
          <Col span={2}>
            <User />
            {/* {!pImg ? <User /> : pImg} */}
          </Col>
          <Col
            span={22}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <CommentInfoName>
              dlfma
              <Rate allowHalf defaultValue={2.5} />
            </CommentInfoName>
            <CommentInfoDate>날짜</CommentInfoDate>
          </Col>
        </Row>
        <Col span={24} style={{ margin: '16px 0 14px' }}>
          내용
        </Col>
        <Col span={24} style={{ fontWeight: '500', color: 'gray' }}>
          사용일시 : 2023.08.08 20:00~22:00
        </Col>
      </Col>
    </CommentList>
  );
};

export default FieldComment;

const CommentList = styled.div`
  margin-bottom: 15px;
  border-bottom: 1px solid #dfdfdf;
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
