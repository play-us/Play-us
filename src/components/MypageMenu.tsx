import { useAppDispatch, useAppSelector } from '../stores/Store';
import { reserFetch } from '../stores/features/GetReservationSlice';
import { menuChange } from '../stores/features/MypageMenuSlice';
import * as MypageS from '../styles/Mypage';
import { useEffect } from 'react';
const MypageMenu = () => {
  console.log('렌더링');
  const changeDispatch = useAppDispatch();
  const getMenuState = useAppSelector((state) => state.menu.MState);
  const getReserData = useAppSelector((state)=> state.getReserData.reserdata);
  const stateChange = (menuState: string) => {
    changeDispatch(menuChange({ changeMState: menuState }));
  };
  useEffect(()=>{
    changeDispatch(reserFetch());
  },[])
  return (
    <MypageS.MyListLeft>
      <MypageS.ListMenu
        onClick={() => {
          stateChange('reservation');
        }}
        $menuState={getMenuState}
      >
        <MypageS.ListIcon1></MypageS.ListIcon1>
        <MypageS.ListTitle1 $menuState={getMenuState}>예약</MypageS.ListTitle1>
      </MypageS.ListMenu>
      <MypageS.ListMenu
        onClick={() => {
          stateChange('community');
        }}
        $menuState={getMenuState}
      >
        <MypageS.ListIcon2></MypageS.ListIcon2>
        <MypageS.ListTitle2 $menuState={getMenuState}>커뮤니티</MypageS.ListTitle2>
      </MypageS.ListMenu>
      <MypageS.ListMenu
        onClick={() => {
          stateChange('review');
        }}
        $menuState={getMenuState}
      >
        <MypageS.ListIcon3></MypageS.ListIcon3>
        <MypageS.ListTitle3 $menuState={getMenuState}>리뷰</MypageS.ListTitle3>
      </MypageS.ListMenu>
    </MypageS.MyListLeft>
  );
};

export default MypageMenu;
