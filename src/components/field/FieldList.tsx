import { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Col, Row, Typography } from 'antd';

interface IFieldItem {
  field_id: string;
  field_name: string;
  area: string;
  addr: string;
  opening_hours: string;
  closing_hours: string;
  price: number;
  hours: number;
  note: string;
  swrm_co: string;
  light: string;
  views: number;
  like_cnt: number;
  img_url: string;
}

interface IRowData {
  field_id: string;
  field_name: string;
  area: string;
  addr: string;
  price: number;
  hours: number;
  views: number;
  like_cnt: number;
  img_url: string;
}

const FieldList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rowDataList, setRowDataList] = useState<IRowData[]>([]);

  /* 데이터 조회 */
  useEffect(() => {
    setIsLoading(true);
    // 목데이터 연결
    Axios.get<IFieldItem[]>('/json/field.json').then((response) => {
      const data = response.data;

      if (data.length > 0) {
        const rows: IRowData[] = [];
        data.forEach((d: IFieldItem) => {
          const row = {
            field_id: d.field_id,
            field_name: d.field_name,
            area: d.area,
            addr: d.addr,
            price: d.price,
            hours: d.hours,
            views: d.views,
            like_cnt: d.like_cnt,
            img_url: d.img_url,
          };
          rows.push(row);
        });

        setRowDataList(rows);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <Row>
      <Col span={24}>
        <CommunityItemWrap>
          {!isLoading &&
            rowDataList.map((data: IRowData) => (
              <CommunutyListItem data={data} />
            ))}
        </CommunityItemWrap>
      </Col>
    </Row>
  );
};

// 커뮤니티 게시글
const CommunutyListItem = (props: { data: IRowData }) => {
  const data = props.data;

  return (
    <Wrap key={data.field_id}>
      <ThumbImg>
        <img src={data.img_url} alt="썸네일 이미지" />
      </ThumbImg>
      <InfoWrap>
        <Date>10월 22일 일요일</Date>
        <FieldName>{data.field_name}</FieldName>
        <Addr>
          {data.area} {data.addr}
          <a href="#">주소 복사</a>
          <a href="#">지도 보기</a>
        </Addr>
        <Interest>
          {data.views}
          {data.like_cnt}
        </Interest>
        <Contour />
        <UseInfo>
          <Price>{data.price}원</Price>
          <Hours>/ {data.hours}시간</Hours>
        </UseInfo>
      </InfoWrap>
    </Wrap>
  );
};

export default FieldList;

const CommunityItemWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Wrap = styled.div`
  width: calc(50% - 1rem);
  border-radius: 4px;
  overflow: hidden;
  ointer-events: none;
  outline: 1px solid rgba(23, 23, 23, 0.08);
  border-radius: 12px;
  outline-offset: -1px;
  margin-bottom: 1.2rem;
`;

const ThumbImg = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  width: 100%;
  height: 246px;

  & img {
    width: 100%;
    min-height: 196px;
    height: 100%;
    max-height: 100%;
  }
`;

const InfoWrap = styled.div`
  padding: 1rem;
  text-align: left;
`;

const Date = styled.div`
  font-size: 1.1rem;
`;

const FieldName = styled.div`
  font-size: 1.3rem;
  padding: 0.4rem 0;
`;

const Addr = styled.div`
  color: #9c9c9c;

  & a {
    margin: 0 0.4rem;
  }
`;

const Interest = styled.div`
  color: #9c9c9c;
`;

const Contour = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 1px;
  background-color: rgba(23, 23, 23, 0.08);
`;

const UseInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Price = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;

const Hours = styled.div`
  margin-left: 0.2rem;
  color: rgb(157 155 155);
`;
