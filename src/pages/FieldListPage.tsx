import { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Col, Row, Pagination } from 'antd';
import FieldListItem from '../components/field/FieldListItem';
import FieldSearchbar from '../components/field/FieldSearchbar';
import { PageStyle } from '../styles/CommonStyle';

interface IFieldItem {
  fieldId: string;
  fieldNm: string;
  area: string;
  addr: string;
  openingHours: string;
  closingHours: string;
  price: number;
  hours: number;
  note?: string | undefined;
  swrmYn?: string | undefined;
  reviewCnt?: number | undefined;
  likeCnt?: any;
  size?: string | undefined;
  imgUrl?: string | undefined;
  insertDatetime: Date;
}

interface IRowData {
  fieldId: string;
  fieldNm: string;
  area: string;
  addr: string;
  price: number;
  hours: number;
  reviewCnt?: number | undefined;
  likeCnt?: number | undefined;
  imgUrl?: string | undefined;
}

const FieldListPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rowDataList, setRowDataList] = useState<IRowData[]>([]);

  /* 데이터 조회 */
  useEffect(() => {
    setIsLoading(true);
    // 목데이터 연결
    getDataAll();
  }, []);

  /* 전체로 조회 */
  const getDataAll = () => {
    Axios.get<IFieldItem[]>('/json/field.json').then((response) => {
      const data = response.data;

      if (data.length > 0) {
        const rows: IRowData[] = [];
        data.forEach((d: IFieldItem) => {
          const row = {
            fieldId: d.fieldId,
            fieldNm: d.fieldNm,
            area: d.area,
            addr: d.addr,
            price: d.price,
            hours: d.hours,
            reviewCnt: d.reviewCnt,
            likeCnt: d.likeCnt,
            imgUrl: d.imgUrl,
          };
          rows.push(row);
        });

        setRowDataList(rows);
        setIsLoading(false);
      }
    });
  };

  return (
    <Row>
      <Col span={24}>
        <PageTopWrap>
          <PageTitle>구장리스트</PageTitle>
        </PageTopWrap>
        <FieldSearchbar />
        <FieldItemWrap>
          {!isLoading &&
            rowDataList.map((data: IRowData) => <FieldListItem data={data} />)}
        </FieldItemWrap>
        <Pagination defaultCurrent={1} total={50} />
      </Col>
    </Row>
  );
};

export default FieldListPage;
const { PageTopWrap, PageTitle } = PageStyle;

const FieldItemWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: calc(50% - 1rem);
  }
`;
