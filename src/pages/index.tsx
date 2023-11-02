import { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { Col, Row } from 'antd';
import FieldListItem from '../components/field/FieldListItem';
import FieldSearchbar from '../components/field/FieldSearchbar';
import RecruitTeamInfo from '../components/recruitTeam/RecruitTeamInfo';
import {
  ICommunityItem,
  ICommunityRowData,
} from '../components/recruitTeam/RecruitTeamList';
import { boolean } from 'yargs';
import { MoveRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const urlGetRecruitTeamList = '/json/community.json';

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

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rowDataList, setRowDataList] = useState<IRowData[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [recruitData, setRecruitData] = useState<ICommunityRowData[]>([]);
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

  /* 신규등록순 조회 */
  const getDataSortCreateDate = () => {
    Axios.get<IFieldItem[]>('/json/field.json').then((response) => {
      const data = response.data;

      const orderedData = data.sort(
        (a: IFieldItem, b: IFieldItem): number =>
          +new Date(b.create_date) - +new Date(a.create_date),
      );

      if (orderedData.length > 0) {
        const rows: IRowData[] = [];
        orderedData.slice(0, 6).forEach((d: IFieldItem) => {
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
  useEffect(() => {
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
        console.log(rows, ' data');

        setRecruitData(rows);
      }
    });
  }, []);
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
        <FieldSearchbar />
        <FieldItemWrap>
          {!isLoading &&
            rowDataList.map((data: IRowData) => (
              <FieldListItem data={data} key={data.field_id} />
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
          <RecruitSlideHeader
            marginRight={true}
            font={false}
            cursor={true}
            onClick={() => navigate('/community')}
          >
            더 많은 플랜보기 <MoveRight />
          </RecruitSlideHeader>
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
  cursor: ${(props) => (props.cursor ? 'pointer' : 'auto')};
  font-weight: ${(props) =>
    props.font ? 700 : 'normal'}; /* 700 또는 'normal' */
  margin-right: ${(props) =>
    props.marginRight ? '10px' : '0px'}; /* 700 또는 'normal' */
  margin-bottom: 1.8rem;
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
