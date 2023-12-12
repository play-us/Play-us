import * as MypageS from '../styles/mypage/Mypage';
import * as MypageMenuBarS from '../styles/mypage/MenuBar';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../stores/Store';
import MypageMenu from '../components/mypage/MypageMenu';
import ReservationDetails from '../components/mypage/ReservationDetails';
import CommunityDetails from '../components/mypage/CommuPostDetails';
import ReviewDetails from '../components/mypage/ReviewDetails';
import CommuComentDetail from './../components/mypage/CommuComentDetail';
import { useNavigate } from 'react-router-dom';
import CommuWishDetails from './../components/mypage/CommuWishDetails';
import axios from 'axios';
import ConvertDate from '../components/common/date/dateFormat';
import { ICommunityRowData } from '../components/recruitTeam/RecruitTeamList';
import { ICommuDetailProps } from '.';

const MyPage = () => {
  const getMenuState = useAppSelector((state) => state.menu.MState);
  let showDetails: JSX.Element | null = null; // 탭 메뉴별로 보여줄 ReservationDetails 컴포넌트
  if (getMenuState === '예약') {
    showDetails = <ReservationDetails></ReservationDetails>;
  } else if (getMenuState === '작성 글') {
    showDetails = <CommunityDetails></CommunityDetails>;
  } else if (getMenuState === '작성 댓글') {
    showDetails = <CommuComentDetail></CommuComentDetail>;
  } else if (getMenuState === '리뷰') {
    showDetails = <ReviewDetails></ReviewDetails>;
  } else if (getMenuState === '찜 목록') {
    showDetails = <CommuWishDetails></CommuWishDetails>;
  }
  let navigate = useNavigate();

  return (
    <MypageS.MypageWrap>
      <MypageS.MypageInfo>
        <MypageS.MyInfoLeft>
          <MypageS.UserProImg $size={'120px'}></MypageS.UserProImg>
          <MypageS.MyInfoLeftInner>
            <MypageS.UserInfoName>홍범진</MypageS.UserInfoName>
            <MypageS.UserInfoCode>
              potato980124@gmail.com
              <MypageS.KakaoImg></MypageS.KakaoImg>
            </MypageS.UserInfoCode>
          </MypageS.MyInfoLeftInner>
        </MypageS.MyInfoLeft>
        <MypageS.MyInfoRight
          onClick={() => {
            navigate('/profileRetouch');
          }}
        >
          프로필 보기
        </MypageS.MyInfoRight>
      </MypageS.MypageInfo>
      <MypageMenuBarS.MyListWrap>
        <MypageMenu></MypageMenu>
        {showDetails}
      </MypageMenuBarS.MyListWrap>
    </MypageS.MypageWrap>
  );
};

export default MyPage;
