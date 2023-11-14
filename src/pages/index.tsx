import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { MoveRight } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Col, Row } from 'antd';
import FieldListItem from '../components/field/FieldListItem';
import RecruitTeamInfo from '../components/recruitTeam/RecruitTeamInfo';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getMainData } from '../service/Common';
import { IFieldType } from '../utils/Common';
import { IFieldItem, IRowData, IFieldTypeData } from '../utils/FieldType';
import {
  ICommunityItem,
  ICommunityRowData,
} from '../components/recruitTeam/RecruitTeamList';

// const urlGetRecruitTeamList = '/json/community.json';
// const urlGetMainDataList = 'http://localhost:8080/main/getMainData';

const Home = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IFieldTypeData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fieldDataList, setFieldDataList] = useState<IRowData[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [recruitData, setRecruitData] = useState<ICommunityRowData[]>([]);
  const [fieldType, setFieldType] = useState<IFieldType[]>([]);
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

  /* 데이터 조회 */
  useEffect(() => {
    setIsLoading(true);
    // 목데이터 연결
    if (activeTab === 0) getDataAll();
    if (activeTab === 1) getDataAll();
    if (activeTab === 2) getDataSortCreateDate();
  }, [activeTab]);

  async function getDataAll() {
    console.log('전체 조회');

    setIsLoading(true);
    const res: any = await getMainData('', '', '', '', 1, 20);
    console.log('res.result.fieldList', res.result.fieldList);

    setFieldType(res.result.fieldTpList);
    setFieldDataList(res.result.fieldList);
    setRecruitData(res.result.commuList);

    // res.result.areaList
    // res.result.cityList
    setIsLoading(false);
  }
  /* 신규등록순 조회 */
  const getDataSortCreateDate = () => {
    Axios.get<IFieldItem[]>('/json/field.json').then((response) => {
      const data = response.data;

      const orderedData = data.sort(
        (a: IFieldItem, b: IFieldItem): number =>
          +new Date(b.insertDatetime) - +new Date(a.insertDatetime),
      );

      if (orderedData.length > 0) {
        const rows: IRowData[] = [];
        orderedData.slice(0, 6).forEach((d: IFieldItem) => {
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

        //setRowDataList(rows);
        setIsLoading(false);
      }
    });
  };
  useEffect(() => {
    getDataAll();
  }, []);

  /* 검색 */
  const onSubmit: SubmitHandler<IFieldTypeData> = (data) => console.log(data);

  return (
    <Row>
      <Col span={24} style={{ marginBottom: '20px' }}>
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
            fieldDataList.map((data: IRowData) => (
              <FieldListItem data={data} key={data.fieldId} />
            ))}
        </FieldItemWrap>
        <FieldItemMoreBtn onClick={() => navigate('/fieldList')}>
          더보기
        </FieldItemMoreBtn>
      </Col>
      <Col span={24}>
        <RecruitSlideWrap>
          <RecruitSlideHeader font={true} cursor={false} marginRight={false}>
            플레이어구해요
          </RecruitSlideHeader>
          <MoreRecruitButton
            marginRight={true}
            font={false}
            cursor={true}
            onClick={() => navigate('/community')}
          >
            더 많은 플랜보기 <MoveRight />
          </MoreRecruitButton>
        </RecruitSlideWrap>
      </Col>
      {/* <StyledThreeBoxesGrid>
        {/* <RecruitTeamInfo item={recruitData} /> */}
      {/* {recruitData.map((item, index) => ( */}
      {/* <RecruitTeamInfo item={item} key={index}></RecruitTeamInfo> */}
      {/* ))} */}
      {/* </StyledThreeBoxesGrid> */}
      <Col span={24} style={{ marginBottom: '20px' }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          // pagination
          modules={[Navigation]}
          className="mySwiper"
        >
          {recruitData.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <RecruitTeamInfo item={item}></RecruitTeamInfo>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Col>
    </Row>
  );
};

export default Home;

const TabMenu = styled.div`
  display: flex;
  justify-content: start;
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
const RecruitSlideWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
`;
const RecruitSlideHeader = styled.div<{
  cursor: boolean;
  font: boolean;
  marginRight: boolean;
}>`
  align-items: center;
  font-size: 20px;
  color: #444;
  cursor: ${(props) => (props.cursor ? 'pointer' : 'auto')};
  font-weight: ${(props) =>
    props.font ? 700 : 'normal'}; /* 700 또는 'normal' */
  margin-right: ${(props) =>
    props.marginRight ? '10px' : '0px'}; /* 700 또는 'normal' */
  margin-bottom: 1.8rem;
`;

const MoreRecruitButton = styled(RecruitSlideHeader)`
  font-size: 1rem;
  display: flex;
  align-items: center;

  & > svg {
    width: 12px;
  }
`;
const StyledThreeBoxesGrid = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  gap: 16px; /* 각 박스 사이의 간격 설정, 원하는 크기로 조절하세요 */
`;
// <Swiper
//   id="swiper"
//   virtual
//   slidesPerView={3}
//   spaceBetween={30}
//   navigation={true}
//   pagination
//   modules={[Navigation]}
// >
//   {recruitData.map((item, idx) => {
//     return (
//       <SwiperSlide key={idx}>
//         <RecruitTeamInfo item={item}></RecruitTeamInfo>
//       </SwiperSlide>
//     );
//   })}
// </Swiper>
