import { useEffect, useState } from 'react';
import { Col, Pagination } from 'antd';
import { styled } from 'styled-components';
import * as MypageS from '../../styles/mypage/Mypage';
import { IRowData } from '../../utils/FieldType';
import LikedFieldListItem from './LikedFieldListItem';
import LoadingComponent from '../../components/common/Loading';
import { getMainData } from '../../service/Common';

const LikedField = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [Likeddata, setLikedData] = useState<IRowData[]>([]);
  const [currentPage, setCurrentPage] = useState(1); //페이지네이션 현재페이지
  const ITEM_PER_PAGE = 10;
  const startIndex = (currentPage - 1) * ITEM_PER_PAGE;
  const endIndex = startIndex + ITEM_PER_PAGE;

  useEffect(() => {
    setIsLoading(true);
    getDataAll();
  }, []);

  /* 데이터 조회 */
  async function getDataAll() {
    const res: any = await getMainData(null, null, null, null, '1', 1, 20);
    setLikedData(res.data.result.fieldList);
    setIsLoading(false);
  }

  // 페이지네이션 이벤트 함수
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const likedList = Likeddata.slice(startIndex, endIndex).map(
    (data: IRowData) => (
      <LikedFieldListItem
        data={data}
        getDataAll={getDataAll}
        key={data.fieldId}
      />
    ),
  );

  return (
    <MypageS.MyListRight>
      <WishConBox>{!isLoading ? likedList : <LoadingComponent />}</WishConBox>
      <Col span={24}>
        <Pagination
          current={currentPage}
          total={Likeddata.length}
          pageSize={ITEM_PER_PAGE}
          onChange={handlePageChange}
        ></Pagination>
      </Col>
    </MypageS.MyListRight>
  );
};

const WishConBox = styled.div``;

export default LikedField;
