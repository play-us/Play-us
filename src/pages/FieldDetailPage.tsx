/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button, Typography, message } from 'antd';
import { RedColor } from '../styles/CommonStyle';
import KakaoMap from '../components/common/KakaoMap';
import FieldComment from '../components/field/FieldComment';
import FieldResvModal from '../components/field/FieldResvModal';
import { IFieldItem, IFieldCommentData } from '../utils/FieldType';
import {
  getFieldDetail,
  getFieldReview,
  postFieldLike,
} from '../service/FieldApi';
import {
  MessageSquare,
  Heart,
  Flag,
  ShowerHead,
  CarFront,
  Footprints,
} from 'lucide-react';

declare global {
  interface Window {
    kakao: any;
  }
}

const { Title, Text } = Typography;

const FieldDetailPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const fieldId = searchParams.get('id');

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IFieldItem | null | undefined>();
  const [commentDataList, setCommentDataList] = useState<
    IFieldCommentData | undefined
  >();
  const [liked, setLiked] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const email = 'chu';

  /* 데이터 조회 */
  useEffect(() => {
    setIsLoading(true);
    getFieldData();
    getReviewData();
    setIsLoading(false);
  }, [searchParams]);

  /* 구장 상세, 리뷰 조회 */
  const getFieldData = async () => {
    if (fieldId !== null) {
      const d: any = await getFieldDetail(fieldId, email);
      setData(d.data.result[0]);
      setLiked(d.data.result[0].likeYn);
    }
  };

  const getReviewData = async () => {
    if (fieldId !== null) {
      const r: any = await getFieldReview(fieldId);
      setCommentDataList(r.data.result);
    }
  };

  /* 좋아요 기능 */
  const putLiked = async () => {
    if (fieldId !== null) {
      await postFieldLike(fieldId, email, !liked);
      setLiked(!liked);
    }
  };

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

  /* 댓글 목록 */
  let commentList;
  if (commentDataList !== undefined && commentDataList !== null) {
    commentList = commentDataList.map((data: IFieldCommentData) => (
      <FieldComment data={data} />
    ));
  } else {
    commentList = <div>등록된 리뷰가 없습니다.</div>;
  }

  return (
    <Wrap>
      {!isLoading && data !== null && data !== undefined ? (
        <>
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
              {data.reviewCnt}
              <Heart />
              {data.likeCnt}
            </Interest>
            <Title level={2}>{data.fieldNm}</Title>
            <FlexWrap type="secondary">
              {data.addr}
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
                <Price>{data.price}원</Price>
                <Hours>/ {data.hours}시간</Hours>
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
                  {data?.size}m
                </li>
                <li>
                  <ShowerHead />
                  {data?.swrmYn === '1' ? '샤워실' : ''}
                </li>
                <li>
                  <CarFront />
                  {data?.parkingTp === '0' ? '무료주차' : '유료주차'}"
                </li>
                <li>
                  <Footprints />
                  {data?.rentalSup}
                </li>
              </FieldInfo>
              <Contour />
              <Title level={5}>구장 특이사항</Title>
              <Contents>{data.note}</Contents>
            </SectionHeader>
          </SectionWrap>
          <SectionWrap>
            <SectionHeader>
              <Title level={4}>지도</Title>
              <KakaoMap mapX={Number(data.lat)} mapY={Number(data.lng)} />
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
              매치 시작 90분 이내일 경우 불가) 쿠폰 신청자는 매치 시작 90분
              전까지 취소 시 쿠폰이 반환됩니다. 결제 시 실 결제금액(쿠폰 제외)을
              기준으로 위 규정에 따라 환급됩니다. 매치 시작 90분 전까지 최소
              인원이 모이지 않을 시 카카오톡 혹은 LMS으로 안내되며, 자동 전액
              환불됩니다. (단, 공지 전 직접 취소하시는 경우 상단 일반 환불
              규정대로 처리되니 유의하시길 바랍니다)
              <br />
            </Contents>
            <Title level={5}>다음의 경우는 환불이 불가합니다.</Title>
            <Contents>
              구장, 날짜, 시간 등을 실수로 잘못 선택한 경우 부상, 취업 등 개인
              사정으로 신청된 매치에 참여하지 못하는 경우 단체 혹은 지인과의
              참가로 매치 취소 혹은 변경을 원하는 경우 황사/미세먼지로 인해 취소
              혹은 변경을 요청하는 경우 단순 변심으로 취소 혹은 변경을 요청하는
              경우
              <br />
            </Contents>
          </SectionWrap>
          <SectionWrap>
            <CommentHeaderWrap>
              <CommentHeader>댓글 </CommentHeader>
              <CommentLength>
                {commentDataList !== undefined ? commentDataList.length : 0}
              </CommentLength>
            </CommentHeaderWrap>
            {commentList}
          </SectionWrap>
          <FieldResvModal
            fieldName="구장이름"
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
            confirmLoading={confirmLoading}
          />
        </>
      ) : (
        <div>데이터를 조회중입니다.</div>
      )}
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

const CommentHeaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 15px;
`;
const CommentHeader = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-right: 10px;
  line-height: 24px;
  align-items: center;
`;
const CommentLength = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #939393;
`;
