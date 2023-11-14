import { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { Col, Row, Space, Select, Input, Button } from 'antd';
import FieldListItem from '../components/field/FieldListItem';
import RecruitTeamInfo from '../components/recruitTeam/RecruitTeamInfo';
import {
  ICommunityItem,
  ICommunityRowData,
} from '../components/recruitTeam/RecruitTeamList';
import { MoveRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { IFieldItem, IRowData, IFieldTypeData } from '../utils/FieldType';

const urlGetRecruitTeamList = '/json/community.json';
const urlGetMainDataList = 'http://localhost:8080/main/getMainData';

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rowDataList, setRowDataList] = useState<IRowData[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [recruitData, setRecruitData] = useState<ICommunityRowData[]>([]);
  const [schCondition, setSchCondition] = useState<IFieldTypeData>({
    area: '',
    fieldTp: '',
    searchTxt: '',
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

  /* 데이터 조회 */
  useEffect(() => {
    setIsLoading(true);
    // 목데이터 연결
    if (activeTab === 0) getDataAll();
    if (activeTab === 1) getDataAll();
    if (activeTab === 2) getDataSortCreateDate();
  }, [activeTab]);

  /* 전체로 조회 */
  const getDataAll = () => {
    setIsLoading(true);
    Axios.get<IFieldItem[]>('/json/field.json').then((response) => {
      const data = response.data;

      if (data && data.length > 0) {
        const rows: IRowData[] = [];
        data.slice(0, 6).forEach((d: IFieldItem) => {
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

        setRowDataList(rows);
        setIsLoading(false);
      }
    });
  };
  useEffect(() => {
    // 메인 페이지 데이터 init
    Axios.get<any[]>(urlGetMainDataList).then((response) => {
      const data = response.data;
      console.log(data, ' data');

      if (data.length > 0) {
        const rows: any[] = [];
        data.forEach((element: any) => {
          const row = {
            // createdDate: element.created_date,
            // commuTitle: element.commu_title,
            // likeCnt: element.like_cnt,
            // commentCnt: element.comment_cnt,
            // name: element.name,
            // userImg: element.p_img,
            // deadLine: element.deadLine,
            // memberCount: element.member_count,
            // stadium: element.stadium,
            // views: element.views,
          };
          rows.push(row);
        });

        setRecruitData(rows);
      }
    });
    // 기존 목데이터 연결
    Axios.get<ICommunityItem[]>(urlGetRecruitTeamList).then((response) => {
      const data = response.data;

      if (data.length > 0) {
        const rows: ICommunityRowData[] = [];
        data.forEach((element: ICommunityItem) => {
          const row = {
            createdDate: element.created_date,
            commuTitle: element.commu_title,
            likeCnt: element.like_cnt,
            commentCnt: element.comment_cnt,
            name: element.name,
            userImg: element.p_img,
            deadLine: element.deadLine,
            memberCount: element.member_count,
            stadium: element.stadium,
            views: element.views,
          };
          rows.push(row);
        });

        setRecruitData(rows);
      }
    });
  }, []);

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

  /* 구장유형 선택 */
  const handleChangeArea = (value: string) => {
    setSchCondition({ ...schCondition, area: value });
  };

  /* 구장유형 선택 */
  const handleChangeFieldType = (value: string) => {
    setSchCondition({ ...schCondition, fieldTp: value });
  };

  /* 검색어 입력 */
  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchCondition({ ...schCondition, searchTxt: e.target.value });
  };

  /* 검색 submit */
  const handleSearch = () => {
    navigate('/fieldList', {
      state: schCondition,
    });
  };
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
        <SpaceWrap>
          <Select
            defaultValue={areas[0].label}
            style={{ width: 120 }}
            onChange={(e) => handleChangeArea(e)}
            options={areas}
          />
          <Select
            defaultValue={fieldTypeList[0].label}
            style={{ width: 120 }}
            onChange={(e) => handleChangeFieldType(e)}
            options={fieldTypeList}
          />
          <Space.Compact block>
            <Input
              placeholder="구장이름으로 찾기"
              onChange={(e) => handleChangeKeyword(e)}
            />
            <Button type="primary" onClick={handleSearch}>
              검색
            </Button>
          </Space.Compact>
        </SpaceWrap>
        <FieldItemWrap>
          {!isLoading &&
            rowDataList.map((data: IRowData) => (
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

const SpaceWrap = styled(Space)`
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
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
