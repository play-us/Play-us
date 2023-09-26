import { styled } from 'styled-components';
import * as MypageS from '../styles/Mypage';
import * as MypageMenuBarS from '../styles/MypageMenuBar';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../stores/Store';
import MypageMenu from './../components/MypageMenu';
import ReservationDetails from './../components/ReservationDetails';
import CommunityDetails from './../components/CommunityDetails';
import ReviewDetails from './../components/ReviewDetails';
import ReserCancle from '../components/ReserCancleModal';


const MyPage = () => {
  const [modalState,setModalState] = useState<boolean>(false); 
  const getMenuState = useAppSelector((state) => state.menu.MState);
  let showDetails: JSX.Element | null = null; // 탭 메뉴별로 보여줄 ReservationDetails 컴포넌트
  if(getMenuState === 'reservation'){
    showDetails = <ReservationDetails setModalState = {setModalState}></ReservationDetails>;
  }else if (getMenuState === 'community'){
    showDetails = <CommunityDetails></CommunityDetails>
  }else if(getMenuState === 'review'){
    showDetails = <ReviewDetails></ReviewDetails>
  }
  return (
    <MypageS.MypageWrap>
      {modalState === true ? <ReserCancle></ReserCancle> : null} {/* 예약취소 모달 */}
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
      <MypageMenuBarS.MyListWrap>
        <MypageMenu></MypageMenu>
        {showDetails}
      </MypageMenuBarS.MyListWrap>
    </MypageS.MypageWrap>
  );
};

export default MyPage;
