import * as MypageS from '../../styles/mypage/Mypage';
import * as MypageReviewS from '../../styles/mypage/Review';
import { Rate } from 'antd';
import { useEffect, useState } from 'react';
import { Col, Pagination } from 'antd';
import { getFieldReview } from '../../service/FieldApi';
import LoadingComponent from '../../components/common/Loading';
import FieldComment from '../../components/field/FieldComment';
import { IFieldCommentData } from '../../utils/FieldType';

export interface IFieldReviewData {
  resvId: string;
  userNm: string;
  fieldNm: string;
  resvDate: string;
  resvStartTime: string;
  resvEndTime: string;
  resvState: string;
}

const ReviewDetails = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [reviewList, setReviewList] = useState<IFieldCommentData[]>([]);
  const [currentPage, setCurrentPage] = useState(1); //페이지네이션 현재페이지
  const ITEM_PER_PAGE = 10;
  const startIndex = (currentPage - 1) * ITEM_PER_PAGE;
  const endIndex = startIndex + ITEM_PER_PAGE;

  useEffect(() => {
    setIsLoading(true);
    getReservationList();
  }, []);

  /* 구장 리뷰 조회 */
  async function getReservationList() {
    const email = 'chu';
    const res: any = await getFieldReview('', email, 0, 20);

    setReviewList(res.data.result);
    setIsLoading(false);
  }

  // 페이지네이션 이벤트 함수
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const reviewItemList = reviewList
    .slice(startIndex, endIndex)
    .map((data: IFieldCommentData) => <FieldComment data={data} />);

  return (
    <MypageS.MyListRight>
      {!isLoading ? reviewItemList : <LoadingComponent />}
      <Col span={24}>
        <Pagination
          current={currentPage}
          total={reviewList.length}
          pageSize={ITEM_PER_PAGE}
          onChange={handlePageChange}
        ></Pagination>
      </Col>
    </MypageS.MyListRight>
  );
};

export default ReviewDetails;
