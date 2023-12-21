import * as MypageReserS from '../../styles/mypage/Reser';
import * as MypageS from '../../styles/mypage/Mypage';
import { useEffect, useState } from 'react';
import CancleModal from './CancleModal';
import ReviewWriteModal from './ReviewWriteModal';
import { Col, Pagination } from 'antd';

import { getReservation } from '../../service/FieldApi';
import { IFieldResvData } from '../../utils/FieldType';
import LoadingComponent from '../../components/common/Loading';
import ResvListItem from './ResvListItem';

const ReservationDetails = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [resvList, setResvList] = useState<IFieldResvData[]>([]);
  const [currentPage, setCurrentPage] = useState(1); //페이지네이션 현재페이지
  const ITEM_PER_PAGE = 10;
  const startIndex = (currentPage - 1) * ITEM_PER_PAGE;
  const endIndex = startIndex + ITEM_PER_PAGE;
  useEffect(() => {
    setIsLoading(true);
    getReservationList();
  }, []);

  /* 구장 예약정보 조회 */
  async function getReservationList() {
    const email = 'chu';
    const res: any = await getReservation(email, 0, 20);

    setResvList(res.data.result);
    setIsLoading(false);
  }

  // 예약취소,후기등록 모달  state   (스테이트 변수명에 state제거하기!!, 스테이트 하나로 만들기)
  const [cModalState, setCModalState] = useState<boolean>(false);
  const [wModalState, setWModalState] = useState<boolean>(false);

  // 모달창에 전달할 해당 예약데이터 예약 번호 state
  const [data, setData] = useState<number>(0);

  // 모달 상태에 따라 변수에 담아줄 컴포넌트
  let showModal: null | JSX.Element = null;
  if (cModalState) {
    showModal = (
      <CancleModal
        setCModalState={setCModalState}
        data={resvList[data]}
      ></CancleModal>
    );
  } else if (wModalState) {
    showModal = (
      <ReviewWriteModal
        setWModalState={setWModalState}
        data={resvList[data]}
      ></ReviewWriteModal>
    );
  }

  // 페이지네이션 이벤트 함수
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const resvListComponent = resvList
    .slice(startIndex, endIndex)
    .map((data: IFieldResvData, index: number) => (
      <ResvListItem
        data={data}
        index={index}
        setData={setData}
        setCModalState={setCModalState}
        setWModalState={setWModalState}
      />
    ));

  return (
    <MypageS.MyListRight>
      {/* 예약취소 모달 */}
      {showModal}
      <MypageReserS.ReserConWrap>
        {!isLoading ? resvListComponent : <LoadingComponent />}
        <Col span={24}>
          <Pagination
            current={currentPage}
            total={resvList.length}
            pageSize={ITEM_PER_PAGE}
            onChange={handlePageChange}
          ></Pagination>
        </Col>
      </MypageReserS.ReserConWrap>
    </MypageS.MyListRight>
  );
};

export default ReservationDetails;
