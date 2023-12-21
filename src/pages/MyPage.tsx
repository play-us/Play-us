import * as MypageS from '../styles/mypage/Mypage';
import * as MypageMenuBarS from '../styles/mypage/MenuBar';
import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReservationDetails from '../components/mypage/ReservationDetails';
import CommunityDetails from '../components/mypage/CommuPostDetails';
import CommuComentDetail from './../components/mypage/CommuComentDetail';

import ReviewDetails from '../components/mypage/ReviewDetails';
import LikedField from '../components/mypage/LikedFiled';
import CommuWishDetails from './../components/mypage/CommuWishDetails';

export interface ITabMenu {
  id: number;
  tabName: string;
  detail: ReactNode;
}
const MyPage = () => {
  const [activeTab, setActiveTab] = useState<ITabMenu>({
    id: 1,
    tabName: '예약',
    detail: <ReservationDetails />,
  });

  const tabMenuList = [
    { id: 1, tabName: '예약', detail: <ReservationDetails /> },
    { id: 2, tabName: '작성글', detail: <CommunityDetails /> },
    { id: 3, tabName: '작성댓글', detail: <CommuComentDetail /> },
    { id: 4, tabName: '리뷰', detail: <ReviewDetails /> },
    { id: 5, tabName: '구장 좋아요', detail: <LikedField /> },
    { id: 6, tabName: '관심글', detail: <CommuWishDetails /> },
  ];

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
        <MypageMenuBarS.ListMenuWrap>
          {tabMenuList.map((tab) => (
            <MypageMenuBarS.ListMenu
              key={tab.id}
              $menuState={activeTab.tabName}
              onClick={() => {
                setActiveTab(tab);
              }}
            >
              {tab.tabName}
            </MypageMenuBarS.ListMenu>
          ))}
        </MypageMenuBarS.ListMenuWrap>
        {activeTab.detail}
      </MypageMenuBarS.MyListWrap>
    </MypageS.MypageWrap>
  );
};

export default MyPage;
