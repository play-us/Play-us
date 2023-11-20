import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Col, Row, Pagination } from 'antd';
import { PageStyle } from '../styles/CommonStyle';
import { getMainData } from '../service/Common';
import { IRowData, IFieldTypeData } from '../utils/FieldType';
import { IFieldType, IAddrType } from '../utils/Common';
import FieldListItem from '../components/field/FieldListItem';
import LoadingComponent from '../components/common/Loading';

const FieldListPage = () => {
  const { register, handleSubmit } = useForm<IFieldTypeData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rowDataList, setRowDataList] = useState<IRowData[]>([]);
  const [fieldType, setFieldType] = useState<IFieldType[]>([]);
  const [city, setCity] = useState<IAddrType[]>([]); // 공통 시도 리스트
  const [area, setArea] = useState<IAddrType[]>([]); // 공통 시군구 리스트
  const [nowArea, setNowArea] = useState<IAddrType[]>([]); // 선택한 시도에 해당하는 시군구 리스트
  const [sido, setSido] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1); //페이지네이션 현재페이지
  const ITEM_PER_PAGE = 10;
  const startIndex = (currentPage - 1) * ITEM_PER_PAGE;
  const endIndex = startIndex + ITEM_PER_PAGE;

  /* 데이터 조회 */
  useEffect(() => {
    setIsLoading(true);
    getDataAll('0');
  }, []);

  /* 데이터 조회 */
  async function getDataAll(sort: string) {
    const res: any = await getMainData(null, null, null, null, sort, 1, 20);
    setFieldType(res.data.result.fieldTpList); // 구장 유형 리스트
    setRowDataList(res.data.result.fieldList); // 구장리스트
    setCity(res.data.result.cityList); // 시도 리스트
    setArea(res.data.result.areaList); // 시군구 리스트
    setIsLoading(false);
  }

  /* 시도 선택 시 시군구 리스트 업데이트 */
  useEffect(() => {
    const newAreaList = area.filter((a) => a.rel01Data === sido);
    setNowArea(newAreaList);
  }, [area, sido]);

  /* 검색 */
  const onSubmit: SubmitHandler<IFieldTypeData> = async (data) => {
    setIsLoading(true);
    if (data.area1 === '시도 전체') {
      data.area1 = null;
    }
    if (data.area2 === '시군구 전체') {
      data.area2 = null;
    }
    if (data.fieldTp === '구장유형 전체') {
      data.fieldTp = null;
    }
    if (data.searchTxt === '') {
      data.searchTxt = null;
    }
    const res: any = await getMainData(
      data.area1,
      data.area2,
      data.fieldTp,
      data.searchTxt,
      '0',
      0,
      20,
    );

    setRowDataList(res.data.result.fieldList); // 구장리스트
    setIsLoading(false);
  };

  // 페이지네이션 이벤트 함수
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const fieldList = rowDataList
    .slice(startIndex, endIndex)
    .map((data: IRowData) => <FieldListItem data={data} />);
  return (
    <Row>
      <Col span={24}>
        <PageTopWrap>
          <PageTitle>구장리스트</PageTitle>
        </PageTopWrap>
        <SearchForm onSubmit={handleSubmit(onSubmit)}>
          <SelectBox>
            <Select
              {...register('area1', { required: true })}
              onChange={(e) => setSido(e.target.value)}
            >
              <option selected>시도 전체</option>
              {city.map((c) => (
                <option value={c.syscdCd} key={c.syscdCd}>
                  {c.syscdNm}
                </option>
              ))}
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
            <Select {...register('area2', { required: true })}>
              <option selected>시군구 전체</option>
              {nowArea.map((a) => (
                <option value={a.syscdCd} key={a.syscdCd}>
                  {a.syscdNm}
                </option>
              ))}
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
              {fieldType.map((t) => (
                <option value={t.syscdCd} key={t.syscdCd}>
                  {t.syscdNm}
                </option>
              ))}
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
          {!isLoading ? fieldList : <LoadingComponent />}
        </FieldItemWrap>
        <Col span={24}>
          <Pagination
            current={currentPage}
            total={rowDataList.length}
            pageSize={ITEM_PER_PAGE}
            onChange={handlePageChange}
          ></Pagination>
        </Col>
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
  grid-template-columns: 150px 150px 150px 1fr 80px;
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
