import * as MypageS from '../styles/mypage/Mypage';
import * as MypageMenuBarS from '../styles/mypage/MypageMenuBar';
import {  useState } from 'react';
import {  useAppSelector } from '../stores/Store';
import MypageMenu from '../components/mypage/MypageMenu';
import ReservationDetails from '../components/mypage/ReservationDetails';
import CommunityDetails from '../components/mypage/CommunityDetails';
import ReviewDetails from '../components/mypage/ReviewDetails';
import { useNavigate} from 'react-router-dom';


const MyPage = () => {
  const getMenuState = useAppSelector((state) => state.menu.MState);
  let showDetails: JSX.Element | null = null; // 탭 메뉴별로 보여줄 ReservationDetails 컴포넌트
  if(getMenuState === '예약'){
    showDetails = <ReservationDetails></ReservationDetails>;
  }else if (getMenuState === '작성 글'){
    showDetails = <CommunityDetails></CommunityDetails>
  }else if(getMenuState === '리뷰'){
    showDetails = <ReviewDetails></ReviewDetails>
  }
  let navigate = useNavigate()
  return (
    <MypageS.MypageWrap>
      <MypageS.MypageInfo>
        <MypageS.MyInfoLeft>
          <MypageS.UserProImg></MypageS.UserProImg>
          <MypageS.MyInfoLeftInner>
            <MypageS.UserInfoName>홍범진</MypageS.UserInfoName>
            <MypageS.UserInfoCode>
              potato980124@gmail.com
              <MypageS.KakaoImg></MypageS.KakaoImg>
            </MypageS.UserInfoCode>
          </MypageS.MyInfoLeftInner>
        </MypageS.MyInfoLeft>
        <MypageS.MyInfoRight onClick={()=>{navigate('/profileRetouch')}}>프로필 보기</MypageS.MyInfoRight>
      </MypageS.MypageInfo>
      <MypageMenuBarS.MyListWrap>
        <MypageMenu></MypageMenu>
        {showDetails}
      </MypageMenuBarS.MyListWrap>
    </MypageS.MypageWrap>
  );
};

export default MyPage;
