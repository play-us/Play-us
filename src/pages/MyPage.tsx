import { styled } from 'styled-components';
import * as MypageS from '../styles/Mypage';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../stores/Store';
import MypageMenu from './../components/MypageMenu';
import ReservationDetails from './../components/ReservationDetails';
import CommunityDetails from './../components/CommunityDetails';
import ReviewDetails from './../components/ReviewDetails';


const MyPage = () => {
  const getMenuState = useAppSelector((state) => state.menu.MState);
  let showDetails: JSX.Element | null = null;
  if(getMenuState === 'reservation'){
    showDetails = <ReservationDetails></ReservationDetails>;
  }else if (getMenuState === 'community'){
    showDetails = <CommunityDetails></CommunityDetails>
  }else if(getMenuState === 'review'){
    showDetails = <ReviewDetails></ReviewDetails>
  }
  return (
    <MypageS.MypageWrap>
      <MypageS.MypageInfo>
        <MypageS.MyInfoLeft>
          <MypageS.UserInfoName>홍범진</MypageS.UserInfoName>
          <MypageS.UserInfoCode>
            29567372
            <MypageS.KakaoImg></MypageS.KakaoImg>
          </MypageS.UserInfoCode>
        </MypageS.MyInfoLeft>
        <MypageS.MyInfoRight to="/profile">프로필 보기</MypageS.MyInfoRight>
      </MypageS.MypageInfo>
      <MypageS.MyListWrap>
        <MypageMenu></MypageMenu>
        {showDetails}
      </MypageS.MyListWrap>
    </MypageS.MypageWrap>
  );
};

export default MyPage;
