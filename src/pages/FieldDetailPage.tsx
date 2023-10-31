import { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  MessageSquare,
  Heart,
  Flag,
  ShowerHead,
  CarFront,
  Footprints,
} from 'lucide-react';
import { Button, Typography, message } from 'antd';
import { RedColor } from '../styles/CommonStyle';
import FieldResvModal from '../components/field/FieldResvModal';
import KakaoMap from '../components/common/KakaoMap';

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

declare global {
  interface Window {
    kakao: any;
  }
}

const { Title, Text } = Typography;

const FieldDetailPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const field_id = searchParams.get('id');

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IRowData[]>([]);
  const [liked, setLiked] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  /* 데이터 조회 */
  useEffect(() => {
    setIsLoading(true);
    getDataAll();
  }, [searchParams]);

  /* 전체로 조회 */
  const getDataAll = () => {
    Axios.get<IFieldItem[]>('/json/field.json').then((response) => {
      const data = response.data;

      if (data) {
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

        setData(rows);
        setIsLoading(false);
      }
    });
  };

  /* 좋아요 기능 */
  const putLiked = () => {
    setLiked(!liked);
  };

  /* 카카오 맵 지도 */
  /* useEffect(() => {
    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.586272, 127.029005), //지도의 중심좌표
      level: 1, //지도의 레벨(확대, 축소 정도)
    };
    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    //---> 기본 맵 container, options, map 설정.

    for (let i = 0; i < dummy.data.length; i++) {
      displayMarker(dummy.data[i], i);
    }

    function displayMarker<
      T extends {
        name: string;
        location_y: number;
        location_x: number;
        active: boolean;
        point: number;
      },
    >(data: T, i: number) {
      // 인포윈도우 표시될 위치(좌표)
      let iwPosition = new window.kakao.maps.LatLng(
        data.location_y,
        data.location_x,
      );

      // 인포윈도우에 표출될 내용. HTML 문자열이나 document element 등이 가능하다.
      var inactiveInfoWindow = `<div class="inactive infowindow""><span>${data.name}</span></div>`;

      //인포윈도우
      let infowindow;

      infowindow = new window.kakao.maps.InfoWindow({
        zIndex: 1,
        position: iwPosition,
        content: inactiveInfoWindow,
        disableAutoPan: false,
        map: map, //map에 해당 인포윈도우를 적용한다.
      });
    }

    //중심좌표 재설정
    var position = new window.kakao.maps.LatLng(37.586272, 127.029005);
    map.setCenter(position);
  }); */

  /* 모달 상태 관련 이벤트 핸들러 */
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setConfirmLoading(false);
      navigate('/completePayment');
    }, 2000);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  /* 주소 복사 */
  const handleCopyclipBoard = async (text: string) => {
    navigator.clipboard.writeText(text);
    message.info(`주소를 복사하였습니다!`);
  };
  return (
    <Wrap>
      <BackgroundImg>
        <ActionWrap>
          <WishBtn onClick={() => putLiked()}>
            <Heart color={liked ? RedColor : '#696969'} />
          </WishBtn>
        </ActionWrap>
      </BackgroundImg>
      <SectionWrap>
        <Interest>
          <MessageSquare />
          12
          <Heart />1
        </Interest>
        <Title level={2}>구장이름</Title>
        <FlexWrap type="secondary">
          경기도 부천시 주소주소
          <Button
            type="link"
            onClick={() => handleCopyclipBoard('주소를 복사했습니다')}
          >
            주소복사
          </Button>
        </FlexWrap>
        <Contour />
        <FlexWrap>
          <div>
            <Price>10,000원</Price>
            <Hours>/ 2시간</Hours>
          </div>
          <Button type="primary" size="large" onClick={showModal}>
            예약신청
          </Button>
        </FlexWrap>
      </SectionWrap>
      <SectionWrap>
        <SectionHeader>
          <Title level={4}>경기장 정보</Title>
          <FieldInfo>
            <li>
              <Flag />
              40x20m
            </li>
            <li>
              <ShowerHead />
              샤워실
            </li>
            <li>
              <CarFront />
              무료주차
            </li>
            <li>
              <Footprints />
              풋살화 대여
            </li>
          </FieldInfo>
          <Contour />
          <Title level={5}>구장 특이사항</Title>
          <Contents>
            ■주차: 무료 ■흡연: 흡연구역 외 절대 금연(흡연구역 외에서 흡연 적발
            시 이후 서비스 이용에 제재가 있을 수 있음을 안내합니다.) ■풋살화
            대여: O (사이즈: 220~290mm / 대여료: 3천 원)
          </Contents>
        </SectionHeader>
      </SectionWrap>
      <SectionWrap>
        <SectionHeader>
          <Title level={4}>지도</Title>
          <KakaoMap />
        </SectionHeader>
      </SectionWrap>
      <SectionWrap>
        <SectionHeader>
          <Title level={4}>환불정책</Title>
        </SectionHeader>
        <Title level={5}>신청 취소 시 환불 기준</Title>
        <Contents>
          예약신청일 ~ 매치 3일 전 : 무료 취소 <br />
          매치 2일 전 : 80% 환급 <br />
          매치 1일 전 : 환불 불가
          <br />
        </Contents>
        <Title level={5}>그 외 취소 기준</Title>
        <Contents>
          결제 후 30분 이내에는 하루 1회에 한해 무료 취소가 가능합니다. (단,
          매치 시작 90분 이내일 경우 불가) 쿠폰 신청자는 매치 시작 90분 전까지
          취소 시 쿠폰이 반환됩니다. 결제 시 실 결제금액(쿠폰 제외)을 기준으로
          위 규정에 따라 환급됩니다. 매치 시작 90분 전까지 최소 인원이 모이지
          않을 시 카카오톡 혹은 LMS으로 안내되며, 자동 전액 환불됩니다. (단,
          공지 전 직접 취소하시는 경우 상단 일반 환불 규정대로 처리되니
          유의하시길 바랍니다)
          <br />
        </Contents>
        <Title level={5}>다음의 경우는 환불이 불가합니다.</Title>
        <Contents>
          구장, 날짜, 시간 등을 실수로 잘못 선택한 경우 부상, 취업 등 개인
          사정으로 신청된 매치에 참여하지 못하는 경우 단체 혹은 지인과의 참가로
          매치 취소 혹은 변경을 원하는 경우 황사/미세먼지로 인해 취소 혹은
          변경을 요청하는 경우 단순 변심으로 취소 혹은 변경을 요청하는 경우
          <br />
        </Contents>
      </SectionWrap>
      <FieldResvModal
        fieldName="구장이름"
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        confirmLoading={confirmLoading}
      />
    </Wrap>
  );
};

