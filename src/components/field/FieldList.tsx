import { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import FieldListItem from './FieldListItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <Row>
      <Col span={24}>
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
        <SliderWrap>
          {rowDataList.length > 0 && (
            <Slider {...settings}>
              {rowDataList.map((data: IRowData) => (
                <FieldListItem data={data} key={data.field_id} />
              ))}
            </Slider>
          )}
        </SliderWrap>
      </Col>
    </Row>
  );
};

export default FieldList;

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

const SliderWrap = styled.div`
  width: 100%;

  .slick-track {
    margin: 0;
    display: flex;
    justify-content: start;
    overflow: hidden;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #c2c2c2;
    font-size: 30px;
    opacity: 1;
  }

  .slick-slide {
    width: calc(25% - 1rem);
    text-align: center;
    margin-right: 1rem;
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    .slick-arrow {
      right: 0;
    }

    .slick-prev:before,
    .slick-next:before {
      display: none;
    }
  }
`;
