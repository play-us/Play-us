import { useAppDispatch, useAppSelector } from '../../stores/Store';
import { reserFetch } from '../../stores/features/GetReservationSlice';
import { menuChange } from '../../stores/features/MypageMenuSlice';
import * as MypageMenuBarS from '../../styles/mypage/MenuBar';
import { useEffect } from 'react';

const menuStates = [
  '예약',
  '작성 글',
  '작성 댓글',
  '리뷰',
  '찜 목록',
  '관심글',
];

const MypageMenu = () => {
  const changeDispatch = useAppDispatch();

  //메뉴 상태 state
  const getMenuState = useAppSelector((state) => state.menu.MState);

  // 메뉴 상태 dispatch 함수
  const stateChange = (menuState: string) => {
    changeDispatch(menuChange({ changeMState: menuState }));
  };

  // 예약 데이터 dispatch
  useEffect(() => {
    changeDispatch(reserFetch());
  }, []);

  return (
    <MypageMenuBarS.ListMenuWrap>
      {menuStates.map(function (state, i) {
        return (
          <MypageMenuBarS.ListMenu
            $menuState={getMenuState}
            onClick={() => {
              stateChange(state);
            }}
          >
            {state}
          </MypageMenuBarS.ListMenu>
        );
      })}
    </MypageMenuBarS.ListMenuWrap>
  );
};

export default MypageMenu;