export default FieldDetailPage;

const Wrap = styled.div`
  text-align: left;
  background-color: #f2f5f7;
`;

const BackgroundImg = styled.div`
  width: 100%;
  height: 20em;
  background-color: red;
  position: relative;
`;

const ActionWrap = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const WishBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
`;

const SectionWrap = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionHeader = styled.div`
  padding-bottom: 20px;
`;

const Interest = styled.div`
  color: #9c9c9c;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 0.8rem;

  & svg {
    width: 20px;
    padding: 0 0.2rem;

    &:first-child {
      padding-left: 0;
    }
  }
`;

const FlexWrap = styled(Text)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddressCopy = styled(Text)`
  text-align: right;
  cursor: pointer;
`;

const Contour = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 1px;
  background-color: rgba(23, 23, 23, 0.08);
`;

const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #222;
  padding-right: 4px;
`;

const Hours = styled.span`
  font-size: 16px;
  color: #797979;
`;

const FieldInfo = styled.ul`
  padding-top: 0.4rem;
  & li {
    width: 50%;
    display: inline-flex;
    align-items: center;
    color: #979799;
    text-decoration: line-through;

    & svg {
      padding-right: 8px;
    }
  }
`;

const Contents = styled.pre`
  white-space: pre-line;
  word-break: keep-all;
  font-size: 14px;
  line-height: 22px;
  overflow: auto;
  margin: 10px 0;
`;
