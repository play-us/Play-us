import { User } from 'lucide-react';
import moment from 'moment';
import styled, { css } from 'styled-components';
import { Col, Row, Rate } from 'antd';
import { IFieldCommentData } from '../../utils/FieldType';
import ConvertDate from '../common/date/dateFormat';

const FieldComment = (props: { data: IFieldCommentData }) => {
  const { data } = props;

  return (
    <CommentList key={data.reviewId}>
      <Col span={24} style={{ minHeight: '70px', paddingBottom: '18px' }}>
        <Row>
          <Col span={2}>
            <User />
          </Col>
          <Col
            span={22}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <CommentInfoName>
              {data.name}
              <Rate allowHalf defaultValue={Number(data.starCnt)} />
            </CommentInfoName>
            <CommentInfoDate>
              {ConvertDate(data.insertDatetime)}
            </CommentInfoDate>
          </Col>
        </Row>
        <Col
          span={24}
          style={{
            margin: '20px 0 40px 0',
            color: '#646464',
            fontSize: '1.25rem',
            fontWeight: 'bold',
          }}
        >
          {data.reviewCon}
        </Col>
        <Col span={24} style={{ fontWeight: '500', color: 'gray' }}>
          사용일시 : {moment(data.resvDate).format('YYYY-MM-DD')}{' '}
          {data.resvStartTime.slice(0, 5)}~{data.resvEndTime.slice(0, 5)}
        </Col>
      </Col>
    </CommentList>
  );
};

export default FieldComment;

const CommentList = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  text-align: start;
  padding: 30px;
`;
const CommentInfoDate = styled.div`
  font-size: 1rem;
  margin-left: 5px;
  color: #9d9d9d;
`;
const CommentInfoName = styled.div`
  font-size: 16px;
  color: #333;
  font-weight: 700;
  margin-bottom: 5px;

  & .ant-rate {
    margin-left: 8px;
  }
  & .ant-rate-star {
    margin-inline-end: 2px !important;
  }
`;
