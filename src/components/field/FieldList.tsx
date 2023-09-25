import { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Col, Row, Select, Space } from 'antd';
import FieldListItem from './FieldListItem';
import LabelAndSelectBox from '../common/LabelAndSelectBox';

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

interface IFieldTypeData {
  value: string;
  label: string;
}

const FieldList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rowDataList, setRowDataList] = useState<IRowData[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);
  // 검색 영역
  const [schArea, setSchArea] = useState<IFieldTypeData>({
    value: '',
    label: '전체',
  });
  const [schFieldType, setSchFieldType] = useState<IFieldTypeData>({
    value: '',
    label: '전체',
  });

  /* 탭메뉴 리스트 */
  const tabList = [
    {
      id: 0,
      name: '전체',
    },
    {
      id: 1,
      name: '예약많은 순',
    },
    {
      id: 2,
      name: '신규등록 순',
    },
  ];

  /* 지역 리스트 */
  const areas = [
    { value: '', label: '지역 전체' },
    { value: '서울', label: '서울시' },
    { value: '부산', label: '부산시' },
  ];

  /* 구장유형 리스트 */
  const fieldTypeList = [
    { value: '', label: '구장유형 전체' },
    { value: 'f', label: '풋살장' },
    { value: 's', label: '축구장' },
  ];

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

  /* 구장유형 선택 */
  const handleChangeArea = (value: string, label: string) => {
    setSchArea({ value: value, label: label });
  };

  /* 구장유형 선택 */
  const handleChangeFieldType = (value: string, label: string) => {
    setSchFieldType({ value: value, label: label });
  };

  return (
    <Row>
      <Col span={24}>
        <TabMenu>
          {tabList.map((item) => (
            <Tab
              key={item.id}
              active={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
            >
              {item.name}
            </Tab>
          ))}
        </TabMenu>
        <Space wrap>
          <Select
            defaultValue={areas[0].label}
            style={{ width: 120 }}
            onChange={() => handleChangeArea}
            options={areas}
          />
          <Select
            defaultValue={fieldTypeList[0].label}
            style={{ width: 120 }}
            onChange={() => handleChangeFieldType}
            options={fieldTypeList}
          />
        </Space>
        <FieldItemWrap>
          {!isLoading &&
            rowDataList.map((data: IRowData) => (
              <FieldListItem data={data} key={data.field_id} />
            ))}
        </FieldItemWrap>
        <FieldItemMoreBtn>더보기</FieldItemMoreBtn>
        <SlideTitle>
          주변 관심 종목 구장 리스트
          <MoreBtn>더보기</MoreBtn>
        </SlideTitle>
      </Col>
    </Row>
  );
};

export default FieldList;

const TabMenu = styled.div`
  display: flex;
  justify-contents: start;
  align-items: center;
  margin: 1.8rem;
  margin-left: 0;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.5rem;
`;

const Tab = styled.div<{ active: boolean }>`
  margin-right: 1.5rem;
  font-size: 20px;
  color: ${(props) => (props.active ? '#444' : '#868e96')};
`;

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

const FieldItemMoreBtn = styled.button`
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;

  width: 20%;
  height: 36px;
  min-width: 48px;
  min-height: 32px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 6px;
  padding: 7px 14px;
  margin: 7px 0;
  box-shadow: inset 0 0 0 1px #e1e2e4;
  &:hover {
    box-sizing: border-box;
    transition: all 0.5s ease;
    background-color: #f0f0f0;
    color: #a2a1a1;
  }
`;

const SlideTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 1.5rem 0;
`;

const MoreBtn = styled.button`
  font-size: 0.8rem;
  &:hover {
    color: #a2a1a1;
    transition: all 0.5s ease;
  }
`;
