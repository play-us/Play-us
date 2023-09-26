import { useAppDispatch, useAppSelector } from '../stores/Store';
import { reserFetch } from '../stores/features/GetReservationSlice';
import { menuChange } from '../stores/features/MypageMenuSlice';
import * as MypageMenuBarS from '../styles/MypageMenuBar';
import { useEffect } from 'react';
const MypageMenu = () => {
  console.log('렌더링');
  const changeDispatch = useAppDispatch();
  //메뉴 상태 state
  const getMenuState = useAppSelector((state) => state.menu.MState);
  // 메뉴 상태 dispatch 함수
  const stateChange = (menuState: string) => {
    changeDispatch(menuChange({ changeMState: menuState }));
  };
  // 예약 데이터 dispatch 
  useEffect(()=>{
    changeDispatch(reserFetch());
  },[])
  return (
    <MypageMenuBarS.MyListLeft>
      <MypageMenuBarS.ListMenu
        onClick={() => {
          stateChange('reservation');
        }}
        $menuState={getMenuState}
      >
        <MypageMenuBarS.ListIcon1></MypageMenuBarS.ListIcon1>
        <MypageMenuBarS.ListTitle1 $menuState={getMenuState}>예약</MypageMenuBarS.ListTitle1>
      </MypageMenuBarS.ListMenu>
      <MypageMenuBarS.ListMenu
        onClick={() => {
          stateChange('community');
        }}
        $menuState={getMenuState}
      >
        <MypageMenuBarS.ListIcon2></MypageMenuBarS.ListIcon2>
        <MypageMenuBarS.ListTitle2 $menuState={getMenuState}>커뮤니티</MypageMenuBarS.ListTitle2>
      </MypageMenuBarS.ListMenu>
      <MypageMenuBarS.ListMenu
        onClick={() => {
          stateChange('review');
        }}
        $menuState={getMenuState}
      >
        <MypageMenuBarS.ListIcon3></MypageMenuBarS.ListIcon3>
        <MypageMenuBarS.ListTitle3 $menuState={getMenuState}>리뷰</MypageMenuBarS.ListTitle3>
      </MypageMenuBarS.ListMenu>
    </MypageMenuBarS.MyListLeft>
  );
};

export default MypageMenu;
