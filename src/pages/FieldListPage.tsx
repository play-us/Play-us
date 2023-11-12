import { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Col, Row, Pagination } from 'antd';
import FieldListItem from '../components/field/FieldListItem';
import FieldSearchbar from '../components/field/FieldSearchbar';
import { PageStyle } from '../styles/CommonStyle';

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
  create_date: any;
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
            rowDataList.map((data: IRowData) => (
              <FieldListItem data={data} key={data.field_id} />
            ))}
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
