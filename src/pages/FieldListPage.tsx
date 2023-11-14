import Axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Col, Row, Pagination } from 'antd';
import { PageStyle } from '../styles/CommonStyle';
import FieldListItem from '../components/field/FieldListItem';
import { IFieldItem, IRowData, IFieldTypeData } from '../utils/FieldType';

const FieldListPage = () => {
  const { register, handleSubmit } = useForm<IFieldTypeData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rowDataList, setRowDataList] = useState<IRowData[]>([]);
  const [data, setData] = useState<string>('');

  /* 데이터 조회 */
  useEffect(() => {
    setIsLoading(true);
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

  /* 검색 */
  const onSubmit: SubmitHandler<IFieldTypeData> = (data) => console.log(data);
  return (
    <Row>
      <Col span={24}>
        <PageTopWrap>
          <PageTitle>구장리스트</PageTitle>
        </PageTopWrap>
        <SearchForm onSubmit={handleSubmit(onSubmit)}>
          <SelectBox>
            <Select {...register('area', { required: true })}>
              <option selected>지역 전체</option>
              <option value="apple">apple</option>
              <option value="orange">orange</option>
              <option value="grape">grape</option>
              <option value="melon">melon</option>
            </Select>
            <Dropdown>
              <svg
                height="20"
                width="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                className="css-8mmkcg"
              >
                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
              </svg>
            </Dropdown>
          </SelectBox>
          <SelectBox>
            <Select {...register('fieldTp', { required: true })}>
              <option selected>구장유형 전체</option>
              <option value="apple">apple</option>
              <option value="orange">orange</option>
              <option value="grape">grape</option>
              <option value="melon">melon</option>
            </Select>
            <Dropdown>
              <svg
                height="20"
                width="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                className="css-8mmkcg"
              >
                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
              </svg>
            </Dropdown>
          </SelectBox>
          <TextInput
            type="text"
            {...register('searchTxt')}
            placeholder="구장이름으로 찾기"
          />
          <SubmitButton type="submit" value="검색" />
        </SearchForm>
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

const SearchForm = styled.form`
  display: grid;
  justify-content: start;
  align-items: center;
  margin-bottom: 14px;
  column-gap: 10px;
  grid-template-columns: 150px 150px 1fr 80px;
`;

const SelectBox = styled.div`
  position: relative;
  width: 150px;
  height: 35px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 36px;
  padding: 0px 12px;
  box-sizing: border-box;
`;
const Select = styled.select`
  width: inherit;
  height: inherit;
  background: transparent;
  border: 0 none;
  outline: 0 none;
  padding: 0 5px;
  position: relative;
  z-index: 3;
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;

  &::-ms-expand {
    display: none; /*for IE10,11*/
  }

  & option {
    position: relative;
    background: #fff;
    color: #333;
    padding: 4px 0;
    font-size: 16px;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: rgb(204, 204, 204);
  display: flex;
  padding: 8px;
  transition: color 150ms ease 0s;
  box-sizing: border-box;

  &svg {
    display: inline-block;
    fill: currentcolor;
    line-height: 1;
    stroke: currentcolor;
    stroke-width: 0;
  }
`;

const TextInput = styled.input`
  height: 35px;
  min-height: 35px;
  line-height: 30px;
  box-shadow: none;
  padding-left: 16px;
  padding-right: 52px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 36px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 600;
  color: #222;
`;

const SubmitButton = styled.input`
  height: 35px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  background-color: #232323;
  border: none;
  border-radius: 36px;
  box-sizing: border-box;
  cursor: pointer;
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
